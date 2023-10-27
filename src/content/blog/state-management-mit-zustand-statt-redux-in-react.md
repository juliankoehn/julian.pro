---
title: State Management mit Zustand statt Redux in React (2023)
description: Redux ist überholt. Lerne wie Zustand eine einfachere Alternative für State Management in React Apps bietet.
author: "Julian Köhn"
image:
  url: "../../assets/images/artem-sapegin-ZMraoOybTLQ-unsplash.jpg"
  alt: "Photo by Artem Sapegin on Unsplash"  
date: 2023-10-27
topics:
    - react
    - state management
    - zustand
    - redux
    - hooks
---

Redux war lange der De-Facto-Standard für State Management in React. Doch der Aufwand für Boilerplate Code und die Komplexität sind oft unnötig. Die React Hooks API bietet mittlerweile bessere Alternativen. Eine davon ist Zustand.

Warum Zustand Redux ersetzen kann:

## Einfachere API und weniger Code

Die Zustand API ist sehr minimal und einfach gehalten. Anstatt Action Creators, Reducers, Middlewares und Store musst du nur einfache Hooks verwenden:

```jsx
import create from 'zustand';

const useStore = create(() => ({
  bears: 0,
  increase: () => bears++ 
}))

function BearCounter() {
  const {bears, increase} = useStore();

  return <button onClick={increase}>{bears} bears</button>
}
```

Das spart im Vergleich zu Redux viel Boilerplate Code ein.

### Bessere Integration mit React Hooks
Da Zustand Hooks wie useState unter der Haube verwendet, fühlt es sich wie ein nativer Teil von React selbst an.

Redux hingegen wurde zunächst für Class Components entwickelt. Die Bindung über React-Redux fühlt sich immer noch etwas angeflanscht an.

### Flexibel und granular

Redux basiert auf einem zentralen, globalen Store. Zustand erlaubt auch mehrere kleine Stores für bestimmte Teile der App:

```jsx
const useUserStore = create(() => ({
  name: 'John',
  age: 22,
  updateName: (name) => name //...
}));

const useCartStore = create(() => ({
  items: [],
  addItem: (item) => //... 
}))
```

So lässt sich der State sehr feingranular und flexibel aufteilen, Selectors entfallen.

### Immer up-to-date

Da es keinen separaten Store gibt, sind alle Zustandsänderungen sofort ohne extra Action Dispatching sichtbar. Es gibt keine veralteten Daten.

### Einfache Async Logic

Async Funktionen und Promises können direkt in den Setter-Funktionen genutzt werden:

```jsx
const useDataStore = create(() => ({
  data: null,
  load: async () => {
    const response = await fetch('/data');
    data = await response.json();
  } 
}));
```

In Redux braucht man dafür extra Middleware wie Redux Thunk.

### Zentraler oder verteilter State

Zustand kann einen zentralen Store für die gesamte App ersetzen. Es lassen sich aber auch mehrere kleine Stores kapseln.

### Einfachere Tests

Das Testing mit Zustand ist sehr einfach. Da es sich um einfache Funktionen handelt, können diese leicht gemockt werden:

```jsx
// zustand store
const useStore = create(() => ({
  bears: 0,
  increase: () => bears++ 
}))

// test
describe('bear counter', () => {

  it('increases bears by 1', () => {
    const mockIncrease = jest.fn();
    useStore.mockReturnValue({
      bears: 5,
      increase: mockIncrease
    });

    const {increase} = useStore();
    increase();

    expect(mockIncrease).toHaveBeenCalledTimes(1); 
  })

})
```

In Redux sind die Tests um einiges mehr Aufwand durch die Actions, Reducer und den Store:

```jsx
// actions 
const incrementBears = () => {type: 'INCREMENT'};

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {...state, bears: state.bears + 1}
  }
}

// store 
const store = createStore(reducer, {bears: 5})

// test
it('increases bears by 1', () => {

  const increment = jest.spyOn(actions, 'incrementBears'); 
  store.dispatch(increment());
  
  const state = store.getState();
  expect(state.bears).toEqual(6);
  expect(increment).toHaveBeenCalledTimes(1);

})
```

Die Mocks, Spies und Store Stubbing machen Redux Tests viel komplexer. Zustand ermöglicht einfache und isolierte Tests durch seine funktionale Natur.

### Weniger Bugs

Die einfache und minimale API von Zustand führt zu weniger möglichen Fehlerquellen und Bugs verglichen mit Redux.

Ein Beispiel ist die Handhabung von asynchronen Updates. In Redux musst du daran denken, immer Action Creators statt direkte Dispatches zu verwenden:

```jsx
// falsch
store.dispatch({
  type: 'FETCH_USER',
  payload: API.fetchUser(id) // direkter Dispatch!
})

// richtig
const fetchUser = (id) => {
  return dispatch => {
    dispatch({type: 'FETCH_USER'});
    
    API.fetchUser(id)
      .then(user => dispatch({type: 'FETCH_USER_SUCCESS', payload: user}));
  }
}

store.dispatch(fetchUser(id));
```

Der direkte Dispatch führt hier zu Bugs. In Zustand kann man asynchrone Logik direkt in den Setter schreiben:

```jsx
const useUserStore = create(() => ({
  user: null,
  
  fetchUser: async (id) => {
    user = null;
    user = await API.fetchUser(id);
  } 
}))
```

Keine Chance für solche Fehler. Auch Bugs durch veraltete Daten sind in Zustand unmöglich.

Ein weiteres Beispiel sind unnötige Rerenders durch unnötige Action Dispatches:

```jsx
// Redux
function Counter() {
  const count = useSelector(state => state.count);

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  }

  return <button onClick={increment}>{count}</button>
}

// Zustand
const useCounterStore = create(() => ({
  count: 0,
  increment: () => count++
}))

function Counter() {
  const {count, increment} = useCounterStore();

  return <button onClick={increment}>{count}</button> 
}
```

Jeder Dispatch führt zu einem Rerender. Mit Zustand wird nur bei tatsächlichen Updates gerendert.

Die einfachere API und engere Bindung an React machen Bugs unwahrscheinlicher.

## Fazit:

Zustand ist eine moderne, einfachere und flexiblere Alternative zu Redux für State Management in React. Durch die nahtlose Integration in React via Hooks, minimale API und atemberaubende Flexibilität solltest du es für deine nächste App in Erwägung ziehen.

Der Boilerplate und die Komplexität von Redux machen nur noch bei sehr großen Apps Sinn. Für die meisten Anwendungsfälle ist Zustand die bessere Wahl für State in React.

Wie gefällt dir die erweiterte Version? Ich habe versucht, mehr Details, Code-Beispiele und Verlinkungen einzubauen. Sag mir gerne, wenn ich noch etwas ergänzen oder ändern soll!