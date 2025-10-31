# Forge Framework - Architecture Overview

## Overview

Forge is a lightweight, modular frontend framework designed with tree-shaking as a core principle. The framework is built using ES modules to ensure that only the code you actually use ends up in your final bundle.

## Architecture

### Modular Design

The framework is split into independent modules that can be imported separately:

```
forge-framework/
├── utils      - Utility functions
├── state      - State management
├── dom        - DOM manipulation
└── component  - Component system
```

Each module is built independently and can be used without the others, ensuring optimal tree-shaking.

### Tree Shaking Implementation

#### Package Configuration

The `package.json` includes:

```json
{
  "type": "module",
  "sideEffects": false,
  "exports": {
    ".": "./dist/forge.esm.js",
    "./utils": "./dist/utils.esm.js",
    "./state": "./dist/state.esm.js",
    "./dom": "./dist/dom.esm.js",
    "./component": "./dist/component.esm.js"
  }
}
```

- `"type": "module"` - Declares this as an ES module package
- `"sideEffects": false` - Tells bundlers that no files have side effects, enabling aggressive tree shaking
- `"exports"` - Provides specific entry points for each module

#### Build Configuration

Rollup is configured with:

```javascript
{
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  }
}
```

This ensures the framework itself is built with tree shaking in mind.

## Module Details

### 1. Utils Module (`forge-framework/utils`)

**Purpose:** Common utility functions for everyday tasks.

**Functions:**
- `debounce(func, delay)` - Delays function execution
- `throttle(func, limit)` - Limits function execution rate
- `deepClone(obj)` - Deep object cloning
- `deepEqual(a, b)` - Deep equality checking
- `deepMerge(target, ...sources)` - Deep object merging
- `uniqueId()` - Unique ID generation
- `camelCase(str)` - String to camelCase
- `kebabCase(str)` - String to kebab-case
- `pick(obj, keys)` - Pick object properties
- `omit(obj, keys)` - Omit object properties

**Size:** 1.6KB minified

**Use Case:** Import only the utilities you need:
```javascript
import { debounce, throttle } from 'forge-framework/utils';
```

### 2. State Module (`forge-framework/state`)

**Purpose:** Reactive state management without the complexity of larger libraries.

**Features:**
- **Store:** Reactive state container with subscription
- **Computed:** Derived values that update automatically
- **Actions:** Organize state mutations
- **Middleware:** Logger and persistence middleware

**Size:** 1.3KB minified

**Design Pattern:**
```javascript
// Create store
const store = createStore(initialState);

// Subscribe to changes
store.subscribe((state) => updateUI(state));

// Update state
store.setState({ key: value });
```

### 3. DOM Module (`forge-framework/dom`)

**Purpose:** Simplified DOM manipulation and event handling.

**Categories:**

1. **Element Creation & Selection:**
   - `createElement(tag, attrs, ...children)` - Create elements
   - `select(selector)` - Query single element
   - `selectAll(selector)` - Query multiple elements

2. **Event Handling:**
   - `on(element, event, handler)` - Add event listener
   - `once(element, event, handler)` - One-time event
   - `delegate(parent, event, selector, handler)` - Event delegation

3. **Class & Style Manipulation:**
   - `addClass/removeClass/toggleClass/hasClass` - Class management
   - `css(element, styles)` - Style manipulation
   - `attr(element, name, value)` - Attribute management

4. **DOM Manipulation:**
   - `append/prepend` - Add children
   - `remove` - Remove elements
   - `animate` - Animate elements

**Size:** 1.9KB minified

### 4. Component Module (`forge-framework/component`)

**Purpose:** Reactive component system for building UIs.

**Features:**
- **Component Creation:** `createComponent(options)`
- **Store Connection:** `connectToStore(options, store)`
- **List Rendering:** `createList(options)`

**Lifecycle Hooks:**
- `mounted(element)` - Called when component is added to DOM
- `updated(element)` - Called when component updates
- `unmounted(element)` - Called when component is removed

**Size:** 1.4KB minified

## How Tree Shaking Works

### Example 1: Import Specific Functions

```javascript
// Source code
import { debounce } from 'forge-framework/utils';

const debouncedSearch = debounce(search, 300);
```

**Result:** Only `debounce` is included in the bundle. All other utility functions like `throttle`, `deepClone`, etc., are removed by the bundler.

**Bundle Size:** ~300 bytes (just the debounce function)

### Example 2: Import Multiple Functions

```javascript
// Source code
import { debounce, throttle, deepClone } from 'forge-framework/utils';
```

**Result:** Only these three functions are included. The remaining 7+ utility functions are excluded.

**Bundle Size:** ~800 bytes

### Example 3: Import from Multiple Modules

```javascript
import { debounce } from 'forge-framework/utils';
import { createStore } from 'forge-framework/state';
import { select } from 'forge-framework/dom';
```

**Result:** Only the imported functions from each module are included. This is better than importing from the main entry point because unused modules are completely excluded.

**Bundle Size:** ~1.5KB (vs 5.6KB for full import)

## Best Practices

### ✅ DO: Use Modular Imports

```javascript
// Best - Import from specific modules
import { debounce } from 'forge-framework/utils';
import { createStore } from 'forge-framework/state';
```

### ✅ DO: Import Only What You Need

```javascript
// Only import functions you actually use
import { debounce, throttle } from 'forge-framework/utils';
```

### ❌ DON'T: Use Namespace Imports

```javascript
// Bad - Imports everything
import * as forge from 'forge-framework';
forge.debounce(fn, 300);
```

### ❌ DON'T: Import Unused Functions

```javascript
// Bad - Importing unused functions
import { debounce, throttle, deepClone } from 'forge-framework/utils';

// Only using debounce
const fn = debounce(() => {}, 300);
```

## Performance Characteristics

### Bundle Size Comparison

| Import Strategy | Bundle Size | Reduction |
|----------------|-------------|-----------|
| Full import | 5.6KB | Baseline |
| Utils only | 1.6KB | 71% |
| State only | 1.3KB | 77% |
| DOM only | 1.9KB | 66% |
| Component only | 1.4KB | 75% |
| Single function | <1KB | >80% |

### Runtime Performance

- **No runtime overhead** - No framework initialization
- **Direct function calls** - No indirection or proxies
- **Minimal memory usage** - Only loaded code is in memory
- **Fast startup** - Small bundle size = faster load times

## Extension Points

The framework is designed to be extended:

### Custom Utilities

```javascript
// Your custom utilities can be added alongside framework utilities
import { debounce } from 'forge-framework/utils';
import { myCustomUtil } from './my-utils';
```

### Custom Middleware

```javascript
import { createStore } from 'forge-framework/state';

const myMiddleware = (store) => (next) => (state) => {
  // Your custom logic
  next(state);
};
```

### Custom Components

```javascript
import { createComponent } from 'forge-framework/component';

// Build your own component library
export function MyCustomComponent(props) {
  return createComponent({
    props,
    template: () => { /* ... */ }
  });
}
```

## Testing Strategy

The framework is designed to be easily testable:

```javascript
// Unit test utilities
import { debounce } from 'forge-framework/utils';

test('debounce delays execution', () => {
  jest.useFakeTimers();
  const fn = jest.fn();
  const debounced = debounce(fn, 300);
  
  debounced();
  expect(fn).not.toBeCalled();
  
  jest.advanceTimersByTime(300);
  expect(fn).toBeCalled();
});
```

## Browser Compatibility

- Modern browsers with ES6+ support
- Can be transpiled for older browsers using Babel
- No polyfills required for core functionality

## Future Enhancements

Potential additions while maintaining tree-shakeable architecture:

1. **Router Module** - Client-side routing
2. **HTTP Module** - Fetch wrapper with interceptors
3. **Form Module** - Form validation and handling
4. **Animation Module** - Advanced animation utilities
5. **Test Utils Module** - Testing helpers

Each would be a separate module for independent import.

## Conclusion

Forge Framework demonstrates that a modern, feature-rich frontend framework can be both powerful and lightweight. By prioritizing tree shaking and modular architecture from the start, developers get exactly what they need, nothing more.

**Key Principles:**
1. Modular by default
2. Tree-shakeable by design
3. TypeScript first
4. Zero dependencies
5. Developer experience focused
