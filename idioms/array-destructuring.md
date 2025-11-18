Here’s a clear and complete guide to array destructuring in JavaScript with examples and edge cases.

What is Array Destructuring?
Array destructuring is a syntax that allows you to unpack values from arrays into individual variables in a concise way.

Basic Syntax
Javascriptconst [var1, var2, var3] = array;


Examples
1. Basic Usage
Javascriptconst numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


2. Skipping Elements
Javascriptconst colors = ["red", "green", "blue", "yellow"];
const [first, , third] = colors;

console.log(first); // "red"
console.log(third); // "blue"


3. Default Values
Javascriptconst fruits = ["apple"];
const [fruit1, fruit2 = "banana"] = fruits;

console.log(fruit1); // "apple"
console.log(fruit2); // "banana" (default used)


4. Swapping Variables
Javascriptlet x = 5, y = 10;
[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5


5. Rest Operator
Javascriptconst numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]


6. Nested Destructuring
Javascriptconst nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;

console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3
console.log(four);  // 4


7. Handling Undefined Safely
Javascriptconst arr = [42];
const [val1, val2] = arr;

console.log(val1); // 42
console.log(val2); // undefined


✅ Key Points:

You can skip elements with commas.
You can set default values.
You can use the rest operator (...) to collect remaining elements.
Works with nested arrays.
Useful for swapping variables without a temporary variable.

