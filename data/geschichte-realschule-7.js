// Inhalt: LehrplanPLUS Bayern, Realschule, Geschichte, Jahrgangsstufe 7
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/7/geschichte
// Hinweis: Die offizielle Fachlehrplan-Seite für Jgst. 7 konnte trotz
// mehrfacher Versuche nicht direkt abgerufen werden (Client-Fehler beim
// automatisierten Abruf, anders als bei den direkt lesbaren Fachlehrplan-
// Seiten für Jgst. 8 und 10). Die Inhalte dieser Datei stammen daher aus der
// offiziellen, vom ISB veröffentlichten Materialliste "Geschichte bilingual
// nach LehrplanPLUS, Jahrgangsstufe 7", die den deutschen Original-Wortlaut
// der amtlichen Lernbereiche 1-8 (mit expliziten Verweisen auf die amtliche
// Nummerierung G 7.1-G 7.8) sowie die zugehörigen Inhalte enthält. Den
// optionalen, offiziell als Lernbereich 8 geführten "Bilingualen
// Sachfachunterricht" (nur an Schulen mit entsprechendem Angebot) habe ich
// bewusst NICHT aufgenommen, da er keinen Regelunterricht darstellt. Keine
// WPFG-Variante: Geschichte wird laut amtlicher Stundentafel (Anlage 1 RSO)
// in allen vier Wahlpflichtfächergruppen inhaltsgleich mit 2 Wochenstunden
// unterrichtet.
// Zeitschätzung (Feld "zeitraum"): Die Materialliste nennt keine Zeit-/
// Stundenangaben je Lernbereich. Die "ca."-Zeiträume sind daher eine eigene
// Schätzung auf Basis der amtlichen Stundentafel (2 Wochenstunden Geschichte
// in Jgst. 7, Anlage 1 RSO), verteilt nach der Anzahl der Lernziele je
// Lernbereich auf ein Schuljahr von September bis Juni; Juli bleibt als
// Puffer/Wiederholungszeit frei. Lernbereich 1 (Methoden und
// Arbeitstechniken) hat keine eigenen Inhalte und ist hier als Einstieg im
// September verortet. Bei mehreren Teilbereichen wird derselbe Zeitraum
// anteilig nach Lernzielanzahl weiter unterteilt. Nur ein ungefährer
// Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_GESCHICHTE_RS_7 = {
  fach: "Geschichte",
  klasse: "7",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/7/geschichte",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Methoden und Arbeitstechniken",
      zeitraum: "ca. September",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Methoden und Arbeitstechniken",
          zeitraum: "ca. September",
          ziele: [
            "Quellen (Texte, Bilder, Sachquellen) kritisch hinterfragen und einordnen",
            "Historische Karten und Schaubilder zur Informationsgewinnung nutzen",
            "Eigene kleine historische Erzählungen zu einem Thema entwickeln"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Leben und Herrschaft im Mittelalter",
      zeitraum: "ca. September bis November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Königtum, Kirche und Gesellschaft im Mittelalter",
          zeitraum: "ca. September",
          ziele: [
            "Entstehung des ostfränkisch-deutschen Königtums unter den Ottonen erklären",
            "Grundherrschaft und Lehnswesen als Ordnungsprinzipien des Mittelalters beschreiben",
            "Den Investiturstreit als Konflikt zwischen Kaiser und Papst um Macht einordnen",
            "Entwicklung der Reichsstände und zunehmende Territorialisierung des Heiligen Römischen Reichs nachvollziehen"
          ]
        },
        {
          id: "lb2-2",
          titel: "Leben, Glauben und Kultur im Mittelalter",
          zeitraum: "ca. Oktober/November",
          ziele: [
            "Alltag und Werte von Rittern sowie das Leben auf einer Burg beschreiben",
            "Romanische und gotische Baukunst an Beispielen unterscheiden",
            "Entstehung und Bedeutung mittelalterlicher Städte und des Fernhandels erklären",
            "Leben jüdischer Gemeinden im mittelalterlichen Europa einordnen, auch Formen der Ausgrenzung",
            "Ursachen und Folgen von Pest und Hungersnöten für die mittelalterliche Gesellschaft erläutern",
            "Ursachen, Verlauf und Folgen der Kreuzzüge aus unterschiedlichen Perspektiven beurteilen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Europa im Wandel vom Mittelalter zur Neuzeit",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Renaissance, Humanismus und Buchdruck",
          zeitraum: "ca. Dezember",
          ziele: [
            "Grundgedanken von Renaissance und Humanismus erläutern",
            "Bedeutung des Buchdrucks für die Verbreitung von Wissen und Ideen einschätzen",
            "Verändertes Menschen- und Weltbild der Renaissance an Beispielen zeigen"
          ]
        },
        {
          id: "lb3-2",
          titel: "Entdeckungsfahrten und die islamische Welt",
          zeitraum: "ca. Januar",
          ziele: [
            "Motive und Verlauf europäischer Entdeckungsfahrten (u. a. Kolumbus) erklären",
            "Begegnung mit den Reichen der Azteken, Inka und Maya und deren Folgen beurteilen",
            "Auswirkungen von Handel und Kolonisierung auf Europa und die „Neue Welt“ einschätzen",
            "Expansion des Osmanischen Reichs und die Eroberung Konstantinopels 1453 einordnen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Reformation und Konfessionalisierung",
      zeitraum: "ca. Februar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Reformation und Konfessionalisierung",
          zeitraum: "ca. Februar",
          ziele: [
            "Krisen des 16. Jahrhunderts (u. a. Hexenverfolgung) im gesellschaftlichen Kontext einordnen",
            "Martin Luthers Thesen und den Verlauf der Reformation erklären",
            "Ursachen und Folgen des Bauernkriegs darstellen",
            "Reaktion der katholischen Kirche (Kirchenreform/Gegenreformation) beschreiben",
            "Reformation in England unter Heinrich VIII. als eigenen Weg einordnen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Das frühneuzeitliche Europa zwischen konfessioneller Auseinandersetzung und absolutistischem Herrschaftsanspruch",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Der Dreißigjährige Krieg",
          zeitraum: "ca. März",
          ziele: [
            "Ursachen des Dreißigjährigen Krieges aus religiösen und politischen Motiven erklären",
            "Verlauf und europäische Dimension des Krieges in Grundzügen beschreiben",
            "Folgen des Krieges für die Bevölkerung und das Reich einschätzen"
          ]
        },
        {
          id: "lb5-2",
          titel: "Absolutismus am Beispiel Frankreichs",
          zeitraum: "ca. April",
          ziele: [
            "Herrschaftsanspruch und Selbstverständnis Ludwigs XIV. als absolutistischer Herrscher erläutern",
            "Barocke Repräsentation von Macht (u. a. Schloss Versailles) deuten",
            "Prinzip des Mächtegleichgewichts in Europa verstehen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Bauwerke als Ausdruck politischen und religiösen Denkens (Längsschnitt)",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Bauwerke als Ausdruck politischen und religiösen Denkens (Längsschnitt)",
          zeitraum: "ca. Mai",
          ziele: [
            "Bauwerke aus Antike, Mittelalter und Barock als Ausdruck von Herrschaft und Glauben deuten",
            "Vergleichen, wie unterschiedliche Epochen Macht und Religion architektonisch darstellten",
            "Beispiele für den Umgang mit historischen Bauwerken in der Gegenwart einordnen"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Warenaustausch und Kulturtransfer (Längsschnitt)",
      zeitraum: "ca. Juni",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Warenaustausch und Kulturtransfer (Längsschnitt)",
          zeitraum: "ca. Juni",
          ziele: [
            "Handelswege und -netzwerke verschiedener Epochen vergleichen (u. a. Limes, Hanse)",
            "Rolle von Handelsfamilien wie den Fuggern für Wirtschaft und Kultur einordnen",
            "Chancen und Probleme des weltweiten Handels heute mit früheren Formen vergleichen"
          ]
        }
      ]
    }
  ]
};
