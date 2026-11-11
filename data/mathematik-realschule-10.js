// Inhalt: LehrplanPLUS Bayern, Realschule, Mathematik, Jahrgangsstufe 10
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/10/mathematik/wpfg1
// Hinweis: Ab Jahrgangsstufe 7 gibt es an der Realschule Wahlpflichtfächergruppen
// (I/II/III). Diese Datei bildet die Inhalte der Gruppe I (mathematisch-
// naturwissenschaftlicher Zweig) ab. Für Gruppe II/III existiert ein eigener
// Fachlehrplan (.../fachlehrplan/realschule/10/mathematik/wpfg2-3), der z. B.
// bei Trigonometrie und den Funktionstypen weniger weit geht - siehe
// Abschlussbericht.
// Hinweis zu "zeitraum": grobe Schätzung anhand der im Lehrplan genannten
// Ca.-Stundenangaben (ca. 4 Std./Woche Mathematik, Schuljahr ca. Mitte
// September bis Ende Juli). Nur ein ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_MATHE_RS_10 = {
  fach: "Mathematik",
  klasse: "10",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/10/mathematik/wpfg1",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Trigonometrie",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Trigonometrie",
          ziele: [
            "Sinus, Kosinus und Tangens am Einheitskreis veranschaulichen",
            "Zusammenhänge sin²α + cos²α = 1 und tanα = sinα / cosα nutzen",
            "Verlauf der Graphen von sin, cos und tan beschreiben (z. B. periodische Vorgänge)",
            "Mit dem Taschenrechner Funktionswerte und Winkel bestimmen",
            "Additionstheoreme zur Vereinfachung trigonometrischer Terme anwenden",
            "Seitenlängen, Winkel und Flächeninhalte in beliebigen Dreiecken mit Sinus- und Kosinussatz berechnen",
            "Aufgaben der ebenen und räumlichen Geometrie mit Dreiecken lösen",
            "Das Skalarprodukt zur Winkelberechnung und Orthogonalitätsprüfung nutzen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Abbildungen",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Abbildungen",
          ziele: [
            "Koordinaten bei Parallelverschiebung, zentrischer Streckung, Achsenspiegelung und Drehung berechnen",
            "Gleichungen von Funktionsgraphen bestimmen, die durch Verschiebung, Streckung oder Spiegelung entstehen",
            "Mehrere Abbildungen hintereinander zur Lösung geometrischer Aufgaben nutzen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Potenzen und Potenzfunktionen",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Potenzen und Potenzfunktionen",
          ziele: [
            "Potenzen mit rationalen Exponenten berechnen und Potenzgesetze anwenden",
            "n-te Wurzeln in Potenzschreibweise übertragen und umgekehrt",
            "Gleichungen und Graphen von Potenzfunktionen analysieren (Definitions-/Wertemenge, Asymptoten, Umkehrfunktion)"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Exponentialfunktionen, Logarithmen und Logarithmusfunktionen",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Exponentialfunktionen, Logarithmen und Logarithmusfunktionen",
          ziele: [
            "Logarithmus als Lösung von aˣ = b verstehen und Logarithmensätze nutzen",
            "Gleichungen und Graphen von Exponential- und Logarithmusfunktionen analysieren",
            "Exponentielle Wachstums- und Abklingprozesse analysieren und berechnen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Daten und Zufall",
      zeitraum: "ca. April/Mai",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Daten und Zufall",
          ziele: [
            "Mehrstufige Zufallsexperimente mit Baumdiagrammen veranschaulichen",
            "Pfadregeln anwenden, um Wahrscheinlichkeiten von Ergebnissen oder Ereignissen zu berechnen"
          ]
        }
      ]
    }
  ]
};
