// Inhalt: LehrplanPLUS Bayern, Realschule, Geschichte, Jahrgangsstufe 8
// Quelle: https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/8/geschichte
// Hinweis: Die offizielle Fachlehrplan-Seite wurde direkt abgerufen und als
// Grundlage verwendet. Den dort als optionaler Lernbereich 9 geführten
// "Bilingualen Sachfachunterricht" (nur an Schulen mit entsprechendem
// Angebot) habe ich bewusst NICHT aufgenommen, da er keinen Regelunterricht
// darstellt. Keine WPFG-Variante: Geschichte wird laut amtlicher Stundentafel
// (Anlage 1 RSO) in allen vier Wahlpflichtfächergruppen inhaltsgleich mit
// 2 Wochenstunden unterrichtet.
// Zeitschätzung (Feld "zeitraum"): Die offizielle Fachlehrplan-Seite nennt
// für die Lernbereiche 2-8 jeweils einen amtlichen Zeitrichtwert in Ca.-
// Stunden (insgesamt ca. 56 Std.). Diese Stundenwerte wurden proportional auf
// ein Schuljahr von September bis Juni verteilt (2 Wochenstunden Geschichte,
// Anlage 1 RSO); Juli bleibt als Puffer/Wiederholungszeit frei. Lernbereich 1
// (Methoden und Arbeitstechniken) hat laut Lehrplan keinen eigenen
// Zeitrichtwert, da er in die anderen Lernbereiche integriert ist - hier als
// Einstieg im September verortet. Auf Teilbereich-Ebene wird der jeweilige
// Lernbereich-Zeitraum anteilig nach Anzahl der Lernziele weiter unterteilt.
// Nur ein ungefährer Anhaltspunkt, keine Vorgabe.
const LEHRPLAN_GESCHICHTE_RS_8 = {
  fach: "Geschichte",
  klasse: "8",
  bundesland: "Bayern",
  lehrplan: "LehrplanPLUS",
  quelle: "https://www.lehrplanplus.bayern.de/fachlehrplan/realschule/8/geschichte",
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
            "Quellen nach Urheber, Auftraggeber, Adressat und Absicht kritisch untersuchen",
            "Bildquellen (z. B. Gemälde, Karikaturen) historisch deuten",
            "Eigene historische Erzählungen unter Berücksichtigung unterschiedlicher Perspektiven entwickeln",
            "Schaubilder, Karten, Statistiken und Diagramme zur Informationsgewinnung auswerten",
            "Denkmäler einordnen und die Qualität von (digitalen) Medien zu Geschichte bewerten"
          ]
        }
      ]
    },
    {
      id: "lb2",
      titel: "Grundlagen der Moderne",
      zeitraum: "ca. September/Oktober",
      teilbereiche: [
        {
          id: "lb2-1",
          titel: "Aufklärung und die Unabhängigkeit der USA",
          zeitraum: "ca. September",
          ziele: [
            "Kerngedanken der Aufklärung (z. B. Vernunft, Freiheit, Gewaltenteilung) erklären",
            "Entstehung der englischen Kolonien in Amerika und den Weg zur Unabhängigkeitserklärung 1776 nachvollziehen",
            "Bedeutung der Aufklärung und der amerikanischen Revolution für moderne demokratische Werte einschätzen"
          ]
        },
        {
          id: "lb2-2",
          titel: "Die Französische Revolution",
          zeitraum: "ca. Oktober",
          ziele: [
            "Mehrere Ursachen der Französischen Revolution 1789 erklären (Multikausalität)",
            "Ausbruch, Verlauf und Folgen der Revolution im Überblick darstellen",
            "Errungenschaften und Grenzen der Revolution kritisch bewerten"
          ]
        }
      ]
    },
    {
      id: "lb3",
      titel: "Napoleon und die Umgestaltung Europas",
      zeitraum: "ca. November/Dezember",
      teilbereiche: [
        {
          id: "lb3-1",
          titel: "Napoleon und die Umgestaltung Europas",
          zeitraum: "ca. November/Dezember",
          ziele: [
            "Selbstverständnis Napoleons als Kaiser und seine Herrschaft beschreiben",
            "Territoriale Veränderungen und Reformen in Bayern unter Montgelas einordnen",
            "Widerstand gegen Napoleon und die Befreiungskriege als Schritt zur deutschen Einheit deuten",
            "Handlungsspielräume und Grenzen historischer Persönlichkeiten am Beispiel Napoleons erkennen"
          ]
        }
      ]
    },
    {
      id: "lb4",
      titel: "Deutschland zwischen Restauration und Revolution",
      zeitraum: "ca. Januar",
      teilbereiche: [
        {
          id: "lb4-1",
          titel: "Deutschland zwischen Restauration und Revolution",
          zeitraum: "ca. Januar",
          ziele: [
            "Wiener Kongress und die Neuordnung Europas 1815 bewerten",
            "Deutschen Bund und die Zeit der Restauration einordnen",
            "Liberale und nationale Forderungen des Vormärz einschätzen",
            "Verlauf und Scheitern der Revolution von 1848/49 erklären"
          ]
        }
      ]
    },
    {
      id: "lb5",
      titel: "Industrialisierung und Soziale Frage",
      zeitraum: "ca. Februar/März",
      teilbereiche: [
        {
          id: "lb5-1",
          titel: "Industrialisierung und Soziale Frage",
          zeitraum: "ca. Februar/März",
          ziele: [
            "Lebensbedingungen vor und während der Industrialisierung vergleichen",
            "Verlauf der Industrialisierung in England, Deutschland und Bayern vergleichen",
            "Veränderte Arbeits- und Lebensbedingungen durch die Industrialisierung beschreiben",
            "Soziale Frage und erste Lösungsansätze (Sozialgesetzgebung) diskutieren"
          ]
        }
      ]
    },
    {
      id: "lb6",
      titel: "Das Deutsche Kaiserreich",
      zeitraum: "ca. April",
      teilbereiche: [
        {
          id: "lb6-1",
          titel: "Das Deutsche Kaiserreich",
          zeitraum: "ca. April",
          ziele: [
            "Reichsgründung 1871 auch aus bayerischer Sicht einordnen",
            "Innen- und Außenpolitik unter Bismarck beurteilen",
            "Spannung zwischen Modernisierung, Obrigkeitsstaat, Militarismus und Nationalismus erklären",
            "Darstellung von Persönlichkeiten wie Bismarck in historischen Gemälden kritisch einordnen"
          ]
        }
      ]
    },
    {
      id: "lb7",
      titel: "Protest, Aufstand und Revolution (Längsschnitt)",
      zeitraum: "ca. Mai",
      teilbereiche: [
        {
          id: "lb7-1",
          titel: "Protest, Aufstand und Revolution (Längsschnitt)",
          zeitraum: "ca. Mai",
          ziele: [
            "Formen von Protest und Widerstand in verschiedenen Epochen vergleichen",
            "Motivationen für Widerstand gegen Unfreiheit erfassen",
            "Wert persönlicher und politischer Freiheit an historischen Beispielen erkennen"
          ]
        }
      ]
    },
    {
      id: "lb8",
      titel: "Kriege und ihre Folgen (Längsschnitt)",
      zeitraum: "ca. Juni",
      teilbereiche: [
        {
          id: "lb8-1",
          titel: "Kriege und ihre Folgen (Längsschnitt)",
          zeitraum: "ca. Juni",
          ziele: [
            "Kriegsursachen von öffentlichen Rechtfertigungen unterscheiden",
            "Kriegsführung und ihre Folgen für die Zivilbevölkerung in verschiedenen Epochen vergleichen",
            "Sich für friedliche Formen der Konfliktlösung einsetzen können"
          ]
        }
      ]
    }
  ]
};
