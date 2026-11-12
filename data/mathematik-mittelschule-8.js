// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), Mathematik, Jahrgangsstufe 8
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/8/mathematik/regelklasse
// Zeitschätzung (Feld "zeitraum"): Der Mittelschul-Fachlehrplan nennt
// anders als Realschule/Gymnasium keine Stundenzahl je Lernbereich. Die
// "ca."-Zeiträume sind daher keine offizielle Lehrplan-Angabe, sondern eine
// eigene grobe Schätzung auf Basis der amtlichen Stundentafel (4 Wochen-
// stunden Mathematik in Jgst. 8, Anlage 1 zu § 11 MSO) verteilt nach
// der Anzahl der Lernziele je Themenbereich.
const LEHRPLAN_MATHE_MS_8 = {
  fach: "Mathematik",
  klasse: "8",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/8/mathematik/regelklasse",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Prozentrechnung",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Prozentrechnung",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Prozentrechnung auf Alltagssituationen anwenden (Rabatt, Skonto, Mehrwertsteuer, Brutto/Netto)",
            "Mit einem Schema den Verkaufspreis berechnen (Nettoverkaufspreis, MwSt., Bruttoverkaufspreis)",
            "Prozentangaben in Säulen-, Balken-, Streifen- und Kreisdiagrammen darstellen",
            "Diagramme kritisch bewerten, auch auf mögliche Manipulation hin prüfen",
            "Promille-Aufgaben aus dem Alltag (Versicherung, Alkohol, Medikamente) mit Prozentrechnung lösen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Quadratzahlen und Quadratwurzeln",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Quadratzahlen und Quadratwurzeln",
          zeitraum: "ca. Oktober/November",
          ziele: [
            "Quadrieren und Wurzelziehen als Umkehroperationen erklären (Zusammenhang Seitenlänge – Flächeninhalt)",
            "Quadrate berechnen und Quadratwurzeln mit dem Taschenrechner näherungsweise bestimmen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Geometrische Figuren, Körper und Lagebeziehungen",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Geometrische Figuren, Körper und Lagebeziehungen",
          zeitraum: "ca. November/Dezember",
          ziele: [
            "Kreise mit dem Zirkel zeichnen, Radius und Durchmesser korrekt benennen",
            "Umfang und Durchmesser messen, π ≈ 3,14 herleiten und die Umfangsformel anwenden",
            "Umfänge zusammengesetzter Figuren mit Halb- und Viertelkreisen berechnen",
            "Eigenschaften von Zylindern an Alltagsgegenständen und Modellen beschreiben",
            "Zylindernetze und Schrägbilder zeichnen, beschriften und Fehler erkennen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Flächeninhalt – Kreise",
      zeitraum: "ca. Januar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Flächeninhalt – Kreise",
          zeitraum: "ca. Januar",
          ziele: [
            "Die Kreisflächenformel anschaulich begründen (z. B. über Einheitsquadrate oder Sektoren)",
            "Kreisflächen in Alltagsaufgaben berechnen, auch Umkehraufgaben mit Quadratwurzel",
            "Flächeninhalte zusammengesetzter Figuren berechnen, auch berufsbezogen",
            "Oberflächenformel für Zylinder über Netz oder Schrägbild begründen und anwenden"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Rauminhalt – Zylinder",
      zeitraum: "ca. Februar",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Rauminhalt – Zylinder",
          zeitraum: "ca. Februar",
          ziele: [
            "Volumen von Zylindern und Prismen über die Formel V = G · h beschreiben",
            "Volumen von Zylindern und zusammengesetzten Körpern berechnen, auch berufsbezogen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Zufallsexperimente",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Zufallsexperimente",
          zeitraum: "ca. März/April",
          ziele: [
            "Zufallsexperimente (Würfel, Münze, Glücksrad, Reißnagel) durchführen und Ergebnisse notieren",
            "Mit Ergebnislisten und Diagrammen absolute Häufigkeiten auswerten",
            "Relative Häufigkeiten berechnen und als Bruch, Prozent oder Diagramm darstellen",
            "Das Gesetz der großen Zahlen beschreiben und begründen",
            "Gewinnchancen bei einstufigen Zufallsexperimenten begründet einschätzen",
            "Ergebnisse verschiedener Versuchsbedingungen vergleichen und bewerten"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Gleichungen",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Gleichungen",
          zeitraum: "ca. Mai",
          ziele: [
            "Gleichungen mit einer Variablen zu Alltagssituationen mit rationalen Zahlen aufstellen",
            "Terme mit rationalen Zahlen mit Rechengesetzen vereinfachen und begründet auswerten",
            "Gleichungen mit Klammern und mehrfach vorkommender Variable lösen, Probe machen",
            "Aus einer Lösung und den Umformungsschritten die ursprüngliche Gleichung erschließen",
            "Sachaufgaben in Gleichungen übersetzen, lösen und das Ergebnis im Kontext prüfen"
          ]
        }
      ]
    },
    {
      id: "lb8",
      titel: "Funktionale Zusammenhänge",
      zeitraum: "ca. Juni/Juli",
      teilbereiche: [
        {
          id: "lb8-1",
          titel: "Funktionale Zusammenhänge",
          zeitraum: "ca. Juni/Juli",
          ziele: [
            "Zusammenhänge in Alltagssituationen als nichtlinear, linear oder proportional einordnen",
            "Zwischen Kontext, Tabelle und Graph wechseln und die passende Darstellung wählen",
            "Denselben Zusammenhang in unterschiedlichen Maßstäben darstellen und bewerten"
          ]
        }
      ]
    }
  ]
};
