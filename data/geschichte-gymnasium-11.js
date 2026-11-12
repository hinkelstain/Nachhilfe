// Inhalt: LehrplanPLUS Bayern, Gymnasium, Geschichte, Jahrgangsstufe 11
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/geschichte
// Hinweis: Jgst. 11 ist in der neuen gymnasialen Oberstufe (G9) die
// "Einführungsphase" vor der Qualifikationsphase (Jgst. 12/13). Der
// Fachlehrplan besteht hier aus zwei großen Längsschnitten, die noch nicht
// nach grundlegendem/erhöhtem Anforderungsniveau unterscheiden.
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt zu jedem
// Lernbereich eine offizielle Ca.-Stundenangabe (hier übernommen). Daraus
// wurden die "ca."-Monatsangaben abgeleitet, ausgehend von 1 Wochenstunde
// Geschichte in Jgst. 11 (Anlage 1 zu § 15 GSO) und einem Schuljahresbeginn
// Mitte September; die letzten Schulwochen (ca. ab April) bleiben als
// Puffer für Wiederholung und Proben frei.
const LEHRPLAN_GESCHICHTE_GY_11 = {
  fach: "Geschichte",
  klasse: "11",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/geschichte",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Geschichte erinnern (Längsschnitt)",
      zeitraum: "ca. September bis Dezember",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Geschichte erinnern (Längsschnitt)",
          zeitraum: "ca. September bis Dezember",
          ziele: [
            "Aktuelle, auch digitale und filmische Erinnerungsformen und ihre Bedeutung für Orientierung erfassen",
            "Geschichte als narrative Konstruktion verstehen und Gefahren manipulativer Geschichtsvermittlung erkennen",
            "Populäre Mittelalterrezeption (Filme, Spiele, Reenactment) mit wissenschaftlichen Darstellungen vergleichen",
            "Am Beispiel der deutschen Kolonialgeschichte den Zusammenhang von Erinnerung und Verantwortung diskutieren",
            "Formen des Erinnerns an den Holocaust/die Shoa (u. a. im öffentlichen Raum) vergleichen und bewerten, Leugnung und Relativierung kritisch einordnen",
            "Individuelles und kollektives Gedächtnis unterscheiden, u. a. anhand von Zeitzeugen der DDR"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Migration in Bayern von der Frühen Neuzeit bis zum 20. Jahrhundert (Längsschnitt)",
      zeitraum: "ca. Januar bis März",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Migration in Bayern von der Frühen Neuzeit bis zum 20. Jahrhundert (Längsschnitt)",
          zeitraum: "ca. Januar bis März",
          ziele: [
            "Migration als prägendes Merkmal der Menschheitsgeschichte am Beispiel Bayerns einordnen",
            "Religiös motivierte Migration im 17./18. Jahrhundert untersuchen (z. B. Hugenotten, Salzburger Exulanten)",
            "Arbeits- und politisch motivierte Migration im 19. Jahrhundert erklären (Binnenwanderung, Auswanderung in die USA)",
            "Gewaltmigration im Nationalsozialismus einordnen (u. a. jüdische Bevölkerung, Zwangsarbeiter)",
            "Immigration und Integration nach 1945 an Beispielen untersuchen (Heimatvertriebene, Arbeitsmigranten, Spätaussiedler, jüdische Kontingentflüchtlinge, Kriegsflüchtlinge)",
            "Bedingungen für gelingende Integration diskutieren"
          ]
        }
      ]
    }
  ]
};
