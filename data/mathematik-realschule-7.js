// Inhalt: LehrplanPLUS Bayern, Realschule, Mathematik, Jahrgangsstufe 7
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/7/mathematik/wpfg1
// Hinweis: Ab Jahrgangsstufe 7 gibt es an der Realschule Wahlpflichtfächergruppen
// (I/II/III). Diese Datei bildet die Inhalte der Gruppe I (mathematisch-
// naturwissenschaftlicher Zweig) ab, da Mathematik hier die größte Stundenzahl
// und Tiefe hat. In den Gruppen II/III gibt es teils andere Schwerpunkte/
// Kürzungen bei einzelnen Lernbereichen (z. B. etwas andere Gewichtung in
// Geometrie/Algebra) - siehe Abschlussbericht.
// Hinweis zu "zeitraum": grobe Schätzung anhand der im Lehrplan genannten
// Ca.-Stundenangaben (ca. 4 Std./Woche Mathematik, Schuljahr ca. Mitte
// September bis Ende Juli). Nur ein ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_MATHE_RS_7 = {
  fach: "Mathematik",
  klasse: "7",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/7/mathematik/wpfg1",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Potenzen",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Potenzen",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Potenzen mit negativen ganzzahligen Exponenten berechnen",
            "Potenzgesetze geschickt anwenden, besonders bei Termen mit Variablen",
            "Zehnerpotenzen mit positiven und negativen Exponenten nutzen (z. B. für Alltagsgrößen)"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Parallelverschiebung",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Parallelverschiebung",
          zeitraum: "ca. Oktober/November",
          ziele: [
            "Parallelverschiebung als Kongruenzabbildung erkennen und ihre Eigenschaften beschreiben",
            "Punkte und Figuren mit der Abbildungsvorschrift verschieben, auch mit Geometriesoftware",
            "Vektoren addieren und Koordinaten von Punkten berechnen",
            "Flächeninhalte von Dreiecken und Vielecken mit Determinanten berechnen",
            "Winkel an parallelen Geraden bestimmen (Stufen-, Wechsel-, Ergänzungswinkel)",
            "Innenwinkelsumme in Dreieck, Viereck und Vielecken berechnen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Dreiecke",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Dreiecke",
          zeitraum: "ca. November/Dezember",
          ziele: [
            "Existenz von Dreiecken anhand von Seitenlängen und Winkeln prüfen",
            "Dreiecke konstruieren (Zirkel, Geodreieck, Geometriesoftware)",
            "Kongruenzsätze zur Prüfung auf Kongruenz und für Beweise nutzen",
            "Kongruenz zur Begründung geometrischer Aufgaben verwenden"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Raumgeometrie",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Raumgeometrie",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Lage von Geraden und Ebenen im Raum beschreiben (auch Winkel dazwischen)",
            "Schrägbilder von Prismen und Pyramiden zeichnen",
            "Streckenlängen und Winkelmaße aus Schrägbildern ermitteln"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Geometrische Ortslinien und Ortsbereiche",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Geometrische Ortslinien und Ortsbereiche",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Ortslinien zeichnen und ihre Eigenschaften beschreiben (Kreislinie, Mittelsenkrechte, Winkelhalbierende, Thaleskreis)",
            "Lage von Kreis und Gerade unterscheiden, Tangenten konstruieren",
            "Begriffe wie „höchstens“, „mindestens“ zeichnerisch umsetzen und umgekehrt deuten",
            "Umkreis, Inkreis und Schwerpunkt des Dreiecks zur Problemlösung nutzen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Terme, Gleichungen und Ungleichungen",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Terme, Gleichungen und Ungleichungen",
          zeitraum: "ca. Januar/Februar",
          ziele: [
            "Terme zusammenfassen und auf Äquivalenz prüfen (mit Potenzgesetzen)",
            "Gleichungen der Form ax + b = c mit Äquivalenzumformungen lösen",
            "Ungleichungen der Form ax + b ⋚ c lösen und Lösungsmenge angeben",
            "Sachaufgaben mit Gleichungen und Ungleichungen lösen (z. B. „mindestens“, „höchstens“)"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Proportionalitäten",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Proportionalitäten",
          zeitraum: "ca. März/April",
          ziele: [
            "Prozentrechnung im Alltag anwenden (z. B. Preise ohne MwSt., Preisänderungen)",
            "Zinsrechnung anwenden (Kapital, Zinssatz, Zinsen)",
            "Indirekte Proportionalität aus Graphen, Tabellen und Sachsituationen erkennen",
            "Indirekt proportionale Zuordnungen berechnen (Produktgleichheit, Dreisatz)",
            "Direkte, indirekte und nicht-proportionale Zuordnungen unterscheiden"
          ]
        }
      ]
    },
    {
      id: "lb8",
      titel: "Auswertung von Daten",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb8-1",
          titel: "Auswertung von Daten",
          zeitraum: "ca. März/April",
          ziele: [
            "Mittelwert, Zentralwert, Modalwert und Spannweite ermitteln",
            "Daten mit diesen Kenngrößen interpretieren",
            "Beurteilen, ob eine Stichprobe sinnvoll und repräsentativ ist",
            "Manipulative Diagramme aus dem Alltag erkennen und besser darstellen"
          ]
        }
      ]
    }
  ]
};
