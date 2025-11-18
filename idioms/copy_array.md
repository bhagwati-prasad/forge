# Cloning an array

## 1. Spread Operator (`...`)
- **Time Complexity**: O(n) - Iterates through all `n` elements to copy them.
- **Space Complexity**: O(n) - Creates a new array with `n` elements.

const original = [1, 2, 3];
const clone = [...original];

Pros:

Very concise and readable.
Works for shallow cloning of arrays.
Preserves array order and values.

Cons:

Shallow copy only - nested objects/arrays are still referenced.
Slightly slower than .slice() in very large arrays (but negligible for most cases).

## 2. Array.slice()
- **Time Complexity**: O(n) - Copies each element once.
- **Space Complexity**: O(n) - Stores a new array of size `n`.
const original = [1, 2, 3];
const clone = original.slice();

Pros:

Simple and widely supported (works in older browsers).
Performs a shallow copy.
Can also copy a portion of the array if needed.

Cons:

Slightly more verbose than spread syntax.
Still shallow copy - nested structures are not duplicated.


## 3. Concat with empty array
const original = [1, 2, 3];
const clone = [].concat(original);

Pros:

Works in very old browsers (pre-ES6).
Simple and reliable for shallow copies.

Cons:

Less readable compared to modern syntax.
Still shallow copy.

## 4. Array.from()
- **Time Complexity**: O(n) - Iterates through all elements to construct the new array.
- **Space Complexity**: O(n) - Allocates memory for `n` elements.

const original = [1, 2, 3];
const clone = Array.from(original);

Pros:

Works on array-like and iterable objects (e.g., Set, Map keys).
Can apply a mapping function during cloning.
Good for converting NodeLists to arrays.

Cons:

Slightly more verbose than spread.
Still shallow copy.

## 5. JSON.parse(JSON.stringify(...)) (Deep Clone)
- **Time Complexity**: O(n) - Traverses all elements and serializes/deserializes them (with extra overhead for string conversion).
- **Space Complexity**: O(n) - Stores both the serialized string and the new array.

const original = [1, { a: 2 }];
const clone = JSON.parse(JSON.stringify(original));

Pros:

Creates a deep copy for JSON-safe data.
Works in older browsers without structuredClone.

Cons:

Slow for large datasets.
Loses functions, undefined, Symbol, Date, Map, Set, etc.
Can throw errors for circular references.

## 6. structuredClone() (Deep Clone)
- **Time Complexity**: O(n) - Traverses all elements deeply.
- **Space Complexity**: O(n) - Allocates memory for the deep copy.
const original = [1, { a: 2 }];
const clone = structuredClone(original);

Pros:

Deep clones arrays and nested objects.
Handles complex data types (Dates, Maps, Sets, etc.).
Native and safe (no JSON pitfalls).

Cons:

Not supported in very old browsers (requires modern environments).
Throws if the object contains unsupported types like functions.



Here’s a clear comparison of the most common JavaScript array cloning methods, with pros and cons so you can choose the right one for your use case.



Summary Table



Method
Deep Copy?
Browser Support
Performance
Notes




Spread ([...])
❌
Modern (ES6+)
Fast
Most readable for shallow copy


.slice()
❌
All
Very Fast
Good for older browsers


Array.from()
❌
Modern (ES6+)
Fast
Works on iterables


[].concat()
❌
All
Fast
Legacy-friendly


structuredClone()
✅
Modern
Medium
Best native deep copy


JSON.parse(JSON.stringify())
✅
All
Slow
Loses non-JSON data





```
// 1. Spread Operator
const original1 = [1, 2, 3];
const clone1 = [...original1];
console.log(clone1); // [1, 2, 3]

// 2. Array.slice()
const original2 = [1, 2, 3];
const clone2 = original2.slice();
console.log(clone2); // [1, 2, 3]

// 3. Array.from()
const original3 = [1, 2, 3];
const clone3 = Array.from(original3);
console.log(clone3); // [1, 2, 3]

// 4. Deep Clone using JSON
const original4 = [1, [2, 3], { a: 4 }];
const deepCloneJSON = JSON.parse(JSON.stringify(original4));
console.log(deepCloneJSON); // [1, [2, 3], { a: 4 }]
console.log(deepCloneJSON[1] === original4[1]); // false

// 5. Deep Clone using structuredClone (Modern Browsers / Node 17+)
const original5 = [1, [2, 3], { a: 4 }];
const deepCloneStructured = structuredClone(original5);
console.log(deepCloneStructured); // [1, [2, 3], { a: 4 }]
console.log(deepCloneStructured[1] === original5[1]); // false
```
