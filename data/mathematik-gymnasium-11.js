// Inhalt: LehrplanPLUS Bayern, Gymnasium, Mathematik, Jahrgangsstufe 11
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/mathematik
const LEHRPLAN_MATHE_GY_11 = {
  fach: "Mathematik",
  klasse: "11",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/mathematik",
  hinweis: "Dieser Fachlehrplan für die Jahrgangsstufe 11 ist bereits veröffentlicht und bildet (noch) keine Aufteilung in grundlegendes/erhöhtes Anforderungsniveau ab. Er gehört zur neuen gymnasialen Oberstufe im Zuge der Rückkehr zum neunjährigen Gymnasium (G9); der erste G9-Jahrgang befindet sich jedoch erst in der 6. Klasse und wird diese Jahrgangsstufe erst in einigen Jahren erreichen (Stand: Recherche November 2026). Die Inhalte können sich bis dahin noch ändern.",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Spezielle Eigenschaften von Funktionen",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Spezielle Eigenschaften von Funktionen",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Charakteristische Funktionstypen und ihre Graphen beschreiben",
            "Grenzverhalten für x → ±∞ erläutern (Konvergenz/Divergenz)",
            "Achsen- und Punktsymmetrie rechnerisch prüfen",
            "Verschiebung, Streckung und Spiegelung von Graphen beschreiben",
            "Stetige von unstetigen (abschnittsweise definierten) Graphen unterscheiden"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Gebrochen-rationale Funktionen – Grenzwerte und Asymptoten",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Gebrochen-rationale Funktionen – Grenzwerte und Asymptoten",
          zeitraum: "ca. Oktober/November",
          ziele: [
            "Definitionsmenge und Nullstellen bestimmen",
            "Waagrechte und schräge Asymptoten bestimmen",
            "Senkrechte Asymptoten an Polstellen bestimmen",
            "Graphen zeichnen und aus Eigenschaften einen passenden Term ableiten"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Bedingte Wahrscheinlichkeit und stochastische Unabhängigkeit",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Bedingte Wahrscheinlichkeit und stochastische Unabhängigkeit",
          zeitraum: "ca. November/Dezember",
          ziele: [
            "Bedingte Wahrscheinlichkeiten mit Baumdiagrammen und Vierfeldertafeln bestimmen",
            "P_B(A), P_A(B) und P(A∩B) unterscheiden (z. B. bei medizinischen Tests)",
            "Stochastische Unabhängigkeit an Beispielen prüfen",
            "Korrelation und Kausalität kritisch unterscheiden"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Grundlagen der Differentialrechnung",
      zeitraum: "ca. Dezember bis März",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Lokales und globales Differenzieren",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Differenzenquotient als Sekantensteigung deuten",
            "Differentialquotient als Tangentensteigung verstehen",
            "Ableitungsfunktion aus dem Graphen einer Funktion skizzieren",
            "Ganzrationale Funktionen mit Faktor- und Summenregel ableiten",
            "Tangentengleichung aufstellen"
          ]
        },
        {
          id: "lb4-2",
          titel: "Anwendung der Differentialrechnung bei ganzrationalen Funktionen",
          zeitraum: "ca. Februar/März",
          ziele: [
            "Mit der 1. Ableitung Monotonie und Extremstellen bestimmen",
            "Mit der 2. Ableitung Krümmung und Wendestellen bestimmen",
            "Notwendige und hinreichende Bedingungen für Extrem-/Wendestellen unterscheiden",
            "Funktionen umfassend untersuchen (Kurvendiskussion)",
            "Nullstellen näherungsweise mit dem Newton-Verfahren bestimmen"
          ]
        }
      ]
    }
  ]
};
