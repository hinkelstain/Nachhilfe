// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), Mathematik, Jahrgangsstufe 6
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/6/mathematik
// Zeitschätzung (Feld "zeitraum"): Der Mittelschul-Fachlehrplan nennt
// anders als Realschule/Gymnasium keine Stundenzahl je Lernbereich. Die
// "ca."-Zeiträume sind daher keine offizielle Lehrplan-Angabe, sondern eine
// eigene grobe Schätzung auf Basis der amtlichen Stundentafel (5 Wochen-
// stunden Mathematik in Jgst. 6, Anlage 1 zu § 11 MSO) verteilt nach
// der Anzahl der Lernziele je Themenbereich.
const LEHRPLAN_MATHE_MS_6 = {
  fach: "Mathematik",
  klasse: "6",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/6/mathematik",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Bruchzahlen",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Erweiterung des Zahlbereichs auf Bruchzahlen",
          zeitraum: "ca. September",
          ziele: [
            "Bruchteile handelnd herstellen, zeichnen und am Zahlenstrahl markieren",
            "Brüche als Anteil, Operator oder Verhältnis in Alltagssituationen deuten",
            "Brüche erweitern, kürzen und gleichnamig machen, um sie zu ordnen und zu vergleichen",
            "Brüche und Dezimalbrüche ineinander umwandeln und vergleichen",
            "Bruch, Dezimalbruch und Prozentsatz ineinander umrechnen"
          ]
        },
        {
          id: "lb1-2",
          titel: "Rechnen mit Bruchzahlen",
          zeitraum: "ca. Oktober",
          ziele: [
            "Die vier Grundrechenarten mit Brüchen und Dezimalbrüchen schriftlich ausführen",
            "Rechengesetze und Rundungsregeln beim Rechnen mit Brüchen anwenden",
            "Grundrechenarten mit Brüchen in Sachaufgaben einsetzen und Lösungswege erklären"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Rationale Zahlen",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Erweiterung des Zahlbereichs auf rationale Zahlen",
          zeitraum: "ca. November",
          ziele: [
            "Alltagssituationen (Temperaturen, Kontostände) mit negativen Bruchzahlen/Dezimalbrüchen beschreiben",
            "Rationale Zahlen auf der Zahlengeraden ordnen und begründet vergleichen"
          ]
        },
        {
          id: "lb2-2",
          titel: "Grundrechenarten im Bereich der rationalen Zahlen",
          zeitraum: "ca. Dezember",
          ziele: [
            "Addition und Subtraktion als Zustandsänderung an der Zahlengeraden darstellen",
            "Multiplikation als wiederholte Addition, Division als Umkehrung veranschaulichen",
            "Sachsituationen passenden Rechenaufgaben zuordnen und eigene Aufgaben dazu erstellen",
            "Einfache Aufgaben mit rationalen Zahlen auch im Kopf lösen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Geometrische Figuren, Körper und Lagebeziehungen",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Geometrische Figuren, Körper und Lagebeziehungen",
          zeitraum: "ca. Januar/Februar",
          ziele: [
            "Vierecke (Trapez, Parallelogramm, Raute, Rechteck, Quadrat, Drachen) nach Eigenschaften ordnen",
            "Parallelogramme, Rechtecke, Quadrate und Kreise mit Zirkel, Lineal und Geodreieck zeichnen",
            "Punkte und Figuren in allen vier Quadranten des Koordinatensystems eintragen",
            "Körper (Würfel, Quader, Prisma, Zylinder, Pyramide, Kegel, Kugel) erkennen und unterscheiden",
            "Netze und Schrägbilder von Würfeln und Quadern zeichnen und ineinander überführen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Flächeninhalt – Oberflächeninhalt von Quadern",
      zeitraum: "ca. März",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Flächeninhalt – Oberflächeninhalt von Quadern",
          zeitraum: "ca. März",
          ziele: [
            "Oberflächeninhalte von Quadern und Würfeln über Netz oder Schrägbild berechnen",
            "Oberflächeninhalte zusammengesetzter Körper aus Quadern/Würfeln berechnen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Rauminhalt – Quader",
      zeitraum: "ca. April/Mai",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Rauminhalt – Quader",
          zeitraum: "ca. April/Mai",
          ziele: [
            "Würfelbauten nach Schrägbild oder Ansichten bauen, mit Einheitswürfeln Aufgaben im Kopf lösen",
            "Rauminhalte von Würfeln und Quadern vergleichen, messen, schätzen und den Begriff Volumen nutzen",
            "Volumenberechnung mit Einheitswürfeln begründen (Abhängigkeit von Länge, Breite, Höhe)",
            "Volumeneinheiten (mm³ bis m³) und Zusammenhang mit ml/l erläutern",
            "Volumen von Quadern, Würfeln und zusammengesetzten Körpern berechnen und Einheiten umrechnen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Daten",
      zeitraum: "ca. Mai/Juni",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Daten",
          zeitraum: "ca. Mai/Juni",
          ziele: [
            "Daten aus eigenen Erhebungen (z. B. Umfragen, Verkehrszählungen) erfassen und zusammenfassen",
            "Daten in Tabellen und Diagrammen strukturieren, interpretieren und Sachfragen beantworten",
            "Das arithmetische Mittel aus Alltagsdaten bestimmen und seine Aussagekraft einschätzen"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Gleichungen und Formeln",
      zeitraum: "ca. Juni/Juli",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Gleichungen und Formeln",
          zeitraum: "ca. Juni/Juli",
          ziele: [
            "Zahlenrätsel sowie Aufgaben zum Volumen von Quadern durch systematisches Probieren und Umkehraufgaben lösen"
          ]
        }
      ]
    }
  ]
};
