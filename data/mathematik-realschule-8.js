// Inhalt: LehrplanPLUS Bayern, Realschule, Mathematik, Jahrgangsstufe 8
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/8/mathematik/wpfg1
// Hinweis: Ab Jahrgangsstufe 7 gibt es an der Realschule Wahlpflichtfächergruppen
// (I/II/III). Diese Datei bildet die Inhalte der Gruppe I (mathematisch-
// naturwissenschaftlicher Zweig) ab. Für die Gruppe II/III existiert ein
// eigener Fachlehrplan (.../fachlehrplan/realschule/8/mathematik/wpfg2-3) mit
// teils anderer Gewichtung - siehe Abschlussbericht.
// Hinweis zu "zeitraum": grobe Schätzung anhand der im Lehrplan genannten
// Ca.-Stundenangaben (ca. 4 Std./Woche Mathematik, Schuljahr ca. Mitte
// September bis Ende Juli). Nur ein ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_MATHE_RS_8 = {
  fach: "Mathematik",
  klasse: "8",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/8/mathematik/wpfg1",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Vierecke",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Vierecke",
          ziele: [
            "Trapez, Drachenviereck, Parallelogramm, Raute, Rechteck und Quadrat an ihren Eigenschaften unterscheiden",
            "Vierecke konstruieren, auch mit Geometriesoftware, und ihre Eigenschaften zum Lösen von Aufgaben nutzen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Drehung",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Drehung",
          ziele: [
            "Drehung als Kongruenzabbildung erkennen und ihre Eigenschaften beschreiben",
            "Punktspiegelung als Sonderfall der Drehung erkennen",
            "Punkte und Figuren drehen und damit Probleme lösen, ggf. mit Geometriesoftware",
            "Dreh- und punktsymmetrische Figuren aus Alltag, Natur und Kunst untersuchen",
            "Vektoren um 90° und 180° drehen und damit Punktkoordinaten berechnen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Raumgeometrie",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Raumgeometrie",
          ziele: [
            "Symmetrische Körper erkennen und Symmetrieebenen, -achsen und -zentren bestimmen",
            "Axialschnitte von Rotationskörpern zeichnen bzw. skizzieren",
            "Das dreidimensionale Koordinatensystem zur Orientierung im Raum nutzen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Terme, Gleichungen und Ungleichungen",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Terme, Gleichungen und Ungleichungen",
          ziele: [
            "Komplexere Terme vereinfachen, auch mit mehreren Variablen und binomischen Formeln",
            "Extremwerte quadratischer Terme bestimmen, z. B. bei Flächenberechnungen",
            "Lineare Gleichungen und Ungleichungen mit Termen auf beiden Seiten lösen",
            "Gleichungen und Ungleichungen in Text- und Sachaufgaben anwenden"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Bruchterme und Bruchgleichungen",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Bruchterme und Bruchgleichungen",
          ziele: [
            "Terme mit Variablen im Nenner als Bruchterme erkennen",
            "Die Definitionsmenge von Bruchtermen bestimmen",
            "Einfache Bruchgleichungen (Verhältnisgleichungen) lösen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Funktionen",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Funktionen",
          ziele: [
            "Funktionale Zusammenhänge beschreiben und von nicht eindeutigen Zuordnungen unterscheiden",
            "Funktionen durch Gleichung, Term, Graph, Wertetabelle und Text darstellen",
            "Gleichungen der Form y = mx + t als Geraden erkennen und m, t deuten",
            "Graphen linearer Funktionen zeichnen (Steigungsdreieck, y-Achsenabschnitt)",
            "Funktionsgleichung aus Graph oder zwei Punkten bestimmen",
            "Zusammenhang paralleler und orthogonaler Geraden nutzen",
            "Lineare Funktionen in Praxisaufgaben verwenden, Flächen im Koordinatensystem berechnen"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Daten und Zufall",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Daten und Zufall",
          ziele: [
            "Ergebnisse von Zufallsexperimenten darstellen (Baumdiagramm, Vierfeldertafel)",
            "Absolute und relative Häufigkeiten von Ereignissen ermitteln, z. B. um Gewinnchancen einzuschätzen"
          ]
        }
      ]
    }
  ]
};
