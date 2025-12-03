Here is a list of "hacky" JavaScript techniques. These rely heavily on type coercion, short-circuit evaluation, and operator precedence to write extremely concise (though sometimes less readable) code.

### 1. Short-Circuit "If" Statement
Instead of writing a full `if` block to run a function only when a condition is true, use the `&&` (AND) operator.

```javascript
// Normal
if (isValid) {
  sendData();
}

// Hacky
isValid && sendData();
```
*Why it works:* JavaScript stops reading an `&&` expression as soon as it finds a `false` value. If `isValid` is true, it proceeds to execute the function.

### 2. The "Double Bang" (Boolean Casting)
Quickly convert any value (string, number, object) into a strict boolean (`true` or `false`).

```javascript
const value = "Hello";

// Normal
const bool = Boolean(value);

// Hacky
const bool = !!value; 
```
*Why it works:* The first `!` converts the "truthy" string to `false`. The second `!` flips it back to `true`.

### 3. String to Number (Unary Plus)
Convert a string representing a number into an actual number type without `parseInt` or `Number()`.

```javascript
const str = "123";

// Normal
const num = Number(str);

// Hacky
const num = +str;
```
*Why it works:* The unary `+` operator attempts to convert its operand to a number automatically.

### 4. Fast Floor (Bitwise Double NOT)
Truncate decimals (round down for positive numbers) without using `Math.floor()`.

```javascript
const num = 4.9;

// Normal
const floor = Math.floor(num);

// Hacky
const floor = ~~num; // 4
```
*Why it works:* Bitwise operators operate on 32-bit integers. Using `~` twice forces the float to become an integer, effectively dropping the decimal part.

### 5. Emptying an Array
Clear an array immediately without reassigning it to a new `[]` (which preserves the reference for other variables pointing to it).

```javascript
const arr = [1, 2, 3, 4];

// Normal
// (Looping and popping, or reassigning)

// Hacky
arr.length = 0;
```
*Why it works:* The `.length` property of a JavaScript array is writable. Setting it to 0 deletes all underlying data.

### 6. Unique Array (The Set Hack)
Remove duplicate values from an array in one line.

```javascript
const nums = [1, 1, 2, 3, 3];

// Normal
// (Looping and checking inclusion)

// Hacky
const unique = [...new Set(nums)];
```
*Why it works:* A `Set` object only stores unique values. We convert the array to a Set (killing duplicates), then spread `...` it back into an array.

### 7. Conditional Property in Object
Add a property to an object *only* if a condition is true, otherwise add nothing (not even `undefined`).

```javascript
const condition = true;

// Hacky
const user = {
  name: "John",
  ...(condition && { age: 25 })
};
```
*Why it works:* If `condition` is false, the expression becomes `...(false)`, which is ignored by the spread operator. If true, it spreads `{age: 25}` into the parent object.

### 8. Quick Timestamp
Get the current time in milliseconds without `new Date().getTime()`.

```javascript
// Normal
const ts = new Date().getTime();

// Hacky
const ts = +new Date(); // or Date.now()
```
*Why it works:* Similar to `#3`, the unary `+` triggers the `valueOf()` method of the Date object, which returns the timestamp.

### 9. Swap Variables (Destructuring)
Swap two values without a temporary variable.

```javascript
let a = 1, b = 2;

// Hacky
[a, b] = [b, a];
```

### 10. The "Poor Man's" Deep Copy
Clone an object to break its reference link.

```javascript
const obj = { a: 1, b: { c: 2 } };

// Hacky
const clone = JSON.parse(JSON.stringify(obj));
```
*Why it works:* It converts the object to a string and parses it back into a new object. *Warning: This fails on Dates, Functions, and `undefined`.*

### 11. Array Shuffle (Random Sort)
Shuffle an array quickly.

```javascript
const list = [1, 2, 3, 4, 5];

// Hacky
list.sort(() => Math.random() - 0.5);
```
*Why it works:* `Math.random() - 0.5` returns a positive or negative number randomly, tricking the sort algorithm into swapping elements arbitrarily.

### 12. Default Assignment with OR (`||`)
Assign a default value if the variable is null, undefined, or 0.

```javascript
const count = input || 10;
```
*Warning:* If `input` is actually `0` (a valid number), this code will sadly set it to `10` because `0` is falsy.

### 13. Default Assignment with Nullish Coalescing (`??`)
The modern fix for #12. Only falls back if the value is strictly `null` or `undefined`.

```javascript
const count = input ?? 10;
```
*Why it works:* If `input` is `0`, `count` remains `0`. If `input` is `null`, `count` becomes `10`.


*Hack*
```javascript
undefined || number
Rather than boolean, or operator yields the number (truthy value)

charMap[char] = charMap[char]++ || 1
```