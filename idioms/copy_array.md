# ⏳ Time & Space Complexity Analysis

## 1. Spread Operator (`...`)
- **Time Complexity**: O(n) — Iterates through all `n` elements to copy them.
- **Space Complexity**: O(n) — Creates a new array with `n` elements.

## 2. Array.slice()
- **Time Complexity**: O(n) — Copies each element once.
- **Space Complexity**: O(n) — Stores a new array of size `n`.

## 3. Array.from()
- **Time Complexity**: O(n) — Iterates through all elements to construct the new array.
- **Space Complexity**: O(n) — Allocates memory for `n` elements.

## 4. JSON.parse(JSON.stringify(...)) (Deep Clone)
- **Time Complexity**: O(n) — Traverses all elements and serializes/deserializes them (with extra overhead for string conversion).
- **Space Complexity**: O(n) — Stores both the serialized string and the new array.

## 5. structuredClone() (Deep Clone)
- **Time Complexity**: O(n) — Traverses all elements deeply.
- **Space Complexity**: O(n) — Allocates memory for the deep copy.


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
