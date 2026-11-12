// Inhalt: LehrplanPLUS Bayern, Realschule, Geschichte, Jahrgangsstufe 9
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/9/geschichte
// Hinweis: Die offizielle Fachlehrplan-Seite für Jgst. 9 konnte trotz
// mehrfacher Versuche nicht direkt abgerufen werden (Client-Fehler beim
// automatisierten Abruf, anders als bei den direkt lesbaren Fachlehrplan-
// Seiten für Jgst. 8 und 10). Die Inhalte dieser Datei stammen daher aus der
// offiziellen, vom ISB veröffentlichten Materialliste "Geschichte bilingual
// nach LehrplanPLUS, Jahrgangsstufe 9", die den deutschen Original-Wortlaut
// der amtlichen Lernbereiche 1-8 (mit expliziten Verweisen auf die amtliche
// Nummerierung G 9.2-G 9.8) sowie die zugehörigen Inhalte enthält; die
// Kernthemen wurden zusätzlich gegen eine unabhängige Grundwissens-
// Übersicht einer bayerischen Realschule abgeglichen. Den optionalen,
// offiziell als Lernbereich 8 geführten "Bilingualen Sachfachunterricht"
// (nur an Schulen mit entsprechendem Angebot) habe ich bewusst NICHT
// aufgenommen, da er keinen Regelunterricht darstellt. Keine WPFG-Variante:
// Geschichte wird laut amtlicher Stundentafel (Anlage 1 RSO) in allen vier
// Wahlpflichtfächergruppen inhaltsgleich mit 2 Wochenstunden unterrichtet.
// Zeitschätzung (Feld "zeitraum"): Die Materialliste nennt keine Zeit-/
// Stundenangaben je Lernbereich. Die "ca."-Zeiträume sind daher eine eigene
// Schätzung auf Basis der amtlichen Stundentafel (2 Wochenstunden Geschichte
// in Jgst. 9, Anlage 1 RSO), verteilt nach der Anzahl der Lernziele je
// Lernbereich auf ein Schuljahr von September bis Juni; Juli bleibt als
// Puffer/Wiederholungszeit frei. Lernbereich 1 (Methoden und
// Arbeitstechniken) hat keine eigenen Inhalte und ist hier als Einstieg im
// September verortet. Bei mehreren Teilbereichen wird derselbe Zeitraum
// anteilig nach Lernzielanzahl weiter unterteilt. Nur ein ungefährer
// Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_GESCHICHTE_RS_9 = {
  fach: "Geschichte",
  klasse: "9",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/9/geschichte",
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
            "Propaganda und politische Bildquellen kritisch analysieren",
            "Mit unterschiedlichen historischen Narrationen und Deutungen umgehen",
            "Historische Sachverhalte visualisieren und die Qualität von Medien bewerten"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Imperialismus und Erster Weltkrieg",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Imperialismus und der Weg in den Ersten Weltkrieg",
          zeitraum: "ca. September",
          ziele: [
            "Ziele und Methoden des europäischen Imperialismus erklären",
            "Aufteilung Afrikas unter den Kolonialmächten und ihre Folgen beurteilen (z. B. Herero-Aufstand)",
            "Wettrüsten, Bündnissysteme und die Julikrise 1914 als Ursachen des Krieges analysieren",
            "Kriegsbegeisterung und Erwartungen zu Kriegsbeginn kritisch einordnen"
          ]
        },
        {
          id: "lb2-2",
          titel: "Verlauf, Ende und Folgen des Ersten Weltkriegs",
          zeitraum: "ca. Oktober",
          ziele: [
            "Neue Dimension der Kriegsführung (Stellungskrieg, Materialschlacht) und Folgen für die Zivilbevölkerung beschreiben",
            "Bedeutung des Jahres 1917 (Kriegseintritt der USA, Russische Revolution) für den Kriegsverlauf einordnen",
            "Niederlage Deutschlands und die Bedingungen der Pariser Vorortverträge, besonders von Versailles, bewerten",
            "Novemberrevolution 1918 und ihre Bedeutung auch für Bayern erklären"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Weimarer Republik - die erste deutsche Demokratie",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Die Weimarer Verfassung und ihre Krisen",
          zeitraum: "ca. November",
          ziele: [
            "Grundzüge der Weimarer Verfassung und ihr demokratisches System beschreiben",
            "Belastungsfaktoren der jungen Republik benennen (z. B. Dolchstoßlegende, Putschversuche)",
            "Krisenjahre bis 1923 (u. a. Inflation) und anschließende Konsolidierung erklären"
          ]
        },
        {
          id: "lb3-2",
          titel: "Die 1920er-Jahre und das Scheitern der Republik",
          zeitraum: "ca. Dezember",
          ziele: [
            "Leben in der „Moderne“ der Großstadt und auf dem bayerischen Land in den 1920er-Jahren vergleichen",
            "Ursachen und Auswirkungen der Weltwirtschaftskrise 1929 erklären",
            "Scheitern der Weimarer Republik als Zusammenwirken mehrerer Faktoren beurteilen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Nationalsozialismus - Ideologie und Politik bis 1939",
      zeitraum: "ca. Januar/Februar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Die nationalsozialistische Machtergreifung und Ideologie",
          zeitraum: "ca. Januar",
          ziele: [
            "Stufen der nationalsozialistischen Machtergreifung und Systemstabilisierung darstellen (u. a. Ermächtigungsgesetz)",
            "Kernelemente der NS-Ideologie erklären (Rassismus, Führerprinzip, Volksgemeinschaft)",
            "Methoden der Gleichschaltung und Propaganda einordnen"
          ]
        },
        {
          id: "lb4-2",
          titel: "Herrschaft, Alltag und Außenpolitik im NS-Staat bis 1939",
          zeitraum: "ca. Februar",
          ziele: [
            "Leben im totalitären NS-Staat beschreiben, auch anhand bayerischer Beispiele",
            "Ausgrenzung und Verfolgung in der NS-Zeit vor 1939 erläutern",
            "Ziele und Vorgehen der nationalsozialistischen Außenpolitik bis Kriegsbeginn 1939 erklären"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Nationalsozialismus, Zweiter Weltkrieg und Holocaust - Schuld, Widerstand und Verantwortung",
      zeitraum: "ca. März/April",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Der Zweite Weltkrieg",
          zeitraum: "ca. März",
          ziele: [
            "Verlauf und Wendepunkte des Zweiten Weltkriegs in Grundzügen darstellen",
            "Expansions- und Eroberungspolitik des NS-Regimes in Europa erklären",
            "Kriegsende in Europa und Asien 1945 einordnen"
          ]
        },
        {
          id: "lb5-2",
          titel: "Holocaust, Widerstand und Verantwortung",
          zeitraum: "ca. April",
          ziele: [
            "Entrechtung, Verfolgung und Ermordung der europäischen Juden sowie weiterer Gruppen (u. a. Sinti und Roma) als Holocaust erklären",
            "Verschiedene Formen des Widerstands gegen das NS-Regime vergleichen (z. B. Georg Elser, Weiße Rose, Attentat vom 20. Juli 1944)",
            "Möglichkeiten und Grenzen von Widerstand unter einer Diktatur einschätzen",
            "Verantwortung der Deutschen damals und heute im Umgang mit dieser Geschichte diskutieren"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Jugend und Jugendkultur im Wandel der Zeit (Längsschnitt)",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Jugend und Jugendkultur im Wandel der Zeit (Längsschnitt)",
          zeitraum: "ca. Mai",
          ziele: [
            "Erziehung und Schule von der Antike bis zur Neuzeit vergleichen",
            "Erziehung und Schule im Nationalsozialismus kritisch einordnen",
            "Formen jugendlicher Gegenkultur von früher bis heute vergleichen"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Menschenrechte - Rechte für alle Menschen (Längsschnitt)",
      zeitraum: "ca. Juni",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Menschenrechte - Rechte für alle Menschen (Längsschnitt)",
          zeitraum: "ca. Juni",
          ziele: [
            "Rechtliche Ungleichheit in Antike und Mittelalter an Beispielen beschreiben",
            "Entwicklung der Menschenrechte nachvollziehen (u. a. Unabhängigkeitserklärung 1776, Menschenrechtserklärung 1789, Grundgesetz)",
            "Menschenrechtsverletzungen vom 20. Jahrhundert bis heute an Beispielen beurteilen"
          ]
        }
      ]
    }
  ]
};
