---
title: Decouple Your Code - How to Separate Business Logic from UI  
description: Learn proven techniques like custom hooks, HOCs and redux to decouple React business logic from UI code for cleaner, more maintainable apps.
author: "Julian Köhn"
image:
  url: "../../assets/images/use-scheduler.png"
  alt: "Diagram showing separation of business logic and UI components."  
date: 2023-10-18
topics: ["react", "code quality", "clean code"]
---

Decoupling your business logic from UI is key for building maintainable React apps. Tightly coupled code is hard to understand, reuse, test and upgrade. 

By clearly separating responsibilities into distinct layers, you can craft lean, flexible codebases.

This article explores proven strategies like custom hooks, HOCs and redux to decouple components for cleaner code and fewer bugs.

## Why Loosely Coupled Code Matters

Symptoms of tightly coupled React code include:

- Duplicated logic across components
- Large tangled component files doing too much
- Difficulty testing UI and logic together 
- Changes cascading across unrelated components

This hurts productivity in several ways:

- **Less reusable code** - Can't share logic across the app
- **Reduced agility** - Changes require sweeping edits
- **Integration headaches** - Hard to test and maintain
- **Lower scalability** - App structure doesn't grow cleanly

Well-structured code avoids these pitfalls. Decoupled apps are easier to:

- Understand - Clear responsibilities and boundaries  
- Change - Isolated components reduce side effects
- Maintain - Less complexity eases debugging
- Scale - Modular units avoid bottlenecks

Let's explore effective strategies to decouple components.

## Ways to Decouple Business Logic

Here are proven techniques to extract business logic:

### Custom Hooks

[Custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) offer a lightweight way to reuse stateful logic:

```jsx
function Counter() {
  // Delegate logic to hook  
  const { count, increment } = useCounter() 
  
  return (
    <button onClick={increment}>
      {count}
    </button>
  )
}

function useCounter() {
  const [count, setCount] = useState(0)

  // Encapsulate reusable logic
  function increment() {
    setCount(prev => prev + 1)
  }

  return { count, increment }
}
```

Custom hooks keep components clean. Logic moves to reusable functions.

### Higher Order Components

[Higher order components (HOCs)](https://reactjs.org/docs/higher-order-components.html) are another decoupling strategy:

```jsx 
// HOC encapsulates logic
function withCounter(Component) {
  return props => {
    const [count, setCount] = useState(0)

    function increment() {
      setCount(count + 1)
    }

    return (
      <Component
        {...props}
        count={count}
        increment={increment} 
      />
    )
  }
}

function Button({ count, increment }) {
  return <button onClick={increment}>{count}</button>
}

export default withCounter(Button)
```

HOCs provide capabilities like data fetching, subscriptions etc.

### Redux State Management

Redux offers industrial-strength decoupling:

```jsx
// Component dispatches actions 
function Counter({ count, increment }) {
  return <button onClick={increment}>{count}</button>
}

// Action creator  
function increment() {
  return { type: 'INCREMENT' }
} 

// Reducer handles logic
function counter(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}
```

Redux scales for complex workflows. Overkill for small apps.

### Dependency Injection

Enterprise apps use dependency injection (DI) to decouple services:

```js
// Service encapsulates logic
class CounterService {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++ 
  }
}

// Component consumes service 
function Counter(props) {
  return <button onClick={props.counter.increment}>
    {props.counter.count}
  </button>
}

const counter = new CounterService()

<Counter counter={counter} />
```

Angular, Spring and other frameworks leverage DI heavily.

## When To Decouple Code

Aim for high cohesion and loose coupling. But don't overengineer. Indicators to refactor include:

- Duplicated logic across components
- Large confusing components
- Hard-to-test UI and logic together
- Cascading changes across app

Start by colocating code, then decouple as needed.

## Benefits of Loosely Coupled Code

Well-structured codebases yield big productivity wins through:

- Increased code clarity and focus 
- Improved maintainability and testing
- Greater reusability
- Enhanced scalability and performance
- Reduced bugs from cascading changes

Decoupling requires more upfront effort. But saves exponentially more down the road. Investing in clean architecture accelerates developing and upgrading apps.

## Key Takeaways

- Tight coupling hurts productivity through poor reuse, testing, and agility
- Custom hooks, HOCs and redux help decouple business logic from UIs
- Aim for high cohesion within components, loose coupling between
- Refactor when you see duplicated logic, tangled files, etc  
- Loosely coupled code reduces technical debt and maintenance

With techniques like hooks, HOCs and redux, you can build resilient, scalable React codebases that stand the test of time.

What strategies have worked for you? Share your experiences below!
