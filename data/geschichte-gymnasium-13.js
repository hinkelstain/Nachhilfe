// Inhalt: LehrplanPLUS Bayern, Gymnasium, Geschichte, Jahrgangsstufe 13
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/13/geschichte/grundlegend
// Hinweis: Wie in Jgst. 12 gibt es ein grundlegendes Niveau (gA,
// zweistündig, Pflicht für alle) und ein erhöhtes Niveau (eA, vierstündig,
// Leistungsfach, zusätzlich mit Vertiefungsmodul 13.1.3 "Internationale
// Konfliktfelder im Nahen und Mittleren Osten" sowie vertieften
// Fragestellungen zu Polen und zum Vergleich politischer Systeme). Diese
// Datei bildet das grundlegende Niveau ab. Die oben genannte Quelle (die
// Fachlehrplan-Einzelseite für Jgst. 13) konnte trotz mehrerer Versuche
// technisch nicht direkt abgerufen werden; Titel, Teilbereiche und
// Stundenangaben wurden stattdessen aus offiziellen ISB-Sekundärquellen
// rekonstruiert (Dokument "Implementierung LehrplanPLUS Geschichte", ISB;
// Kontaktbrief Geschichte 2025 (Anlage), ISB/Historisches Forum Bayern);
// die Formulierung der Ziele stützt sich auf diese Titel sowie allgemein
// bekannte, etablierte Lehrplaninhalte zu den genannten Themen.
// Zeitschätzung (Feld "zeitraum"): Die genannten Ca.-Stundenangaben pro
// Teilbereich sind offiziell belegt. Die beiden Lernbereiche entsprechen
// den beiden Schulhalbjahren; das 2. Halbjahr der Jgst. 13 fällt deutlich
// kürzer aus als in Jgst. 12 (nur 18 statt 28 Std.), da im Frühjahr die
// schriftlichen Abiturprüfungen beginnen und der reguläre Unterricht in
// den Prüfungsfächern entsprechend früher endet.
const LEHRPLAN_GESCHICHTE_GY_13 = {
  fach: "Geschichte",
  klasse: "13",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/13/geschichte/grundlegend",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Akteure internationaler Politik in historischer Perspektive",
      zeitraum: "1. Schulhalbjahr (ca. September bis Januar)",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Die historische Entwicklung des israelisch-palästinensischen Konflikts",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Die Bedeutung von Diaspora und Zionismus für die jüdische Geschichte erklären",
            "Zentrale Entwicklungen des israelisch-palästinensischen Konflikts mithilfe eines historischen Atlas nachvollziehen",
            "Positionen und Perspektiven der beteiligten Seiten historisch einordnen und multiperspektivisch beurteilen"
          ]
        },
        {
          id: "lb1-2",
          titel: "USA, Russland und China im 20. und 21. Jahrhundert",
          zeitraum: "ca. November bis Januar",
          ziele: [
            "Zentrale Stationen der Transformation der Sowjetunion bzw. Russlands seit den 1980er-Jahren beschreiben",
            "Folgen dieser Transformation für Frieden und Sicherheit in Europa diskutieren",
            "Die wirtschaftliche Transformation Chinas (u. a. unter Deng Xiaoping) einordnen",
            "Das weltpolitische Agieren der USA, Russlands und Chinas im 20./21. Jahrhundert miteinander vergleichen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Historische Grundlagen moderner politischer Ordnungsformen und Identifikationsmuster in Europa",
      zeitraum: "2. Schulhalbjahr (ca. Februar bis April)",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Historische Grundlagen moderner demokratischer Staatsformen",
          zeitraum: "ca. Februar",
          ziele: [
            "Die attische Demokratie als frühe Form politischer Mitbestimmung einordnen",
            "Mitwirkungsmöglichkeiten des Einzelnen in unterschiedlichen politischen Systemen vergleichen",
            "Die Verwaltung des Imperium Romanum und konsensuale Herrschaft im Heiligen Römischen Reich (Goldene Bulle) einordnen"
          ]
        },
        {
          id: "lb2-2",
          titel: "Von nationalistischer Konfrontation zur europäischen Integration vom 19. bis zum beginnenden 21. Jahrhundert",
          zeitraum: "ca. März/April",
          ziele: [
            "Die Nationalstaatsbildung im 19. Jahrhundert und ihre Konfliktpotenziale erklären",
            "Nationalistische Konfrontationen als eine Ursache der beiden Weltkriege einordnen",
            "Schritte der europäischen Integration nach 1945 als Antwort auf die Katastrophen der Weltkriege erläutern",
            "Chancen und Herausforderungen der europäischen Integration bis heute diskutieren"
          ]
        }
      ]
    }
  ]
};
