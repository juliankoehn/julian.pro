---
title: Type-Safe React Components in TypeScript
description: Learn how to write reusable, type-safe React components in TypeScript to build robust, scalable user interfaces.
author: "Julian Köhn"
image:
  url: "../../assets/images/use-scheduler.png"
  alt: "The Astro logo with the word One."
date: 2023-10-19
topics: ["astro", "blogging", "learning in public"]
---

TypeScript brings typed goodness to React. Writing components in TS provides end-to-end catch safety nets. It takes a bit more work upfront, but prevents entire classes of runtime errors later on.

In this article, we'll explore how to author typed React component functions in TS. 

## Functional Components

Here's a basic functional component in JSX:

```jsx
// JavaScript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>; 
}
```

And the TypeScript equivalent with types:

```tsx
// TypeScript
interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({name}) => {
  return <h1>Hello, {name}</h1>;
} 
```

`React.FC` types the component. `<WelcomeProps>` defines the props shape. Clean and simple.

We can also separate the props interface:

```tsx
interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({name}) => {
  // ...
}
```

Let's explore additional patterns and best practices.

## Typing Props

Use interfaces to describe props shapes:

```tsx
interface Props {
  message: string;
  count: number;
  disabled: boolean;
  names: string[];  
  handler: () => void;
}

const MyComponent: React.FC<Props> = ({message, count}) => {
  // ...
}
```

This enforces only valid props get passed down. Else TypeScript will complain.

You can also use `PropsWithChildren` to allow passing children:

```tsx
interface Props {
  // ...
}

const MyComponent: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return <div>{children}</div>
}
```

## Optional Props

For optional props, use the `?` modifier:

```tsx 
interface Props {
  message: string;
  count?: number;
}
```

Or provide a default prop value:

```tsx
const MyComponent: React.FC<Props> = ({count = 0}) => {
  // ...
}
```

## Union Types

For props that can accept multiple types, use unions:

```tsx
interface Props {
  size: 'small' | 'medium' | 'large'; 
}
```

This ensures only valid sizes get passed in.

## Component Generics

We can make components more reusable via generics:

```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode; 
}

function List<T>(props: ListProps<T>) {
  //...
}
```

Now `List` accepts any prop types generically.

## Typing Component State

Here's how to add types to state:

```tsx
interface State {
  count: number;
  name: string;
}

class MyComponent extends React.Component<{}, State> {
  state: State = {
    count: 0,
    name: '' 
  }
}
```

`React.Component<{}, State>` types the component class.

## Typing Hooks

And typing hooks:

```tsx 
interface State {
  count: number;
  name: string; 
}

function MyComponent() {
  const [state, setState] = useState<State>({
    count: 0,
    name: ''
  })
}
```

Again `useState<State>` types the hook generically.

## Typing Functions

To type component handlers, use:

```tsx
const MyComponent: React.FC<Props> = ({ onClick }) => {

  const handleClick = (): void => {
    // Typed! 
  }

  return <button onClick={handleClick}>Click</button>
}
```

`(): void` types the function signature.

## Typing Event Handlers

For event handlers, you can type the event:

```tsx
const MyComponent = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist(); 
  }

  return <input onChange={handleChange} />;

}
```

Typing `onChange` and `e` catches errors.

## Catching Bugs

Here are some examples of bugs TypeScript would catch:

- Passing invalid prop types
- Using undefined state
- Calling props/state incorrectly
- Incorrect hook types
- Assigning wrong function types
- Passing wrong event types

Adding light types provides end-to-end protection.

## When To Use Types

Start without types to move fast. Add selectively when:

- Component grows beyond simple cases
- Finding runtime errors 
- Planning to reuse component

Avoid overengineering with types. Add judiciously to balance productivity and safety.

## Benefits of TypeScript

TypeScript pays dividends through:

- Catching bugs before runtime 
- Self-documenting code
- Easier refactors
- More reusable components
- Better tooling like intellisense

It requires more coding overhead. But reduces debugging and maintaining apps long-term. 

## Key Takeaways

- Use `React.FC` and interfaces to type components
- Generics make reusable typed components
- Type state, hooks, handlers and events
- Add types judiciously to balance productivity 
- TypeScript prevents bugs and eases maintenance

Typed components take a bit more work. But pay off exponentially in long term productivity and resilience.

What tips do you have for typing React apps? Share your experiences below!