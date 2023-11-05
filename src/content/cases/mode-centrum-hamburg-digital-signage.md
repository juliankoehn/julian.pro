---
title: Innovative Digital Signage Lösung für Mode Centrum Hamburg
description: Entwicklung einer verteilten, echtzeit-synchronen Digital Signage Lösung basierend auf Ubuntu Core, Golang und React. Hohe Sicherheit und modernes Kundenerlebnis.
laufzeit: 2022 - 2023
kunde: Mode Centrum Hamburg
branche: "-"
logo: 'customers/mch'
image:
  url: "../../assets/cases/images/mch_screen.jpg"
  alt: "Ein Touch Monitor im Mode Centrum Hamburg"
links:
    - title: Website
      url: https://www.modecentrum-hamburg.de/
tooling:
    - kubernetes
    - ovh
tags:
    - Digital Signage
    - Distributed Systems
    - IoT
    - Intel NUC
    - Ubuntu Core
    - Golang
    - React
    - Touch Displays
---

## Übersicht

Für das Mode Centrum Hamburg habe ich eine innovative Digital Signage Lösung entwickelt. Basierend auf Intel NUCs mit Ubuntu Core realisierte ich eine verteilte Infrastruktur, die sich in Echtzeit mit der zentralen Controlling-Plattform synchronisiert. Die Digital Signage Screens wurden als Electron-Anwendungen in JavaScript umgesetzt und kommunizieren über eine Golang API mit der Controlling-Plattform. Letztere habe ich ebenfalls entwickelt, mit einem Backend in Go und einem React-Frontend. Ubuntu Core gewährleistet höchste Sicherheit auf den Distributed Nodes. Zusätzlich unterstützen die Screensaver-Funktionen und optional auch Touch-Bedienung.

In meiner Rolle als leitender Entwickler war ich verantwortlich für das gesamte Technologie-Stack, von der Hardware-Auswahl über das Netzwerk-Design bis zur Programmierung der Golang Services und der React Oberfläche. Agile Prozesse und eine enge Abstimmung mit den Stakeholdern des Mode Centrums Hamburg ermöglichten die erfolgreiche Umsetzung innerhalb des Budgets und Zeitplans.

Die Lösung überzeugt durch Stabilität, Benutzerfreundlichkeit und ihr modernes, interaktives Kundenerlebnis.

## Herausforderungen

Die erste Idee war es, als Hardware-Grundlage auf einem Raspberry Pi 4 aufzubauen. Hier sind wir allerdings schnell an die Grenzen mit Video-Tearing und Treiber-Kompatibilität gekommen. Daher haben wir uns für Intel NUCs entschieden, die eine deutlich bessere Performance und Treiber-Abdeckung bieten.

Um die Player-Unit zu realisieren, haben wir uns für Ubuntu Core sowie Electron entschieden, da wir hier eine gute Balance zwischen Sicherheit und Flexibilität gefunden haben. Ubuntu Core bietet eine sehr gute Sicherheit und ist einfach zu warten, da es auf Snap-Packages basiert. Electron bietet eine gute Flexibilität und ist einfach zu entwickeln.

Leider mussten wir feststellen, dass ein offenes Issue in Electron seit einigen Jahren Schwierigkeiten macht mit dem System-Idle-Status. Entsprechend haben wir einen weiteren Service in Go hinzugefügt und gleichzeitig eine Caching-Ebene implementiert, um die Anzahl der API-Calls zu reduzieren.