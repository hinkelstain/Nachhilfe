// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), GPG, Jahrgangsstufe 9
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/9/gpg/regelklasse
//
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt für GPG an der
// Mittelschule (wie bei Mathematik Mittelschule) keine Stundenzahl je
// Lernbereich. Die "ca."-Zeiträume sind daher KEINE offizielle Lehrplan-
// Angabe, sondern eine eigene, transparente Schätzung: Grundlage ist die
// amtliche Stundentafel (3 Wochenstunden GPG in Jgst. 9, Anlage 1 zu § 11
// MSO). Die vier Lernbereiche werden proportional zur Anzahl ihrer
// Kompetenzerwartungen auf ein Schuljahr von September bis Juni verteilt
// (Juli bleibt als Puffer/Wiederholungszeit frei). Da der Fachlehrplan
// GPG innerhalb der vier Lernbereiche keine weitere offizielle Unter-
// gliederung in Teilbereiche vornimmt, entspricht hier jeder Teilbereich
// genau einem Lernbereich (Zeitraum identisch).
const LEHRPLAN_GPG_MS_9 = {
  fach: "GPG",
  klasse: "9",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/9/gpg/regelklasse",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Lebensraum Erde",
      zeitraum: "ca. September bis November",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Lebensraum Erde",
          zeitraum: "ca. September bis November",
          ziele: [
            "Die Entwicklung der Europäischen Union von der Gründung bis heute darstellen und aktuelle Fragen diskutieren",
            "Internationale Verflechtungen Bayerns und Deutschlands an einem regionalen Beispiel darstellen (Chancen und Risiken der Globalisierung)",
            "Ursachen und Folgen des Klimawandels erklären und die Verantwortung menschlichen Handelns beurteilen",
            "Lokale und globale Maßnahmen zum Klimaschutz beschreiben (z. B. internationale Abkommen)"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Zeit und Wandel",
      zeitraum: "ca. Dezember bis Februar",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Zeit und Wandel",
          zeitraum: "ca. Dezember bis Februar",
          ziele: [
            "Die Funktion von Gedenkstätten zur NS-Zeit erläutern und den 8. Mai 1945 einordnen und bewerten",
            "Die Entwicklung in DDR und UdSSR darstellen und die Ursachen der deutschen Einheit erläutern",
            "Veränderungen der Gesellschaft seit Gründung der Bundesrepublik beschreiben und ihre Ursachen und Folgen erklären",
            "Ursachen und Auswirkungen der Anschläge vom 11. September 2001 beschreiben und Maßnahmen gegen Terrorismus diskutieren"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Politik und Gesellschaft",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Politik und Gesellschaft",
          zeitraum: "ca. März/April",
          ziele: [
            "Wirtschaftliche und gesellschaftliche Entwicklungen in BRD und DDR vergleichen und Vor- und Nachteile beider Ordnungen diskutieren",
            "Formen des Terrorismus und seine Bedrohung für Freiheit und Sicherheit beschreiben und bewerten",
            "Organisationen der nationalen und internationalen Friedenssicherung und ihre Rolle in aktuellen Einsätzen darstellen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Lebenswelt",
      zeitraum: "ca. Mai/Juni",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Lebenswelt",
          zeitraum: "ca. Mai/Juni",
          ziele: [
            "Ursachen und Auswirkungen eines aktuellen gesellschaftlichen Konflikts recherchieren und aus verschiedenen Perspektiven bewerten",
            "Ursachen von Migration erklären und politische Maßnahmen in der Region sowie Herausforderungen und Chancen diskutieren",
            "Berufliche und sprachliche Herausforderungen von Migrantinnen und Migranten darstellen und Unterstützungsangebote in der Region aufzeigen"
          ]
        }
      ]
    }
  ]
};
