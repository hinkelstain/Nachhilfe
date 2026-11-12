// Inhalt: LehrplanPLUS Bayern, Gymnasium, Geschichte, Jahrgangsstufe 8
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/8/geschichte
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt zu jedem
// Lernbereich eine offizielle Ca.-Stundenangabe (hier übernommen). Daraus
// wurden die "ca."-Monatsangaben abgeleitet, ausgehend von 2 Wochenstunden
// Geschichte (Anlage 1 zu § 15 GSO) und einem Schuljahresbeginn Mitte
// September; die letzten Schulwochen (ca. ab Mai) bleiben als Puffer für
// Wiederholung und Proben frei.
const LEHRPLAN_GESCHICHTE_GY_8 = {
  fach: "Geschichte",
  klasse: "8",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/8/geschichte",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Aufklärung, Französische Revolution und Napoleon",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Aufklärung, Französische Revolution und Napoleon",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Grundlagen freiheitlich-demokratischer Werte (Rechtsstaatlichkeit, Mitbestimmung) erkennen und wertschätzen",
            "Ursachen sowie kurz- und langfristige Folgen der Französischen Revolution (1789) multikausal erklären",
            "Gewaltenteilung und konstitutionelle Monarchie vom Absolutismus abgrenzen",
            "Napoleons Kaisertum und die französische Hegemonie in Europa einordnen",
            "Die Reformen Montgelas' in Bayern beurteilen (u. a. 1806 Gründung des Königreichs Bayern)"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Einigkeit und Freiheit? Deutschland zwischen Restauration und Revolution",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Einigkeit und Freiheit? Deutschland zwischen Restauration und Revolution",
          zeitraum: "ca. Oktober/November",
          ziele: [
            "Die Neuordnung nach dem Wiener Kongress (1815) und den Deutschen Bund einordnen",
            "Möglichkeiten und Grenzen politischer Meinungsäußerung im Vormärz (Zensur) beurteilen",
            "Verlauf und Scheitern der Revolution von 1848/49 beurteilen",
            "Die Begriffe Deutscher Bund, Nationalismus, Liberalismus und Parlament anwenden"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Bayern – Identität, Staatsgebiet und kulturelles Erbe (Längsschnitt)",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Bayern – Identität, Staatsgebiet und kulturelles Erbe (Längsschnitt)",
          zeitraum: "ca. November/Dezember",
          ziele: [
            "Die Frage nach einer bayerischen Identität im Hinblick auf Territorium und kulturelles Erbe diskutieren",
            "Die territoriale Entwicklung Bayerns vom 8. bis ins 20. Jahrhundert mithilfe eines Geschichtsatlas nachvollziehen",
            "Städtebauliche und architektonische Beispiele des bayerischen Kulturerbes untersuchen",
            "Die Bedeutung des Denkmalschutzes erkennen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Industrialisierung und Soziale Frage",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Industrialisierung und Soziale Frage",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Lebensbedingungen vor und während der Industrialisierung vergleichen (Technisierung, Verstädterung, Umweltbelastung)",
            "Ursachen, Verlauf und Folgen der Industrialisierung in England, Deutschland und Bayern analysieren",
            "Lösungsansätze zur Sozialen Frage vergleichen und bewerten",
            "Die Begriffe Industrialisierung, Soziale Frage, Sozialismus und Kommunismus anwenden"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Das Deutsche Kaiserreich",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Das Deutsche Kaiserreich",
          zeitraum: "ca. Januar/Februar",
          ziele: [
            "Das Kaiserreich als Spannungsfeld von Stabilität/Modernisierung und Obrigkeitsstaat/Militarismus einordnen",
            "Die Reichsverfassung von 1871 beurteilen (obrigkeitsstaatliche und partizipatorische Elemente)",
            "Bismarcks Sozialgesetzgebung vor dem Hintergrund der Sozialen Frage bewerten",
            "Ausgewählte Aspekte des gesellschaftlichen Lebens vor 1914 untersuchen (u. a. Massenkultur, Frauenbewegung)"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Imperialismus und Erster Weltkrieg",
      zeitraum: "ca. Februar bis April",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Imperialismus und Erster Weltkrieg",
          zeitraum: "ca. Februar bis April",
          ziele: [
            "Ziele, Methoden und Folgen imperialistischer Politik an einem Beispiel beurteilen",
            "Ursachen des Ersten Weltkriegs erklären (Wettrüsten, Konfliktfeld Balkan, Julikrise 1914)",
            "Den Krieg als modernen Massenkrieg einordnen (Stellungskrieg, Materialschlacht, Folgen für die Zivilbevölkerung)",
            "Das Epochenjahr 1917 (Kriegseintritt der USA, Russische Revolution) erläutern",
            "Kriegsende, Vertrag von Versailles und Kriegsschuldfrage anhand von Statistiken und Quellen diskutieren"
          ]
        }
      ]
    }
  ]
};
