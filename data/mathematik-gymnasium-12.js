// Inhalt: LehrplanPLUS Bayern, Gymnasium, Mathematik, Jahrgangsstufe 12 (erhöhtes Anforderungsniveau)
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/regulaer
const LEHRPLAN_MATHE_GY_12 = {
  fach: "Mathematik",
  klasse: "12",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/regulaer",
  hinweis: "Die offizielle Seite trägt den Titel 'Fachlehrplan Mathematik 12 (erhöhtes Anforderungsniveau)' – er gilt also für Schüler, die Mathematik vertieft belegen; ein eigener Lehrplan für das grundlegende Anforderungsniveau wurde bei der Recherche nicht gefunden und ist hier nicht erfasst. Dieser Lehrplan gehört zur neuen gymnasialen Oberstufe im Zuge der Rückkehr zum neunjährigen Gymnasium (G9); der erste G9-Jahrgang befindet sich jedoch erst in der 6. Klasse und wird diese Jahrgangsstufe erst in einigen Jahren erreichen (Stand: Recherche November 2026). Die Struktur kann sich bis dahin noch ändern.",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Untersuchung von Funktionen – Stammfunktion, Produkt- und Kettenregel",
      zeitraum: "ca. September bis November",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Ganzrationale Funktionen mit Parametern",
          ziele: [
            "Funktionenscharen mit Methoden der Differentialrechnung untersuchen",
            "Stammfunktionen ganzrationaler Funktionen bestimmen"
          ]
        },
        {
          id: "lb1-2",
          titel: "Natürliche Exponentialfunktion",
          ziele: [
            "e^x als Funktion mit sich selbst als Ableitung verstehen",
            "Verknüpfungen mit ganzrationalen Funktionen mit Produkt- und Kettenregel ableiten",
            "Exponentialgleichungen mit dem natürlichen Logarithmus lösen",
            "Wachstums- und Abklingprozesse modellieren"
          ]
        },
        {
          id: "lb1-3",
          titel: "Sinus- und Kosinusfunktion",
          ziele: [
            "Ableitungen von Sinus und Kosinus graphisch plausibel machen",
            "Einfache Verknüpfungen mit linearen Funktionen untersuchen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Zufallsgrößen und Binomialverteilung",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Zufallsgrößen und Binomialverteilung",
          ziele: [
            "Wahrscheinlichkeitsbegriffe (Laplace, frequentistisch, subjektiv) vergleichen",
            "Erwartungswert, Varianz und Standardabweichung bestimmen und deuten",
            "Sachsituationen auf Urnenmodelle mit/ohne Zurücklegen zurückführen",
            "Bernoulli-Ketten modellieren und die Binomialverteilung anwenden"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Einseitiger Signifikanztest bei binomialverteilten Merkmalen",
      zeitraum: "ca. Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Einseitiger Signifikanztest bei binomialverteilten Merkmalen",
          ziele: [
            "Vorgehen eines einseitigen Signifikanztests an einem Beispiel beschreiben",
            "Fehler 1. Art und Fehler 2. Art berechnen",
            "Ablehnungsbereich bei gegebenem Signifikanzniveau bestimmen",
            "Ergebnisse im Sachkontext deuten (z. B. Wahlumfragen) und Fehlinterpretationen widerlegen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Untersuchung von Funktionen – Quotientenregel, Umkehrfunktion",
      zeitraum: "ca. Dezember bis Februar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Gebrochen-rationale Funktionen",
          ziele: [
            "Gebrochen-rationale Funktionen mit der Quotientenregel ableiten und untersuchen",
            "Verknüpfungen bekannter Funktionstypen untersuchen"
          ]
        },
        {
          id: "lb4-2",
          titel: "Wurzelfunktion",
          ziele: [
            "Umkehrbarkeit über strenge Monotonie begründen",
            "Graphen von Funktion und Umkehrfunktion vergleichen",
            "Potenzfunktionen mit rationalen Exponenten ableiten"
          ]
        },
        {
          id: "lb4-3",
          titel: "Natürliche Logarithmusfunktion",
          ziele: [
            "ln als Umkehrfunktion von e^x verstehen und ihre Ableitung herleiten",
            "Logarithmengesetze zur Untersuchung einfacher Verknüpfungen nutzen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Grundlagen der Koordinatengeometrie im Raum",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Grundlagen der Koordinatengeometrie im Raum",
          ziele: [
            "Punkte, Figuren und Körper im 3D-Koordinatensystem darstellen",
            "Vektoren im Raum addieren, subtrahieren und skalar multiplizieren",
            "Mit dem Skalarprodukt Vektorlängen und Winkel bestimmen",
            "Mit dem Vektorprodukt Flächeninhalte und Volumina berechnen"
          ]
        }
      ]
    }
  ]
};
