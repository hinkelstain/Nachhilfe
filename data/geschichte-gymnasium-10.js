// Inhalt: LehrplanPLUS Bayern, Gymnasium, Geschichte, Jahrgangsstufe 10
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/10/geschichte
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt zu jedem
// Lernbereich eine offizielle Ca.-Stundenangabe (hier übernommen). Daraus
// wurden die "ca."-Monatsangaben abgeleitet, ausgehend von nur noch 1
// Wochenstunde Geschichte in Jgst. 10 (Anlage 1 zu § 15 GSO) und einem
// Schuljahresbeginn Mitte September; die letzten Schulwochen (ca. ab April)
// bleiben als Puffer für Wiederholung und Proben frei.
const LEHRPLAN_GESCHICHTE_GY_10 = {
  fach: "Geschichte",
  klasse: "10",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/10/geschichte",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Das geteilte Deutschland und die Wiedervereinigung",
      zeitraum: "ca. September bis Dezember",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Das geteilte Deutschland und die Wiedervereinigung",
          zeitraum: "ca. September bis Dezember",
          ziele: [
            "Politische, gesellschaftliche und wirtschaftliche Verhältnisse von BRD und DDR vergleichen und einordnen",
            "Die SED-Diktatur und die Folgen staatlicher Kontrolle und Lenkung für die Bevölkerung erfassen",
            "Die Bundesrepublik in der Ära Adenauer einordnen (u. a. Umgang mit der NS-Vergangenheit, Integration der Vertriebenen, Gastarbeiter)",
            "Die deutsch-deutschen Beziehungen im Kalten Krieg überblicken (u. a. 17. Juni 1953, Mauerbau, Grundlagenvertrag 1972)",
            "Voraussetzungen, Ursachen und Folgen der Wiedervereinigung (9. November 1989, 3. Oktober 1990) multikausal erörtern"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Europäische Integration und globalisierte Welt bis zum Beginn des 21. Jahrhunderts",
      zeitraum: "ca. Januar bis März",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Europäische Integration und globalisierte Welt bis zum Beginn des 21. Jahrhunderts",
          zeitraum: "ca. Januar bis März",
          ziele: [
            "Zentrale Entwicklungsschritte der europäischen Integration und ihre Bedeutung vor dem Hintergrund der Weltkriege einschätzen",
            "Weltpolitische Akteure nach 1990 (USA, Russland, China) und die Rolle von UNO und EU untersuchen",
            "Auswirkungen der Globalisierung auf Staat und Gesellschaft diskutieren",
            "Neue politische Herausforderungen wie den Umgang mit Terrorismus einordnen (11. September 2001)",
            "Die internationale Rolle der Bundesrepublik nach der Wiedervereinigung beschreiben"
          ]
        }
      ]
    }
  ]
};
