// Inhalt: LehrplanPLUS Bayern, Realschule, Geschichte, Jahrgangsstufe 10
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/10/geschichte
// Hinweis: Die offizielle Fachlehrplan-Seite wurde direkt abgerufen und als
// Grundlage verwendet. Den dort als optionaler Lernbereich 8 geführten
// "Bilingualen Sachfachunterricht" (nur an Schulen mit entsprechendem
// Angebot) habe ich bewusst NICHT aufgenommen, da er keinen Regelunterricht
// darstellt. Keine WPFG-Variante: Geschichte wird laut amtlicher Stundentafel
// (Anlage 1 RSO) in allen vier Wahlpflichtfächergruppen inhaltsgleich mit
// 2 Wochenstunden unterrichtet.
// Zeitschätzung (Feld "zeitraum"): Die offizielle Fachlehrplan-Seite nennt
// für die Lernbereiche 2-7 jeweils einen amtlichen Zeitrichtwert in Ca.-
// Stunden (insgesamt ca. 48 Std.). Diese Stundenwerte wurden proportional auf
// ein Schuljahr von September bis Juni verteilt (2 Wochenstunden Geschichte,
// Anlage 1 RSO); Juli bleibt als Puffer/Wiederholungszeit frei. Lernbereich 1
// (Methoden und Arbeitstechniken) hat laut Lehrplan keinen eigenen
// Zeitrichtwert, da er in die anderen Lernbereiche integriert ist - hier als
// Einstieg im September verortet. Auf Teilbereich-Ebene wird der jeweilige
// Lernbereich-Zeitraum anteilig nach Anzahl der Lernziele weiter unterteilt.
// Nur ein ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_GESCHICHTE_RS_10 = {
  fach: "Geschichte",
  klasse: "10",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/10/geschichte",
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
            "Text-, Bild- und Sachquellen selbstständig quellenkritisch auswerten, auch Karikaturen und politische Lieder",
            "Unterschiedliche Perspektiven und Deutungen in historischen Darstellungen diskutieren",
            "Rechercheergebnisse in Schaubildern zusammenfassen und mit Karten, Diagrammen und Statistiken verknüpfen",
            "Zeitzeugenaussagen quellenkritisch einordnen und miteinander vergleichen",
            "Spiel- und Dokumentarfilme kritisch und geschichtskulturell einordnen"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Nachkriegszeit und politischer Neubeginn in Deutschland",
      zeitraum: "ca. September",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Nachkriegszeit und politischer Neubeginn in Deutschland",
          zeitraum: "ca. September",
          ziele: [
            "Weichenstellungen der Potsdamer Konferenz (Besatzungszonen, Entnazifizierung) erklären",
            "Lage im besiegten Deutschland nach 1945 beschreiben, auch mit regionalem Bezug zu Bayern",
            "Flucht und Vertreibung sowie die Integration der Heimatvertriebenen in Bayern als Einschnitt würdigen",
            "Aufbau einer demokratischen Ordnung in Bayern und die Teilung Deutschlands bis zur Gründung beider Staaten 1949 nachvollziehen"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Die Teilung Deutschlands",
      zeitraum: "ca. Oktober/November",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Die DDR als SED-Diktatur",
          zeitraum: "ca. Oktober",
          ziele: [
            "Wirtschaftliche und gesellschaftliche Verhältnisse in der DDR als Diktatur charakterisieren",
            "Rolle der Stasi und Formen staatlicher Unterdrückung an Beispielen erklären",
            "Zivilcourage und Widerstand in der DDR beurteilen"
          ]
        },
        {
          id: "lb3-2",
          titel: "Die Bundesrepublik von Adenauer bis in die 1970er-Jahre",
          zeitraum: "ca. November",
          ziele: [
            "Bedeutung von Heimatvertriebenen, DDR-Flüchtlingen und Gastarbeitern für den Aufbau der Bundesrepublik erfassen",
            "Gesellschaftliche und politische Entwicklung der BRD ab den späten 1960er-Jahren untersuchen (u. a. 68er-Bewegung, Terrorismus, Reformen)",
            "Jüdisches Leben in Deutschland nach 1945 in Grundzügen erfassen",
            "Abhängigkeit der deutsch-deutschen Geschichte von der Weltpolitik erkennen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Kalter Krieg, Entspannung und Neuorientierung in Europa und der Welt",
      zeitraum: "ca. Dezember bis Februar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Blockbildung und Kalter Krieg",
          zeitraum: "ca. Dezember",
          ziele: [
            "Blockbildung durch NATO und Warschauer Pakt und die Einbindung beider deutscher Staaten erklären",
            "Krisen des Kalten Krieges (Kuba-Krise, Vietnamkrieg) analysieren und Diplomatie als Mittel zum Frieden bewerten",
            "Folgen der Entkolonialisierung an einem Beispiel untersuchen"
          ]
        },
        {
          id: "lb4-2",
          titel: "Deutsche Wiedervereinigung und europäische Integration",
          zeitraum: "ca. Januar/Februar",
          ziele: [
            "Voraussetzungen, Ursachen und Verlauf der friedlichen Revolution in der DDR 1989 erörtern",
            "Schritte zur deutschen Wiedervereinigung nachvollziehen",
            "Erfolge und Probleme der inneren Einheit diskutieren",
            "Entwicklung und Stand der europäischen Integration (u. a. EU-Osterweiterung) einordnen"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Herausforderungen und Chancen globaler Entwicklungen der Gegenwart",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Globale Machtverschiebungen und Konflikte seit 1990",
          zeitraum: "ca. März",
          ziele: [
            "Globale Machtverschiebungen seit 1945/1990 verstehen (u. a. Aufstieg Chinas, Rolle der USA und Russlands, UNO)",
            "Entwicklung des Nahostkonflikts in Grundzügen nachvollziehen",
            "Historischen Hintergrund aktueller Krisen und Konflikte erörtern"
          ]
        },
        {
          id: "lb5-2",
          titel: "Globalisierung, Terrorismus und Migration als neue Herausforderungen",
          zeitraum: "ca. April",
          ziele: [
            "Auswirkungen einzelner Ereignisse (z. B. 11. September 2001) auf Alltag und globale Entwicklung beurteilen",
            "Bedrohungspotenzial des modernen Terrorismus sowie Möglichkeiten und Grenzen von Organisationen wie der UNO einschätzen"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Migration in der Geschichte (Längsschnitt)",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Migration in der Geschichte (Längsschnitt)",
          zeitraum: "ca. Mai",
          ziele: [
            "Migrationsbewegungen verschiedener Epochen hinsichtlich Beweggründen und Folgen vergleichen",
            "Auswanderung aus dem deutschen Kulturraum einordnen (z. B. Ostsiedlung, Auswanderung nach Amerika im 19. Jh.)",
            "Chancen und Herausforderungen von Einwanderung und Integration heute beurteilen (u. a. Flüchtlinge, Gastarbeiter, Spätaussiedler)"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Geschichtskultur - wie wir mit Geschichte umgehen (Längsschnitt)",
      zeitraum: "ca. Juni",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Geschichtskultur - wie wir mit Geschichte umgehen (Längsschnitt)",
          zeitraum: "ca. Juni",
          ziele: [
            "Beurteilen, wie Geschichte in Gesellschaften wahrgenommen und instrumentalisiert wird (z. B. im Nationalsozialismus, in der DDR)",
            "Umgang mit Geschichte im Unterhaltungssektor (z. B. Reenactment, historische Spielfilme) kritisch einordnen",
            "Offizielle Geschichtskultur erläutern (z. B. Gedenktage, UNESCO-Welterbe in Bayern)"
          ]
        }
      ]
    }
  ]
};
