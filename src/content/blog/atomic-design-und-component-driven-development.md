---
title: Atomic Design und Component Driven Development in React
description: Lerne wie sich mit Atomic Design wiederverwendbare Components erstellen lassen. Mit praktischen Beispielen und Tailwind CSS.
topics:
  - react
  - atomic design
  - component driven development
  - tailwindcss
author: "Julian Köhn"
image:
  url: "../../assets/images/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg"
  alt: "Photo by Hal Gatewood on Unsplash"
date: 2023-10-24
---

Atomic Design ist ein Ansatz zur Erstellung wiederverwendbarer UI Komponenten. Anstatt Seiten zu bauen, werden zuerst kleine "Atome" erstellt, die dann zu größeren Komponenten zusammengesetzt werden.

Dieser Artikel erklärt die Prinzipien von Atomic Design und zeigt praktische Beispiele mit React und Tailwind CSS.

## Die Idee hinter Atomic Design

Bei Atomic Design werden Interface-Komponenten wie chemische Atome gesehen. Atome verbinden sich zu Molekülen, die sich weiter zu größeren Organismen zusammensetzen.

Übertragen auf die UI-Entwicklung bedeutet das:

- **Atome**: Kleinste UI-Komponenten wie Buttons, Inputs etc.
- **Moleküle**: Zusammenstellungen von Atomen wie Suchleiste, Karten etc.
- **Organismen**: Komplexe Bereiche mit Molekülen und Atomen wie Header, Sidebar etc.
- **Vorlagen**: Konkrete Seiten, die aus Organismen bestehen

Durch diese hierarchische Struktur entsteht ein wiederverwendbares Component-System.

### Die Vorteile von Atomic Design

- **Wiederverwendbarkeit**: Komponenten können auf allen Seiten genutzt werden
- **Konsistenz**: Einheitliches Styling und Verhalten
- **Wartbarkeit**: Änderungen an einem Ort geschehen
- **Skalierbarkeit**: Neue Seiten durch Kombination vorhandener Komponenten

## Beispiel mit React und Tailwind CSS

Schauen wir uns ein konkretes Beispiel an. Die Atome könnten wie folgt aussehen:

```jsx
// Atom: Button
export function PrimaryButton({text}) {
  return (
    <button 
      className="bg-blue-500 text-white p-2 rounded"
    >
      {text}
    </button>
  );
}

// atom: Input
export function Input({placeholder}) {
  return (
    <input
      className="border p-2"
      type="text"
      placeholder={placeholder} 
    />
  );
}
```

Aus diesen Atomen können wir Moleküle bauen, wie eine Suchleiste:

```jsx
// molecule: SearchBar 
export function SearchBar() {
  return (
    <div className="flex items-center">
      <Input placeholder="Search..." />
      <PrimaryButton text="Go" />
    </div>
  );
}
```

Die Moleküle wiederum dienen als Basis für komplexere Organismen, wie ein Page Layout:

```jsx
// Organismus: PageLayout
export function PageLayout({children}) {
  return (
    <div className="flex flex-col">
      <header className="p-4 flex items-center">
        <h1 className="text-2xl">My Website</h1>
      </header>
      
      <SearchBar />
      
      <main className="p-8">
        {children}  
      </main>
      
    </div>
  );
}
```

Auf dieser Basis lassen sich nun einfache Vorlagen für ganze Screens erstellen:

```jsx
// Vorlage: HomePage
export function HomePage() {
  return (
    <PageLayout>
      <h1>Home</h1>
      <p>Welcome on the home page!</p>
    </PageLayout>
  );
}

// Vorlage: AboutPage
export function AboutPage() {
  return (
    <PageLayout>
     <h1>About</h1>
     <p>Learn more about us.</p>
    </PageLayout>
  );
}
```

## Projektstruktur

Eine mögliche Struktur für ein React Projekt mit Atomic Design könnte so aussehen:

```
├─ components/
│  ├─ atoms/
│  │  ├─ Button.js
│  │  ├─ Input.js
│  │  └─ ...
│  ├─ molecules/
│  │  ├─ SearchBar.js
│  │  ├─ Card.js 
│  │  └─ ...
│  └─ organisms
│     ├─ PageLayout.js
│     ├─ FeedLayout.js
│     └─ ...
├─ pages/
│  ├─ HomePage.js
│  ├─ SettingsPage.js
│  └─ ...
└─ app.js
```

Die Komponenten werden nach Atomen, Molekülen und Organismen getrennt. Die konkreten Screens liegen dann in einem separaten Pages-Ordner.

Diese Struktur ist natürlich nur ein Vorschlag - je nach Projektgröße und Team kann es auch andere sinnvolle Varianten geben.

Wichtig ist, dass man eine klare Trennung der Verantwortlichkeiten erreicht. Atome kümmern sich nur um sich selbst, Moleküle setzen Atome zusammen aber enthalten keine Business-Logik. Organismen wiederum orchestrieren Moleküle und Atome für komplexere Bereiche.

Dadurch erhält man gut getestete, wiederverwendbare Komponenten und eine saubere Codebase.

## Fazit

Atomic Design fördert wiederverwendbare Komponenten und ein konsistentes User Interface. Dadurch werden React-Apps wartbarer und erweiterbar.

Die Unterteilung in Atome, Moleküle und Organismen hilft auch, die Komplexität größerer Anwendungen zu strukturieren.

Mit Methoden wie Component Driven Development, Storybook und Tools wie Tailwind CSS lässt sich Atomic Design sehr gut umsetzen.

Ich hoffe dieser Artikel konnte die Vorteile und das Vorgehen von Atomic Design näherbringen. Probiere es doch mal in deinem nächsten Projekt aus!