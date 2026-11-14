// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), GPG, Jahrgangsstufe 8
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/8/gpg/regelklasse
//
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt für GPG an der
// Mittelschule (wie bei Mathematik Mittelschule) keine Stundenzahl je
// Lernbereich. Die "ca."-Zeiträume sind daher KEINE offizielle Lehrplan-
// Angabe, sondern eine eigene, transparente Schätzung: Grundlage ist die
// amtliche Stundentafel (3 Wochenstunden GPG in Jgst. 8, Anlage 1 zu § 11
// MSO). Die vier Lernbereiche werden proportional zur Anzahl ihrer
// Kompetenzerwartungen auf ein Schuljahr von September bis Juni verteilt
// (Juli bleibt als Puffer/Wiederholungszeit frei). Da der Fachlehrplan
// GPG innerhalb der vier Lernbereiche keine weitere offizielle Unter-
// gliederung in Teilbereiche vornimmt, entspricht hier jeder Teilbereich
// genau einem Lernbereich (Zeitraum identisch).
const LEHRPLAN_GPG_MS_8 = {
  fach: "GPG",
  klasse: "8",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/8/gpg/regelklasse",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Lebensraum Erde",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Lebensraum Erde",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Sich mit Globus und Karte topographisch und naturräumlich in Nordamerika orientieren",
            "Den Entwicklungsstand der USA darstellen und mit einem weiteren Industrieland vergleichen",
            "Das eigene Alltagsleben mit dem Leben Gleichaltriger im städtischen und ländlichen Raum verschiedener Industrieländer vergleichen",
            "Primäre und erneuerbare Energieträger auf ihre Effizienz vergleichen und eine nachhaltige Energieversorgung diskutieren",
            "Den eigenen Energieverbrauch untersuchen und das eigene ökologische Verhalten reflektieren"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Zeit und Wandel",
      zeitraum: "ca. November bis Januar",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Zeit und Wandel",
          zeitraum: "ca. November bis Januar",
          ziele: [
            "Die Entstehung der Weimarer Republik und ihre erste demokratische Verfassung darstellen",
            "Den Aufstieg der NSDAP bis zur Machtübertragung und seine Ursachen beschreiben (z. B. Weltwirtschaftskrise)",
            "Ursachen, Verlauf und Folgen des Zweiten Weltkriegs sowie der nationalsozialistischen Expansionspolitik erklären",
            "Lebensgeschichten von Verfolgten, Ermordeten und Vertriebenen recherchieren und rassische von politischen Motiven unterscheiden",
            "Die Alltagssituation und unmittelbaren Kriegsfolgen in den Nachkriegsjahren beschreiben",
            "Langfristige Folgen von Krieg und Vertreibung für Opfer und Täter bis heute diskutieren"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Politik und Gesellschaft",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Politik und Gesellschaft",
          zeitraum: "ca. Februar/März",
          ziele: [
            "Methoden und Ziele der NS-Propaganda beschreiben und die Rolle der Medien in Demokratie und Diktatur vergleichen",
            "Motive und Formen des Widerstands erläutern und Zivilcourage als Grundlage demokratischer Strukturen erkennen",
            "Die Beschlüsse der Potsdamer Konferenz darstellen, um die Teilung Deutschlands zu erklären",
            "Aufgaben der Verfassungsorgane bei der Gesetzgebung an einem aktuellen Beispiel beschreiben"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Lebenswelt",
      zeitraum: "ca. April bis Juni",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Lebenswelt",
          zeitraum: "ca. April bis Juni",
          ziele: [
            "Möglichkeiten politischer Teilhabe in der Demokratie beschreiben und als eigene Handlungsoption diskutieren",
            "Die Wahlbeteiligung einer aktuellen Wahl analysieren und Gründe für geringe Beteiligung von Erstwählern diskutieren",
            "Aufgaben einer gemeinnützigen Einrichtung im eigenen Umfeld darstellen und ihre Bedeutung im Sozialstaat bewerten",
            "Die Funktion des Generationenvertrags und die Bedeutung privater Altersvorsorge begründen",
            "Vorteile nachhaltiger, ökologischer Landwirtschaft gegenüber konventioneller Landwirtschaft aufzeigen"
          ]
        }
      ]
    }
  ]
};
