// Zentrales Register: welche Schularten, Klassenstufen und Fächer es gibt,
// und wo die jeweiligen Lehrplan-Daten liegen. Neue Fächer/Klassenstufen
// werden hier eingetragen, sobald eigene Daten-Dateien dafür existieren.

const CURRICULA = {
  schularten: [
    { id: "grundschule", label: "Grundschule" },
    { id: "mittelschule", label: "Mittelschule" },
    { id: "realschule", label: "Realschule" },
    { id: "gymnasium", label: "Gymnasium" }
  ],

  // Klassenstufen je Schulart. Bei der Grundschule sind 1./2. und 3./4.
  // im LehrplanPLUS jeweils gemeinsame Fachlehrpläne, daher hier zusammen
  // als ein Auswahlpunkt. Mittelschule: Regelfall bis 9. Klasse (M10 als
  // eigener Zweig wird hier bewusst nicht separat abgebildet). Realschule:
  // bis 10. Klasse. Gymnasium (Bayern, 9-jährig): bis 13. Klasse.
  klassenstufen: {
    grundschule: [
      { id: "1-2", label: "1./2. Klasse" },
      { id: "3-4", label: "3./4. Klasse" }
    ],
    mittelschule: [
      { id: "5", label: "5. Klasse" },
      { id: "6", label: "6. Klasse" },
      { id: "7", label: "7. Klasse" },
      { id: "8", label: "8. Klasse" },
      { id: "9", label: "9. Klasse" }
    ],
    realschule: [
      { id: "5", label: "5. Klasse" },
      { id: "6", label: "6. Klasse" },
      { id: "7", label: "7. Klasse" },
      { id: "8", label: "8. Klasse" },
      { id: "9", label: "9. Klasse" },
      { id: "10", label: "10. Klasse" }
    ],
    gymnasium: [
      { id: "5", label: "5. Klasse" },
      { id: "6", label: "6. Klasse" },
      { id: "7", label: "7. Klasse" },
      { id: "8", label: "8. Klasse" },
      { id: "9", label: "9. Klasse" },
      { id: "10", label: "10. Klasse" },
      { id: "11", label: "11. Klasse" },
      { id: "12", label: "12. Klasse" },
      { id: "13", label: "13. Klasse" }
    ]
  },

  // faecher[schulart][klassenstufe] = { fachId: { label, lehrplan, arbeitsblaetter } }
  faecher: {
    grundschule: {
      "1-2": {
        mathematik: {
          label: "Mathematik",
          lehrplan: LEHRPLAN_MATHE_1_2,
          arbeitsblaetter: []
        }
      },
      "3-4": {
        mathematik: {
          label: "Mathematik",
          lehrplan: LEHRPLAN_MATHE_4,
          arbeitsblaetter: ARBEITSBLAETTER_MATHE_4
        }
      }
    },
    mittelschule: {
      "5": { mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_MS_5, arbeitsblaetter: [] } },
      "6": { mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_MS_6, arbeitsblaetter: [] } },
      "7": { mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_MS_7, arbeitsblaetter: [] } },
      "8": { mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_MS_8, arbeitsblaetter: [] } },
      "9": { mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_MS_9, arbeitsblaetter: [] } }
    },
    realschule: {
      "5": { mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_RS_5, arbeitsblaetter: [] } },
      "6": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_RS_6, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_RS_6, arbeitsblaetter: [] }
      },
      "7": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_RS_7, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_RS_7, arbeitsblaetter: [] }
      },
      "8": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_RS_8, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_RS_8, arbeitsblaetter: [] }
      },
      "9": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_RS_9, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_RS_9, arbeitsblaetter: [] }
      },
      "10": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_RS_10, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_RS_10, arbeitsblaetter: [] }
      }
    },
    gymnasium: {
      "5": { mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_5, arbeitsblaetter: [] } },
      "6": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_6, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_6, arbeitsblaetter: [] }
      },
      "7": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_7, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_7, arbeitsblaetter: [] }
      },
      "8": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_8, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_8, arbeitsblaetter: [] }
      },
      "9": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_9, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_9, arbeitsblaetter: [] }
      },
      "10": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_10, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_10, arbeitsblaetter: [] }
      },
      "11": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_11, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_11, arbeitsblaetter: [] }
      },
      "12": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_12, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_12, arbeitsblaetter: [] }
      },
      "13": {
        mathematik: { label: "Mathematik", lehrplan: LEHRPLAN_MATHE_GY_13, arbeitsblaetter: [] },
        geschichte: { label: "Geschichte", lehrplan: LEHRPLAN_GESCHICHTE_GY_13, arbeitsblaetter: [] }
      }
    }
  }
};

function getFaecher(schulart, klassenstufe) {
  return (CURRICULA.faecher[schulart] && CURRICULA.faecher[schulart][klassenstufe]) || {};
}
