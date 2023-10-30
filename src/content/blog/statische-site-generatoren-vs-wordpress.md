---
title: Overengineering vermeiden - Warum Statische Site Generatoren WordPress überlegen sind
description: Vergleich zwischen WordPress und Static Site Generatoren. Wann lohnt sich ein moderner SSG wie Astro statt WordPress?
topics:  
    - wordpress
    - static site generator 
    - jamstack
    - astro
    - gatsby
    - nextjs
    - headless cms
    - contentful
    - netlify
author: "Julian Köhn"
image:
  url: "../../assets/images/fikret-tozak-Zk--Ydz2IAs-unsplash.jpg"
  alt: "Photo by Fikret tozak on Unsplash"
date: 2023-11-01
---

WordPress ist das beliebteste Content Management System und eine scheinbar solide Wahl für viele Website-Projekte. Doch der enorme Funktionsumfang von WordPress geht für viele Anwendungsfälle über das Ziel hinaus und verursacht Overengineering.

Moderne Static Site Generatoren wie Astro, Gatsby oder Next.js sind oft die bessere Alternative. Sie ermöglichen schnellere, schlankere Websites mit geringeren Betriebskosten.

In diesem ausführlichen Artikel erfährst du, wann der Einsatz eines statischen Site Generators anstelle von WordPress Sinn macht. Wir vergleichen die Vor- und Nachteile beider Ansätze in den Bereichen Performance, Sicherheit, Skalierbarkeit, Entwicklung und Betrieb.

## Das Problem des Overengineerings bei WordPress-Websites

WordPress begann als einfaches Blog-System und wuchs über die Jahre zu einem sehr mächtigen Content Management System mit riesigem Funktionsumfang.

Die Kehrseite dieser mächtigen Features ist jedoch:

- Hoher Speicher- und Rechenressourcenbedarf
- Langsame Ladezeiten durch umfangreichen und komplexen Code
- Hohe Angriffsfläche für Hacker durch zahlreiche Plugins
- Aufwändige Wartung, Backups und Security-Updates
- Starke Abhängigkeit vom Hosting-Provider
- Technische Altlasten durch veralteten Code

Für viele Website-Projekte von privaten Blogs bis hin zu kleineren Unternehmenswebseiten ist der Funktionsumfang schlicht Overengineering - es wird mehr Komplexität geschaffen als tatsächlich benötigt wird.

Hier können moderne Static Site Generatoren wie Astro, Gatsby oder Next.js die bessere Wahl sein.

## Was sind statische Site Generatoren und wie funktionieren sie?
Bei Static Site Generatoren werden die Inhalte einer Website zur Build-Zeit in statische HTML- sowie Javascript-, CSS- und Bild-Dateien konvertiert.

Diese statischen Dateien können dann auf einfachem Web-Hosting bereitgestellt werden. Es ist kein dynamischer Stack mit Datenbank etc. nötig.

Beliebte Static Site Generatoren sind:

- Gatsby: Basiert auf React und GraphQL. Generiert sehr performante Websites.
- Next.js: React-basiert mit server-side rendering. Unterstützt hybride, dynamische Apps.
- Astro: Neuer Generatormit Fokus auf Geschwindigkeit und Flexibilität.
- Hugo: In Go geschriebener Generator. Schnell und einfach.
- Jekyll: Beliebte Open-Source-Lösung aus dem GitHub-Umfeld.

Der Arbeitsablauf mit einem Static Site Generator sieht so aus:

1. Die Inhalte werden in Form von Markdown, JSON oder CMS eingepflegt.
2. Der Generator baut daraus html, CSS und JavaScript und optimiert dies.
3. Die statischen Dateien werden auf einen Webserver wie Nginx oder ein CDN wie Vercel oder Netlify deployed.
4. Das Backend besteht nur noch aus statischen Assets. Die Seiten werden direkt ausgeliefert.

## Die Vorteile von Static Site Generatoren

Static Site Generatoren haben gegenüber traditionellen Content-Management-Systemen wie WordPress viele Vorteile:

### 1. Sehr schnelle Ladezeiten
Da zur Laufzeit kein komplexer Programmiercode mehr ausgeführt werden muss, sind die Ladezeiten extrem schnell und Performant.

Dies wird zunehmend zum Rankingfaktor bei Google. Auch für die Nutzererfahrung ist eine schnelle Seite essenziell.

### 2. Geringer Speicher- und Traffic-Bedarf
Durch den Verzicht auf Datenbank und serverseitige Berechnung werden deutlich weniger Serverressourcen benötigt.

Auch der Datenverkehr fällt geringer aus, da nur statische Files ausgeliefert werden. Dies senkt die Hosting-Kosten erheblich.

### 3. Höhere Sicherheit
Je weniger Code ausgeführt werden muss, desto geringer ist die Angriffsfläche für Hacker. Statische Sites sind von Natur aus sicherer als komplexe CMS-Installationen.

Auch fallen Sicherheitsupdates für Plugins und das CMS selbst weg.

### 4. Einfaches und kostengünstiges Hosting
Statt teurer und komplexer Hosting-Pakete mit Datenbank können Simple-Hosting-Dienste wie Vercel, Netlify oder Github Pages für Bereitstellung der statischen Files genutzt werden.

Dies senkt die Betriebskosten einer Website erheblich. Skalierung erfolgt simpel durch CDNs.

### 5. Flexibilität durch Headless CMS
Moderne Headless CMS wie Contentful oder Strapi können bei Bedarf angebunden werden.

So lassen sich auch größere Datenmengen und häufige Content-Änderungen abbilden, ohne die Vorteile statischer Sites zu verlieren.

### 6. Zukunftssicher durch den Jamstack-Ansatz
Statische Generatoren sind der technologische Kern des Jamstack-Ansatzes. Dieser setzt auf verteilte Systeme statt Monolithen.

Durch den Einsatz von APIs, Serverless Functions und Headless CMS wird die Website sehr flexibel und zukunftssicher.

### 7. Moderne Workflows und Technologien
Im Gegensatz zu veralteten WordPress-Codebasen können moderne Tools wie React genutzt werden.

Auch automatisierte Builds und Deployments lassen sich leicht umsetzen. Dies erleichtert die kollaborative Entwicklung.

## Performance-Vergleich Static Site Generator vs. WordPress
Geschwindigkeit ist ein kritischer Erfolgsfaktor von Websites. Langsame Ladezeiten führen zu schlechter Nutzererfahrung, höheren Absprungraten und schlechteren Rankings in Google.

Statische Websites haben hier klare Vorteile:

- Keine aufwändigen serverseitigen Berechnungen und Datenbankabfragen
- HTML kann direkt ausgeliefert werden ohne Rendering
- JavaScript und CSS werden gebündelt, minimiert und cachingfähig
- Bilder können optimiert und responsive geliefert werden
- CDN für schnelle Auslieferung weltweit

WordPress leidet oft unter Performance-Problemen:

- Hohe Server-Last durch PHP-Code und Datenbank-Abfragen
- Viel nicht-benötigter Code muss geladen werden
- Erzeugung der Seiten zur Laufzeit benötigt Rechenleistung
- Schlecht optimierte Plugins verlangsamen die Site
- Kein Client-seitiges Caching möglich

Tests zeigen, das WordPress Sites oft um den Faktor 10 langsamer sind als statische Sites. Für eine schnelle Nutzererfahrung ist ein Static Site Generator klar im Vorteil.

## Sicherheits-Vergleich: Static Site Generator vs. WordPress
Auch in Sachen Sicherheit schneiden statische Generatoren deutlich besser ab als WordPress:

- Kein komplexer Programmcode, der angegriffen werden kann
- Keine Plugins mit Sicherheitslücken
- Keine Datenbank, die kompromittiert werden kann
- Automatische Updates durch einfachen Redeploy
- Höhere Widerstandsfähigkeit durch verteilte Architektur

Dem gegenüber offenbart WordPress große Angriffsmöglichkeiten:

- Über 100.000 Zeilen Code in Core und Plugins
- Monatliche Sicherheits-Updates nötig
- Gefahr durch veraltete Plugins und Themes
- Datenbank-Leak wird zum Desaster
- Backdoors über Hacker-Plugins
- DDoS-Angriffe auf Server möglich

Statische Sites sind von Natur aus sehr viel sicherer durch die Minimierung von Angriffsfläche und Schadcode.

## Skalierbarkeit im Vergleich
Auch in Sachen Skalierbarkeit und Wachstum zeigen sich die Vorteile des Jamstack-Ansatzes:

- Neue Seiten erfordern keinen zusätzlichen Ressourcenbedarf
- CDNs sorgen für weltweit schnelle Auslieferung
- Beliebige Inhalte können ohne Performance-Einbußen hinzugefügt werden
- Einfacher Wechsel zwischen Hosting-Providern

Dem gegenüber benötigt WordPress mit wachsendem Traffic mehr Rechen- und Datenbankleistung. Oft muss komplett auf dedizierte Server migriert werden.

Durch den Einsatz von CDNs, verteiltem Hosting und Serverless Functions skalieren statische Sites nahezu unbegrenzt ohne Mehrkosten.

## Entwicklerfreundlichkeit im Vergleich

Auch für Entwickler haben Static Site Generatoren viele Vorteile:

### Moderne Workflows und Tooling
Statt veralteter PHP-basierten Setups können moderne JavaScript-Stacks wie React zum Einsatz kommen.

Linting, Testing, automatisiertes Building und Continuous Deployment sind einfach einzurichten. Dies erleichtert Collaboration.

### Übersichtlicher und konsistenter Code
Statt wild zusammengestückelter Theme- und Plugin-Codes entsteht ein konsistentes, übersichtliches Codebase.

Dies erleichtert Wartung und Weiterentwicklung enorm.

### Abstraktion der Technologien
Entwickler müssen sich nicht mit Server-Setup und Datenbank-Administration herumschlagen. Die Tools abstrahieren dies.

So kann man sich auf die Website-Logik konzentrieren statt Infrastruktur.

### Bessere Entwickler-Experience
Moderne Tools wie React mit Hot Reloading sorgen für schnellen Entwicklungszyklus. Statt nerviger Backend-Administration kann ganz auf den Frontend-Stack fokussiert werden.

Zudem ermöglichen Headless CMS wie Contentful komfortable Content-Pflege statt mühsamer Admin-Oberflächen.

## Betrieb und Wartung im Vergleich
Auch im laufenden Betrieb zeigen sich die Stärken des Jamstack-Ansatzes:

### Geringer Wartungs- und Administrations-Overhead
Updates beschränken sich auf einfaches Redeployen statt komplexer Multi-Server-Setups. Da keine Datenbank im Spiel ist, entfällt auch dieses Administrations-Overhead.

### Automatisierte Backups
Durch die Verwendung von Git werden alle Versionen gesichert. Deployment-Dienste erstellen zusätzliche Backups.

So sind umständliche manuelle Backups der Datenbank nicht mehr nötig.

### Geringere Hosting-Kosten
Anstelle von dedizierten PHP-fähigen Server-Instanzen mit MySQL-Datenbank reichen simple, kostengünstige Webhosting-Pakete.

Auch der Traffic-Bedarf ist durch statische Files deutlich niedriger, was die Kosten senkt.

### Höhere Verfügbarkeit
Die Gefahr eines kompletten Ausfalls durch Datenbank-Probleme oder Hackerangriffe ist deutlich geringer.

Zudem können bei Ausfall des Servers einfach andere Hosting-Provider genutzt werden, da die Site voll statisch ist.

## Der ideale Tech-Stack: Astro Static Site Generator mit Contentful Headless CMS

Ein Beispiel für einen leistungsfähigen Tech-Stack ist die Kombination aus [Astro Static Site Generator](https://astro.build/) und [Contentful](https://www.contentful.com/) als Headless CMS.

Dies vereint die Vorteile von statischen Sites mit der Flexibilität von strukturierten Inhalten und komfortabler Content-Pflege.

### Astro Static Site Generator
Astro ist ein sehr neuer Static Site Generator, der sich auf Geschwindigkeit und Flexibilität fokussiert.

Die Vorteile von Astro:

- Bis zu 10x schneller als andere SSGs
- Kompatibel mit React, Vue und weiteren Frameworks
- Automatisches Code-Splitting
- Integration von NPM-Paketen
- Erweiterbar durch Components

Mit Astro lassen sich extrem schnelle Websites erstellen, ohne auf Flexibilität verzichten zu müssen.

### Contentful als Headless CMS
Contentful ist ein API-basiertes Headless Content Management System. Es bietet unter anderem:

- Content-Delivery-API für Zugriff in Astro
- Automatische Image-Optimierung
- Benutzerfreundliche Oberfläche für Content-Pflege
- Flexible Content-Modellierung
- Webhooks für automatische Build-Trigger

Contentful ergänzt Astro ideal um strukturierte Inhalte und komfortable Content-Editierung.

So lassen sich auch umfangreichere Sites mit häufig wechselnden Inhalten als statische Site umsetzen.

## Fazit: Wann Static Site Generators, wann WordPress?

Zusammenfassend überwiegen bei vielen Projekten die Vorteile statischer Site Generatoren:

### Vorteile von Static Site Generatoren:

- Deutlich schnellere Performance
- Höhere Sicherheit
- Einfacheres, günstigeres Hosting
- Zukunftssichere und flexible Architektur
- Moderne Entwicklung mit JS-Stacks
- Geringerer Administrations-Aufwand

### Vorteile von WordPress:

- Bewährt und weit verbreitet
- Unendliche Erweiterbarkeit durch Plugins
- Einfache Bedienung für Redakteure
- Großes Ökosystem an Theme- und Plugin-Entwicklern

In diesen Fällen macht WordPress also weiterhin Sinn:

- Sehr große Sites wie Nachrichtenportale oder Online-Shops
- Komplexe Webanwendungen und soziale Netzwerke
- Starke Abhängigkeit von speziellen Plugins
- Große, bestehende WordPress-Installationen

Für alle anderen Anwendungsfälle von privaten Blogs bis hin zu kleineren Unternehmenswebseiten sind moderne Static Site Generatoren aber die bessere Wahl:

- Schneller, sicherer und kostengünstiger
- Einfach zu hosten und zu skalieren
- Zukunftssichere Technologien und Workflows
- Fokus auf nutzerzentrierte Performance und Funktionalität

Überengineering durch ein überdimensioniertes WordPress sollte wenn möglich vermieden werden.

Ich hoffe, dieser ausführliche Vergleich hilft dir bei der Entscheidung zwischen WordPress und Static Site Generator für dein nächstes Webprojekt. Gerne Feedback und Austausch!