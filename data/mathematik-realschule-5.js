// Inhalt: LehrplanPLUS Bayern, Realschule, Mathematik, Jahrgangsstufe 5
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/5/mathematik
// Hinweis zu "zeitraum": grobe Schätzung anhand der im Lehrplan genannten
// Ca.-Stundenangaben (ca. 4 Std./Woche Mathematik, Schuljahr ca. Mitte
// September bis Ende Juli). Nur ein ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_MATHE_RS_5 = {
  fach: "Mathematik",
  klasse: "5",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/5/mathematik",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Natürliche Zahlen",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Natürliche Zahlen im Dezimalsystem",
          ziele: [
            "Natürliche Zahlen als unendliche Zahlenmenge verstehen (es gibt keine größte Zahl)",
            "Große Zahlen mit Stufenzahlen im Stellenwertsystem darstellen",
            "Zahlen am Zahlenstrahl ablesen und eintragen, mit < und > vergleichen",
            "Zahlen sinnvoll runden und begründen, wann das hilfreich ist"
          ]
        },
        {
          id: "lb1-2",
          titel: "Andere Zahlensysteme",
          ziele: [
            "Zahlen zwischen Dezimalsystem und anderen Systemen umwandeln (z. B. Dualsystem, römische Zahlen)",
            "Vor- und Nachteile verschiedener Zahlensysteme vergleichen"
          ]
        },
        {
          id: "lb1-3",
          titel: "Grundrechenarten und Rechengesetze",
          ziele: [
            "Schriftliche Addition, Subtraktion, Multiplikation und Division sicher anwenden",
            "Sachaufgaben lösen und Rechenwege auf Plausibilität prüfen",
            "Rechengesetze zum geschickten Rechnen nutzen",
            "Große Zahlen in Zehnerpotenzschreibweise darstellen",
            "Potenzen berechnen (auch Quadratzahlen bis 400) und exponentielles Wachstum erkennen (z. B. Bakterienwachstum)",
            "Teilbarkeit, Primfaktorzerlegung, ggT und kgV bestimmen"
          ]
        },
        {
          id: "lb1-4",
          titel: "Kombinatorik",
          ziele: [
            "Anzahl von Möglichkeiten systematisch bestimmen, z. B. mit Baumdiagramm oder Tabelle"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Ganze Zahlen",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Ganze Zahlen",
          ziele: [
            "Erklären, warum man negative Zahlen braucht (z. B. Temperaturen, Kontostand)",
            "Begriffe Gegenzahl, Vorzeichen und Betrag richtig verwenden",
            "Ganze Zahlen an der Zahlengerade einordnen und vergleichen",
            "Mit ganzen Zahlen addieren, subtrahieren, multiplizieren, dividieren (schriftlich und im Kopf)",
            "Vorzeichenregeln und Rechengesetze sicher anwenden",
            "Alltagsaufgaben mit ganzen Zahlen lösen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Geometrische Grundvorstellungen und Grundbegriffe",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Geometrische Grundvorstellungen und Grundbegriffe",
          ziele: [
            "Grundbegriffe wie Punkt, Strecke, Gerade, Kreis, Radius, Durchmesser sicher verwenden",
            "Lage von Geraden beschreiben (parallel, senkrecht, schneidend)",
            "Dreiecke und Vierecke zeichnen und nach Eigenschaften beschreiben",
            "Das Koordinatensystem zur Orientierung nutzen",
            "Winkel von 0° bis 360° messen, zeichnen, benennen; Scheitel- und Nebenwinkel nutzen",
            "Körper wie Würfel, Quader, Pyramide, Zylinder, Kegel und Kugel beschreiben",
            "Netze und Schrägbilder von Würfeln und Quadern zeichnen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Größen",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Größen",
          ziele: [
            "Maßzahl und Maßeinheit unterscheiden, passende Einheiten wählen, Größen schätzen",
            "Einheiten umrechnen (Geld, Masse, Länge, Zeit, Hohlmaß)",
            "Größenangaben als Kommazahl oder Alltagsbruch darstellen",
            "Maßstab bestimmen und für maßstabsgetreue Zeichnungen nutzen",
            "Dreisatz bei Sachaufgaben anwenden",
            "Infos zu Größen aus Texten, Bildern und Tabellen entnehmen und Sachaufgaben lösen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Umfang und Flächeninhalt ebener Figuren",
      zeitraum: "ca. April/Mai",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Umfang und Flächeninhalt ebener Figuren",
          ziele: [
            "Umfang von Rechtecken und Quadraten berechnen (und umgekehrt)",
            "Umfang von Vielecken berechnen, z. B. für eine Grundstücks-Einzäunung",
            "Flächeninhalte durch Zerlegen in Teilfiguren vergleichen",
            "Flächeneinheiten umrechnen und in Alltagsaufgaben verwenden",
            "Flächeninhalt von Rechtecken und Quadraten berechnen (und umgekehrt)",
            "Flächeninhalt von Vielecken durch Zerlegung berechnen (z. B. Wohnungsgröße)"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Auswertung von Daten",
      zeitraum: "ca. Mai/Juni",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Auswertung von Daten",
          ziele: [
            "Infos aus Strichlisten, Diagrammen, Tabellen und Texten entnehmen",
            "Zu Diagrammen und Tabellen passende Fragen stellen und beantworten",
            "Diagramme kritisch prüfen und Fehler oder Verzerrungen erkennen"
          ]
        }
      ]
    }
  ]
};
