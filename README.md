                        Interview-Style Conceptual Questions

# A1

## Difference Between var, let, and const

In JavaScript, there are three ways to declare variables: **var**, **let**, and **const**.

| Feature        | var                      | let                | const              |
| -------------- | ------------------------ | ------------------ | ------------------ |
| Scope          | Function scope           | Block scope        | Block scope        |
| Hoisting       | Hoisted with `undefined` | Hoisted but in TDZ | Hoisted but in TDZ |
| Re-declaration | Allowed                  | Not allowed        | Not allowed        |
| Re-assignment  | Allowed                  | Allowed            | Not allowed        |

## Scope

* `var` is limited to the function in which it is declared.
* `let` and `const` are limited to the block (`{}`) in which they are declared.

## Hoisting and TDZ

* `var` is hoisted to memory and initialized with the value `undefined`.
* `let` and `const` are also hoisted, but they cannot be accessed before their declaration. This period is called the **Temporal Dead Zone (TDZ)**.

## Re-declaration and Re-assignment

* `var` can be re-declared in the same scope.
* `let` and `const` cannot be re-declared in the same scope.
* A `const` variable cannot be reassigned, but the properties of a `const` object can still be modified.

## What Should You Use in Modern JavaScript?

* Use **const** by default.
* Use **let** when the value needs to change.
* Avoid **var** because its function scope and hoisting behavior can lead to unexpected bugs.

In modern JavaScript, it is recommended to use **const** by default because it prevents accidental reassignment and makes the code easier to understand.

Use **let** when you know that the value of a variable will change during program execution.

Avoid using **var** because it has function scope instead of block scope and its hoisting behavior can cause unexpected bugs and make code harder to maintain.

### Examples

#### Using const (Recommended by Default)

```javascript
const companyName = "TechnerLab";
console.log(companyName);
```

The value of `companyName` cannot be reassigned.

#### Using let (When Value Changes)

```javascript
let score = 50;
score = 75;

console.log(score); // 75
```

`let` allows the value to be updated when needed.

#### Avoiding var

```javascript
if (true) {
    var message = "Hello";
}

console.log(message); // Hello
```

Because `var` is function-scoped, it is accessible outside the block, which may lead to unexpected behavior.

```javascript
if (true) {
    let greeting = "Hello";
}

console.log(greeting); // Error
```

`let` is block-scoped, making the code safer and more predictable.





## A2

## V8 Engine and JavaScript Single-Threaded Model

The **V8 engine** is Google’s JavaScript engine that converts JavaScript code into machine code and executes it. It is used in both the **Chrome browser** and **Node.js**.

---

## JIT Compilation

V8 uses **Just-In-Time (JIT) compilation**, which works as follows:

* The code is first parsed.
* During runtime, frequently used code is optimized and converted into machine code.
* This improves the overall performance and makes JavaScript execution faster.

---

## What Does Single-Threaded Mean?

JavaScript is **single-threaded**, meaning it executes only one instruction at a time.

It has:

* One Call Stack (At a time, only one function is executed, but functions can be called multiple times).
 
* One main execution thread

---

## How Are Asynchronous Tasks Handled?

Even though JavaScript is single-threaded, it can still handle asynchronous tasks like `setTimeout`, `fetch`, and DOM events.

The process works like this:

1. Function execution starts in the **Call Stack**.
2. Async operations are offloaded to **Web APIs (in browsers)** or **libuv (in Node.js)**.
3. Once the operation is completed, the callback is placed in the **Callback Queue**.
4. The **Event Loop** checks whether the Call Stack is empty.
5. If the stack is empty, the callback is moved from the queue to the stack for execution.

---

## Important Terms

* **Call Stack:** A stack that keeps track of currently executing functions.
* **Web APIs:** Browser-provided features for handling asynchronous tasks.
* **Callback Queue:** A queue where completed async callbacks wait to be executed.
* **Event Loop:** A mechanism that coordinates between the call stack and callback queue.

---


## A3 — Data Types and Type Coercion
JavaScript Data Types

JavaScript has 8 data types.

Primitive Types (7)
String — text values
Number — numeric values
Boolean — true/false values
Undefined — a variable that is declared but has no value assigned
Null — represents an intentional empty value
Symbol — unique identifiers
BigInt — used for very large integers
Non-Primitive Type
Object — includes objects, arrays, functions, etc.
typeof null === 'object' Bug

There is a historical bug in JavaScript:

typeof null // "object"

This happened due to the initial design of JavaScript in 1995, and it was never fixed because of backward compatibility.

Type Coercion

Type coercion means JavaScript automatically or manually converts values from one type to another.

Implicit Coercion (Automatic)

JavaScript automatically converts data types.

Examples:

"5" + 1   // "51"
"5" - 1   // 4
true + 1  // 2
Explicit Coercion (Manual)

The developer manually converts the type.

Examples:

Number("5")   // 5
String(100)   // "100"
Boolean(0)    // false
== vs ===
== (loose equality) → performs type coercion
=== (strict equality) → checks both value and type

Examples:

"5" == 5   // true
"5" === 5  // false
Conclusion

In modern JavaScript, using === is considered safer because it avoids unexpected type conversion issues.



A4 — Primitive vs Non-Primitive
Primitive vs Non-Primitive Data Types

JavaScript data types are divided into two categories:

Primitive Types
String
Number
Boolean
Undefined
Null
Symbol
BigInt

Primitive values are usually stored in stack memory. They are immutable, meaning they cannot be changed.

Non-Primitive Types
Object
Array
Function

Non-primitive values are stored in heap memory, and variables store their reference (memory address), not the actual value.

Primitive Copy Behavior

When a primitive value is copied, a completely new independent value is created.

Example:

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
Reference Copy Behavior

When an object or array is copied, the reference is copied, not the actual value.

Example:

let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Ahmed";

console.log(obj1.name); // Ahmed
console.log(obj2.name); // Ahmed

Both variables point to the same object in memory.

Arrays Are Not Primitive

Arrays are also objects in JavaScript.

Example:

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
Conclusion

Arrays are non-primitive reference types, not primitive types, because they behave like objects and store references instead of actual values.




## A4 — Primitive vs Non-Primitive
Primitive vs Non-Primitive Data Types

JavaScript data types are divided into two categories:

Primitive Types
String
Number
Boolean
Undefined
Null
Symbol
BigInt

Primitive values are usually stored in stack memory. They are immutable, meaning they cannot be changed.

Non-Primitive Types
Object
Array
Function

Non-primitive values are stored in heap memory, and variables store their reference instead of the actual value.

Primitive Copy Behavior

When a primitive value is copied, a new independent value is created.

Example:

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
Reference Copy Behavior

When an object or array is copied, the reference is copied instead of the actual value.

Example:

let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Ahmed";

console.log(obj1.name); // Ahmed
console.log(obj2.name); // Ahmed

Both variables point to the same object in memory.

Arrays Are Not Primitive

Arrays are also objects in JavaScript.

Example:

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
Conclusion

Arrays are non-primitive (reference types) because they behave like objects and store references instead of actual values.


## A5 — Pass by Value vs Pass by Reference
Pass by Value vs Pass by Reference

JavaScript is technically a pass-by-value language. However, in the case of objects, the value being passed is a reference address.

Primitive Pass by Value

When a primitive value is passed to a function, a copy of the value is created.

Example:

function change(x) {
  x = 20;
}

let a = 10;
change(a);

console.log(a); // 10

The original variable is not changed.

Object Pass by Reference-Value

When an object is passed to a function, a copy of its reference is passed.

Example:

function update(obj) {
  obj.name = "Ali";
}

let person = { name: "Ahmed" };
update(person);

console.log(person.name); // Ali

The object is mutated because both references point to the same object.

Important Nuance: Reference is Passed by Value

If you reassign the object inside the function, the original object is not changed.

Example:

function change(obj) {
  obj = { name: "New Object" };
}

let person = { name: "Ahmed" };
change(person);

console.log(person.name); // Ahmed

Here, only the local reference is changed, not the original object.

Summary
Primitives → value is copied
Objects/Arrays → reference address is copied
Mutation affects the original object
Reassignment does not affect the original object



## A6  — Functions in JavaScript
What are Functions?

A function is a reusable block of code that performs a specific task. It helps reduce code duplication and improves readability.

Function Declaration Syntax
Syntax:
function functionName(parameters) {
  // code
}
Example:
function greet(name) {
  console.log("Hello " + name);
}

greet("Ali");
Hoisting Behavior

Function declarations are hoisted, which means they can be called before they are defined.

Example:
sayHello();

function sayHello() {
  console.log("Hello!");
}
Parameters vs Arguments
Parameter: Variable defined in the function definition
Argument: Actual value passed when calling the function
Example:
function add(a, b) { // parameters
  return a + b;
}

add(5, 10); // arguments
Return Value

If a function does not have a return statement, JavaScript automatically returns undefined.

Example:
function test() {
  let a = 10;
}

console.log(test()); // undefined
Real-World Example: Age Validation
function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20)); // true


In JavaScript, functions are also objects, which means they can have properties and be treated like values.