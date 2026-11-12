// Inhalt: LehrplanPLUS Bayern, Realschule, Geschichte, Jahrgangsstufe 6
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/6/geschichte
// Hinweis: Die offizielle Fachlehrplan-Seite für Jgst. 6 konnte trotz mehrfacher
// Versuche nicht direkt abgerufen werden (die Seite liefert beim automatisierten
// Abruf einen Client-Fehler, anders als z. B. die Fachlehrplan-Seiten für
// Jgst. 8 und 10, die direkt lesbar waren). Die Inhalte dieser Datei stammen
// daher aus zwei unabhängigen, am amtlichen LehrplanPLUS ausgerichteten
// Stoffverteilungsplänen von Schulbuchverlagen (Klett "Zeitreise 6" und
// C.C. Buchner "Geschichte entdecken - Bayern", Band 1), die jeweils die
// amtlichen Lernbereiche 1-8 referenzieren und sich inhaltlich wie in den
// genannten Ca.-Stunden decken. Keine WPFG-Variante: Geschichte wird laut
// amtlicher Stundentafel (Anlage 1 RSO) in allen vier Wahlpflichtfächer-
// gruppen inhaltsgleich mit 2 Wochenstunden unterrichtet. Den optionalen
// Lernbereich "Bilingualer Sachfachunterricht" gibt es laut Fachprofil erst
// ab Jgst. 7, in Jgst. 6 daher nicht relevant.
// Zeitschätzung (Feld "zeitraum"): Auf Lernbereich-Ebene beruhen die Angaben
// auf den Ca.-Stundenwerten der beiden genannten Stoffverteilungspläne
// (zusammen ca. 56 Unterrichtsstunden für die Lernbereiche 2-8), verteilt auf
// ein Schuljahr von September bis Juni bei 2 Wochenstunden Geschichte (Anlage
// 1 RSO); Juli bleibt als Puffer/Wiederholungszeit frei. Lernbereich 1
// (Methoden und Arbeitstechniken) hat laut Lehrplan keine eigene Stundenzahl,
// da er in die anderen Lernbereiche integriert ist - hier als Einstieg im
// September verortet. Auf Teilbereich-Ebene wird der jeweilige Lernbereich-
// Zeitraum anteilig nach Anzahl der Lernziele weiter unterteilt. Nur ein
// ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_GESCHICHTE_RS_6 = {
  fach: "Geschichte",
  klasse: "6",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/6/geschichte",
  lernbereiche: [
    {
      id: "lb1",
      titel: "Methoden und Arbeitstechniken",
      zeitraum: "ca. September",
      teilbereiche: [
        {
          id: "lb1-1",
          titel: "Methoden und Arbeitstechniken",
          zeitraum: "ca. September",
          ziele: [
            "Unterschied zwischen Quellen und Darstellungen erkennen",
            "Einfache Fragen zu Quellen (Texte, Bilder, Sachquellen) beantworten",
            "Zeitleisten lesen und erstellen, um Epochen und Daten einzuordnen",
            "Geschichtskarten lesen und einfache Informationen daraus entnehmen",
            "Eigene kleine historische Erzählungen zu einem Thema bilden"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Der Mensch und seine Geschichte",
      zeitraum: "ca. September",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Der Mensch und seine Geschichte",
          zeitraum: "ca. September",
          ziele: [
            "Begriffe Vor- und Frühgeschichte sowie die Zeiteinteilung in v. Chr. und n. Chr. anwenden",
            "Leben in der Altsteinzeit als Jäger und Sammler beschreiben, auch am Beispiel des Ötzi-Fundes",
            "Übergang zur Jungsteinzeit (Ackerbau, Viehzucht, Sesshaftwerden) als „neolithische Revolution“ erklären",
            "Die Kelten als frühes Volk in Mitteleuropa anhand archäologischer Funde einordnen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Ägypten - eine frühe Hochkultur",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Ägypten - eine frühe Hochkultur",
          zeitraum: "ca. Oktober/November",
          ziele: [
            "Erklären, warum der Nil die Lebensgrundlage des alten Ägypten war",
            "Merkmale einer frühen Hochkultur benennen (Herrschaft, Religion, Arbeitsteilung, Schrift)",
            "Die Rolle des Pharaos als gottgleicher Herrscher (Monarchie) beschreiben",
            "Pyramiden als Zeugnis von Herrschaft, Religion und gesellschaftlicher Organisation deuten"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Die griechische Antike",
      zeitraum: "ca. Dezember",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Poleis, Kolonisation und das Leben der Griechen",
          zeitraum: "ca. Dezember",
          ziele: [
            "Landschaft Griechenlands und die Entstehung der Poleis (Stadtstaaten) erklären",
            "Gründe und Folgen der griechischen Kolonisation beschreiben, auch im Vergleich zu heutiger Migration",
            "Alltag, Religion und Kultur der Griechen darstellen (z. B. Olympische Spiele, Theater)"
          ]
        },
        {
          id: "lb4-2",
          titel: "Attische Demokratie, Perserkriege und Sparta",
          zeitraum: "ca. Dezember",
          ziele: [
            "Entstehung der attischen Demokratie und ihren Zusammenhang mit den Perserkriegen erklären",
            "Blütezeit Athens unter Perikles einordnen",
            "Sparta als andere Form griechischer Polis mit Athen vergleichen"
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
          titel: "Von der Republik zum Kaiserreich",
          zeitraum: "ca. Januar",
          ziele: [
            "Gründung Roms und Aufstieg zur Weltmacht im Überblick darstellen",
            "Übergang von der Republik zum Prinzipat (Caesar, Augustus) erklären",
            "Ursachen und Folgen römischer Bürgerkriege beschreiben"
          ]
        },
        {
          id: "lb5-2",
          titel: "Leben und Glauben im Römischen Reich",
          zeitraum: "ca. Februar",
          ziele: [
            "Leben in der Stadt Rom und den Alltag einer römischen Familie beschreiben",
            "Herrschaft in den Provinzen und die Romanisierung (auch in Bayern) erklären",
            "Lage des Judentums und die Durchsetzung des Christentums im Römischen Reich einordnen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Von der Antike zum Frühmittelalter",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Das Ende des Römischen Reiches",
          zeitraum: "ca. März",
          ziele: [
            "„Völkerwanderung“ und Ursachen für den Zerfall des Römischen Reiches erklären",
            "Dreiteilung der Mittelmeerwelt nach dem Ende Roms beschreiben",
            "Folgen des Zusammenbruchs für Europa in Grundzügen einordnen"
          ]
        },
        {
          id: "lb6-2",
          titel: "Die Franken, der Islam und Karl der Große",
          zeitraum: "ca. April",
          ziele: [
            "Reichsbildung der Franken nachvollziehen",
            "Ausbreitung des Islam und ihre Bedeutung für die Mittelmeerwelt einordnen",
            "Kaisertum Karls des Großen und die Verbindung germanischer, christlicher und römischer Traditionen erklären"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Technik verändert das Leben der Menschen (Längsschnitt)",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Technik verändert das Leben der Menschen (Längsschnitt)",
          zeitraum: "ca. Mai",
          ziele: [
            "Überlebenstechniken in der Vor- und Frühgeschichte mit heutigen Techniken vergleichen",
            "Bedeutung von Bewässerung (Ägypten) und Bautechnik (Griechenland, Rom) für Herrschaft und Alltag erklären",
            "Auswirkungen technischer Entwicklungen auf Umwelt und Gesellschaft einschätzen"
          ]
        }
      ]
    },
    {
      id: "lb8",
      titel: "Menschen machen Geschichte (Längsschnitt)",
      zeitraum: "ca. Juni",
      teilbereiche: [
        {
          id: "lb8-1",
          titel: "Menschen machen Geschichte (Längsschnitt)",
          zeitraum: "ca. Juni",
          ziele: [
            "Handeln historischer Persönlichkeiten beurteilen (z. B. Hatschepsut, Alexander der Große, Caesar, Karl der Große)",
            "Möglichkeiten und Grenzen menschlichen Handelns in der Geschichte erkennen",
            "Erkennen, dass die Bewertung von Personen je nach Standpunkt unterschiedlich ausfallen kann"
          ]
        }
      ]
    }
  ]
};
