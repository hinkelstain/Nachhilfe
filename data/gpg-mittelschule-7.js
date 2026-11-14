// Inhalt: LehrplanPLUS Bayern, Mittelschule (Regelklasse), GPG, Jahrgangsstufe 7
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/7/gpg/regelklasse
//
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt für GPG an der
// Mittelschule (wie bei Mathematik Mittelschule) keine Stundenzahl je
// Lernbereich. Die "ca."-Zeiträume sind daher KEINE offizielle Lehrplan-
// Angabe, sondern eine eigene, transparente Schätzung: Grundlage ist die
// amtliche Stundentafel (3 Wochenstunden GPG in Jgst. 7, Anlage 1 zu § 11
// MSO). Die vier Lernbereiche werden proportional zur Anzahl ihrer
// Kompetenzerwartungen auf ein Schuljahr von September bis Juni verteilt
// (Juli bleibt als Puffer/Wiederholungszeit frei). Da der Fachlehrplan
// GPG innerhalb der vier Lernbereiche keine weitere offizielle Unter-
// gliederung in Teilbereiche vornimmt, entspricht hier jeder Teilbereich
// genau einem Lernbereich (Zeitraum identisch).
const LEHRPLAN_GPG_MS_7 = {
  fach: "GPG",
  klasse: "7",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/mittelschule/7/gpg/regelklasse",
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
            "Sich in Asien und Afrika mit Globus und Karte topographisch orientieren",
            "Den Entwicklungsstand ausgewählter Länder nach Wirtschaft, Bevölkerung und Lebensbedingungen vergleichen (z. B. Stadt- und Landleben)",
            "Folgen der Ressourcennutzung in Entwicklungs- und Schwellenländern recherchieren und das eigene Konsumverhalten kritisch hinterfragen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Zeit und Wandel",
      zeitraum: "ca. November bis Februar",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Zeit und Wandel",
          zeitraum: "ca. November bis Februar",
          ziele: [
            "Absolutistische und demokratische Regierungsform vergleichen, um den Wert politischer Mitbestimmung zu beurteilen",
            "Den unvorhersehbaren Verlauf der Französischen Revolution auf heutige Umbrüche übertragen",
            "Grundzüge der Industrialisierung aus verschiedenen Perspektiven beschreiben",
            "Die nationalstaatlichen Einigungsbestrebungen und die deutsche Reichsgründung darstellen",
            "Erklären, wie Mächterivalitäten und Imperialismus in den Ersten Weltkrieg führten",
            "Das Attentat von Sarajevo darstellen und Ursache und Auslöser an einem aktuellen Beispiel diskutieren",
            "Den Verlauf des Ersten Weltkriegs an Front und Heimat beschreiben",
            "Auswirkungen des Krieges auf den Alltag und unmittelbare Kriegsfolgen erläutern"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Politik und Gesellschaft",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Politik und Gesellschaft",
          zeitraum: "ca. März/April",
          ziele: [
            "Lebens- und Arbeitsverhältnisse der Arbeiterschaft und Lösungsansätze der Sozialen Frage beschreiben",
            "Die Entwicklung einer deutschen Stadt Ende des 19. Jahrhunderts als Übergang zur Industriegesellschaft analysieren",
            "Ursachen des Ersten Weltkriegs erläutern und die Kriegsschuldfrage mit aktueller Forschung diskutieren",
            "Die Bestimmungen des Versailler Vertrags und die daraus entstehende Unzufriedenheit erklären"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Lebenswelt",
      zeitraum: "ca. Mai/Juni",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Lebenswelt",
          zeitraum: "ca. Mai/Juni",
          ziele: [
            "Rechtsbedeutsame Altersstufen benennen und auf das eigene Leben übertragen",
            "Zentrale Bestimmungen des Jugendschutzgesetzes und des Jugendstrafrechts zusammenfassen",
            "Das Jugendstrafrecht und die pädagogische Strafbemessung anhand einer Gerichtsverhandlung diskutieren",
            "Über eine aktuelle Straftat (z. B. Jugendgewalt, Internetkriminalität) berichten und mögliche Strafen diskutieren"
          ]
        }
      ]
    }
  ]
};
