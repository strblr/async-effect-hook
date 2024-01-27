# useAsyncEffect Hook

## Introduction

`useAsyncEffect` is a React hook, similar to `useEffect`, that will help you handle async effects easily and safely. It provides a convenient way to handle cleanup and lifecycle status checks for asynchronous operations such as API requests, data subscriptions, or other side effects.

## Installation

```bash
npm install async-effect-hook
```

or

```bash
yarn add async-effect-hook
```

## Usage

### Basic Example

```jsx
import { useAsyncEffect } from "async-effect-hook";

function MyComponent() {
  useAsyncEffect(async status => {
    const data = await fetchData();
    if (status.active) {
      // Perform actions if the cycle is still active
    }
  }, []);

  // Component rendering logic goes here
}
```

### Advanced Example with Cleanup

This example demonstrates how to use `useAsyncEffect` with a cleanup function that will be executed before the effect is re-run or when the component unmounts:

```jsx
import { useAsyncEffect } from "async-effect-hook";

function MyComponent() {
  useAsyncEffect(
    async status => {
      const data = await fetchData();

      // Cleanup logic
      status.cleanup = () => {
        // Cleanup operations, e.g., canceling a subscription or aborting a fetch request
      };

      if (status.active) {
        // Update state or perform actions if the component is still active
      }
    },
    [] // Dependencies
  );

  // Component rendering logic
}
```

## API

### `useAsyncEffect(effect, deps)`

- `effect`: A function that returns a promise. The function receives an `AsyncEffectStatus` object.
- `deps`: An optional array of dependencies, just like with `useEffect`.

### `AsyncEffectStatus`

An object with the following properties:

- `active`: A boolean indicating if the cycle the effect was run in is still active (`false` if the component unmounted or if the effect is re-running).
- `cleanup`: An optional function that you can assign inside the effect for cleanup logic.

## Best Practices

- Always check `status.active` before updating the state or performing actions in asynchronous tasks.
- Define cleanup logic inside the async effect by setting `status.cleanup`.
- Be cautious with dependencies to avoid unnecessary reruns of the effect.

## License

This project is licensed under the MIT License.

---

For more information, issues, or contributions, please visit the [GitHub repository](https://github.com/strblr/async-effect-hook).
