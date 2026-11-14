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
const ARBEITSBLAETTER_MATHE_4 = [
  // lb1-1, Ziel 1: "Sich im Zahlenraum bis zur Million orientieren ..."
  {
    titel: "Einführung: Orientierung im Zahlenraum bis zur Million",
    typ: "einfuehrung",
    tb: "lb1-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-1-z1-einfuehrung.pdf"
  },
  {
    titel: "Üben: Orientierung im Zahlenraum bis zur Million",
    typ: "uebung",
    tb: "lb1-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-1-z1-uebung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Orientierung im Zahlenraum bis zur Million",
    typ: "experte",
    tb: "lb1-1",
    zi: 0,
    datei: "arbeitsblaetter/mathe4-lb1-1-z1-experte.pdf"
  }
];
