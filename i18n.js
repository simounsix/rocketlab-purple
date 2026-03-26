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
			"aboutProject": "À propos du Projet",
			"aboutText": "Le projet UE RocketLab est une initiative d'échange réunissant des étudiants issus de plusieurs pays européens, notamment l'Espagne, la France et le Luxembourg. Son objectif principal est de développer une collaboration interuniversitaire à travers la conception et le montage d'une fusée capable d'effectuer des relevés de données en temps réel durant son vol.\n\nAu-delà de l'aspect purement technique, ce projet vise également à renforcer la communication, la coopération internationale et le travail en équipe dans un contexte multiculturel.",
		"teamPurple": "Équipe Purple",
		"teamMembers": "6 membres",
		"firstName": "Prénom",
			"lastName": "Nom",
			"origin": "Origine",
		"department": "Département",
		"overview": "Vue d'ensemble",
		"overviewSubtitle": "Indicateurs résumés issus de la base de données.",
		"flightsAnalyzed": "Vols analysés",
		"missionSuccess": "Réussite mission",
			"openIncidents": "Incidents ouverts",
		"lastSync": "Dernière sync BDD",
		"flightData": "Données de vol",
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
		"systemStatus": "État du système",
		"systemStatusSubtitle": "Interface prête à consommer des données dynamiques depuis une API connectée à la BDD.",
		"systemStatusMessage": "Tous les systèmes sont opérationnels. Dernière synchronisation: 27/03/2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Langue",
			"role": "Attribution Principale",
			"roleBuilder": "Constructeur",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Codeur",
			"roleDecorator": "Décoratrice",

		"categoryRocket": "Rocket",
		"categoryElectronics": "Électronique",
			"specifications": "Spécifications",
			"flightInfo": "Données du vol Exocet MM40 du 27/03/2026",		"flightOverview": "Aperçu du Vol",
		"flightDuration": "Durée du vol",
		"maxSpeed": "Vitesse maximale",
		"flightStatus": "État du vol",			"specTitle": "Caractéristiques Techniques Exocet MM40",
			"specSubtitle": "Spécifications complètes de notre fusée modèle réduit",
			"physicalSpecs": "Caractéristiques Physiques",
			"specLength": "Longueur",
			"specDiameter": "Diamètre",
			"specWeight": "Poids (sans moteur)",		"approximate": "Approximatif",			"motorSpecs": "Moteurs et Performances",
			"motorType": "Type de Moteur",
			"apogee": "Apogée (ft)",
			"apogeeMeters": "Apogée (m)",
			"kitComponents": "Contenu du Kit",
			"comp1": "Pièces laser-découpées en contreplaqué",
			"comp2": "Ailettes pré-découpées",
			"comp3": "Cône de nez imprimé en 3D",
			"comp4": "Parachute en plastique 18\"",
			"comp5": "Système d'éjection sans wadding",
			"comp6": "Décals détaillés pour finitions",
			"requirements": "Requis pour l'Assemblage et le Lancement",
			"reqAssembly": "Matériaux d'Assemblage",
			"reqLaunch": "Équipement de Lancement",
			"reqMotors": "Moteurs (D ou E)",
			"reqWood": "Colle bois",
			"reqKnife": "Couteau de hobby",
			"reqSand": "Papier de verre",
			"reqTape": "Ruban de masquage",
			"reqPaint": "Aprêt et peinture",
			"reqLaunchSystem": "Système de lancement",
			"reqRod": "Tige de lancement 3/16\"",
			"reqController": "Contrôleur de lancement",
			"reqIgniters": "Allumeurs",
			"buildInfo": "Informations de Construction",
			"skillLevel": "Niveau de difficulté : ",
			"buildDescription": "Ce modèle réduit de la fusée Exocet MM40 française offre une expérience de construction et de vol réaliste. Idéal pour les amateurs de fusées ayant des compétences intermédiaires en assemblage, il contient de nombreuses petites pièces et des décalcomanies.",
			"stockNote": "Note : Les spécifications ci-dessous sont les caractéristiques du kit d'origine Exocet MM40.",
			"selectedMotor": "Moteur Sélectionné",
			"allMotors": "Tous les Moteurs Compatibles",
			"telemetryData": "Données de Télémétrie",
			"timestamp": "Temps (s)",
			"telAltitude": "Altitude (m)",
			"telPressure": "Pression (hPa)",
			"telHumidity": "Humidité (%)",
			"telLatitude": "Latitude",
			"telLongitude": "Longitude",
			"timeRange": "Plage horaire",		"timeRangeFull": "Complète (0-142s)",
		"timeRangeAscent": "Montée (0-75s)",
		"timeRangeDescent": "Descente (75-142s)",			"charts": "Graphiques",
			"chartsComingSoon": "Visualisations des données de vol (Chart.js - À venir)",
			"chartsPreparation": "Graphiques interactifs en préparation...",
			"flightTrajectory": "Trajectoire du Vol",
			"trajectoryDescription": "Trajet GPS complet du vol avec points clés (lancement, apogée, atterrissage)",
			"launch": "Lancement",
			"apogee": "Apogée",
			"landing": "Atterrissage"
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
			"systemStatusMessage": "All systems are operational. Last synchronization: 27/03/2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Language",
			"role": "Main Role",
			"roleBuilder": "Builder",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Coder",
			"roleDecorator": "Decorator",

			"categoryRocket": "Rocket",
			"categoryElectronics": "Electronics",
			"specifications": "Specifications",
			"flightInfo": "Exocet MM40 Flight Data from 27/03/2026",		"flightOverview": "Flight Overview",
		"flightDuration": "Flight Duration",
		"maxSpeed": "Max Speed",
		"flightStatus": "Flight Status",			"specTitle": "Exocet MM40 Technical Specifications",
			"specSubtitle": "Complete specifications of our model rocket",
			"physicalSpecs": "Physical Specifications",
			"specLength": "Length",
			"specDiameter": "Diameter",
			"specWeight": "Weight (without motor)",		"approximate": "Approximate",			"motorSpecs": "Motors and Performance",
			"motorType": "Motor Type",
			"apogee": "Apogee (ft)",
			"apogeeMeters": "Apogee (m)",
			"kitComponents": "Kit Contents",
			"comp1": "Laser-cut plywood parts",
			"comp2": "Pre-cut fins",
			"comp3": "3D-printed nose cone",
			"comp4": "18\" plastic parachute",
			"comp5": "Ejection system without wadding",
			"comp6": "Detailed decals for finishing",
			"requirements": "Required for Assembly and Launch",
			"reqAssembly": "Assembly Materials",
			"reqLaunch": "Launch Equipment",
			"reqMotors": "Motors (D or E)",
			"reqWood": "Wood glue",
			"reqKnife": "Hobby knife",
			"reqSand": "Sandpaper",
			"reqTape": "Masking tape",
			"reqPaint": "Primer & Paint",
			"reqLaunchSystem": "Launch system",
			"reqRod": "3/16\" launch rod",
			"reqController": "Launch controller",
			"reqIgniters": "Igniters",
			"buildInfo": "Construction Information",
			"skillLevel": "Difficulty level: ",
			"buildDescription": "This scale model of the French Exocet MM40 rocket offers a realistic building and flying experience. Ideal for rocket enthusiasts with intermediate assembly skills, it contains numerous small parts and decals.",
			"stockNote": "Note: The specifications below are the original Exocet MM40 kit specifications.",
			"selectedMotor": "Selected Motor",
			"allMotors": "All Compatible Motors",
			"telemetryData": "Telemetry Data",
			"timestamp": "Timestamp (s)",
			"telAltitude": "Altitude (m)",
			"telPressure": "Pressure (hPa)",
			"telHumidity": "Humidity (%)",
			"telLatitude": "Latitude",
			"telLongitude": "Longitude",
			"timeRange": "Time Range",		"timeRangeFull": "Full (0-142s)",
		"timeRangeAscent": "Ascent (0-75s)",
		"timeRangeDescent": "Descent (75-142s)",			"charts": "Charts",
			"chartsComingSoon": "Flight data visualizations (Chart.js - Coming soon)",
			"chartsPreparation": "Interactive charts under preparation...",
			"flightTrajectory": "Flight Trajectory",
			"trajectoryDescription": "Complete GPS path of the flight with key points (launch, apogee, landing)",
			"launch": "Launch",
			"apogee": "Apogee",
			"landing": "Landing"
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
			"roleDecorator": "Dekorateurin",
			"categoryRocket": "Rocket",
			"categoryElectronics": "Elektronik",
			"specifications": "Spezifikationen",
			"flightInfo": "Exocet MM40 Flugdaten vom 27/03/2026",		"flightOverview": "Flugübersicht",
		"flightDuration": "Flugdauer",
		"maxSpeed": "Höchstgeschwindigkeit",
		"flightStatus": "Flugstatus",			"specTitle": "Exocet MM40 Technische Spezifikationen",
			"specSubtitle": "Vollständige Spezifikationen unserer Modellrakete",
			"physicalSpecs": "Physikalische Spezifikationen",
			"specLength": "Länge",
			"specDiameter": "Durchmesser",
			"specWeight": "Gewicht (ohne Motor)",		"approximate": "Ungefähr",			"motorSpecs": "Motoren und Leistung",
			"motorType": "Motortyp",
			"apogee": "Apogäum (ft)",
			"apogeeMeters": "Apogäum (m)",
			"kitComponents": "Kitinhalte",
			"comp1": "Lasergescnittene Sperrholzteile",
			"comp2": "Vorgefertigte Flossen",
			"comp3": "3D-gedruckte Nasenkone",
			"comp4": "18\" Kunststoffschirm",
			"comp5": "Auswurfsystem ohne Feuerschutz",
			"comp6": "Detaillierte Abziehbilder zum Fertigstellen",
			"requirements": "Erforderlich für Zusammenbau und Start",
			"reqAssembly": "Montagematerialien",
			"reqLaunch": "Startausrüstung",
			"reqMotors": "Motoren (D oder E)",
			"reqWood": "Holzleim",
			"reqKnife": "Hobbymesser",
			"reqSand": "Schleifpapier",
			"reqTape": "Abklebeband",
			"reqPaint": "Grundierung und Farbe",
			"reqLaunchSystem": "Startsystem",
			"reqRod": "3/16\" Startstäbchen",
			"reqController": "Startregler",
			"reqIgniters": "Zünder",
			"buildInfo": "Konstruktionsinformationen",
			"skillLevel": "Schwierigkeitsstufe: ",
			"buildDescription": "Dieses Modell der französischen Exocet MM40-Rakete bietet ein realistisches Konstruktions- und Flugerlebnis. Ideal für Raketenenthusiasten mit mittleren Montagefähigkeiten enthält es zahlreiche kleine Teile und Abziehbilder.",
			"stockNote": "Hinweis: Die folgenden Spezifikationen sind die Originalspezifikationen des Exocet MM40 Bausatzes.",
			"selectedMotor": "Ausgewählter Motor",
			"allMotors": "Alle kompatiblen Motoren",
			"telemetryData": "Telemetrie-Daten",
			"timestamp": "Zeitstempel (s)",
			"telAltitude": "Höhe (m)",
			"telPressure": "Druck (hPa)",
			"telHumidity": "Feuchtigkeit (%)",
			"telLatitude": "Breitengrad",
			"telLongitude": "Längengrad",
			"timeRange": "Zeitbereich",		"timeRangeFull": "Vollständig (0-142s)",
		"timeRangeAscent": "Aufstieg (0-75s)",
		"timeRangeDescent": "Abstieg (75-142s)",			"charts": "Diagramme",
			"chartsComingSoon": "Flugdatenvisualisierungen (Chart.js - Demnächst verfügbar)",
			"chartsPreparation": "Interaktive Diagramme werden vorbereitet...",
			"flightTrajectory": "Flugtrajektorie",
			"trajectoryDescription": "Vollständige GPS-Bahn des Flugs mit Schlüsselpunkten (Start, Apogäum, Landung)",
			"launch": "Start",
			"apogee": "Apogäum",
			"landing": "Landung"
		},
		"lb": {
			"rocketlab": "UE RocketLab",
			"purpleTeam": "Purple Team",
			"home": "Startplaz",
			"analysis": "Analys",
			"specifications": "Spezifikatioune",
			"heroTitle": "Verfollunge vum Fluch vun der Rakéit Exocet MM40",
			"heroSubtitle": "Echtzéit-Datenverfollunge vum Fluch vun eiser Rakéit",
			"ctaButton": "Zu den Daten",
			"aboutProject": "Iwwert de Projekt",
			"aboutText": "De Projet UE RocketLab ass eng Austausch-Initiativ déi Studenten aus villen europäesche Länner zesumme bréngt, speziell aus Spuenien, Frankreich an Lëtzebuerg. Säi Haupziel ass eng Zesummenaarbecht tëschent Universitéiten duerch d'Design an d'Montage vun enger Rakéit ze entwéckelen, déi fäeg ass, real-time Donnéeën während hirem Fluch ze sammelen.",
			"teamPurple": "Purple Team",
			"teamMembers": "6 Memberen",
			"firstName": "Virnumm",
			"lastName": "Numm",
			"origin": "Hierkonft",
			"role": "Haapt Oppgab",
			"roleBuilder": "Konstruktur",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Coder",
			"roleDecorator": "Dekoratrice",
			"categoryRocket": "Rocket",
			"categoryElectronics": "Elektronik",
			"overview": "Uewerbleck",
			"overviewSubtitle": "Zesummegesat Indikatore aus der Datebank.",
			"flightsAnalyzed": "Analyséiert Fléck",
			"missionSuccess": "Missiouns Erfolleg",
			"openIncidents": "Ope Vorfäll",
			"lastSync": "Lescht Synchronisatioun",
			"flightData": "Flugdaten",
			"status": "Statut",
			"all": "All",
			"nominal": "Normal",
			"warning": "Warnung",
			"critical": "Kritesch",
			"search": "Sichen",
			"searchPlaceholder": "Missions ID oder Rakéit",
			"missionId": "Missions ID",
			"launcher": "Rakéit",
			"date": "Datum",
			"maxAltitude": "Max Héicht",
			"systemStatus": "System Status",
			"systemStatusSubtitle": "Interface bereet fir dynamesch Donnéeën vun enger API ze konsuméieren déi mat der Datebank verbonnen ass.",
			"systemStatusMessage": "All Systemer funktionnéieren. Lescht Synchronisatioun: 27/03/2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Sprooch",
			"specifications": "Spezifikatioune",
			"flightInfo": "Exocet MM40 Flugdaten vum 27/03/2026",
			"flightOverview": "Flugübersicht",
			"flightDuration": "Flugdauer",
			"maxSpeed": "Höchstgeschwindigkeit",
			"flightStatus": "Flugstatus",
			"specTitle": "Exocet MM40 Technesch Spezifikatioune",
			"specSubtitle": "Komplette Spezifikatioune vun eiser Modell Rakéit",
			"physicalSpecs": "Physikalesch Spezifikatioune",
			"specLength": "Längt",
			"specDiameter": "Duerchmiesser",
			"specWeight": "Gewiicht (ouni Motor)",
			"approximate": "Ongeféier",
			"motorSpecs": "Motoren an Leeschtung",
			"motorType": "Motor Typ",
			"apogee": "Apogäum (ft)",
			"apogeeMeters": "Apogäum (m)",
			"kitComponents": "Kit Inhalt",
			"comp1": "Laser-geschnidde Sperrholz Deeler",
			"comp2": "Vir-geschnidde Flünn",
			"comp3": "3D-gedréckt Nasen-Kegel",
			"comp4": "18\" Kunststoff Fallschirm",
			"comp5": "Ausworf System ouni Watting",
			"comp6": "Detailliert Decalcomanie",
			"requirements": "Néideg fir Montage an Start",
			"reqAssembly": "Montag Material",
			"reqLaunch": "Start Equipment",
			"reqMotors": "Motoren (D oder E)",
			"reqWood": "Holz Leim",
			"reqKnife": "Hobby Messer",
			"reqSand": "Schlëff Pabeier",
			"reqTape": "Maskerung Tape",
			"reqPaint": "Grondéierung an Faarf",
			"reqLaunchSystem": "Start System",
			"reqRod": "3/16\" Start Stéck",
			"reqController": "Start Controller",
			"reqIgniters": "Zünder",
			"buildInfo": "Konstruktions Informatioune",
			"skillLevel": "Schwieregkeetsgrad: ",
			"buildDescription": "Dees Modell vun der franséischer Exocet MM40-Rakéit bitt eng realistesch Konstruktions- an Flugerfarung. Ideal fir Rakéiten Enthusiasten mat mëttelbaaren Montag Fäegkeeten, et enthält vill kleng Deeler an Decalcomanien.",
			"stockNote": "Notiz: Déi folgend Spezifikatioune sinn déi Original Exocet MM40 Kit Spezifikatioune.",
			"selectedMotor": "Ausgewielte Motor",
			"allMotors": "All Kompatibel Motoren",
			"telemetryData": "Telemetrie Donnéeën",
			"timestamp": "Zäitstempel (s)",
			"telAltitude": "Héicht (m)",
			"telPressure": "Drock (hPa)",
			"telHumidity": "Fëichtegkeet (%)",
			"telLatitude": "Latitude",
			"telLongitude": "Longitude",
			"timeRange": "Zäit Beräich",
			"timeRangeFull": "Komplett (0-142s)",
			"timeRangeAscent": "Opstéigen (0-75s)",
			"timeRangeDescent": "Descent (75-142s)",
			"charts": "Diagram",
			"chartsComingSoon": "Flugdaten-Visualisierungen (Chart.js - Geschwënn verfügbar)",
			"chartsPreparation": "Interaktiv Diagram ginn virbereeden...",
			"flightTrajectory": "Flugtrajektorie",
			"trajectoryDescription": "Komplett GPS-Wee vum Flug mat Schlësselpunkten (Start, Apogäum, Landung)",
			"launch": "Start",
			"apogee": "Apogäum",
			"landing": "Landung"
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
			"systemStatusMessage": "Todos los sistemas están operacionales. Última sincronización: 27/03/2026 14:32 UTC.",
			"copyright": "© 2026 UE RocketLab - Purple Team",
			"languageSelector": "Idioma",
			"role": "Rol Principal",
			"roleBuilder": "Constructor",
			"roleArduino": "Master of Arduino",
			"roleCoder": "Codificador",
			"roleDecorator": "Decoradora",
			"categoryRocket": "Rocket",
			"categoryElectronics": "Electrónica",
			"specifications": "Especificaciones",
			"flightInfo": "Datos de Vuelo Exocet MM40 del 27/03/2026",		"flightOverview": "Descripción General del Vuelo",
		"flightDuration": "Duración del Vuelo",
		"maxSpeed": "Velocidad Máxima",
		"flightStatus": "Estado del Vuelo",			"specTitle": "Especificaciones Técnicas del Exocet MM40",
			"specSubtitle": "Especificaciones completas de nuestro cohete modelo",
			"physicalSpecs": "Especificaciones Físicas",
			"specLength": "Longitud",
			"specDiameter": "Diámetro",
			"specWeight": "Peso (sin motor)",		"approximate": "Aproximado",			"motorSpecs": "Motores y Rendimiento",
			"motorType": "Tipo de Motor",
			"apogee": "Apogeo (ft)",
			"apogeeMeters": "Apogeo (m)",
			"kitComponents": "Contenido del Kit",
			"comp1": "Piezas de madera contrachapada cortadas con láser",
			"comp2": "Aletas preciadas",
			"comp3": "Cono de nariz impreso en 3D",
			"comp4": "Paracaídas de plástico de 18\"",
			"comp5": "Sistema de eyección sin algodón",
			"comp6": "Calcomanías detalladas para acabados",
			"requirements": "Requerido para Ensamblaje y Lanzamiento",
			"reqAssembly": "Materiales de Ensamblaje",
			"reqLaunch": "Equipo de Lanzamiento",
			"reqMotors": "Motores (D o E)",
			"reqWood": "Pegamento para madera",
			"reqKnife": "Cuchillo de hobby",
			"reqSand": "Papel de lija",
			"reqTape": "Cinta de máscara",
			"reqPaint": "Imprimación y pintura",
			"reqLaunchSystem": "Sistema de lanzamiento",
			"reqRod": "Varilla de lanzamiento 3/16”",
			"reqController": "Controlador de lanzamiento",
			"reqIgniters": "Encendedores",
			"buildInfo": "Información de Construcción",
			"skillLevel": "Nivel de dificultad: ",
			"buildDescription": "Este modelo a escala del cohete francés Exocet MM40 ofrece una experiencia realista de construcción y vuelo. Ideal para entusiastas de cohetes con habilidades intermedias de ensamblaje, contiene numerosas piezas pequeñas y calcomanías.",
			"stockNote": "Nota: Las especificaciones a continuación son las especificaciones originales del kit Exocet MM40.",
			"selectedMotor": "Motor Seleccionado",
			"allMotors": "Todos los Motores Compatibles",
			"telemetryData": "Datos de Telemetría",
			"timestamp": "Marca de Tiempo (s)",
			"telAltitude": "Altitud (m)",
			"telPressure": "Presión (hPa)",
			"telHumidity": "Humedad (%)",
			"telLatitude": "Latitud",
			"telLongitude": "Longitud",
			"timeRange": "Rango de Tiempo",		"timeRangeFull": "Completo (0-142s)",
		"timeRangeAscent": "Ascenso (0-75s)",
		"timeRangeDescent": "Descenso (75-142s)",			"charts": "Gráficos",
			"chartsComingSoon": "Visualizaciones de datos de vuelo (Chart.js - Próximamente)",
			"chartsPreparation": "Gráficos interactivos en preparación...",
			"flightTrajectory": "Trayectoria del Vuelo",
			"trajectoryDescription": "Ruta GPS completa del vuelo con puntos clave (despegue, apogeo, aterrizaje)",
			"launch": "Despegue",
			"apogee": "Apogeo",
			"landing": "Aterrizaje"
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
			
			// Redraw charts if the function is available (on analysis page)
			if (typeof window.redrawCharts === 'function') {
				window.redrawCharts();
			}
			
			// Redraw map if the function is available (on analysis page)
			if (typeof window.redrawMap === 'function') {
				window.redrawMap();
			}
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
				} else if (element.tagName === 'OPTION') {
					element.textContent = trans[key];
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

	// Expose getTranslation for other scripts
	window.getTranslation = function(key) {
		const lang = getCurrentLanguage();
		const trans = translations[lang];
		return trans[key] || key;
	};

	// Expose resetLanguage for testing/demo
	window.resetLanguage = function() {
		localStorage.removeItem(STORAGE_KEY);
		showLanguageModal();
	};
})();
