// Inhalt: LehrplanPLUS Bayern, Grundschule, Mathematik, Jahrgangsstufe 3/4
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/4/mathematik
const LEHRPLAN_MATHE_4 = {
  fach: "Mathematik",
  klasse: "3/4",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/grundschule/4/mathematik",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Zahlen und Operationen",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Zahlen darstellen & vergleichen",
          ziele: [
            "Sich im Zahlenraum bis zur Million orientieren (vorwärts, rückwärts, in Schritten zählen)",
            "Zahlen ordnen, vergleichen und am Zahlenstrahl einordnen",
            "Das Stellenwertsystem sicher nutzen (Z, H, T, ZT, HT, Million)",
            "Zahlen zerlegen und zusammensetzen (z. B. 1000 = 100 + 900)",
            "Anzahlen schätzen und begründen (z. B. Fermi-Aufgaben)"
          ]
        },
        {
          id: "lb1-2",
          titel: "Rechnen im großen Zahlenraum",
          ziele: [
            "Kleines Einmaleins und Umkehraufgaben automatisiert anwenden",
            "Alle vier Grundrechenarten im Zahlenraum bis zur Million beherrschen",
            "Schriftliche Verfahren: Addition, Subtraktion, Multiplikation, Division (Divisor bis 10, auch mit Rest)",
            "Rechenwege erklären, vergleichen, bewerten",
            "Ergebnisse auf Plausibilität prüfen (Überschlag, Fehler finden)",
            "Arithmetische Muster erkennen und fortsetzen"
          ]
        },
        {
          id: "lb1-3",
          titel: "Sachaufgaben lösen",
          ziele: [
            "Infos aus Texten, Tabellen und Diagrammen für Sachaufgaben nutzen",
            "Lösungswege mit Skizzen, Tabellen oder Diagrammen darstellen",
            "Strategien wie Vorwärts- und Rückwärtsarbeiten anwenden",
            "Entscheiden: genaues Ergebnis nötig oder Überschlag reicht?",
            "Kombinatorik: Möglichkeiten systematisch bestimmen (z. B. Kleidungskombinationen)"
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
            "Skizzen und Lagepläne erstellen und zur Orientierung nutzen",
            "Zusammenhang zwischen echten Längen und Längen in Plänen verstehen (Maßstab)",
            "2D- und 3D-Darstellungen verbinden (z. B. Würfelgebäude nach Plan bauen)",
            "Mit Figuren und Körpern handelnd arbeiten (kippen, falten, Netze)"
          ]
        },
        {
          id: "lb2-2",
          titel: "Figuren benennen & darstellen",
          ziele: [
            "Rechten Winkel erkennen und benennen",
            "Würfel und Quader vergleichen (Kanten, Flächen)",
            "Netze von Würfeln und Quadern erstellen, deckungsgleiche finden",
            "Strecken und Flächen zeichnen (Lineal, Geodreieck, Zirkel)"
          ]
        },
        {
          id: "lb2-3",
          titel: "Geometrische Abbildungen",
          ziele: [
            "Figuren maßstäblich vergrößern und verkleinern",
            "Achsensymmetrische Figuren erkennen und beschreiben",
            "Symmetrieachsen einzeichnen und Spiegelbilder erzeugen"
          ]
        },
        {
          id: "lb2-4",
          titel: "Geometrische Muster",
          ziele: [
            "Parkettierungen erstellen und Regeln beschreiben",
            "Gesetzmäßigkeiten in Bandornamenten erkennen und fortsetzen"
          ]
        },
        {
          id: "lb2-5",
          titel: "Rauminhalte",
          ziele: [
            "Rauminhalte durch Bauen und Auszählen von Einheitswürfeln vergleichen"
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
            "Größen messen: km/mm, s, kg/g, l/ml",
            "Passende Messgeräte nutzen (Meterzähler, Messbecher, Stoppuhr)",
            "Einheiten umwandeln, Geldbeträge wechseln",
            "Zeitspannen berechnen (z. B. 1 h 25 min)"
          ]
        },
        {
          id: "lb3-2",
          titel: "Größenvorstellungen nutzen",
          ziele: [
            "Größen mit Alltagsbezug schätzen (500 ml, 1 l, 1 kg, 1 km)",
            "Längen, Zeitspannen, Massen, Hohlmaße vergleichen und ordnen",
            "Einfache Brüche im Zusammenhang mit Größen nutzen (½, ¼, ¾)"
          ]
        },
        {
          id: "lb3-3",
          titel: "Größen in Sachsituationen",
          ziele: [
            "Infos zu Größen aus Texten, Tabellen, Diagrammen entnehmen",
            "Sachaufgaben mit Größen lösen, Näherungswerte nutzen",
            "Entscheiden: exaktes Ergebnis nötig oder Überschlag reicht?",
            "Funktionale Zusammenhänge erkennen (je mehr – desto mehr)"
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
            "Daten sammeln und in Tabellen/Diagrammen darstellen (z. B. Balkendiagramm)",
            "Infos aus Quellen entnehmen (Fahrpläne, Preislisten)",
            "Sinnvolle Fragen zu Diagrammen/Tabellen stellen und beantworten",
            "Nicht direkt ablesbare Daten berechnen (z. B. Fahrtzeiten)"
          ]
        },
        {
          id: "lb4-2",
          titel: "Zufallsexperimente",
          ziele: [
            "Gewinnchancen bei Zufallsexperimenten einschätzen (Glücksrad, Würfel)",
            "Bedingungen von Zufallsexperimenten systematisch verändern und Ergebnisse vergleichen"
          ]
        }
      ]
    }
  ]
};
