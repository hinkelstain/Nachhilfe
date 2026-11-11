// Inhalt: LehrplanPLUS Bayern, Grundschule, Mathematik, Jahrgangsstufe 1/2
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/1/mathematik
// Hinweis: Der Grundschul-Lehrplan gibt keine Stundenzahlen je Lernbereich
// an, daher ist hier keine Zeitschätzung (Feld "zeitraum") möglich.
const LEHRPLAN_MATHE_1_2 = {
  fach: "Mathematik",
  klasse: "1/2",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/1/mathematik",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Zahlen und Operationen",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Zahlen darstellen & vergleichen",
          ziele: [
            "Zahlen im Alltag verstehen (zählen, Reihenfolge, Positionen, Maße, Codes z. B. Telefonnummer)",
            "Sich im Zahlenraum bis 100 orientieren (vorwärts, rückwärts, in Schritten zählen)",
            "Zahlen ordnen, vergleichen, Nachbarzahlen und gerade/ungerade erkennen",
            "5er- und 10er-Strukturen nutzen, um Anzahlen schnell zu erfassen (Zwanziger-/Hunderterfeld)",
            "Zehnersystem nutzen: Bündeln, Stellenwert, zwischen Darstellungen wechseln (Ziffern, Wort, Material)",
            "Anzahlen schätzen und bestimmen, Zahlen bis 100 vergleichen (>, <, =)",
            "Zahlen bis 100 zerlegen und Zusammenhänge erklären",
            "Ziffern und Zahlen sauber und ordentlich schreiben"
          ]
        },
        {
          id: "lb1-2",
          titel: "Rechnen im Zahlenraum bis 100",
          ziele: [
            "Die vier Grundrechenarten mit Handlungen und Alltagssituationen verknüpfen",
            "Einspluseins bis 20 und Umkehraufgaben automatisiert anwenden",
            "Kernaufgaben des kleinen Einmaleins (1, 2, 5, 10, Quadratzahlen) automatisiert anwenden",
            "Kernaufgaben nutzen, um weitere Multiplikationsaufgaben zu lösen",
            "Rechenstrategien im 20er- und 100er-Raum nutzen, vergleichen, begründen",
            "Ergebnisse auf Plausibilität prüfen, Rechenfehler finden und korrigieren",
            "Rechenmuster erkennen, beschreiben, fortsetzen"
          ]
        },
        {
          id: "lb1-3",
          titel: "Sachaufgaben lösen",
          ziele: [
            "Infos aus Alltagsquellen entnehmen und in mathematische Fragen übersetzen",
            "Erkennen, welche Rechenart zu einer Situation passt",
            "Einfache Darstellungen nutzen (Skizzen, Tabellen, Material) zum Lösen von Aufgaben",
            "Einfache Lösungsstrategien nutzen (z. B. systematisches Probieren)",
            "Lösungswege vergleichen, begründen und wertschätzen",
            "Möglichkeiten bei einfachen Kombinatorik-Aufgaben durch Ausprobieren bestimmen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Raum und Form",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Sich im Raum orientieren",
          ziele: [
            "Lagewörter nutzen (links/rechts, neben, zwischen, oberhalb/unterhalb, vor/hinter)",
            "Wege in der Umgebung beschreiben und Anweisungen folgen",
            "Verschiedene Perspektiven einnehmen (handelnd und in Gedanken)",
            "Handlungen mit Flächen beschreiben (falten, schneiden, drehen, zusammenlegen)"
          ]
        },
        {
          id: "lb2-2",
          titel: "Figuren benennen & darstellen",
          ziele: [
            "Flächen- und Körperformen vergleichen, beschreiben, sortieren",
            "Eigenschaften von Flächen (Ecke, Seite) und Körpern (Ecke, Kante, Fläche) beschreiben",
            "Begriffe Dreieck, Kreis, Viereck (bes. Quadrat und Rechteck) sicher zuordnen",
            "Rechteck als besonderes Viereck, Quadrat als besonderes Rechteck erkennen",
            "Begriffe Zylinder, Prisma, Quader, Würfel, Kegel, Pyramide, Kugel sicher zuordnen",
            "Würfel als besonderen Quader erkennen",
            "Flächen und Körper selbst herstellen (legen, falten, kneten) und beschreiben"
          ]
        },
        {
          id: "lb2-3",
          titel: "Geometrische Abbildungen",
          ziele: [
            "Flächenformen freihändig und mit Lineal übertragen, mit Vorlage vergleichen",
            "Achsensymmetrische Figuren erkennen, durch Falten/Spiegel prüfen",
            "Einfache achsensymmetrische Figuren selbst herstellen und beschreiben"
          ]
        },
        {
          id: "lb2-4",
          titel: "Geometrische Muster",
          ziele: [
            "Körper- und Flächenmuster bauen, Vorgehen vergleichen und beschreiben",
            "Regeln in geometrischen Mustern erkennen und fortsetzen"
          ]
        },
        {
          id: "lb2-5",
          titel: "Flächeninhalt & Umfang",
          ziele: [
            "Flächeninhalte durch Auslegen mit Einheitsquadraten vergleichen",
            "Umfänge von Flächenformen vergleichen (auslegen, abmessen)"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Größen und Messen",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Messhandlungen durchführen",
          ziele: [
            "Größen mit selbst gewählten Einheiten messen und Ergebnisse vergleichen",
            "Längen und Zeitspannen mit Messgeräten messen (m, cm, Std., Min., Woche, Monat, Jahr)",
            "Münzen und Scheine unterscheiden, Geldbeträge in Euro/Cent bestimmen und vergleichen",
            "Abkürzungen nutzen, Ergebnisse auch gemischt notieren (z. B. 9 € 30 ct, 2 m 15 cm)",
            "Messergebnisse mit verschiedenen Einheiten vergleichen und bewerten",
            "Uhrzeiten ablesen, einfache Zeitspannen bestimmen"
          ]
        },
        {
          id: "lb3-2",
          titel: "Größenvorstellungen nutzen",
          ziele: [
            "Größen mit Alltagsbezug schätzen und durch Messen überprüfen",
            "Geldbeträge, Längen und Zeitspannen vergleichen und ordnen",
            "Münzen und Scheine nach Wert ordnen, Beträge wechseln und darstellen"
          ]
        },
        {
          id: "lb3-3",
          titel: "Größen in Sachsituationen",
          ziele: [
            "Infos zu Größen aus Quellen entnehmen und beschreiben",
            "Sachaufgaben mit Größen lösen (Rollenspiel, Skizzen als Hilfe)",
            "Lösungen auf Plausibilität im Sachzusammenhang prüfen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Daten und Zufall",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Daten erfassen & darstellen",
          ziele: [
            "Daten aus dem eigenen Leben sammeln (Umfragen, Wetter) und in Strichlisten/Tabellen darstellen",
            "Infos aus Kalendern, Tabellen oder Diagrammen entnehmen und beschreiben",
            "Fragen zu einfachen Tabellen/Diagrammen stellen und beantworten"
          ]
        },
        {
          id: "lb4-2",
          titel: "Zufallsexperimente",
          ziele: [
            "Einfache Zufallsexperimente durchführen (z. B. Kugeln ziehen) und Ergebnisse vergleichen",
            "Begriffe sicher, möglich, unmöglich sowie wahrscheinlich/unwahrscheinlich nutzen"
          ]
        }
      ]
    }
  ]
};
