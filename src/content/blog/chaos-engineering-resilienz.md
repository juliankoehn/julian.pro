---
title: Chaos Engineering - So erhöhst du die Resilienz und Fehlertoleranz deines Systems
description: Lerne wie Chaos Engineering durch realistische Tests Ausfälle simuliert und so die Fehlertoleranz von Software erhöht.
language: de
topics:
  - chaos engineering
  - chaos testing
  - fault tolerance
  - resilience
  - reliability
author: "Julian Köhn"
image:
  url: "../../assets/images/xavi-cabrera-kn-UmDZQDjM-unsplash.jpg"
  alt: "Photo by Xavi Cabrera on Unsplash"
date: 2023-11-04
---

Moderne IT-Systeme sind komplex und verteilt. Komponenten können jederzeit ausfallen. Chaos Engineering ist ein Ansatz, um durch realistische Tests die Resilienz und Fehlertoleranz von Software zu erhöhen.

## Was ist Chaos Engineering?

Chaos Engineering simuliert gezielt Ausfälle und Störungen, um das Verhalten eines Systems unter chaotischen Bedingungen zu testen. Typische Szenarien sind:

- Server oder Cloud-Instanzen werden abrupt abgeschaltet
- Netzwerkverbindungen werden gekappt  
- Datenbanken werden gelöscht oder beschädigt
- Anstieg der Auslastung um ein Vielfaches innerhalb weniger Sekunden

Solche Experiments decken auf, wie gut ein System auf echte Ausfälle und Störungen vorbereitet ist. Sie geben Aufschluss über versteckte Abhängigkeiten und Engpässe. 

Chaos Engineering ermöglicht es, die Resilienz und Fehlertoleranz eines Systems gezielt zu erhöhen.

## Prinzipien des Chaos Engineerings

Chaos-Tests folgen typischerweise diesen Prinzipien:

- Eine **Hypothese** aufstellen, wie das System idealerweise auf den simulierten Ausfall reagieren sollte. Zum Beispiel: "Wenn der Haupt-Datenbankserver ausfällt, schaltet das System innerhalb von 20 Sekunden auf den Backup-Server um."

- Ein **Experiment** entwerfen, das einen realitätsnahen Ausfall simuliert. Zum Beispiel das Herunterfahren der Haupt-Datenbank mittels Script.

- Das Experiment in einer **kontrollierten Umgebung** ausführen und das Verhalten des Systems genau **beobachten**. 

- Validieren, ob das beobachtete Verhalten der aufgestellten **Hypothese** entspricht.

- Falls die Reaktion unzureichend ist, das System oder Framework **anpassen**, um die Resilienz zu erhöhen.

Der Fokus liegt also auf dem Lernen aus Fehlern und dem kontinuierlichen Verbessern der Fehlertoleranz.

## Vorteile von Chaos Engineering

Regelmäßige Chaos-Tests bieten folgende Vorteile:

- Sie sind viel **realistischer** als herkömmliche Tests auf Lower Environments.
- Sie decken **Schwachstellen** und **Abhängigkeiten** in komplexen Infrastrukturen auf.
- Sie helfen, eine **Feedback- und Lernkultur** rund um Fehler zu festigen.
- Sie erhöhen das **Vertrauen**, dass das System auch schwerwiegende Ausfälle tolerieren kann.
- Sie geben **Klarheit** über kritische Komponenten und Abhängigkeiten.

Chaos Engineering ermöglicht es also, die Stabilität und Verfügbarkeit eines Systems gezielt und signifikant zu erhöhen.

## Vom Chaos Monkey zu modernen Chaos Plattformen

Ursprünglich führte Netflix mit dem "[Chaos Monkey](https://netflix.github.io/chaosmonkey/)" zufällige Server-Abschaltungen in der Cloud durch. Dies stieß jedoch schnell an Grenzen.

Heute gibt es verschiedene Plattformen, um Chaos-Tests automatisiert, präzise und sicher auszuführen:

- **[Litmus](https://litmuschaos.io/)** als Open-Source-Chaos-Engine, die auch von GitLab oder RedHat genutzt wird
- **[Gremlin](https://www.gremlin.com/)** als SaaS-Lösung für verschiedene Angriffsszenarien
- **[Chaos Toolkit](https://chaostoolkit.org/)** auf Python-Basis
- **[Pumba](https://github.com/alexei-led/pumba)** für gezieltes Chaos in Kubernetes-Umgebungen 

Diese Plattformen ermöglichen es, maßgeschneiderte Chaos-Workflows zu definieren und automatisiert auch auf Produktivsystemen auszuführen.

Im Gegensatz zum Chaos Monkey werden die Tests also präziser, risikoärmer und automatisierbar.


## Vorgehensmodell: Chaos Engineering in der Praxis 

Wie können Unternehmen Chaos Engineering konkret einführen und umsetzen? Hier ist ein typisches Vorgehen in der Praxis:

### 1. Angriffsbereiche identifizieren

In einem komplexen, verteilten System gibt es unzählige mögliche Fehlerquellen. Hier gilt es, sich zunächst auf die wichtigsten Szenarien zu fokussieren:

- Ausfall kritischer Services
- Netzwerkpartitionen 
- Overload durch Traffic-Spikes
- Datenbankbeschädigung
- Ausfall von Rechenzentren oder Cloud-Zonen

Anhand von Risk Analysen und Erfahrungswerten lässt sich eine Top-Liste erstellen.

### 2. Auf Lower Environments testen

Bevor kritische Produktionskomponenten ins Chaos gestürzt werden, empfiehlt sich das Testen auf Lower Environments. Hier lässt sich das grundlegende Verhalten unter Ausfällen beobachten, ohne Data Loss oder Ausfallzeiten zu riskieren.

### 3. Game Days zur Validierung

In regelmäßigen "Game Days" werden geplante Chaos-Tests über mehrere Stunden oder Tage durchgeführt. Hier wird das Zusammenspiel aller Komponenten unter Ausfällen validiert. 


### 4. Hypothesen bilden und messen 

Im Vorfeld werden Hypothesen aufgestellt, wie sich das System idealerweise verhalten sollte. Anschließend wird überprüft, ob das Experiment diese bestätigt.

### 5. Chaos in Automation integrieren

Ist ein solides Grundverständnis entstanden, können Chaos-Workflows in CI/CD-Pipelines integriert werden, um sie automatisiert und regelmäßig auszuführen.


### 6. Produktivumgebung schrittweise mit einbeziehen

Nach sorgfältiger Probierung lassen sich Chaos-Tests - zunächst mit geringem Risiko - auch auf die Produktivumgebung ausweiten. Hier ist umso mehr Feedback zu erwarten.

### 7. Kontinuierliche Verbesserung

Chaos Engineering ist kein einmaliges Projekt, sondern ein andauernder Prozess. Es gilt, kontinuierlich neue Erkenntnisse zu gewinnen und das System anzupassen.

## Typische Angriffsszenarien

Hier einige gängige Angriffsszenarien, die sich für Chaos-Tests eignen:

**Netzwerkausfälle**: Durch Kappen von Netzwerkverbindungen oder Ändern von Firewall-Regeln lassen sich Ausfälle einzelner Komponenten simulieren.

**Erzeugen von Lastspitzen**: Mittels Tools wie k6 oder Artillery können extrem hohe Workloads erzeugt werden, um das Verhalten unter Last zu testen. 

**Herunterfahren von Diensten**: Das gezielte Abschalten oder Abwürgen von Prozessen deckt Abhängigkeiten und Ausweichverhalten auf. 

**Latenz erhöhen**: Durch Hinzufügen künstlicher Verzögerungen in Kommunikationspfaden werden Timeouts getestet.

**Stoppen von Cloud-Instanzen**: Das Abtöten von einzelne Servern in der Cloud umgeht üblicherweise Graceful Shutdowns.

**Beschädigen von Daten**: Das Löschen oder Manipulieren von Datenbanken oder Caches simuliert beschädigte Daten.

Durch Kombinieren solcher Szenarien lassen sich schwerwiegende Vorfälle realistisch nachstellen.

## Risiken und Herausforderungen

Chaos Engineering birgt aber auch Risiken und Herausforderungen:

- Schäden an der Produktivumgebung, wenn Tests außer Kontrolle geraten

- Sehr zeitaufwändige Wiederherstellung des ursprünglichen Zustands

- Unvorhergesehene Kaskadeneffekte, die zu Ausfällen führen

- Erhöhte Komplexität durch zusätzliche Tools und Automation

- Mangelndes Vertrauen und Akzeptanz bei Entwicklern und Betrieb

Eine sorgfältige Risikoanalyse ist daher vor jedem Experiment unverzichtbar. Chaos muss sehr kontrolliert eingeführt werden.

## Voraussetzungen für erfolgreiches Chaos Engineering

Für eine erfolgreiche Einführung empfehlen sich:

- Schaffung einer Fehler-toleranten Kultur, die aus Fehlern lernt

- Chaos als gemeinsamen Lernprozess verstehen, nicht als Bedrohung

- Management-Unterstützung und Bereitstellung von Ressourcen

- Chaos schrittweise von Lower Environments zur Produktion eskalieren

- Automatisierung, um Experimente erleichtern

- Solide Monitoring und Log-Analysen um Auswirkungen zu verstehen

- Vermeiden unnötiger Komplexität, nur Dinge automatisieren, die Mehrwert bringen

Wenn Chaos Engineering richtig eingeführt wird, überwiegen langfristig klar die Vorteile.

## Fazit

Chaos Engineering ist eine sehr leistungsfähige Methode, die Widerstandsfähigkeit komplexer, verteilter Systeme gegen Ausfälle systematisch zu erhöhen.

Die Realitätsnähe und der kontinuierliche Lernprozess sorgen für starke Verbesserungen. Allerdings erfordert Chaos Engineering auch operative Reife und sorgfältige Einführung, um die Risiken zu managen.

Für Organisationen, die Resilienz und Zuverlässigkeit ihrer Systeme ernst nehmen, ist Chaos Engineering mittlerweile unverzichtbar geworden.

Wie setzt ihr Chaos Engineering produktiv in eurem Umfeld ein? Welche Hürden musstet ihr überwinden und welche Learnings habt ihr gemacht? Ich freue mich auf den Erfahrungsaustausch!