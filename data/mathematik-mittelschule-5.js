// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), Mathematik, Jahrgangsstufe 5
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/5/mathematik
//
// Zeitschätzung (Feld "zeitraum"): Der Mittelschul-Fachlehrplan nennt anders
// als bei Realschule/Gymnasium keine Stundenzahl je Lernbereich. Die "ca."-
// Zeiträume hier sind daher KEINE offizielle Lehrplan-Angabe, sondern eine
// eigene grobe Schätzung auf Basis der amtlichen Stundentafel (5 Wochen-
// stunden Mathematik in Jgst. 5, Anlage 1 zu § 11 MSO) verteilt nach der
// Anzahl der Lernziele je Themenbereich. Bei mehreren Unterbereichen wird
// derselbe Zeitraum anteilig weiter unterteilt.
const LEHRPLAN_MATHE_MS_5 = {
  fach: "Mathematik",
  klasse: "5",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/5/mathematik",
  hinweis: "Die Zeitangaben (📅) sind hier eine grobe eigene Schätzung, keine offizielle Lehrplan-Vorgabe: Der Mittelschul-Lehrplan nennt – anders als bei Realschule und Gymnasium – keine Stundenzahl je Lernbereich. Grundlage ist die amtliche Stundentafel (5 Wochenstunden Mathematik in Jgst. 5) kombiniert mit der Anzahl der Lernziele je Themenbereich.",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Natürliche Zahlen",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Der Zahlenraum über eine Milliarde hinaus",
          zeitraum: "ca. September",
          ziele: [
            "Große Zahlen über eine Milliarde lesen, schreiben und in verschiedenen Darstellungen erfassen",
            "Zahlen ordnen, vergleichen, zerlegen und in Schritten vor- und rückwärts zählen",
            "Zahlenfolgen mit gleicher Rechenoperation erkennen, fortsetzen und selbst bilden",
            "Große Anzahlen schätzen und sinnvoll runden, Vorgehen begründen",
            "Infos aus Zahlenstrahl, Diagrammen und Schaubildern entnehmen und auswerten"
          ]
        },
        {
          id: "lb1-2",
          titel: "Grundrechenarten im Bereich der natürlichen Zahlen",
          zeitraum: "ca. Oktober",
          ziele: [
            "Summen, Differenzen, Produkte und Quotienten im Kopf überschlagen und berechnen",
            "Grundrechenarten schriftlich und halbschriftlich sicher anwenden, Fachbegriffe richtig nutzen",
            "Ergebnisse durch Überschlag und Umkehraufgaben prüfen, Fehler erkennen und korrigieren",
            "Rechengesetze (Punkt vor Strich, Klammern, Kommutativ-/Assoziativgesetz) für Rechenvorteile nutzen",
            "Sachsituationen in Rechnungen übersetzen, lösen und den Lösungsweg erklären"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Ganze Zahlen",
      zeitraum: "ca. November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Ganze Zahlen",
          zeitraum: "ca. November",
          ziele: [
            "Alltagssituationen mit negativen Zahlen beschreiben (z. B. Minusgrade, Stockwerke unter dem Erdgeschoss)",
            "Positive und negative Zahlen am Zahlenstrahl ordnen und vergleichen",
            "Zustandsänderungen mit Pfeilen oder am Thermometer darstellen",
            "Zustand (Vorzeichen) und Veränderung (Rechenzeichen) unterscheiden",
            "Einfache Sachaufgaben mit ganzen Zahlen lösen und Ergebnisse auf Plausibilität prüfen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Geometrische Figuren und Lagebeziehungen",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Geometrische Figuren und Lagebeziehungen",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Punkte und Figuren im Koordinatensystem (1. Quadrant) einzeichnen und ablesen",
            "Parallele und senkrechte Linien erkennen, zeichnen und beschreiben",
            "Winkel erkennen, mit dem Geodreieck zeichnen und messen (spitz, recht, stumpf, gestreckt)",
            "Umfänge von Dreiecken, Vierecken und zusammengesetzten Figuren berechnen",
            "Sachaufgaben zum Umfang lösen, Längeneinheiten (mm bis m) sicher umrechnen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Flächeninhalt – Rechtecke",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Flächeninhalt – Rechtecke",
          zeitraum: "ca. Februar/März",
          ziele: [
            "Flächeninhalte vergleichen, messen und schätzen (z. B. durch Auslegen)",
            "Flächeninhalt von Rechteck und Quadrat mit Einheitsquadraten begründen",
            "Flächeninhalte von Rechtecken, Quadraten und zusammengesetzten Figuren berechnen",
            "Flächeneinheiten (mm² bis m²) sicher verwenden und umrechnen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Größen im Alltag",
      zeitraum: "ca. April",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Größen im Alltag",
          zeitraum: "ca. April",
          ziele: [
            "Größen (Länge, Volumen, Masse, Zeit, Geld) vergleichen und mit passenden Einheiten messen",
            "Alltagsgrößen mit Bezugsgrößen realistisch schätzen",
            "Sachaufgaben zu Größen lösen, Einheiten umrechnen und sinnvoll runden",
            "Einfache Brüche (¼, ½, ¾ …) und Kommaschreibweise bei Geld- und Längenangaben nutzen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Daten",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Daten",
          zeitraum: "ca. Mai",
          ziele: [
            "Daten aus eigenen Erhebungen (Umfragen, Zählungen) mit Strichlisten erfassen",
            "Daten in Tabellen und Diagrammen darstellen und daraus Zusammenhänge erkennen",
            "Informationen aus Datendarstellungen entnehmen und zur Beantwortung von Fragen nutzen"
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
            "Zahlenrätsel sowie Aufgaben zu Umfang und Fläche von Quadrat und Rechteck durch systematisches Probieren und Umkehraufgaben lösen, um erste Erfahrungen mit Variablen zu sammeln"
          ]
        }
      ]
    }
  ]
};
