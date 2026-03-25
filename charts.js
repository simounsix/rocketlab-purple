// Extract telemetry data from the table
function extractTelemetryData() {
    const tableBody = document.querySelector('#telemetry table tbody');
    if (!tableBody) {
        console.error('Telemetry table not found');
        return null;
    }

    const timestamps = [];
    const altitudes = [];
    const pressures = [];
    const humidities = [];

    // Extract data from each row
    tableBody.querySelectorAll('tr').forEach((row) => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
            timestamps.push(parseFloat(cells[0].textContent));
            altitudes.push(parseFloat(cells[1].textContent));
            pressures.push(parseFloat(cells[2].textContent));
            humidities.push(parseFloat(cells[3].textContent));
        }
    });

    if (timestamps.length === 0) {
        console.error('No telemetry data found in table');
        return null;
    }

    return {
        timestamps,
        altitudes,
        pressures,
        humidities
    };
}

// Get translated label safely
function getChartLabel(key) {
    if (typeof window.getTranslation === 'function') {
        return window.getTranslation(key);
    }
    return key; // Fallback
}

// Create altitude chart
function createAltitudeChart(data) {
    const ctx = document.getElementById('altitudeChart');
    if (!ctx) return;

    try {
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.timestamps.map(t => t.toFixed(1) + 's'),
                datasets: [
                    {
                        label: getChartLabel('telAltitude'),
                        data: data.altitudes,
                        borderColor: '#8b5cf6',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointBackgroundColor: '#8b5cf6',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#cccad0',
                            font: { size: 12 }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#cccad0' },
                        grid: { color: 'rgba(139, 92, 246, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#cccad0' },
                        grid: { color: 'rgba(139, 92, 246, 0.05)' }
                    }
                }
            }
        });

        // Hide placeholder
        const placeholder = document.getElementById('altitudePlaceholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        return chart;
    } catch (error) {
        console.error('Error creating altitude chart:', error);
        return null;
    }
}

// Create pressure chart
function createPressureChart(data) {
    const ctx = document.getElementById('pressureChart');
    if (!ctx) return;

    try {
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.timestamps.map(t => t.toFixed(1) + 's'),
                datasets: [
                    {
                        label: getChartLabel('telPressure'),
                        data: data.pressures,
                        borderColor: '#06b6d4',
                        backgroundColor: 'rgba(6, 182, 212, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointBackgroundColor: '#06b6d4',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#cccad0',
                            font: { size: 12 }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#cccad0' },
                        grid: { color: 'rgba(6, 182, 212, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#cccad0' },
                        grid: { color: 'rgba(6, 182, 212, 0.05)' }
                    }
                }
            }
        });

        // Hide placeholder
        const placeholder = document.getElementById('pressurePlaceholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        return chart;
    } catch (error) {
        console.error('Error creating pressure chart:', error);
        return null;
    }
}

// Create humidity chart
function createHumidityChart(data) {
    const ctx = document.getElementById('humidityChart');
    if (!ctx) return;

    try {
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.timestamps.map(t => t.toFixed(1) + 's'),
                datasets: [
                    {
                        label: getChartLabel('telHumidity'),
                        data: data.humidities,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#cccad0',
                            font: { size: 12 }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#cccad0' },
                        grid: { color: 'rgba(16, 185, 129, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#cccad0' },
                        grid: { color: 'rgba(16, 185, 129, 0.05)' }
                    }
                }
            }
        });

        // Hide placeholder
        const placeholder = document.getElementById('humidityPlaceholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        return chart;
    } catch (error) {
        console.error('Error creating humidity chart:', error);
        return null;
    }
}

// Store chart instances globally for updates on language change
let chartInstances = {
    altitude: null,
    pressure: null,
    humidity: null
};

// Function to initialize and store charts
function initializeCharts() {
    try {
        const data = extractTelemetryData();
        if (!data) {
            console.warn('Could not extract telemetry data');
            return;
        }

        // Create all charts and store references
        chartInstances.altitude = createAltitudeChart(data);
        chartInstances.pressure = createPressureChart(data);
        chartInstances.humidity = createHumidityChart(data);
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

// Function to redraw charts (called when language changes)
window.redrawCharts = function() {
    try {
        const data = extractTelemetryData();
        if (!data) return;

        // Destroy existing charts
        Object.values(chartInstances).forEach(chart => {
            if (chart instanceof Chart) {
                chart.destroy();
            }
        });

        // Recreate charts with new language labels
        initializeCharts();
    } catch (error) {
        console.error('Error redrawing charts:', error);
    }
};

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCharts);
} else {
    initializeCharts();
}
