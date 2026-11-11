// Zentrales Register: welche Schularten, Klassenstufen und Fächer es gibt,
// und wo die jeweiligen Lehrplan-Daten liegen. Neue Fächer/Klassenstufen
// werden hier eingetragen, sobald eigene Daten-Dateien dafür existieren.

const CURRICULA = {
  schularten: [
    { id: "grundschule", label: "Grundschule" },
    { id: "gymnasium", label: "Gymnasium" }
  ],

  klassenstufen: {
    grundschule: [
      { id: "1", label: "1. Klasse" },
      { id: "2", label: "2. Klasse" },
      { id: "3-4", label: "3./4. Klasse" }
    ],
    gymnasium: [
      { id: "5", label: "5. Klasse" },
      { id: "6", label: "6. Klasse" },
      { id: "7", label: "7. Klasse" },
      { id: "8", label: "8. Klasse" },
      { id: "9", label: "9. Klasse" },
      { id: "10", label: "10. Klasse" },
      { id: "11", label: "11. Klasse" },
      { id: "12", label: "12. Klasse" }
    ]
  },

  // faecher[schulart][klassenstufe] = { fachId: { label, lehrplan, arbeitsblaetter } }
  faecher: {
    grundschule: {
      "3-4": {
        mathematik: {
          label: "Mathematik",
          lehrplan: LEHRPLAN_MATHE_4,
          arbeitsblaetter: ARBEITSBLAETTER_MATHE_4
        }
      }
    }
  }
};

function getFaecher(schulart, klassenstufe) {
  return (CURRICULA.faecher[schulart] && CURRICULA.faecher[schulart][klassenstufe]) || {};
}
