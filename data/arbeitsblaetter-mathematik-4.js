// Arbeitsblätter für Mathematik Klasse 3/4.
// Neues Arbeitsblatt hinzufügen: PDF in den Ordner "arbeitsblaetter/" legen,
// dann hier unten ein neues Objekt in die Liste eintragen. lernbereich muss
// zu einer der IDs aus mathematik-4.js passen (lb1, lb2, lb3, lb4).
// typ steuert Reihenfolge/Badge-Farbe: "einfuehrung" | "uebung" | "experte".
//
// Pro Thema (Lernbereich) gibt es ein Dreier-Set: Einführungsblatt,
// Übungsblatt (einfach bis mittelschwer) und Expertenblatt. Erzeugt mit
// einem HTML->PDF-Generator (Playwright), siehe Kommentar in jeder PDF selbst
// nicht enthalten, aber die Quelltexte liegen als Referenz im Projektverlauf.
const ARBEITSBLAETTER_MATHE_4 = [
  {
    titel: "Einführung: Zahlen und Operationen",
    typ: "einfuehrung",
    lernbereich: "lb1",
    datei: "arbeitsblaetter/mathe4-lb1-einfuehrung.pdf"
  },
  {
    titel: "Üben: Zahlen und Operationen",
    typ: "uebung",
    lernbereich: "lb1",
    datei: "arbeitsblaetter/mathe4-lb1-uebung.pdf"
  },
  {
    titel: "Experten-Aufgaben: Zahlen und Operationen",
    typ: "experte",
    lernbereich: "lb1",
    datei: "arbeitsblaetter/mathe4-lb1-experte.pdf"
  }
];
