/**
 * utils.js
 * A concept-driven JavaScript utilities library.
 * Each function highlights a key programming concept.
 */

// ==========================================================
// 🧠 FUNCTIONAL PROGRAMMING UTILITIES
// ==========================================================

/**
 * @function compose
 * @description Compose functions from right to left.
 * @concept Functional composition, higher-order functions.
 */
export const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

/**
 * @function pipe
 * @description Pipe functions from left to right.
 * @concept Function pipelines, readability.
 */
export const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

/**
 * @function curry
 * @description Convert a multi-arg function into nested unary functions.
 * @concept Currying, closures, partial application.
 */
export const curry = fn => (...args) =>
  args.length >= fn.length ? fn(...args) : (...next) => curry(fn)(...args, ...next);

/**
 * @function partial
 * @description Pre-fill some function arguments.
 * @concept Partial application.
 */
export const partial = (fn, ...presetArgs) => (...laterArgs) => fn(...presetArgs, ...laterArgs);

/**
 * @function tap
 * @description Executes a side effect in a function chain.
 * @concept Function chaining, immutability.
 */
export const tap = fn => x => {
  fn(x);
  return x;
};

/**
 * @function composeAsync
 * @description Compose async functions (right-to-left).
 * @concept Async composition, Promise chaining.
 */
export const composeAsync = (...fns) => x =>
  fns.reduceRight((v, fn) => v.then(fn), Promise.resolve(x));

/**
 * @function pipeOp
 * @description Simulate pipeline operator `|>` for chaining transformations.
 * @concept Functional pipelines, readability.
 */
export const pipeOp = (value, ...fns) => fns.reduce((v, fn) => fn(v), value);


// ==========================================================
// ⏱️ ASYNC CONTROL UTILITIES
// ==========================================================

/**
 * @function debounce
 * @description Delay function execution until inactivity.
 * @concept Closures, event control.
 */
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * @function throttle
 * @description Limit function execution rate.
 * @concept Timing control, performance optimization.
 */
export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * @function sleep
 * @description Pause execution for given milliseconds.
 * @concept Promises, async/await.
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @function retry
 * @description Retry async function multiple times on failure.
 * @concept Async recursion, error handling.
 */
export const retry = async (fn, retries = 3) => {
  try {
    return await fn();
  } catch (e) {
    if (retries > 0) return retry(fn, retries - 1);
    throw e;
  }
};

/**
 * @function semaphore
 * @description Control concurrency with limited async tasks.
 * @concept Async concurrency, scheduling.
 */
export const semaphore = limit => {
  let active = 0, queue = [];
  const next = () => {
    if (queue.length && active < limit) {
      active++;
      const fn = queue.shift();
      fn().finally(() => { active--; next(); });
    }
  };
  return fn => new Promise(resolve => {
    queue.push(() => fn().then(resolve));
    next();
  });
};

/**
 * @function onceAsync
 * @description Ensure async function executes only once.
 * @concept Async idempotence, Promise caching.
 */
export const onceAsync = fn => {
  let promise;
  return (...args) => promise || (promise = fn(...args));
};

/**
 * @function deferred
 * @description Manual control over Promise resolution.
 * @concept Deferred Promises, async coordination.
 */
export const deferred = () => {
  let resolve, reject;
  const promise = new Promise((res, rej) => (resolve = res, reject = rej));
  return { promise, resolve, reject };
};


// ==========================================================
// 🧱 OBJECT & IMMUTABILITY UTILITIES
// ==========================================================

/**
 * @function deepClone
 * @description Recursively clone an object or array.
 * @concept Recursion, immutability.
 */
export const deepClone = obj =>
  (obj && typeof obj === 'object')
    ? Array.isArray(obj)
      ? obj.map(deepClone)
      : Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepClone(v)]))
    : obj;

/**
 * @function deepFreeze
 * @description Recursively freeze an object.
 * @concept Immutability enforcement.
 */
export const deepFreeze = obj => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] && typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
};

/**
 * @function deepMerge
 * @description Deeply merge two objects.
 * @concept Recursion, structural immutability.
 */
export const deepMerge = (a, b) => {
  const result = { ...a };
  for (const key in b) {
    if (b[key] && typeof b[key] === 'object') {
      result[key] = deepMerge(a[key] || {}, b[key]);
    } else result[key] = b[key];
  }
  return result;
};

/**
 * @function deepEqual
 * @description Recursively compare two values for equality.
 * @concept Structural comparison, recursion.
 */
export const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || !a || !b) return false;
  const keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => deepEqual(a[key], b[key]));
};

/**
 * @function deepMap
 * @description Apply a transformation recursively.
 * @concept Recursion, data transformation.
 */
export const deepMap = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map(v => deepMap(v, fn))
    : (typeof obj === 'object' && obj !== null)
      ? Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepMap(v, fn)]))
      : fn(obj);


// ==========================================================
// 🌀 REACTIVE & CONTROL FLOW UTILITIES
// ==========================================================

/**
 * @function once
 * @description Execute a function only once.
 * @concept Closures, idempotence.
 */
export const once = fn => {
  let called = false, result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
};

/**
 * @function watch
 * @description Observe property changes using Proxy.
 * @concept Proxies, reactivity.
 */
export const watch = (obj, callback) => {
  const handler = {
    set(target, prop, value) {
      const old = target[prop];
      target[prop] = value;
      callback(prop, old, value);
      return true;
    }
  };
  return new Proxy(obj, handler);
};

/**
 * @function createEmitter
 * @description Publish-subscribe event emitter.
 * @concept Observer pattern.
 */
export const createEmitter = () => {
  const events = {};
  return {
    on: (type, listener) => (events[type] ||= []).push(listener),
    off: (type, listener) => events[type] = (events[type] || []).filter(l => l !== listener),
    emit: (type, ...args) => (events[type] || []).forEach(l => l(...args))
  };
};

/**
 * @function composeMiddleware
 * @description Compose async middleware functions (Koa-style).
 * @concept Async control flow, middleware chaining.
 */
export const composeMiddleware = middlewares => ctx => {
  let index = -1;
  const dispatch = i => {
    if (i <= index) throw new Error('next() called multiple times');
    index = i;
    const fn = middlewares[i];
    if (!fn) return Promise.resolve();
    return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
  };
  return dispatch(0);
};


// ==========================================================
// 📊 DATA UTILITIES
// ==========================================================

/**
 * @function memoize
 * @description Cache results of pure functions.
 * @concept Caching, referential transparency.
 */
export const memoize = fn => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

/**
 * @function lruCache
 * @description Least Recently Used cache implementation.
 * @concept Data structures, performance optimization.
 */
export const lruCache = (limit = 5) => {
  const cache = new Map();
  return key => {
    if (cache.has(key)) {
      const val = cache.get(key);
      cache.delete(key);
      cache.set(key, val);
      return val;
    }
    const value = Math.random(); // example computation
    cache.set(key, value);
    if (cache.size > limit) cache.delete(cache.keys().next().value);
    return value;
  };
};

/**
 * @function flatten
 * @description Recursively flatten nested arrays.
 * @concept Recursion, array transformation.
 */
export const flatten = arr =>
  arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

/**
 * @function groupBy
 * @description Group array items by key or computed property.
 * @concept Reduce, data aggregation.
 */
export const groupBy = (arr, fn) =>
  arr.reduce((acc, item) => {
    const key = fn(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, []);

/**
 * @function combineReducers
 * @description Combine multiple reducers into one (Redux-style).
 * @concept State management, immutability.
 */
export const combineReducers = reducers => (state = {}, action) =>
  Object.fromEntries(Object.entries(reducers).map(([key, reducer]) => [key, reducer(state[key], action)]));

