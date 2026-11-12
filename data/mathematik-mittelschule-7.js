// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), Mathematik, Jahrgangsstufe 7
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/7/mathematik/regelklasse
// Zeitschätzung (Feld "zeitraum"): Der Mittelschul-Fachlehrplan nennt
// anders als Realschule/Gymnasium keine Stundenzahl je Lernbereich. Die
// "ca."-Zeiträume sind daher keine offizielle Lehrplan-Angabe, sondern eine
// eigene grobe Schätzung auf Basis der amtlichen Stundentafel (5 Wochen-
// stunden Mathematik in Jgst. 7, Anlage 1 zu § 11 MSO) verteilt nach
// der Anzahl der Lernziele je Themenbereich.
const LEHRPLAN_MATHE_MS_7 = {
  fach: "Mathematik",
  klasse: "7",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/7/mathematik/regelklasse",
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
            "Prozentsätze als vergleichbare Anteile bzw. Hundertstelbrüche verstehen",
            "Prozentsätze zum Vergleich von Anteilen in Sachsituationen nutzen",
            "Grundwert, Prozentwert und Prozentsatz erkennen und die fehlende Größe berechnen",
            "Mit Prozentrechnung einfache funktionale Zusammenhänge beschreiben (\"je mehr, desto …\")",
            "Prozentwert und Prozentsatz bei Mischungen bestimmen",
            "Säulen-, Balken-, Streifen- und Kreisdiagramme auswerten und kritisch bewerten",
            "Prozentrechnung in berufsbezogenen Aufgaben anwenden"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Rationale Zahlen – Rechenregeln",
      zeitraum: "ca. November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Rationale Zahlen – Rechenregeln",
          zeitraum: "ca. November",
          ziele: [
            "Alltagssituationen als Grundrechenarten mit rationalen Zahlen darstellen",
            "Rechenregeln für Addition und Subtraktion rationaler Zahlen herleiten und anwenden",
            "Rechenregeln für Multiplikation und Division rationaler Zahlen herleiten und anwenden",
            "Rechenregeln sicher, überschlagend und vorteilhaft anwenden"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Geometrische Figuren, Körper und Lagebeziehungen",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Geometrische Figuren, Körper und Lagebeziehungen",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Mittelsenkrechte und Senkrechte konstruieren, um Abstände zu bestimmen",
            "Figuren maßstäblich vergrößern und verkleinern, auch im Koordinatensystem",
            "Dreiecke nach Eigenschaften einordnen (rechtwinklig, gleichschenklig, gleichseitig)",
            "Dreiecke aus gegebenen Seiten und Winkeln konstruieren (sss, sws, wsw)",
            "Innenwinkelsumme im Dreieck nutzen, um fehlende Winkel zu berechnen",
            "Prismen (Rechteck-, Parallelogramm-, Dreiecksgrundfläche) erkennen und benennen",
            "Prismen als Netz und Schrägbild zeichnen und zwischen den Darstellungen wechseln"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Flächeninhalt – Parallelogramme und Dreiecke",
      zeitraum: "ca. Februar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Flächeninhalt – Parallelogramme und Dreiecke",
          zeitraum: "ca. Februar",
          ziele: [
            "Flächeninhalt von Parallelogrammen durch Zerlegen in Rechtecke erklären",
            "Flächeninhalt von Dreiecken durch Zerlegen oder Ergänzen zu Parallelogrammen erklären",
            "Flächeninhalte von Parallelogrammen, Dreiecken und zusammengesetzten Figuren berechnen",
            "Oberflächeninhalte gerader Dreiecksprismen berechnen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Rauminhalt – gerade Prismen",
      zeitraum: "ca. März",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Rauminhalt – gerade Prismen",
          zeitraum: "ca. März",
          ziele: [
            "Volumenberechnung gerader Prismen anschaulich erklären",
            "Volumen von Prismen und zusammengesetzten Körpern berechnen, auch berufsbezogen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Diagramme und statistische Kennwerte",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Diagramme und statistische Kennwerte",
          zeitraum: "ca. März/April",
          ziele: [
            "Daten in Text, Tabelle und Diagramm darstellen und die passende Form begründen",
            "Manipulative bzw. irreführende Darstellungen erkennen",
            "Qualität von Datenerhebungen beurteilen (z. B. Stichprobengröße, Skalierung)",
            "Spannweite und Zentralwert neben dem arithmetischen Mittel nutzen und begründen"
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
            "Terme aus Sachsituationen aufstellen und mit Rechengesetzen vereinfachen",
            "Werte von Termen mit einer Variablen durch Einsetzen berechnen",
            "Sachsituationen mit Gleichungen darstellen und durch Probieren lösen",
            "Gleichungsbegriff und Äquivalenzumformungen an einem Modell (z. B. Balkenwaage) erklären",
            "Gleichungen der Form ax + b = c lösen, Probe machen, Fehler erkennen und korrigieren"
          ]
        }
      ]
    },
    {
      id: "lb8",
      titel: "Proportionalität",
      zeitraum: "ca. Juni/Juli",
      teilbereiche: [
        {
          id: "lb8-1",
          titel: "Proportionalität",
          zeitraum: "ca. Juni/Juli",
          ziele: [
            "Zuordnungen im Alltag erkennen und in Worten, Tabellen, Diagrammen und Graphen darstellen",
            "Lineare und nichtlineare Zusammenhänge unterscheiden",
            "Wertepaare bei proportionalen Zuordnungen mit dem Dreisatz ergänzen",
            "Eigenschaften proportionaler Zuordnungen in Sachzusammenhängen nutzen und Ergebnisse prüfen"
          ]
        }
      ]
    }
  ]
};
