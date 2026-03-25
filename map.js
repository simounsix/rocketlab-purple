// Extract GPS data from telemetry table
function extractGPSData() {
    const table = document.getElementById('telemetry');
    if (!table) return null;

    const rows = table.querySelectorAll('tbody tr');
    const gpsPoints = [];
    let launchPoint = null;
    let apogeePoint = null;
    let landingPoint = null;
    let maxAltitude = 0;

    let previousRow = null;

    rows.forEach((row, index) => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 6) {
            const timestamp = parseFloat(cells[0].textContent);
            const altitude = parseFloat(cells[1].textContent);
            
            // Clean coordinates by removing ° and direction letters (N, S, E, W)
            const latText = cells[4].textContent.replace(/[°NSEW]/g, '').trim();
            const lngText = cells[5].textContent.replace(/[°NSEW]/g, '').trim();
            
            const latitude = parseFloat(latText);
            const longitude = parseFloat(lngText);
            
            // Only add valid GPS points
            if (!isNaN(latitude) && !isNaN(longitude)) {
                // Store GPS point [lat, lng]
                gpsPoints.push([latitude, longitude]);

                // Track launch (first point)
                if (index === 0) {
                    launchPoint = { lat: latitude, lng: longitude, timestamp, altitude };
                }

                // Track apogee (highest altitude)
                if (altitude > maxAltitude) {
                    maxAltitude = altitude;
                    apogeePoint = { lat: latitude, lng: longitude, timestamp, altitude };
                }

                previousRow = { timestamp, altitude, latitude, longitude };
            }
        }
    });

    // Landing is the last point
    if (previousRow) {
        landingPoint = { 
            lat: previousRow.latitude, 
            lng: previousRow.longitude, 
            timestamp: previousRow.timestamp,
            altitude: previousRow.altitude 
        };
    }

    return {
        points: gpsPoints,
        launch: launchPoint,
        apogee: apogeePoint,
        landing: landingPoint
    };
}

// Store map instance globally for updates on language change
let mapInstance = null;

// Function to create or update the map
function initializeMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    const gpsData = extractGPSData();
    if (!gpsData || gpsData.points.length === 0) {
        console.warn('No GPS data available');
        return;
    }

    // Remove existing map if it exists
    if (mapInstance) {
        mapInstance.remove();
    }

    // Create map centered on average of GPS points
    const centerLat = gpsData.points.reduce((sum, p) => sum + p[0], 0) / gpsData.points.length;
    const centerLng = gpsData.points.reduce((sum, p) => sum + p[1], 0) / gpsData.points.length;

    mapInstance = L.map('map', {
        center: [centerLat, centerLng],
        zoom: 14,
        scrollWheelZoom: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(mapInstance);

    // Draw trajectory line
    const polyline = L.polyline(gpsData.points, {
        color: '#8b5cf6',
        weight: 3,
        opacity: 0.8,
        dashArray: '5, 5'
    }).addTo(mapInstance);

    // Add markers for key points
    // Add launch marker first (will be behind landing if at same spot)
    if (gpsData.launch) {
        const launchMarker = L.circleMarker([gpsData.launch.lat, gpsData.launch.lng], {
            radius: 8,
            fillColor: '#22c55e',
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            zIndex: 100
        }).addTo(mapInstance);

        launchMarker.bindPopup(
            `<div style="font-size: 12px;">
                <strong>${window.getTranslation('launch') || 'Launch'}</strong><br>
                Alt: ${gpsData.launch.altitude.toFixed(2)} m<br>
                Time: ${gpsData.launch.timestamp.toFixed(1)} s
            </div>`
        );
        
        // Bring launch marker to front
        launchMarker.bringToFront();
    }

    if (gpsData.apogee) {
        const apogeeMarker = L.circleMarker([gpsData.apogee.lat, gpsData.apogee.lng], {
            radius: 10,
            fillColor: '#ef4444',
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            zIndex: 200
        }).addTo(mapInstance);

        apogeeMarker.bindPopup(
            `<div style="font-size: 12px;">
                <strong>${window.getTranslation('apogee') || 'Apogee'}</strong><br>
                Alt: ${gpsData.apogee.altitude.toFixed(2)} m<br>
                Time: ${gpsData.apogee.timestamp.toFixed(1)} s
            </div>`
        );
        
        // Bring apogee to foreground
        apogeeMarker.bringToFront();
    }

    if (gpsData.landing) {
        const landingMarker = L.circleMarker([gpsData.landing.lat, gpsData.landing.lng], {
            radius: 8,
            fillColor: '#06b6d4',
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            zIndex: 50
        }).addTo(mapInstance);

        landingMarker.bindPopup(
            `<div style="font-size: 12px;">
                <strong>${window.getTranslation('landing') || 'Landing'}</strong><br>
                Alt: ${gpsData.landing.altitude.toFixed(2)} m<br>
                Time: ${gpsData.landing.timestamp.toFixed(1)} s
            </div>`
        );
    }

    // Fit map to show all points
    mapInstance.fitBounds(L.latLngBounds(gpsData.points), { padding: [50, 50] });
}

// Function to redraw map on language change
window.redrawMap = function() {
    if (mapInstance) {
        initializeMap();
    }
};

// Initialize map when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMap);
} else {
    initializeMap();
}
