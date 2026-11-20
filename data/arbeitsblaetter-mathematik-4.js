// Arbeitsblätter für Mathematik Klasse 3/4.
// Arbeitsblätter hängen an einem einzelnen Lernziel, nicht am ganzen Thema:
// "tb" ist die ID des Teilbereichs (aus mathematik-4.js, z. B. "lb1-1"),
// "zi" ist der Index (0-basiert!) des Lernziels in dessen ziele-Array.
// Auf der Website erscheinen sie, wenn man das jeweilige Lernziel anklickt.
// typ steuert Reihenfolge/Badge-Farbe: "einfuehrung" | "uebung" | "experte".
//
// Pro Lernziel gibt es ein Dreier-Set: Einführungsblatt, Übungsblatt
// (einfach bis mittelschwer) und Expertenblatt. Erzeugt mit einem
// HTML->PDF-Generator (Playwright), Design an die Website-Farbpalette
// angelehnt; die Generator-Quelle liegt nicht im Repo, nur die fertigen PDFs.
//
// Deckt alle 47 Lernziele von Mathematik 3./4. Klasse ab (lb1-lb4, vollständig).
const ARBEITSBLAETTER_MATHE_4 = [

  // lb1-1: Zahlen darstellen & vergleichen
  // Lernziel 1
  {
    titel: "Einführung: Orientierung im Zahlenraum bis zur Million",
    typ: "einfuehrung",
    tb: "lb1-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-1-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Orientierung im Zahlenraum bis zur Million",
    typ: "uebung",
    tb: "lb1-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-1-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Orientierung im Zahlenraum bis zur Million",
    typ: "experte",
    tb: "lb1-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-1-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Zahlen ordnen und vergleichen",
    typ: "einfuehrung",
    tb: "lb1-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-1-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Zahlen ordnen und vergleichen",
    typ: "uebung",
    tb: "lb1-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-1-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Zahlen ordnen und vergleichen",
    typ: "experte",
    tb: "lb1-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-1-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Das Stellenwertsystem nutzen",
    typ: "einfuehrung",
    tb: "lb1-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-1-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Das Stellenwertsystem nutzen",
    typ: "uebung",
    tb: "lb1-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-1-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Das Stellenwertsystem nutzen",
    typ: "experte",
    tb: "lb1-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-1-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Zahlen zerlegen und zusammensetzen",
    typ: "einfuehrung",
    tb: "lb1-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-1-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Zahlen zerlegen und zusammensetzen",
    typ: "uebung",
    tb: "lb1-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-1-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Zahlen zerlegen und zusammensetzen",
    typ: "experte",
    tb: "lb1-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-1-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z4-experte-loesung.pdf"
  },
  // Lernziel 5
  {
    titel: "Einführung: Anzahlen schätzen und begründen",
    typ: "einfuehrung",
    tb: "lb1-1",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-1-z5-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z5-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Anzahlen schätzen und begründen",
    typ: "uebung",
    tb: "lb1-1",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-1-z5-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z5-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Anzahlen schätzen und begründen",
    typ: "experte",
    tb: "lb1-1",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-1-z5-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-1-z5-experte-loesung.pdf"
  },

  // lb1-2: Rechnen im großen Zahlenraum
  // Lernziel 1
  {
    titel: "Einführung: Kleines Einmaleins und Umkehraufgaben",
    typ: "einfuehrung",
    tb: "lb1-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-2-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Kleines Einmaleins und Umkehraufgaben",
    typ: "uebung",
    tb: "lb1-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-2-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Kleines Einmaleins und Umkehraufgaben",
    typ: "experte",
    tb: "lb1-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-2-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Die vier Grundrechenarten bis zur Million",
    typ: "einfuehrung",
    tb: "lb1-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-2-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Die vier Grundrechenarten bis zur Million",
    typ: "uebung",
    tb: "lb1-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-2-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Die vier Grundrechenarten bis zur Million",
    typ: "experte",
    tb: "lb1-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-2-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Schriftliche Rechenverfahren",
    typ: "einfuehrung",
    tb: "lb1-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-2-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Schriftliche Rechenverfahren",
    typ: "uebung",
    tb: "lb1-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-2-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Schriftliche Rechenverfahren",
    typ: "experte",
    tb: "lb1-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-2-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Rechenwege erklären und vergleichen",
    typ: "einfuehrung",
    tb: "lb1-2",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-2-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Rechenwege erklären und vergleichen",
    typ: "uebung",
    tb: "lb1-2",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-2-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Rechenwege erklären und vergleichen",
    typ: "experte",
    tb: "lb1-2",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-2-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z4-experte-loesung.pdf"
  },
  // Lernziel 5
  {
    titel: "Einführung: Überschlag und Plausibilität",
    typ: "einfuehrung",
    tb: "lb1-2",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-2-z5-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z5-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Überschlag und Plausibilität",
    typ: "uebung",
    tb: "lb1-2",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-2-z5-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z5-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Überschlag und Plausibilität",
    typ: "experte",
    tb: "lb1-2",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-2-z5-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z5-experte-loesung.pdf"
  },
  // Lernziel 6
  {
    titel: "Einführung: Arithmetische Muster erkennen",
    typ: "einfuehrung",
    tb: "lb1-2",
    zi: 5,
    datei: "arbeitsblaetter/mathe4-lb1-2-z6-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z6-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Arithmetische Muster erkennen",
    typ: "uebung",
    tb: "lb1-2",
    zi: 5,
    datei: "arbeitsblaetter/mathe4-lb1-2-z6-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z6-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Arithmetische Muster erkennen",
    typ: "experte",
    tb: "lb1-2",
    zi: 5,
    datei: "arbeitsblaetter/mathe4-lb1-2-z6-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-2-z6-experte-loesung.pdf"
  },

  // lb1-3: Sachaufgaben lösen
  // Lernziel 1
  {
    titel: "Einführung: Infos aus Texten, Tabellen und Diagrammen nutzen",
    typ: "einfuehrung",
    tb: "lb1-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-3-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Infos aus Texten, Tabellen und Diagrammen nutzen",
    typ: "uebung",
    tb: "lb1-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-3-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Infos aus Texten, Tabellen und Diagrammen nutzen",
    typ: "experte",
    tb: "lb1-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-3-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Lösungswege mit Skizzen und Tabellen darstellen",
    typ: "einfuehrung",
    tb: "lb1-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-3-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Lösungswege mit Skizzen und Tabellen darstellen",
    typ: "uebung",
    tb: "lb1-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-3-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Lösungswege mit Skizzen und Tabellen darstellen",
    typ: "experte",
    tb: "lb1-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb1-3-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Vorwärts- und Rückwärtsarbeiten",
    typ: "einfuehrung",
    tb: "lb1-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-3-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Vorwärts- und Rückwärtsarbeiten",
    typ: "uebung",
    tb: "lb1-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-3-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Vorwärts- und Rückwärtsarbeiten",
    typ: "experte",
    tb: "lb1-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb1-3-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Genaues Ergebnis oder Überschlag?",
    typ: "einfuehrung",
    tb: "lb1-3",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-3-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Genaues Ergebnis oder Überschlag?",
    typ: "uebung",
    tb: "lb1-3",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-3-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Genaues Ergebnis oder Überschlag?",
    typ: "experte",
    tb: "lb1-3",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb1-3-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z4-experte-loesung.pdf"
  },
  // Lernziel 5
  {
    titel: "Einführung: Kombinatorik – Möglichkeiten systematisch bestimmen",
    typ: "einfuehrung",
    tb: "lb1-3",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-3-z5-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z5-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Kombinatorik – Möglichkeiten systematisch bestimmen",
    typ: "uebung",
    tb: "lb1-3",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-3-z5-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z5-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Kombinatorik – Möglichkeiten systematisch bestimmen",
    typ: "experte",
    tb: "lb1-3",
    zi: 4,
    datei: "arbeitsblaetter/mathe4-lb1-3-z5-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb1-3-z5-experte-loesung.pdf"
  },

  // lb2-1: Sich im Raum orientieren
  // Lernziel 1
  {
    titel: "Einführung: Lagepläne erstellen und nutzen",
    typ: "einfuehrung",
    tb: "lb2-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-1-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Lagepläne erstellen und nutzen",
    typ: "uebung",
    tb: "lb2-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-1-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Lagepläne erstellen und nutzen",
    typ: "experte",
    tb: "lb2-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-1-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Maßstab – echte Länge und Plan-Länge",
    typ: "einfuehrung",
    tb: "lb2-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-1-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Maßstab – echte Länge und Plan-Länge",
    typ: "uebung",
    tb: "lb2-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-1-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Maßstab – echte Länge und Plan-Länge",
    typ: "experte",
    tb: "lb2-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-1-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: 2D-Pläne und 3D-Würfelgebäude verbinden",
    typ: "einfuehrung",
    tb: "lb2-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-1-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: 2D-Pläne und 3D-Würfelgebäude verbinden",
    typ: "uebung",
    tb: "lb2-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-1-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: 2D-Pläne und 3D-Würfelgebäude verbinden",
    typ: "experte",
    tb: "lb2-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-1-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Figuren und Körper – kippen, falten, Netze",
    typ: "einfuehrung",
    tb: "lb2-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb2-1-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Figuren und Körper – kippen, falten, Netze",
    typ: "uebung",
    tb: "lb2-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb2-1-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Figuren und Körper – kippen, falten, Netze",
    typ: "experte",
    tb: "lb2-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb2-1-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-1-z4-experte-loesung.pdf"
  },

  // lb2-2: Figuren benennen & darstellen
  // Lernziel 1
  {
    titel: "Einführung: Rechte Winkel erkennen",
    typ: "einfuehrung",
    tb: "lb2-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-2-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Rechte Winkel erkennen",
    typ: "uebung",
    tb: "lb2-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-2-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Rechte Winkel erkennen",
    typ: "experte",
    tb: "lb2-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-2-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Würfel und Quader vergleichen",
    typ: "einfuehrung",
    tb: "lb2-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-2-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Würfel und Quader vergleichen",
    typ: "uebung",
    tb: "lb2-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-2-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Würfel und Quader vergleichen",
    typ: "experte",
    tb: "lb2-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-2-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Netze von Würfeln und Quadern",
    typ: "einfuehrung",
    tb: "lb2-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-2-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Netze von Würfeln und Quadern",
    typ: "uebung",
    tb: "lb2-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-2-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Netze von Würfeln und Quadern",
    typ: "experte",
    tb: "lb2-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-2-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Strecken und Flächen zeichnen",
    typ: "einfuehrung",
    tb: "lb2-2",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb2-2-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Strecken und Flächen zeichnen",
    typ: "uebung",
    tb: "lb2-2",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb2-2-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Strecken und Flächen zeichnen",
    typ: "experte",
    tb: "lb2-2",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb2-2-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-2-z4-experte-loesung.pdf"
  },

  // lb2-3: Geometrische Abbildungen
  // Lernziel 1
  {
    titel: "Einführung: Figuren maßstäblich vergrößern und verkleinern",
    typ: "einfuehrung",
    tb: "lb2-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-3-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Figuren maßstäblich vergrößern und verkleinern",
    typ: "uebung",
    tb: "lb2-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-3-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Figuren maßstäblich vergrößern und verkleinern",
    typ: "experte",
    tb: "lb2-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-3-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Achsensymmetrische Figuren erkennen und beschreiben",
    typ: "einfuehrung",
    tb: "lb2-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-3-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Achsensymmetrische Figuren erkennen und beschreiben",
    typ: "uebung",
    tb: "lb2-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-3-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Achsensymmetrische Figuren erkennen und beschreiben",
    typ: "experte",
    tb: "lb2-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-3-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Symmetrieachsen einzeichnen und Spiegelbilder erzeugen",
    typ: "einfuehrung",
    tb: "lb2-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-3-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Symmetrieachsen einzeichnen und Spiegelbilder erzeugen",
    typ: "uebung",
    tb: "lb2-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-3-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Symmetrieachsen einzeichnen und Spiegelbilder erzeugen",
    typ: "experte",
    tb: "lb2-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb2-3-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-3-z3-experte-loesung.pdf"
  },

  // lb2-4: Geometrische Muster
  // Lernziel 1
  {
    titel: "Einführung: Parkettierungen erstellen und Regeln beschreiben",
    typ: "einfuehrung",
    tb: "lb2-4",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-4-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-4-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Parkettierungen erstellen und Regeln beschreiben",
    typ: "uebung",
    tb: "lb2-4",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-4-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-4-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Parkettierungen erstellen und Regeln beschreiben",
    typ: "experte",
    tb: "lb2-4",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-4-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-4-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Gesetzmäßigkeiten in Bandornamenten erkennen und fortsetzen",
    typ: "einfuehrung",
    tb: "lb2-4",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-4-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-4-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Gesetzmäßigkeiten in Bandornamenten erkennen und fortsetzen",
    typ: "uebung",
    tb: "lb2-4",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-4-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-4-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Gesetzmäßigkeiten in Bandornamenten erkennen und fortsetzen",
    typ: "experte",
    tb: "lb2-4",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb2-4-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-4-z2-experte-loesung.pdf"
  },

  // lb2-5: Rauminhalte
  // Lernziel 1
  {
    titel: "Einführung: Rauminhalte durch Bauen und Auszählen von Einheitswürfeln vergleichen",
    typ: "einfuehrung",
    tb: "lb2-5",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-5-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-5-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Rauminhalte durch Bauen und Auszählen von Einheitswürfeln vergleichen",
    typ: "uebung",
    tb: "lb2-5",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-5-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb2-5-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Rauminhalte durch Bauen und Auszählen von Einheitswürfeln vergleichen",
    typ: "experte",
    tb: "lb2-5",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb2-5-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb2-5-z1-experte-loesung.pdf"
  },

  // lb3-1: Messhandlungen durchführen
  // Lernziel 1
  {
    titel: "Einführung: Größen messen",
    typ: "einfuehrung",
    tb: "lb3-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-1-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Größen messen",
    typ: "uebung",
    tb: "lb3-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-1-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Größen messen",
    typ: "experte",
    tb: "lb3-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-1-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Passende Messgeräte nutzen",
    typ: "einfuehrung",
    tb: "lb3-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-1-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Passende Messgeräte nutzen",
    typ: "uebung",
    tb: "lb3-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-1-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Passende Messgeräte nutzen",
    typ: "experte",
    tb: "lb3-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-1-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Einheiten umwandeln, Geld wechseln",
    typ: "einfuehrung",
    tb: "lb3-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-1-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Einheiten umwandeln, Geld wechseln",
    typ: "uebung",
    tb: "lb3-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-1-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Einheiten umwandeln, Geld wechseln",
    typ: "experte",
    tb: "lb3-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-1-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Zeitspannen berechnen",
    typ: "einfuehrung",
    tb: "lb3-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb3-1-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Zeitspannen berechnen",
    typ: "uebung",
    tb: "lb3-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb3-1-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Zeitspannen berechnen",
    typ: "experte",
    tb: "lb3-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb3-1-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-1-z4-experte-loesung.pdf"
  },

  // lb3-2: Größenvorstellungen nutzen
  // Lernziel 1
  {
    titel: "Einführung: Größen schätzen",
    typ: "einfuehrung",
    tb: "lb3-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-2-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Größen schätzen",
    typ: "uebung",
    tb: "lb3-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-2-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Größen schätzen",
    typ: "experte",
    tb: "lb3-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-2-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Größen vergleichen und ordnen",
    typ: "einfuehrung",
    tb: "lb3-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-2-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Größen vergleichen und ordnen",
    typ: "uebung",
    tb: "lb3-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-2-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Größen vergleichen und ordnen",
    typ: "experte",
    tb: "lb3-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-2-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Brüche mit Größen",
    typ: "einfuehrung",
    tb: "lb3-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-2-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Brüche mit Größen",
    typ: "uebung",
    tb: "lb3-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-2-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Brüche mit Größen",
    typ: "experte",
    tb: "lb3-2",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-2-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-2-z3-experte-loesung.pdf"
  },

  // lb3-3: Größen in Sachsituationen
  // Lernziel 1
  {
    titel: "Einführung: Größen aus Texten/Tabellen entnehmen",
    typ: "einfuehrung",
    tb: "lb3-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-3-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Größen aus Texten/Tabellen entnehmen",
    typ: "uebung",
    tb: "lb3-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-3-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Größen aus Texten/Tabellen entnehmen",
    typ: "experte",
    tb: "lb3-3",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb3-3-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Sachaufgaben mit Größen",
    typ: "einfuehrung",
    tb: "lb3-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-3-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Sachaufgaben mit Größen",
    typ: "uebung",
    tb: "lb3-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-3-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Sachaufgaben mit Größen",
    typ: "experte",
    tb: "lb3-3",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb3-3-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Exakt oder Überschlag?",
    typ: "einfuehrung",
    tb: "lb3-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-3-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Exakt oder Überschlag?",
    typ: "uebung",
    tb: "lb3-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-3-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Exakt oder Überschlag?",
    typ: "experte",
    tb: "lb3-3",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb3-3-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Funktionale Zusammenhänge",
    typ: "einfuehrung",
    tb: "lb3-3",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb3-3-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Funktionale Zusammenhänge",
    typ: "uebung",
    tb: "lb3-3",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb3-3-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Funktionale Zusammenhänge",
    typ: "experte",
    tb: "lb3-3",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb3-3-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb3-3-z4-experte-loesung.pdf"
  },

  // lb4-1: Daten erfassen & darstellen
  // Lernziel 1
  {
    titel: "Einführung: Daten in Tabellen und Diagrammen darstellen",
    typ: "einfuehrung",
    tb: "lb4-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb4-1-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Daten in Tabellen und Diagrammen darstellen",
    typ: "uebung",
    tb: "lb4-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb4-1-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Daten in Tabellen und Diagrammen darstellen",
    typ: "experte",
    tb: "lb4-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb4-1-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Infos aus Fahrplänen und Preislisten entnehmen",
    typ: "einfuehrung",
    tb: "lb4-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb4-1-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Infos aus Fahrplänen und Preislisten entnehmen",
    typ: "uebung",
    tb: "lb4-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb4-1-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Infos aus Fahrplänen und Preislisten entnehmen",
    typ: "experte",
    tb: "lb4-1",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb4-1-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z2-experte-loesung.pdf"
  },
  // Lernziel 3
  {
    titel: "Einführung: Fragen zu Diagrammen und Tabellen stellen und beantworten",
    typ: "einfuehrung",
    tb: "lb4-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb4-1-z3-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z3-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Fragen zu Diagrammen und Tabellen stellen und beantworten",
    typ: "uebung",
    tb: "lb4-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb4-1-z3-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z3-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Fragen zu Diagrammen und Tabellen stellen und beantworten",
    typ: "experte",
    tb: "lb4-1",
    zi: 2,
    datei: "arbeitsblaetter/mathe4-lb4-1-z3-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z3-experte-loesung.pdf"
  },
  // Lernziel 4
  {
    titel: "Einführung: Nicht direkt ablesbare Daten berechnen (z. B. Fahrtzeiten)",
    typ: "einfuehrung",
    tb: "lb4-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb4-1-z4-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z4-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Nicht direkt ablesbare Daten berechnen (z. B. Fahrtzeiten)",
    typ: "uebung",
    tb: "lb4-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb4-1-z4-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z4-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Nicht direkt ablesbare Daten berechnen (z. B. Fahrtzeiten)",
    typ: "experte",
    tb: "lb4-1",
    zi: 3,
    datei: "arbeitsblaetter/mathe4-lb4-1-z4-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb4-1-z4-experte-loesung.pdf"
  },

  // lb4-2: Zufallsexperimente
  // Lernziel 1
  {
    titel: "Einführung: Gewinnchancen bei Zufallsexperimenten einschätzen",
    typ: "einfuehrung",
    tb: "lb4-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb4-2-z1-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-2-z1-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Gewinnchancen bei Zufallsexperimenten einschätzen",
    typ: "uebung",
    tb: "lb4-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb4-2-z1-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-2-z1-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Gewinnchancen bei Zufallsexperimenten einschätzen",
    typ: "experte",
    tb: "lb4-2",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb4-2-z1-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb4-2-z1-experte-loesung.pdf"
  },
  // Lernziel 2
  {
    titel: "Einführung: Bedingungen von Zufallsexperimenten verändern und vergleichen",
    typ: "einfuehrung",
    tb: "lb4-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb4-2-z2-einfuehrung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-2-z2-einfuehrung-loesung.pdf"
  },
  {
    titel: "Üben: Bedingungen von Zufallsexperimenten verändern und vergleichen",
    typ: "uebung",
    tb: "lb4-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb4-2-z2-uebung.pdf", loesung: "arbeitsblaetter/mathe4-lb4-2-z2-uebung-loesung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Bedingungen von Zufallsexperimenten verändern und vergleichen",
    typ: "experte",
    tb: "lb4-2",
    zi: 1,
    datei: "arbeitsblaetter/mathe4-lb4-2-z2-experte.pdf", loesung: "arbeitsblaetter/mathe4-lb4-2-z2-experte-loesung.pdf"
  }
];
