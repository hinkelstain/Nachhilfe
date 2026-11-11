// Inhalt: LehrplanPLUS Bayern, Realschule, Mathematik, Jahrgangsstufe 9
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/9/mathematik/wpfg1
// Hinweis: Ab Jahrgangsstufe 7 gibt es an der Realschule Wahlpflichtfächergruppen
// (I/II/III). Diese Datei bildet die Inhalte der Gruppe I (mathematisch-
// naturwissenschaftlicher Zweig) ab, dem Zweig mit dem anspruchsvollsten
// Mathematik-Lehrplan. Gruppen II/III haben teils andere Schwerpunkte -
// siehe Abschlussbericht.
// Hinweis zu "zeitraum": grobe Schätzung anhand der im Lehrplan genannten
// Ca.-Stundenangaben (ca. 4 Std./Woche Mathematik, Schuljahr ca. Mitte
// September bis Ende Juli). Nur ein ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_MATHE_RS_9 = {
  fach: "Mathematik",
  klasse: "9",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/9/mathematik/wpfg1",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Reelle Zahlen",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Reelle Zahlen",
          ziele: [
            "Quadratwurzeln an Beispielen erklären",
            "Begründen, warum z. B. √2 nicht rational ist und der Zahlbereich erweitert werden muss",
            "Wurzelwerte abschätzen und Gleichungen der Form x² = a lösen",
            "Wurzelterme vereinfachen und teilweise radizieren"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Zentrische Streckung",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Zentrische Streckung",
          ziele: [
            "Zentrische Streckung als Ähnlichkeitsabbildung einordnen und ihre Eigenschaften beschreiben",
            "Punkte und Figuren mit der Abbildungsvorschrift abbilden, ggf. mit Geometriesoftware",
            "Wirkung des Streckungsfaktors auf Lage, Länge und Flächeninhalt analysieren",
            "Die Strahlensätze zur Berechnung von Streckenlängen nutzen",
            "Ähnlichkeit erklären und prüfen, ob Figuren (insbesondere Dreiecke) ähnlich sind",
            "Strecken in einem Verhältnis teilen (z. B. Goldener Schnitt), Dreiecksschwerpunkt bestimmen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Rechtwinklige Dreiecke",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Rechtwinklige Dreiecke",
          ziele: [
            "Aufgaben zu rechtwinkligen Dreiecken mit dem Satz des Pythagoras lösen",
            "Die Umkehrung des Satzes nutzen, um Rechtwinkligkeit nachzuweisen",
            "Strecken im Koordinatensystem mit dem Satz des Pythagoras berechnen",
            "Rechtwinklige Dreiecke in Körpern erkennen und Streckenlängen berechnen",
            "Sinus, Kosinus und Tangens als Seitenverhältnisse nutzen, um Dreiecke, Figuren und Körper zu berechnen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Kreis",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Kreis",
          ziele: [
            "Zusammenhang zwischen Umfang und Durchmesser sowie Fläche und Radius beschreiben (π ist irrational)",
            "Berechnungen an Kreis, Kreissektor, Kreissegment und zusammengesetzten Figuren durchführen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Raumgeometrie",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Raumgeometrie",
          ziele: [
            "Das Prinzip von Cavalieri beispielhaft zur Volumenbestimmung nutzen",
            "Oberflächen von Prisma, Pyramide, Zylinder und Kegel anhand von Netzen beschreiben",
            "Volumen- und Oberflächenaufgaben zu Prisma, Pyramide, Kegel, Zylinder, Kugel und zusammengesetzten Körpern lösen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Systeme linearer Gleichungen",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Systeme linearer Gleichungen",
          ziele: [
            "Lineare Gleichungssysteme mit zwei Variablen grafisch und algebraisch lösen (Einsetzen, Gleichsetzen, Addition)",
            "Lineare Gleichungssysteme bei geometrischen und sachbezogenen Aufgaben anwenden"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Quadratische Funktionen und quadratische Gleichungen",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Quadratische Funktionen und quadratische Gleichungen",
          ziele: [
            "Parabelgleichungen (allgemeine Form und Scheitelpunktsform) erkennen und Parameter deuten",
            "Zwischen allgemeiner Form und Scheitelpunktsform umformen",
            "Scheitelpunkt, Definitions- und Wertemenge bestimmen und Graphen zeichnen",
            "Aufgaben zu quadratischen Funktionen lösen, z. B. Wurf- und Flugparabeln, Extremwertprobleme",
            "Lösungsmengen quadratischer Gleichungen mit der Lösungsformel ermitteln, Diskriminante nutzen",
            "Schnittpunkte von Parabel und Gerade oder zwei Parabeln bestimmen",
            "Wurzelgleichungen lösen und dabei die Definitionsmenge beachten"
          ]
        }
      ]
    },
    {
      id: "lb8",
      titel: "Daten und Zufall",
      zeitraum: "ca. Mai/Juni",
      teilbereiche: [
        {
          id: "lb8-1",
          titel: "Daten und Zufall",
          ziele: [
            "Das Gesetz der großen Zahlen anhand von echten oder simulierten Zufallsexperimenten beschreiben",
            "Den Wahrscheinlichkeitsbegriff nach Laplace verwenden",
            "Ergebnisraum als Menge aller möglichen Ergebnisse bilden",
            "Ereignisse und Gegenereignisse als Teilmengen darstellen und Wahrscheinlichkeiten berechnen",
            "Wahrscheinlichkeiten schätzen und mit der berechneten Wahrscheinlichkeit vergleichen"
          ]
        }
      ]
    }
  ]
};
