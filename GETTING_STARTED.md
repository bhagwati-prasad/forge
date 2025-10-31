# Getting Started with Forge Framework

This guide will help you get started with Forge Framework and take advantage of its tree-shaking capabilities.

## Installation

```bash
npm install forge-framework
```

Or use a specific version:

```bash
npm install forge-framework@latest
```

## Quick Start

### 1. Basic Setup

Create a new project:

```bash
mkdir my-app
cd my-app
npm init -y
npm install forge-framework
```

### 2. Create Your First App

Create an `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Forge App</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="./src/main.js"></script>
</body>
</html>
```

Create `src/main.js`:

```javascript
import { createComponent, createStore, createElement } from 'forge-framework';

// Create a store
const store = createStore({ count: 0 });

// Create a component
const app = createComponent({
  template: () => {
    const state = store.getState();
    
    return createElement('div', {},
      createElement('h1', {}, 'Forge Framework'),
      createElement('p', {}, `Count: ${state.count}`),
      createElement('button', {
        onClick: () => store.setState(s => ({ count: s.count + 1 }))
      }, 'Increment')
    );
  }
});

// Subscribe to state changes
store.subscribe(() => {
  app.update();
});

// Mount the app
app.mount('#app');
```

### 3. Build for Production

#### Using Rollup

Install Rollup:

```bash
npm install --save-dev rollup @rollup/plugin-node-resolve @rollup/plugin-terser
```

Create `rollup.config.js`:

```javascript
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    terser()
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  }
};
```

Build:

```bash
npx rollup -c
```

#### Using esbuild

Install esbuild:

```bash
npm install --save-dev esbuild
```

Build:

```bash
npx esbuild src/main.js --bundle --minify --tree-shaking=true --outfile=dist/bundle.js
```

## Tree Shaking Best Practices

### 1. Import Only What You Need

❌ **Bad** - Imports everything:
```javascript
import * as forge from 'forge-framework';
forge.debounce(fn, 300);
```

✅ **Good** - Import specific functions:
```javascript
import { debounce } from 'forge-framework';
debounce(fn, 300);
```

✅ **Better** - Import from specific modules:
```javascript
import { debounce } from 'forge-framework/utils';
```

### 2. Modular Imports

Import from specific modules for better tree shaking:

```javascript
// Only utilities (1.6KB minified)
import { debounce, throttle } from 'forge-framework/utils';

// Only state management (1.3KB minified)
import { createStore, computed } from 'forge-framework/state';

// Only DOM utilities (1.9KB minified)
import { select, createElement } from 'forge-framework/dom';

// Only components (1.4KB minified)
import { createComponent } from 'forge-framework/component';
```

### 3. Dead Code Elimination

Your bundler will automatically remove unused code:

```javascript
// You import these two functions
import { debounce, throttle } from 'forge-framework/utils';

// But you only use debounce
const debouncedFn = debounce(() => console.log('Hello'), 300);

// throttle and all other utility functions will NOT be in your bundle!
```

## Common Patterns

### State Management Pattern

```javascript
import { createStore, createActions } from 'forge-framework/state';

// Create store
const store = createStore({
  user: null,
  isLoading: false,
  error: null
});

// Create actions
const actions = createActions(store, {
  setUser: (state, user) => ({ user, isLoading: false }),
  setLoading: (state, isLoading) => ({ isLoading }),
  setError: (state, error) => ({ error, isLoading: false })
});

// Use actions
actions.setLoading(true);
fetch('/api/user')
  .then(res => res.json())
  .then(user => actions.setUser(user))
  .catch(err => actions.setError(err.message));
```

### Component with Store Pattern

```javascript
import { createComponent, connectToStore, createStore, createElement } from 'forge-framework';

const store = createStore({ items: [] });

const app = connectToStore({
  template: (props, state) => {
    return createElement('div', {},
      createElement('h1', {}, 'Items'),
      ...state.items.map(item => 
        createElement('div', {}, item.name)
      )
    );
  }
}, store);

app.mount('#app');
```

### Utility Functions Pattern

```javascript
import { debounce, throttle } from 'forge-framework/utils';

// Debounce search
const search = debounce((query) => {
  fetch(`/api/search?q=${query}`)
    .then(res => res.json())
    .then(results => updateUI(results));
}, 300);

// Throttle scroll
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', handleScroll);
```

## Examples

Check the `examples/` directory for more complete examples:

- **Basic utilities** - `examples/index.html`
- **Component system** - `examples/component-example.html`
- **TypeScript usage** - `examples/tree-shaking-example.ts`

## TypeScript Support

Forge Framework includes full TypeScript definitions:

```typescript
import { createStore, type Component } from 'forge-framework';

interface AppState {
  count: number;
  user: { name: string; email: string } | null;
}

const store = createStore<AppState>({
  count: 0,
  user: null
});

// Type checking works!
store.setState({ count: 1 }); // ✅
store.setState({ invalid: true }); // ❌ TypeScript error
```

## Performance Tips

1. **Use specific imports** - Import from `forge-framework/utils` instead of `forge-framework`
2. **Enable tree shaking** - Make sure your bundler has tree shaking enabled
3. **Use production builds** - Enable minification for production
4. **Lazy load components** - Use dynamic imports for large components
5. **Memoize computed values** - Use the `computed` function for derived state

## Next Steps

- Read the [API Documentation](README.md#-api-documentation)
- Check out the [examples](examples/)
- Learn about [tree shaking best practices](#tree-shaking-best-practices)
- Explore the [component system](README.md#component-system-forge-frameworkcomponent)

## Getting Help

- Check the [README](README.md) for comprehensive API documentation
- Look at the [examples](examples/) for common patterns
- Report issues on GitHub

Happy coding with Forge! 🔥
