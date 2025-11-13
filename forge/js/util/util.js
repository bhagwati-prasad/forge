// Function utilities
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
};

export const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

export const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

export const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

export const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
};

export const partial = (fn, ...args1) => (...args2) => fn(...args1, ...args2);

export const once = (fn) => {
    let called = false;
    let result;
    return (...args) => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
};

export const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

// Array utilities
export const chunk = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

export const flatten = (array) => array.flat(Infinity);

export const unique = (array) => [...new Set(array)];

export const groupBy = (array, key) => {
    return array.reduce((groups, item) => {
        const group = typeof key === 'function' ? key(item) : item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
};

export const shuffle = (array) => {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};

export const sample = (array) => array[Math.floor(Math.random() * array.length)];

export const difference = (array1, array2) => array1.filter(x => !array2.includes(x));

export const intersection = (array1, array2) => array1.filter(x => array2.includes(x));

export const union = (array1, array2) => [...new Set([...array1, ...array2])];

// Object utilities
export const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (typeof obj === 'object') {
        const clonedObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }
};

export const pick = (obj, keys) => {
    return keys.reduce((result, key) => {
        if (key in obj) result[key] = obj[key];
        return result;
    }, {});
};

export const omit = (obj, keys) => {
    const result = { ...obj };
    keys.forEach(key => delete result[key]);
    return result;
};

export const merge = (target, ...sources) => {
    return sources.reduce((acc, source) => ({ ...acc, ...source }), target);
};

export const isEmpty = (value) => {
    if (value == null) return true;
    if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
};

export const get = (obj, path, defaultValue) => {
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
        if (result == null || !(key in result)) return defaultValue;
        result = result[key];
    }
    return result;
};

export const set = (obj, path, value) => {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in current) || typeof current[key] !== 'object') {
            current[key] = {};
        }
        current = current[key];
    }
    current[keys[keys.length - 1]] = value;
    return obj;
};

// String utilities
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const camelCase = (str) => {
    return str.replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
};

export const kebabCase = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/\s+/g, '-');
};

export const snakeCase = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase().replace(/\s+/g, '_');
};

export const truncate = (str, length, suffix = '...') => {
    return str.length > length ? str.slice(0, length) + suffix : str;
};

export const padStart = (str, length, char = ' ') => str.padStart(length, char);

export const padEnd = (str, length, char = ' ') => str.padEnd(length, char);

// Number utilities
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export const round = (num, decimals = 0) => {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
};

export const isEven = (num) => num % 2 === 0;

export const isOdd = (num) => num % 2 !== 0;

// Type checking utilities
export const isArray = (value) => Array.isArray(value);

export const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

export const isFunction = (value) => typeof value === 'function';

export const isString = (value) => typeof value === 'string';

export const isNumber = (value) => typeof value === 'number' && !isNaN(value);

export const isBoolean = (value) => typeof value === 'boolean';

export const isNull = (value) => value === null;

export const isUndefined = (value) => value === undefined;

export const isNil = (value) => value == null;

// Promise utilities
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const timeout = (promise, ms) => {
    return Promise.race([
        promise,
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), ms)
        )
    ]);
};

export const retry = async (fn, attempts = 3) => {
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === attempts - 1) throw error;
        }
    }
};

// Date utilities
export const formatDate = (date, format = 'YYYY-MM-DD') => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day);
};

export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

// Validation utilities
export const isEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const isUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

// Event utilities
export const createEventEmitter = () => {
    const events = {};
    
    return {
        on: (event, callback) => {
            events[event] = events[event] || [];
            events[event].push(callback);
        },
        off: (event, callback) => {
            if (events[event]) {
                events[event] = events[event].filter(cb => cb !== callback);
            }
        },
        emit: (event, ...args) => {
            if (events[event]) {
                events[event].forEach(callback => callback(...args));
            }
        }
    };
};