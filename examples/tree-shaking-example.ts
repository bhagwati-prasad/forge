// This example shows how to import only what you need for tree shaking
import { debounce, throttle } from 'forge-framework/utils';
import { createStore } from 'forge-framework/state';
import { createElement, select } from 'forge-framework/dom';

// Only the imported functions will be included in your bundle!

// Example 1: Using debounce for search
const search = debounce((query) => {
  console.log('Searching for:', query);
  // Your search logic here
}, 300);

// Example 2: Using throttle for scroll handling
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
  // Your scroll logic here
}, 100);

window.addEventListener('scroll', handleScroll);

// Example 3: State management
interface AppState {
  user: {
    name: string;
    email: string;
  };
  todos: string[];
}

const store = createStore<AppState>({
  user: {
    name: 'John Doe',
    email: 'john@example.com',
  },
  todos: [],
});

// Subscribe to state changes
store.subscribe((state) => {
  console.log('State updated:', state);
  // Update your UI here
});

// Update state
store.setState((state) => ({
  todos: [...state.todos, 'New task'],
}));

// Example 4: DOM manipulation
const button = createElement(
  'button',
  {
    className: 'btn btn-primary',
    onClick: () => alert('Clicked!'),
  },
  'Click me'
);

const container = select('#app');
if (container) {
  container.appendChild(button);
}

// Example 5: Only import specific utilities you need
// Unused functions like deepClone, pick, omit won't be in your bundle
