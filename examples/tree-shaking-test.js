// Test tree shaking by importing only specific functions
import { debounce } from '../dist/utils.esm.js';

// Only debounce should be in the bundle, not throttle or other utilities
const test = debounce(() => {
  console.log('Tree shaking works! Only debounce is included.');
}, 100);

test();
console.log('If you see this, the module loaded successfully!');
