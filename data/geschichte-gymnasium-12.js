// Inhalt: LehrplanPLUS Bayern, Gymnasium, Geschichte, Jahrgangsstufe 12
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/geschichte/grundlegend
// Hinweis: In der Qualifikationsphase (Jgst. 12/13) gibt es für Geschichte
// zwei Anforderungsniveaus: grundlegendes Niveau (gA, zweistündig, Pflicht
// für alle) und erhöhtes Niveau (eA, vierstündig, Leistungsfach). Diese
// Datei bildet das grundlegende Niveau ab, da es für die meisten
// Schülerinnen und Schüler gilt. Im erhöhten Niveau werden dieselben
// Themen vertieft behandelt (zusätzliche Vertiefungsmodule, erweiterte und
// vergleichende Fragestellungen, teils deutlich mehr Stunden je
// Teilbereich), siehe https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/geschichte/erhoeht
// Zeitschätzung (Feld "zeitraum"): Der Fachlehrplan nennt zu jedem
// Halbjahresthema und jedem Teilbereich eine offizielle Ca.-Stundenangabe
// (hier übernommen). Die beiden Lernbereiche entsprechen den beiden
// Schulhalbjahren (ca. September bis Januar bzw. ca. Februar bis Juli,
// bei 2 Wochenstunden Geschichte); die Teilbereiche wurden anteilig nach
// ihrer Stundenzahl auf Monate innerhalb des jeweiligen Halbjahres verteilt.
const LEHRPLAN_GESCHICHTE_GY_12 = {
  fach: "Geschichte",
  klasse: "12",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/geschichte/grundlegend",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Auf dem Weg zu gesellschaftlicher und politischer Partizipation vom 19. Jh. bis zur Weimarer Republik",
      zeitraum: "1. Schulhalbjahr (ca. September bis Januar)",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Die deutsche Revolution von 1848/49 und ihre Bedeutung für die Herausbildung einer bürgerlichen Gesellschaft",
          zeitraum: "ca. September/Oktober",
          ziele: [
            "Die Bedeutung der Revolution von 1848/49 für die Entstehung einer bürgerlichen Gesellschaft und eines demokratischen Verfassungsstaats einordnen",
            "Den Vormärz (ab dem Hambacher Fest 1832) zwischen Rückzug ins Privatleben und politischem Engagement beschreiben",
            "Verlauf der Revolution 1848/49 (Paulskirchenparlament, Verfassungsringen) und ihr Scheitern beurteilen",
            "Die Bedeutung der Revolution 1848/49 für die Demokratisierung Deutschlands aus zeitgenössischer und heutiger Sicht beurteilen"
          ]
        },
        {
          id: "lb1-2",
          titel: "Prozesse gesellschaftlicher und politischer Modernisierung im Deutschen Kaiserreich und in der Weimarer Republik",
          zeitraum: "ca. November bis Januar",
          ziele: [
            "Entwicklung der politischen Partizipation und gesellschaftliche Veränderungen im Kaiserreich (1871-1929) erklären",
            "Die systemstabilisierende Funktion der Sozialgesetzgebung in Kaiserreich und Weimarer Republik bewerten",
            "Die Lage der jüdischen Bevölkerung zwischen rechtlicher Gleichstellung und wachsendem Antisemitismus charakterisieren",
            "Die Kräfte im Ringen um eine neue politische Ordnung nach der Novemberrevolution 1918 erfassen",
            "Diskutieren, inwieweit die Weimarer Reichsverfassung Modernisierungsaspekte seit dem 19. Jahrhundert aufgreift"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Deutschland zwischen Demokratie und Diktatur",
      zeitraum: "2. Schulhalbjahr (ca. Februar bis Juli)",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Scheitern der Weimarer Republik – NS-Diktatur und Völkermord",
          zeitraum: "ca. Februar bis April",
          ziele: [
            "Den stufenweisen Abbau von Demokratie und Menschenrechten am Ende der Weimarer Republik nachvollziehen",
            "Gründe für den Erfolg des Nationalsozialismus in der Bevölkerung erörtern (Weltanschauung, Staatsorganisation, Selbstdarstellung)",
            "Die Systematik von Entrechtung, Ausgrenzung und NS-Massenverbrechen erkennen, besonders den Völkermord an den europäischen Juden",
            "Differenziert beurteilen, inwieweit die nichtjüdische Bevölkerung Entrechtung, Verfolgung und Mord wahrnahm und sich daran beteiligte"
          ]
        },
        {
          id: "lb2-2",
          titel: "Die Bundesrepublik Deutschland und die Deutsche Demokratische Republik",
          zeitraum: "ca. Mai/Juni",
          ziele: [
            "Die gegensätzlichen Wert- und Ordnungsvorstellungen beider deutscher Staaten erkennen und ihre Auswirkungen auf die Bevölkerung beschreiben",
            "Gründung und Selbstverständnis beider Staaten vergleichen und deren Verfassungswirklichkeit überprüfen",
            "Die wirtschaftliche Entwicklung beider Staaten und deren Folgen für die Lebensverhältnisse vergleichen",
            "Die Rolle der Bürgerrechtsbewegung für die friedliche Revolution in der DDR und die Wiedervereinigung beurteilen"
          ]
        },
        {
          id: "lb2-3",
          titel: "Die Bundesrepublik Deutschland zwischen 1990 und 2009",
          zeitraum: "ca. Juli",
          ziele: [
            "Motive, Prozesse und Folgen politischer Entscheidungen bei zentralen Herausforderungen der wiedervereinigten Bundesrepublik erkennen",
            "Gesellschaftliche und politische Reaktionen auf diese Herausforderungen beurteilen (u. a. Agenda 2010, Extremismus und Terrorismus)",
            "An einem Beispiel die veränderte außenpolitische Rolle der Bundesrepublik beurteilen (z. B. Kosovo-Krieg, Irak-Krieg)"
          ]
        }
      ]
    }
  ]
};
