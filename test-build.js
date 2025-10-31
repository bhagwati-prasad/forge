// Quick verification that all modules can be imported
import * as forge from './dist/forge.esm.js';
import * as utils from './dist/utils.esm.js';
import * as state from './dist/state.esm.js';
import * as dom from './dist/dom.esm.js';
import * as component from './dist/component.esm.js';

console.log('✅ All modules loaded successfully!');
console.log('✅ Utils exports:', Object.keys(utils).length, 'functions');
console.log('✅ State exports:', Object.keys(state).length, 'functions');
console.log('✅ Component exports:', Object.keys(component).length, 'functions');
console.log('✅ VERSION:', forge.VERSION);
console.log('\n🔥 Forge Framework is ready to use!');
