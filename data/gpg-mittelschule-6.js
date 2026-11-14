// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), GPG, Jahrgangsstufe 6
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/6/gpg
//
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt für GPG an der
// Mittelschule (wie bei Mathematik Mittelschule) keine Stundenzahl je
// Lernbereich. Die "ca."-Zeiträume sind daher KEINE offizielle Lehrplan-
// Angabe, sondern eine eigene, transparente Schätzung: Grundlage ist die
// amtliche Stundentafel (2 Wochenstunden GPG in Jgst. 6, Anlage 1 zu § 11
// MSO). Die vier Lernbereiche werden proportional zur Anzahl ihrer
// Kompetenzerwartungen auf ein Schuljahr von September bis Juni verteilt
// (Juli bleibt als Puffer/Wiederholungszeit frei). Da der Fachlehrplan
// GPG innerhalb der vier Lernbereiche keine weitere offizielle Unter-
// gliederung in Teilbereiche vornimmt, entspricht hier jeder Teilbereich
// genau einem Lernbereich (Zeitraum identisch).
const LEHRPLAN_GPG_MS_6 = {
  fach: "GPG",
  klasse: "6",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/6/gpg",
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
            "Europa topographisch und naturräumlich einordnen und Natur und Kultur verschiedener europäischer Länder vergleichen",
            "Tourismusregionen in Europa nach ökologischen, wirtschaftlichen und sozialen Gesichtspunkten vergleichen",
            "Mittel- und Südamerika topographisch einordnen und die Kolonialisierung aus wirtschaftlichen und kulturellen Motiven erklären",
            "Ursachen und Folgen von Naturgefahren und Naturkatastrophen an Beispielen darstellen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Zeit und Wandel",
      zeitraum: "ca. Dezember bis März",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Zeit und Wandel",
          zeitraum: "ca. Dezember bis März",
          ziele: [
            "Lebens- und Arbeitsbedingungen im Mittelalter auf dem Land und in der Stadt darstellen und mit heute vergleichen",
            "Historische Spuren einer mittelalterlichen Stadt im heutigen Stadtbild erkennen und ihre Bedeutung erklären",
            "Errungenschaften des Islam in Medizin, Technik und Kultur benennen und ihren Einfluss auf den Übergang zu einer neuen Epoche erklären",
            "Erfindungen und Erkenntnisse zu Beginn der Neuzeit beschreiben und ihre Auswirkungen bis heute aufzeigen",
            "Ursachen und Ablauf der Reformation beschreiben und ihre politischen, religiösen und wirtschaftlichen Folgen erläutern"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Politik und Gesellschaft",
      zeitraum: "ca. April",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Politik und Gesellschaft",
          zeitraum: "ca. April",
          ziele: [
            "Lebensformen im Kloster und auf der Burg erklären, um geistliche und weltliche Machtstrukturen zu vergleichen",
            "Den hierarchischen Aufbau der mittelalterlichen Ständegesellschaft darstellen, um individuelle Freiheiten heute einzuordnen"
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
            "Motive für die Wahl des eigenen Wohnortes im familiären Umfeld erkunden und die Entscheidung bewerten",
            "Aufbau und Aufgaben der kommunalen Selbstverwaltung sowie Mitwirkungsmöglichkeiten der Bürger darstellen",
            "Kommunalpolitische Entscheidungsprozesse an einem aktuellen Beispiel erklären und Mitwirkungsmöglichkeiten (z. B. Wahl, Bürgerbegehren) ausprobieren"
          ]
        }
      ]
    }
  ]
};
