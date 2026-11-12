// Inhalt: LehrplanPLUS Bayern, Gymnasium, Geschichte, Jahrgangsstufe 6
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/6/geschichte
// Hinweis: Die offizielle Fachlehrplan-Seite für Jgst. 6 konnte trotz mehrerer
// Versuche technisch nicht abgerufen werden. Die Lernbereiche, Daten und
// Begriffe wurden daher anhand offizieller Sekundärquellen des ISB rekonstruiert:
// - Kontaktbrief Geschichte 2025 (Anlage), ISB/Historisches Forum Bayern
//   (nennt alle sieben Lernbereiche 6.1-6.7 inkl. der beiden Längsschnitte)
// - "GDB Geschichte LPP Jgst. 6 bis 10" (Grunddatenblatt, Gymnasium
//   Marquartstein) für die Daten/Begriffe zu 6.1, 6.2, 6.3, 6.5, 6.6
// Zu den Längsschnitten 6.4 "Menschen machen Geschichte" und 6.7
// "Gesellschaftsordnung im Kleinen - Leben in der Familie" lagen nur die
// amtlichen Titel, keine ausformulierten Einzelkompetenzen vor; die Ziele
// sind hier anhand des Titels und der üblichen Längsschnitt-Funktion
// (Wiederholung/Vertiefung an Beispielen aus den übrigen Lernbereichen)
// sinngemäß formuliert.
// Zeitschätzung (Feld "zeitraum"): Da keine offiziellen Stundenangaben pro
// Lernbereich vorlagen, eigene grobe Schätzung auf Basis der amtlichen
// Stundentafel (2 Wochenstunden Geschichte in Jgst. 6, Anlage 1 zu § 15
// GSO) und der Gewichtung der Lernbereiche nach Inhaltsfülle, verteilt auf
// September bis ca. April (danach Puffer für Wiederholung/Proben).
const LEHRPLAN_GESCHICHTE_GY_6 = {
  fach: "Geschichte",
  klasse: "6",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/6/geschichte",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Der Mensch und seine Geschichte",
      zeitraum: "ca. September",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Der Mensch und seine Geschichte",
          zeitraum: "ca. September",
          ziele: [
            "Quellenarten unterscheiden: zufällig erhaltene Überreste und absichtlich weitergegebene Überlieferungen, auch Zeitzeugenaussagen",
            "Lebensweise in der Altsteinzeit (ca. 2 Mio. Jahre bis ca. 10 000 v. Chr.) als Jäger und Sammler mit Steinwerkzeugen beschreiben",
            "Die Jungsteinzeit (ca. 10 000 bis ca. 2000 v. Chr.) als Übergang zur Sesshaftigkeit, zu Ackerbau und Viehzucht erklären",
            "Mithilfe einer Zeitleiste zeitliche Abfolgen und große Zeiträume einordnen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Ägypten – eine frühe Hochkultur",
      zeitraum: "ca. Oktober",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Ägypten – eine frühe Hochkultur",
          zeitraum: "ca. Oktober",
          ziele: [
            "Merkmale einer frühen Hochkultur am Beispiel Ägyptens (ab ca. 3000 v. Chr.) erklären",
            "Die Rolle des Pharaos als oberster Herrscher und zugleich König und Gott einordnen (Monarchie)",
            "Bedeutung der Pyramiden als Grabanlagen und ihren Bau nachvollziehen",
            "Leben am Nil und die Bedeutung von Schrift und Schreibern für die Verwaltung beschreiben"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Die griechische Antike",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Die griechische Antike",
          zeitraum: "ca. November/Dezember",
          ziele: [
            "Die Polis als selbstständigen griechischen Stadtstaat beschreiben und Migration/Kolonisation einordnen",
            "Herrschaftsformen Aristokratie und Demokratie unterscheiden und den Begriff Verfassung erklären",
            "Die Perserkriege und die Blütezeit Athens im 5. Jh. v. Chr. einordnen",
            "Alltag und Kultur der griechischen Antike beschreiben (u. a. Götterwelt, Olympische Spiele)"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Menschen machen Geschichte (Längsschnitt)",
      zeitraum: "ca. Dezember/Januar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Menschen machen Geschichte (Längsschnitt)",
          zeitraum: "ca. Dezember/Januar",
          ziele: [
            "Am Beispiel einer historischen Persönlichkeit (z. B. Pharao Hatschepsut) untersuchen, wie Einzelne ihre Zeit prägen und von ihr geprägt werden",
            "Kriterien für die Auswahl und Bewertung historischer Persönlichkeiten reflektieren",
            "Erkennen, dass die Darstellung einer Person immer von Quellenlage und Perspektive abhängt",
            "Bereits gelernte Inhalte aus den vorherigen Lernbereichen an einem Beispiel wiederholen und vertiefen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Das Imperium Romanum",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Das Imperium Romanum",
          zeitraum: "ca. Januar/Februar",
          ziele: [
            "Die sagenhafte Gründung Roms (753 v. Chr.) und den Übergang von der Republik zum Prinzipat einordnen",
            "Die Begriffe Senat, Republik und Diktator erklären, auch am Beispiel Caesars (44 v. Chr. Diktator auf Lebenszeit)",
            "Den Limes als befestigte Reichsgrenze und die Romanisierung eroberter Provinzen beschreiben",
            "Grundzüge von Judentum und Christentum im Römischen Reich benennen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Von der Antike zum Mittelalter",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Von der Antike zum Mittelalter",
          zeitraum: "ca. Februar/März",
          ziele: [
            "Die Reichsbildung der Franken um 500 als Verbindung germanischer und römischer Elemente erklären",
            "Die Kaiserkrönung Karls des Großen im Jahr 800 einordnen und die Begriffe König und Kaiser unterscheiden",
            "Die Entstehung des Islam im 7. Jahrhundert (Mohammed, Koran) als monotheistische Religion einordnen",
            "Den Beginn des Mittelalters (ca. 500 n. Chr.) zeitlich verorten"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Gesellschaftsordnung im Kleinen – Leben in der Familie (Längsschnitt)",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Gesellschaftsordnung im Kleinen – Leben in der Familie (Längsschnitt)",
          zeitraum: "ca. März/April",
          ziele: [
            "Familie und Haushalt als kleinen Ausschnitt der jeweiligen Gesellschaftsordnung begreifen",
            "Leben in der Familie in verschiedenen behandelten Epochen vergleichen (z. B. Steinzeit, Ägypten, griechische und römische Familie, Mittelalter)",
            "Veränderungen und Gemeinsamkeiten familiärer Rollen und Aufgaben über die Zeit herausarbeiten",
            "Bereits gelernte Epochenkenntnisse am Beispiel der Familie wiederholen und vertiefen"
          ]
        }
      ]
    }
  ]
};
