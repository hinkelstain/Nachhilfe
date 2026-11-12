// Inhalt: LehrplanPLUS Bayern, Mittelschule, Mathematik, Jahrgangsstufe 9
// Hinweis: Die Fachlehrplan-Seite der "Regelklasse" für Jgst. 9 war trotz Suche nicht abrufbar
// (die Original-Seite lieferte wiederholt einen technischen Fehler). Die hier genutzte, erfolgreich
// abgerufene offizielle LehrplanPLUS-Seite ist die Variante "Mittlere-Reife-Klasse" (M9 / M-Zweig).
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/9/mathematik/mittlere-reife-klasse
// Zeitschätzung (Feld "zeitraum"): Der Mittelschul-Fachlehrplan nennt
// anders als Realschule/Gymnasium keine Stundenzahl je Lernbereich. Die
// "ca."-Zeiträume sind daher keine offizielle Lehrplan-Angabe, sondern eine
// eigene grobe Schätzung auf Basis der amtlichen Stundentafel (5 Wochen-
// stunden Mathematik in Jgst. 9, Anlage 1 zu § 11 MSO) verteilt nach
// der Anzahl der Lernziele je Themenbereich.
const LEHRPLAN_MATHE_MS_9 = {
  fach: "Mathematik",
  klasse: "9",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/9/mathematik/mittlere-reife-klasse",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Prozent- und Zinsrechnung",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Prozent- und Zinsrechnung",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Prozentrechnung auf Zinsrechnung anwenden, inkl. Jahreszins und Zinseszins mit Wachstumsfaktor",
            "Mit dem linearen Zusammenhang von Zeit und Zins Monats- und Tageszins berechnen",
            "Den effektiven Jahreszins ermitteln, um Angebote zu vergleichen",
            "Funktionale Zusammenhänge zwischen den Zins-Grundgrößen in Worten beschreiben",
            "Fragen zu Diagrammen formulieren und die benötigten Werte daraus entnehmen",
            "Verfahren und Fachbegriffe der Prozent- und Zinsrechnung sicher anwenden"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Potenzen",
      zeitraum: "ca. November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Potenzen",
          zeitraum: "ca. November",
          ziele: [
            "Zahlen in Dezimal- und Zehnerpotenz-Schreibweise darstellen, vergleichen und ordnen (auch negative Exponenten)",
            "Zehnerpotenzen bei Sachaufgaben mit Maßangaben nutzen, auch mit dem Taschenrechner",
            "Vorsilben von Nano bis Peta zur Darstellung realer Größen verwenden"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Geometrische Figuren, Körper und Lagebeziehungen",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Geometrische Figuren, Körper und Lagebeziehungen",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Rechtwinklige Dreiecke mit Fachbegriffen (Hypotenuse, Kathete) beschreiben und mit Zirkel/Thaleskreis konstruieren",
            "Satz des Pythagoras und seine Umkehrung erklären und in verschiedenen Variablenformen anwenden",
            "Fehlende Seitenlängen berechnen und prüfen, ob ein Dreieck rechtwinklig ist",
            "Eigenschaften regelmäßiger Vielecke beschreiben und in gleichschenklige Dreiecke zerlegen",
            "Zentriwinkel und Umfang regelmäßiger Vielecke berechnen und konstruieren",
            "Gerade und schiefe Pyramiden sowie Kegel an Modellen und Alltagsgegenständen beschreiben",
            "Schrägbilder von geraden Pyramiden und Kegeln zeichnen und beschriften"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Flächeninhalt – Vielecke",
      zeitraum: "ca. Februar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Flächeninhalt – Vielecke",
          zeitraum: "ca. Februar",
          ziele: [
            "Flächenformel regelmäßiger Vielecke anschaulich begründen (z. B. durch Zerlegen in Dreiecke)",
            "Flächeninhalt zusammengesetzter Figuren durch Zerlegen oder Ergänzen berechnen",
            "Oberflächenformel für Kegel und Pyramiden über Netz oder Schrägbild begründen und anwenden"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Rauminhalt – Prismen, Pyramiden, Kegel",
      zeitraum: "ca. März",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Rauminhalt – Prismen, Pyramiden, Kegel",
          zeitraum: "ca. März",
          ziele: [
            "Volumen gerader Prismen mit regelmäßiger Grundfläche beschreiben",
            "Volumenformeln für Pyramide und Kegel (V = ⅓ · G · h) durch Vergleich mit Prisma/Zylinder herleiten",
            "Volumen von Pyramiden, Kegeln und zusammengesetzten Körpern berechnen, auch berufsbezogen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Wahrscheinlichkeiten",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Wahrscheinlichkeiten",
          zeitraum: "ca. März/April",
          ziele: [
            "Mögliche Ergebnisse von Laplace-Experimenten als Ergebnismenge zusammenfassen und Ereignisse formulieren",
            "Günstige und mögliche Ergebnisse bestimmen und ihr Verhältnis als Bruch bzw. Prozent darstellen",
            "Gegenereignisse bestimmen und ihre Wahrscheinlichkeit berechnen",
            "Gewinnchancen in komplexeren Experimenten durch Vergleich mit dem Gegenereignis einschätzen"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Gleichungen",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Gleichungen",
          zeitraum: "ca. Mai",
          ziele: [
            "Komplexere Gleichungen mit ein oder zwei Variablen aus Sachkontexten aufstellen und lösen",
            "Lineare Gleichungen mit Brüchen lösen, auch bei Mischungsaufgaben",
            "Lösungsmengen reinquadratischer Gleichungen bestimmen, auch in Sachaufgaben",
            "Werte in Formeln (z. B. Prozent-, Zins-, Physikformeln) einsetzen, nach Unbekannten auflösen und Ergebnis prüfen"
          ]
        }
      ]
    },
    {
      id: "lb8",
      titel: "Funktionale Zusammenhänge",
      zeitraum: "ca. Juni/Juli",
      teilbereiche: [
        {
          id: "lb8-1",
          titel: "Funktionale Zusammenhänge",
          zeitraum: "ca. Juni/Juli",
          ziele: [
            "Nichtlineare, lineare, proportionale und umgekehrt proportionale Zusammenhänge erkennen und begründen",
            "Fehlende Werte bei linearen und umgekehrt proportionalen Zusammenhängen berechnen, auch mit Tabellenkalkulation",
            "Lineare und umgekehrt proportionale Funktionen durch Gleichung, Graph, Tabelle und Situation darstellen",
            "Graphen linearer Funktionen aus der Gleichung zeichnen und einen passenden Maßstab wählen",
            "Schnittpunkte von Funktionsgraphen zeichnerisch und rechnerisch bestimmen und im Kontext deuten"
          ]
        }
      ]
    }
  ]
};
