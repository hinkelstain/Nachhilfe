// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), GPG, Jahrgangsstufe 5
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/5/gpg/regelklasse
//
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt für GPG an der
// Mittelschule (wie bei Mathematik Mittelschule) keine Stundenzahl je
// Lernbereich. Die "ca."-Zeiträume sind daher KEINE offizielle Lehrplan-
// Angabe, sondern eine eigene, transparente Schätzung: Grundlage ist die
// amtliche Stundentafel (2 Wochenstunden GPG in Jgst. 5, Anlage 1 zu § 11
// MSO). Die vier Lernbereiche werden proportional zur Anzahl ihrer
// Kompetenzerwartungen auf ein Schuljahr von September bis Juni verteilt
// (Juli bleibt als Puffer/Wiederholungszeit frei). Da der Fachlehrplan
// GPG innerhalb der vier Lernbereiche keine weitere offizielle Unter-
// gliederung in Teilbereiche vornimmt, entspricht hier jeder Teilbereich
// genau einem Lernbereich (Zeitraum identisch).
const LEHRPLAN_GPG_MS_5 = {
  fach: "GPG",
  klasse: "5",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/5/gpg/regelklasse",
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
            "Die Stellung der Erde im Sonnensystem beschreiben und ihre Entstehung einordnen",
            "Kontinente, Weltmeere und Klimazonen mit Globus und Karte lokalisieren und sich auf der Erde orientieren",
            "Deutschland und den Lebensraum Bayern topographisch und naturräumlich erfassen",
            "Natur- und Kulturraum Bayerns mit einer anderen Region Deutschlands vergleichen (z. B. Alpen, Küste)",
            "Umweltschutzmaßnahmen im eigenen Umfeld beschreiben und das eigene umweltbewusste Verhalten überprüfen"
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
            "Die veränderten Lebensweisen in Alt- und Jungsteinzeit vergleichen (vom Jäger und Sammler zum Ackerbauern)",
            "Die Bedeutung des Nils für Ägypten früher und heute erklären",
            "Die Ausdehnung des Römischen Weltreichs vereinfacht darstellen",
            "Überreste römischer Kultur in Süddeutschland lokalisieren und deuten"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Politik und Gesellschaft",
      zeitraum: "ca. März",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Politik und Gesellschaft",
          zeitraum: "ca. März",
          ziele: [
            "Lebens- und Arbeitsbedingungen im alten Ägypten und die hierarchische Gesellschaftsordnung darstellen",
            "Aufbau und Aufgaben der Volksversammlung im antiken Griechenland als ersten Ansatz von Demokratie beschreiben"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Lebenswelt",
      zeitraum: "ca. April bis Juni",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Lebenswelt",
          zeitraum: "ca. April bis Juni",
          ziele: [
            "Konfliktsituationen aus dem Alltag beschreiben und Regeln für ein gewaltfreies Zusammenleben formulieren",
            "Demokratische Verhaltensweisen üben und an einem respektvollen Zusammenleben mitwirken",
            "Ursachen des Wandels von Familienformen darstellen und unterschiedliche Lebensformen besprechen",
            "Menschen mit Behinderung wertschätzend begegnen und gemeinsame Vorhaben mitgestalten"
          ]
        }
      ]
    }
  ]
};
