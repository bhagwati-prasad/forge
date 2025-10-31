# 🔥 Forge Framework

A lightweight, tree-shakeable frontend framework for modern web development.

## ✨ Features

- 🌲 **Tree Shaking**: Import only what you need - unused code is automatically removed from your bundle
- ⚡ **Lightweight**: Minimal footprint with modular architecture
- 🛠️ **Utilities**: Common utilities like debounce, throttle, deep clone, and more
- 📦 **State Management**: Simple yet powerful reactive state management system
- 🎨 **DOM Utilities**: Easy-to-use DOM manipulation and event handling
- 📘 **TypeScript**: Full TypeScript support with type definitions
- 🔧 **Zero Dependencies**: No external runtime dependencies

## 📦 Installation

```bash
npm install forge-framework
```

Or clone and build locally:

```bash
git clone https://github.com/bhagwati-prasad/forge.git
cd forge
npm install
npm run build
```

## 🚀 Quick Start

### Import Everything

```javascript
import { debounce, createStore, createElement } from 'forge-framework';
```

### Import Specific Modules (Better Tree Shaking)

```javascript
// Import only utilities
import { debounce, throttle, deepClone } from 'forge-framework/utils';

// Import only state management
import { createStore, computed } from 'forge-framework/state';

// Import only DOM utilities
import { select, createElement, on } from 'forge-framework/dom';
```

## 📚 API Documentation

### Utilities (`forge-framework/utils`)

#### `debounce(func, delay)`
Creates a debounced function that delays execution until after `delay` milliseconds have elapsed since the last call.

```javascript
import { debounce } from 'forge-framework/utils';

const search = debounce((query) => {
  console.log('Searching:', query);
}, 300);

input.addEventListener('input', (e) => search(e.target.value));
```

#### `throttle(func, limit)`
Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds.

```javascript
import { throttle } from 'forge-framework/utils';

const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', handleScroll);
```

#### Other Utilities

- `deepClone(obj)` - Deep clones an object
- `deepEqual(a, b)` - Checks if two values are deeply equal
- `deepMerge(target, ...sources)` - Deeply merges objects
- `uniqueId()` - Generates a unique identifier
- `camelCase(str)` - Converts string to camelCase
- `kebabCase(str)` - Converts string to kebab-case
- `pick(obj, keys)` - Picks specified properties from an object
- `omit(obj, keys)` - Omits specified properties from an object

### State Management (`forge-framework/state`)

#### `createStore(initialState)`
Creates a reactive store for state management.

```javascript
import { createStore } from 'forge-framework/state';

const store = createStore({ count: 0, user: null });

// Get current state
const state = store.getState();

// Update state
store.setState({ count: 1 });

// Update with function
store.setState((state) => ({ count: state.count + 1 }));

// Subscribe to changes
const unsubscribe = store.subscribe((state) => {
  console.log('State changed:', state);
});

// Reset to initial state
store.reset();
```

#### `computed(computeFn, ...dependencies)`
Creates a computed value that automatically updates when dependencies change.

```javascript
import { createStore, computed } from 'forge-framework/state';

const store = createStore({ count: 0 });

const doubled = computed(
  (state) => state.count * 2,
  store
);

console.log(doubled.get()); // 0

store.setState({ count: 5 });
console.log(doubled.get()); // 10
```

#### `createActions(store, actions)`
Creates action functions that modify state.

```javascript
import { createStore, createActions } from 'forge-framework/state';

const store = createStore({ count: 0 });

const actions = createActions(store, {
  increment: (state) => ({ count: state.count + 1 }),
  decrement: (state) => ({ count: state.count - 1 }),
  add: (state, amount) => ({ count: state.count + amount }),
});

actions.increment();
actions.add(5);
```

#### Middleware

```javascript
import { loggerMiddleware, persistenceMiddleware, loadPersistedState } from 'forge-framework/state';

// Logger middleware (logs state changes to console)
const logger = loggerMiddleware();

// Persistence middleware (saves to localStorage)
const persist = persistenceMiddleware('app-state');

// Load persisted state
const initialState = loadPersistedState('app-state', { count: 0 });
```

### DOM Utilities (`forge-framework/dom`)

#### `createElement(tag, attrs, ...children)`
Creates a DOM element with attributes and children.

```javascript
import { createElement } from 'forge-framework/dom';

const button = createElement(
  'button',
  {
    className: 'btn btn-primary',
    onClick: () => alert('Clicked!'),
    style: { backgroundColor: 'blue' }
  },
  'Click Me'
);
```

#### `select(selector, parent?)` & `selectAll(selector, parent?)`
Select elements from the DOM.

```javascript
import { select, selectAll } from 'forge-framework/dom';

const container = select('#app');
const items = selectAll('.item');
```

#### Event Handling

```javascript
import { on, once, delegate } from 'forge-framework/dom';

// Add event listener
const off = on(element, 'click', (e) => console.log('Clicked'));

// One-time event
once(element, 'click', (e) => console.log('Clicked once'));

// Event delegation
delegate(parent, 'click', '.button', (e) => console.log('Button clicked'));
```

#### Class Manipulation

```javascript
import { addClass, removeClass, toggleClass, hasClass } from 'forge-framework/dom';

addClass(element, 'active', 'visible');
removeClass(element, 'hidden');
toggleClass(element, 'active');
const isActive = hasClass(element, 'active');
```

#### Other DOM Utilities

- `attr(element, name, value?)` - Get/set attributes
- `css(element, styles)` - Set styles
- `append(parent, ...children)` - Append children
- `prepend(parent, ...children)` - Prepend children
- `remove(element)` - Remove element
- `ready(callback)` - Execute when DOM is ready
- `animate(element, keyframes, duration)` - Animate elements

### Component System (`forge-framework/component`)

#### `createComponent(options)`
Creates a reactive component with lifecycle hooks.

```javascript
import { createComponent, createElement } from 'forge-framework';

const button = createComponent({
  props: { label: 'Click me', count: 0 },
  template: (props) => {
    return createElement('button', {
      onClick: () => {
        props.count++;
        button.update({ count: props.count });
      }
    }, `${props.label} (${props.count})`);
  },
  mounted: (element) => console.log('Component mounted'),
  updated: (element) => console.log('Component updated'),
  unmounted: (element) => console.log('Component unmounted'),
});

button.mount('#app');
```

#### `connectToStore(options, store)`
Connects a component to a store for automatic updates.

```javascript
import { createComponent, connectToStore, createStore } from 'forge-framework';

const store = createStore({ count: 0 });

const counter = connectToStore({
  template: (props, state) => {
    return createElement('div', {},
      createElement('h1', {}, `Count: ${state.count}`),
      createElement('button', {
        onClick: () => store.setState(s => ({ count: s.count + 1 }))
      }, 'Increment')
    );
  }
}, store);

counter.mount('#app');
```

#### `createList(options)`
Creates a list component for rendering arrays.

```javascript
import { createList, createElement } from 'forge-framework';

const userList = createList({
  items: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ],
  renderItem: (user) => {
    return createElement('div', { className: 'user-card' }, user.name);
  },
  containerTag: 'ul',
  containerAttrs: { className: 'user-list' }
});

userList.mount('#users');
```

## 🌲 Tree Shaking Example

Thanks to ES modules and proper configuration, only the code you use will be included in your bundle:

```javascript
// Only these three functions will be in your bundle
import { debounce, createStore, select } from 'forge-framework';

// All other utilities, state management, and DOM functions are excluded!
```

### Bundle Size Comparison

- **Full import**: ~5.6KB minified
- **Only utils**: ~1.6KB minified
- **Only state**: ~1.3KB minified
- **Only DOM**: ~1.9KB minified
- **Only component**: ~1.4KB minified
- **Specific functions**: <1KB minified

## 📖 Examples

Check the `examples/` directory for complete examples:

- `index.html` - Interactive demo of utilities, state management, and DOM manipulation
- `component-example.html` - Demonstrates the component system with reactive updates
- `tree-shaking-example.ts` - TypeScript example showing selective imports

To run the example:

```bash
npm run build
# Open examples/index.html in your browser
```

## 🏗️ Building Your Project

### Using Rollup

```javascript
// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    terser()
  ],
  treeshake: {
    moduleSideEffects: false
  }
};
```

### Using Webpack

```javascript
// webpack.config.js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,
    sideEffects: false,
  },
};
```

### Using esbuild

```bash
esbuild src/main.js --bundle --minify --tree-shaking=true --outfile=dist/bundle.js
```

## 🧪 Development

```bash
# Install dependencies
npm install

# Build the framework
npm run build

# Watch mode for development
npm run dev

# Type checking
npm run typecheck
```

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🔮 Future Enhancements

- Component system
- Virtual DOM
- Routing
- HTTP client
- Form validation
- Animation utilities
- More comprehensive test suite
