(function () {
	const STORAGE_KEY = 'rocketlab_language';
	const DEFAULT_LANG = 'fr';

	// Translations embedded directly to avoid CORS issues
	const translations = {
		"fr": {
			"rocketlab": "UE RocketLab",
			"purpleTeam": "Purple Team",
			"home": "Accueil",
			"analysis": "Analyse",
			"heroTitle": "Suivi du vol de la fusée Exocet MM40",
			"heroSubtitle": "Suivi des données obtenues lors du vol de notre fusée",
			"ctaButton": "Accéder aux données",
			"aboutProject": "A propos du Projet",
			"aboutText": "Le projet UE RocketLab est une initiative d'échange réunissant des étudiants issus de plusieurs pays européens, notamment l'Espagne, la France et le Luxembourg. Son objectif principal est de développer une collaboration interuniversitaire à travers la conception et le montage d'une fusée capable d'effectuer des relevés de données en temps réel durant son vol.\n\nAu-delà de l'aspect purement technique, ce projet vise également à renforcer la communication, la coopération internationale et le travail en équipe dans un contexte multiculturel.",
			"teamPurple": "Equipe Purple",
			"teamMembers": "6 membres",
			"firstName": "Prenom",
			"lastName": "Nom",
			"origin": "Origine",
			"department": "Departement",
			"overview": "Vue d ensemble",
			"overviewSubtitle": "Indicateurs resumes issus de la base de donnees.",
			"flightsAnalyzed": "Vols analyses",
			"missionSuccess": "Reussite mission",
			"openIncidents": "Incidents ouverts",
			"lastSync": "Derniere sync BDD",
			"flightData": "Donnees de vol",
			"status": "Statut",
			"all": "Tous",
			"nominal": "Nominal",
			"warning": "Attention",
			"critical": "Critique",
			"search": "Recherche",
			"searchPlaceholder": "ID mission ou lanceur",
			"missionId": "ID Mission",
			"launcher": "Lanceur",
			"date": "Date",
			"maxAltitude": "Altitude max",
			"systemStatus": "Etat du systeme",
			"systemStatusSubtitle": "Interface prete a consommer des donnees dynamiques depuis une API connectee a la BDD.",
			"systemStatusMessage": "Tous les systemes sont operationnels. Derniere synchronisation: 25/03/2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Langue",
			"role": "Attribution Principale",
			"roleBuilder": "Constructeur",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Codeur",
			"roleDecorator": "Décoratrice"
		},
		"en": {
			"rocketlab": "UE RocketLab",
			"purpleTeam": "Purple Team",
			"home": "Home",
			"analysis": "Analysis",
			"heroTitle": "Tracking Exocet MM40 Rocket Flight",
			"heroSubtitle": "Real-time data tracking from our rocket flight",
			"ctaButton": "Access Data",
			"aboutProject": "About the Project",
			"aboutText": "The UE RocketLab project is an exchange initiative bringing together students from several European countries, including Spain, France, and Luxembourg. Its main objective is to develop interuniversity collaboration through the design and assembly of a rocket capable of performing real-time data collection during its flight.\n\nBeyond the purely technical aspect, this project also aims to strengthen communication, international cooperation, and teamwork in a multicultural context.",
			"teamPurple": "Purple Team",
			"teamMembers": "6 members",
			"firstName": "First Name",
			"lastName": "Last Name",
			"origin": "Origin",
			"department": "Department",
			"overview": "Overview",
			"overviewSubtitle": "Summary indicators from the database.",
			"flightsAnalyzed": "Flights Analyzed",
			"missionSuccess": "Mission Success",
			"openIncidents": "Open Incidents",
			"lastSync": "Last DB Sync",
			"flightData": "Flight Data",
			"status": "Status",
			"all": "All",
			"nominal": "Nominal",
			"warning": "Warning",
			"critical": "Critical",
			"search": "Search",
			"searchPlaceholder": "Mission ID or launcher",
			"missionId": "Mission ID",
			"launcher": "Launcher",
			"date": "Date",
			"maxAltitude": "Max Altitude",
			"systemStatus": "System Status",
			"systemStatusSubtitle": "Interface ready to consume dynamic data from an API connected to the database.",
			"systemStatusMessage": "All systems are operational. Last synchronization: 25/03/2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Language",
			"role": "Main Role",
			"roleBuilder": "Builder",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Coder",
			"roleDecorator": "Decorator"
		},
		"de": {
			"rocketlab": "UE RocketLab",
			"purpleTeam": "Purple Team",
			"home": "Startseite",
			"analysis": "Analyse",
			"heroTitle": "Verfolgung des Exocet MM40 Raketenflugs",
			"heroSubtitle": "Echtzeitdatenverfolgung aus unserem Raketenflug",
			"ctaButton": "Auf Daten zugreifen",
			"aboutProject": "Über das Projekt",
			"aboutText": "Das UE RocketLab-Projekt ist eine Austauschinitiative, die Studenten aus mehreren europäischen Ländern zusammenbringt, darunter Spanien, Frankreich und Luxemburg. Sein Hauptziel besteht darin, die interuniversitäre Zusammenarbeit durch die Konzeption und Montage einer Rakete zu entwickeln, die während des Fluges Echtzeitdatenerfassung durchführen kann.\n\nÜber den rein technischen Aspekt hinaus zielt dieses Projekt auch darauf ab, Kommunikation, internationale Zusammenarbeit und Teamarbeit in einem multikulturellen Kontext zu stärken.",
			"teamPurple": "Purple Team",
			"teamMembers": "6 Mitglieder",
			"firstName": "Vorname",
			"lastName": "Nachname",
			"origin": "Herkunft",
			"department": "Abteilung",
			"overview": "Übersicht",
			"overviewSubtitle": "Zusammengefasste Indikatoren aus der Datenbank.",
			"flightsAnalyzed": "Analysierte Flüge",
			"missionSuccess": "Missionserfolg",
			"openIncidents": "Offene Vorfälle",
			"lastSync": "Letzte DB-Synchronisierung",
			"flightData": "Flugdaten",
			"status": "Status",
			"all": "Alle",
			"nominal": "Normal",
			"warning": "Warnung",
			"critical": "Kritisch",
			"search": "Suche",
			"searchPlaceholder": "Missionskennung oder Träger",
			"missionId": "Missionskennung",
			"launcher": "Träger",
			"date": "Datum",
			"maxAltitude": "Maximale Höhe",
			"systemStatus": "Systemstatus",
			"systemStatusSubtitle": "Schnittstelle bereit zur Nutzung dynamischer Daten von einer mit der Datenbank verbundenen API.",
			"systemStatusMessage": "Alle Systeme sind betriebsbereit. Letzte Synchronisierung: 25.03.2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Sprache",
			"role": "Hauptrolle",
			"roleBuilder": "Konstrukteur",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Programmierer",
			"roleDecorator": "Dekorateurin"
		},
		"es": {
			"rocketlab": "UE RocketLab",
			"purpleTeam": "Purple Team",
			"home": "Inicio",
			"analysis": "Análisis",
			"heroTitle": "Seguimiento del vuelo del cohete Exocet MM40",
			"heroSubtitle": "Seguimiento de datos en tiempo real del vuelo de nuestro cohete",
			"ctaButton": "Acceder a datos",
			"aboutProject": "Acerca del Proyecto",
			"aboutText": "El proyecto UE RocketLab es una iniciativa de intercambio que reúne estudiantes de varios países europeos, entre ellos España, Francia y Luxemburgo. Su objetivo principal es desarrollar la colaboración interuniversitaria a través del diseño y montaje de un cohete capaz de realizar recopilación de datos en tiempo real durante su vuelo.\n\nMás allá del aspecto puramente técnico, este proyecto también tiene como objetivo fortalecer la comunicación, la cooperación internacional y el trabajo en equipo en un contexto multicultural.",
			"teamPurple": "Purple Team",
			"teamMembers": "6 miembros",
			"firstName": "Nombre",
			"lastName": "Apellido",
			"origin": "Origen",
			"department": "Departamento",
			"overview": "Descripción general",
			"overviewSubtitle": "Indicadores resumidos de la base de datos.",
			"flightsAnalyzed": "Vuelos analizados",
			"missionSuccess": "Éxito de la misión",
			"openIncidents": "Incidentes abiertos",
			"lastSync": "Última sincronización BD",
			"flightData": "Datos de vuelo",
			"status": "Estado",
			"all": "Todos",
			"nominal": "Nominal",
			"warning": "Advertencia",
			"critical": "Crítico",
			"search": "Búsqueda",
			"searchPlaceholder": "ID de misión o lanzador",
			"missionId": "ID de Misión",
			"launcher": "Lanzador",
			"date": "Fecha",
			"maxAltitude": "Altitud máxima",
			"systemStatus": "Estado del sistema",
			"systemStatusSubtitle": "Interfaz lista para consumir datos dinámicos desde una API conectada a la base de datos.",
			"systemStatusMessage": "Todos los sistemas están operacionales. Última sincronización: 25/03/2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Idioma",
			"role": "Rol Principal",
			"roleBuilder": "Constructor",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Codificador",
			"roleDecorator": "Decoradora"
		}
	};

	// Get current language
	function getCurrentLanguage() {
		return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
	}

	// Check if first visit
	function isFirstVisit() {
		return !localStorage.getItem(STORAGE_KEY);
	}

	// Set language
	function setLanguage(lang) {
		if (translations[lang]) {
			localStorage.setItem(STORAGE_KEY, lang);
			applyTranslations(lang);
			updateLanguageSelector(lang);
			hideLanguageModal();
		}
	}

	// Apply translations to DOM
	function applyTranslations(lang) {
		const trans = translations[lang];
		document.documentElement.lang = lang;

		// Translate all elements with data-i18n attribute
		document.querySelectorAll('[data-i18n]').forEach((element) => {
			const key = element.getAttribute('data-i18n');
			if (trans[key]) {
				if (element.tagName === 'INPUT' && element.type === 'search') {
					element.placeholder = trans[key];
				} else {
					element.textContent = trans[key];
				}
			}
		});

		// Translate placeholders
		document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
			const key = element.getAttribute('data-i18n-placeholder');
			if (trans[key]) {
				element.placeholder = trans[key];
			}
		});
	}

	// Update language selector
	function updateLanguageSelector(lang) {
		const selector = document.getElementById('language-selector');
		if (selector) {
			selector.value = lang;
		}
	}

	// Show language modal
	function showLanguageModal() {
		const modal = document.getElementById('language-modal');
		if (modal) {
			modal.removeAttribute('hidden');
		}
	}

	// Hide language modal
	function hideLanguageModal() {
		const modal = document.getElementById('language-modal');
		if (modal) {
			modal.setAttribute('hidden', '');
		}
	}

	// Initialize language selector
	function initLanguageSelector() {
		const selector = document.getElementById('language-selector');
		if (selector) {
			selector.addEventListener('change', (e) => {
				setLanguage(e.target.value);
			});
			updateLanguageSelector(getCurrentLanguage());
		}
	}

	// Initialize language modal buttons
	function initLanguageModal() {
		const buttons = document.querySelectorAll('.lang-btn');
		buttons.forEach((button) => {
			button.addEventListener('click', () => {
				const lang = button.getAttribute('data-lang');
				setLanguage(lang);
			});
		});

		// Show modal on first visit
		if (isFirstVisit()) {
			showLanguageModal();
		}
	}

	// Initialize on page load
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => {
			applyTranslations(getCurrentLanguage());
			initLanguageSelector();
			initLanguageModal();
		});
	} else {
		// DOM is already loaded
		applyTranslations(getCurrentLanguage());
		initLanguageSelector();
		initLanguageModal();
	}

	// Expose setLanguage globally
	window.setLanguage = setLanguage;

	// Expose resetLanguage for testing/demo
	window.resetLanguage = function() {
		localStorage.removeItem(STORAGE_KEY);
		showLanguageModal();
	};
})();
