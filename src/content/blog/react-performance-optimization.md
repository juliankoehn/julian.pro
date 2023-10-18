---
title: React Performance Tuning - How to optimize your App
description: Learn techniques like avoiding unnecessary re-renders, virtualizing lists, code splitting, and memoization to optimize and speed up React apps.
author: "Julian Köhn"
image:
  url: "../../assets/images/speed.chuttersnap.unsplash.jpg"
  alt: "The Astro logo with the word One."
date: 2023-10-20
topics: ["react", "performance", "optimization"]
---

React is fast by default but can feel sluggish if you don't pay attention to performance. Luckily there are proven techniques to optimize React apps.

In this article we'll examine methods for tuning React performance through:

- Avoiding unnecessary re-renders
- Virtualizing long lists
- Code splitting and chunking
- Preventing UI thrashing
- Properly using memoization

## Avoid Unnecessary Re-renders

A common culprit of slow rendering is unnecessary re-renders of components. Instead we should selectively render.

By default, React re-renders when state or props change. With `React.memo` we can control this:

```jsx
// Only rerenders if props change
const MyComponent = React.memo(function MyComponent(props) {
  /* only render if props change */
});
```

Wrap functional components that render often but don't change much with `React.memo`.

For classes we use `React.PureComponent`:

```jsx
class MyComponent extends React.PureComponent {
  /* only rerenders on state/prop changes */ 
}
```

This avoids wasted re-rendering cycles.

### Effect Hook Dependencies

By default, effects run on every render. We can restrict this with the second `array` argument:

```jsx 
useEffect(() => {
  // Runs only on count or term change
}, [count, term])
```

Define the minimal necessary dependencies.

## Virtualize Long Lists

Rendering long lists becomes highly inefficient. *Virtualization* means only rendering visible elements.

Libraries like [react-window](https://react-window.now.sh/) and [react-virtualized](https://bvaughn.github.io/react-virtualized/) help here. 

Say we have a long list of images:

```jsx
function MyList({photos}) {
  return (
    <div>
      {photos.map(photo => (
        <img src={photo.url} />  
      ))}
    </div>
  )
}
```

With react-window we can render more efficiently:

```jsx
import {FixedSizeList} from 'react-window';

function MyList({photos}) {
  return (
    <FixedSizeList  
      height={800}
      width={800}
      itemSize={200}
      itemCount={photos.length} 
    >
      {({index, style}) => (
        <img {...style} src={photos[index].url} />
      )}
    </FixedSizeList>
  )
}
```

Only visible items are rendered. Virtual lists revolutionize UIs with tabular data.

## Code Splitting 

Instead of loading one huge app bundle, React can split this into "chunks". Users then only load necessary code.

The React docs demo [code splitting](https://react.dev/reference/react/lazy) via `React.lazy`:

```jsx
// Lazily load component
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <OtherComponent />
    </React.Suspense>
  ); 
}
```

`OtherComponent` is now loaded asynchronously.

This also works with server side rendering via [Loadable Components](https://loadable-components.com/).

Chunking reduces load times by splitting bundles.

## Avoid UI Thrashing

"UI Thrashing" happens when too many state changes cause the DOM to re-render frequently.

Instead, we can batch state changes:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  
  // Batch multiple state changes
  setIsSubmitting(true);
  setErrors({});
  submitForm();
  setIsSubmitting(false); 
}
```

This will only re-render once instead of multiple times.

Also avoid repeatedly setting the same values.

## Use Memoization

[Memoization](https://reactjs.org/docs/react-api.html#reactmemo) caches computed values between renders.

Useful for expensive computations:

```jsx 
// Result cached between re-renders  
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

But don't overuse everywhere. Benchmarking remains important.

Memoization reduces duplicate calculations.

## Recap

- Selective re-rendering via `React.memo` and `React.PureComponent`
- Virtualize long lists for efficient rendering
- Code splitting for faster load times
- Batch state changes to prevent "thrashing" 
- Memoize expensive computations   

With these techniques, even large React apps can be optimized.