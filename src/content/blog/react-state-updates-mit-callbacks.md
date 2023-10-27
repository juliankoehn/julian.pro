---
title: React State Updates mit Callbacks - Warum ist das sinnvoll?
description: Lerne die Vorteile von Callbacks bei React State Updates kennen. So schreibst du sauberen und sicheren Code.
author: "Julian Köhn"
image:
  url: "../../assets/images/ferenc-almasi-tvHtIGbbjMo-unsplash.jpg"
  alt: "Photo by Ferenc Almasi on Unsplash"
date: 2023-10-27
topics: 
    - react
    - callbacks
    - state
    - immutable
---

## Warum React State Updates mit Callbacks sinnvoll sind

In vielen React Tutorials und Online-Kursen werden State Updates häufig durch einfaches Zuweisen eines neuen State-Objekts durchgeführt. Zum Beispiel:

```ts
const [state, setState] = useState({
  tasks: [],
  count: 0  
});

const addNewTask = () => {
  const updatedTasks = [...state.tasks, newTask]; 
  setState({
    ...state,
    tasks: updatedTasks
  });
}
```

Hier wird einfach ein neues tasks Array erstellt und in den State kopiert. Auf den ersten Blick scheint das unproblematisch. Doch dieser Ansatz hat einige Nachteile und Risiken.

Ich empfinde viele Online-Kurse als negativ, da solche schlechten Practices häufig nicht thematisiert werden. Stattdessen wird nur der schnellste Weg zum Ziel gezeigt, ohne auf "best practices" einzugehen.

Besser ist es, den State immer über eine Callback-Funktion zu aktualisieren:

```ts
setState(prevState => {
  return {
    ...prevState, 
    tasks: [...prevState.tasks, newTask]
  }
});
```

Warum ist das sinnvoller?

### Side Effects vermeiden
Wenn man einfach ein neues Array übergibt, besteht die Gefahr von Side Effects. Der Aufrufer könnte versehentlich das Array verändern:

```ts
// Component A
const updatedTasks = [...state.tasks, newTask]; 

// Component B
const onButtonClick = () => {
  // Oh nein, das Array wurde versehentlich verändert!
  updatedTasks.push(anotherTask);
}

// In Component A
setState({
  ...state,
  tasks: updatedTasks  
});
```

Mit dem Callback wird immer eine neue Kopie von tasks erstellt, die Gefahr von Side Effects ist gebannt.

### Immutability gewährleisten

In React sollten State und Props immutable sein. Durch die Übergabe eines neuen Arrays könnte allerdings der bestehende State mutiert werden:

```ts
// Inside class component
addTask = (newTask) => {
  this.state.tasks.push(newTask); // Mutable!
  
  this.setState({
    ...this.state
  });
}
```

Der Callback garantiert, dass immer eine neue Kopie des State erzeugt wird.

### Veraltete Daten vermeiden

Wenn sich der State zwischen Aufruf und Verarbeitung ändert, enthält das neue Array veraltete Daten:

```ts
// Component A
const updatedTasks = [...state.tasks, newTask]; 

// Component B
setState({
  tasks: [...otherNewTasks]  
});

// In Component A
setState({
  ...state,
  tasks: updatedTasks // updatedTasks ist jetzt outdated!
});
```

Der Callback stellt sicher, dass immer die aktuellste Version des State verwendet wird.

### Funktionale und deklarative Programmierung

Callbacks fördern einen funktionalen und deklarativen Programmierstil. Statt Schritte auszuführen wird nur beschrieben WAS getan werden soll.

### Bessere Integration mit React

Durch Immutability und Vermeidung von Side Effects integrieren sich Callback-Funktionen sehr gut mit React. State Updates werden vorhersehbarer und Bugs unwahrscheinlicher.

## Warum kann ich einen alten State haben?

In React erfolgen State Updates asynchron. Wenn du setState aufrufst, wird der neue State nicht sofort gesetzt, sondern React fügt die Änderung in eine Warteschlange ein.

Der Grund dafür ist, dass setState oft von Event Handlern wie onclick aufgerufen wird. React sammelt solche aufeinanderfolgenden setState Aufrufe und führt sie als Batch aus, um die Anzahl der Render Durchläufe zu reduzieren.

Das bedeutet aber auch, dass der State sich bis zum nächsten Render Durchlauf nicht aktualisiert. Wenn zwischen setState Aufruf und Render andere State Änderungen passieren, arbeitet man mit einem alten State.

### Zusammenhang mit Rendering und Animation Frames

Nach einer Reihe von setState Aufrufen, führt React einen Render Durchlauf aus. Diesen fügt React in einen Animation Frame ein, um die Performance zu optimieren.

Das erklärt auch die Verzögerung - erst im nächsten Animation Frame wird der neue State sichtbar. Bis dahin arbeitet man mit einem veralteten Stand.

Deswegen ist es wichtig, in setState immer den aktuellen State zu referenzieren und nicht davon auszugehen, dass er sich seit dem letzten Aufruf nicht verändert hat.

## Zusammenfassung
State Updates über Callbacks sollten bevorzugt werden, da sie:

- Side Effects verhindern
- Immutable State garantieren
- Mit React sauber interagieren
- Einen deklarativen Stil ermöglichen
- Veraltete Daten vermeiden

Ich hoffe, dieser Artikel hat dir einen guten Überblick gegeben, warum dieser Ansatz sinnvoll ist. Probiere es in deinen nächsten React-Projekten aus!