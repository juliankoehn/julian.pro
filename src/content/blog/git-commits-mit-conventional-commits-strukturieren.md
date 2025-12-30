---
title: "Saubere Git Commits mit Conventional Commits"
description: Lerne wie sich mit Conventional Commits eine konsistente und maschinenlesbare Git Commit History erzeugen lässt.
language: de
author: "Julian Köhn"
image:
  url: "../../assets/images/brett-jordan-4vMfb8srdTQ-unsplash.jpg"
  alt: "Photo by Brett Jordan on Unsplash"
date: 2023-10-25
topics:
    - git
    - conventional commits
    - commitizen
    - semantic release
---

Git Commits sind die Grundbausteine für das Version Control. Doch wie strukturiert man Commits, um die Historie übersichtlich zu halten?

Conventional Commits definieren einen Standard für lesbare, maschinenlesbare Git Commit Messages. Wir schauen uns an, wie sich das in die Praxis umsetzen lässt.

## Das Problem unstrukturierter Commit Messages

Ohne Konventionen kommen häufig Kommits wie diese zustande:

```bash
Fixed bug with login

Changes to API and docs
```

Bei hunderten von Commits wird das unmöglich zu durchsuchen und nachzuvollziehen.

Weiterhin lassen sich so Commits schwer automatisch verarbeiten, zum Beispiel für Changelogs oder Versionierungs-Workflows.

## Die Spezifikation von Conventional Commits

Conventional Commits legen fest, dass Commit Messages folgendes Format haben sollten:

``` 
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Der Commit Type ist dabei einer von:

- fix: Bugfixes
- feat: Neue Features
- docs: Änderungen an der Dokumentation
- style: Formatierungsänderungen
- refactor: Refaktorierungen
- test: Teständerungen
- chore: Maintanence Änderungen

Beispiele:

```bash
fix: correct minor typos in code

feat(parser): add ability to parse arrays

docs(readme): improve usage section
```

## Vorteile von Conventional Commits

- **Lesbarkeit**: Der Commit Type gibt sofort Aufschluss über die Änderung.
- **Konsistenz**: Alle Entwickler nutzen die gleiche Systematik.
- **Suche**: Nach Commits bestimmter Typen lässt sich gut filtern.
- **Changelogs**: Changelogs können automatisiert generiert werden.
- **Semantische Versionierung**: Versionsnummern können abgeleitet werden.
- **Tooling**: Viele Tools unterstützen Conventional Commits.

## Conventional Commits in der Praxis
Folgende Schritte helfen Conventional Commits im Projekt zu etablieren:

1. Richtlinie im Team einführen und kommunizieren
2. Template erstellen (z.B. git commit template)
3. Linting mit Commitlint oder husky
4. Changelog Generation einrichten
5. CI: Pull Requests automatisch prüfen
6. Semantische Releases nutzen

Mit der Zeit werden Conventional Commits zur Gewohnheit im Entwicklungsprozess.

**Commit Template**

Ein Template sorgt für standardisierte Commit Messages:

```bash
# Datei unter .git/COMMIT_EDIT_MSG 

<type>(scope): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**Linting mit Commitlint**

Commitlint prüft eingehende Commit Messages:

```js
// commitlint.config.js

module.exports = {
  extends: ['@commitlint/config-conventional']  
};
```

Damit lassen sich fehlerhafte Commits früh abfangen.

**Automatische Changelog Generierung**

Mit Conventional Commits können Changelogs automatisch generiert werden:

```json
// package.json
{
  "release": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s" 
  }
}
```

Der Type und Scope werden für eine strukturierte Übersicht genutzt.

**Commit Checks in CI**
Commit Messages können auch in der CI automatisch validiert werden. So wird sichergestellt, das nur valide Commits gemerged werden.

## Semantische Versionierung

Bei semantischer Versionierung folgen Versionsnummern schematisch MAJOR.MINOR.PATCH.

- MAJOR: Breaking Changes
- MINOR: Neue Features, rückwärtskompatibel
- PATCH: Bugfixes, rückwärtskompatibel

```
1.0.0 -> 1.1.0 -> 1.1.1 -> 2.0.0
```

Semantische Versionierung hat mehrere Vorteile:

- **Kompatibilität**: Aus der Versionsnummer ist ersichtlich, ob sich die API geändert hat.
- **Changelogs**: Aus dem Versionsverlauf lassen sich Changes ableiten.
- **Automatisierung**: Versionen können anhand von Commits automatisch vergeben werden.


Durch dieses Schema können Abhängigkeiten besser verwaltet werden. Packages können Abhängigkeiten mit Versionsbereichen angeben:

```json
"dependencies": {
  "my-lib": "^1.1.0" 
}
```

Hier würden nur nicht-breaking Updates eingespielt werden.

**Automatisierte Releases**

Mit semantic-release können Versionsnummern und Changelogs automatisiert aus Git Commits generiert werden:

```json
"release": {
  "branches": [
    "main"
  ]
}
```

Der Release Prozess kann auch in CI integriert werden, um Analyse- und Veröffentlichungsschritte zu automatisieren.

## Fazit

Semantische Versionierung und Releases tragen zu sauberen, nachvollziehbaren Package-Updates bei. Sie vereinfachen Abhängigkeitsmanagement und Automatisierung. Conventional Commits ermöglichen es, Versionen und Changelogs automatisiert abzuleiten.
