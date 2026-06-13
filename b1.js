    ```javascript
           // Part 1: Predict and explain
console.log(a); 
// Output: undefined
// Why: 'var' variables are hoisted to the top of the scope and initialized as 'undefined'.

// console.log(b); 
// Output: ReferenceError: Cannot access 'b' before initialization
// Why: 'let' is hoisted but remains uninitialized in the Temporal Dead Zone (TDZ).

// console.log(c); 
// Output: ReferenceError: Cannot access 'c' before initialization
// Why: 'const' behaves like 'let', hoisted but completely trapped inside the TDZ.

var a = 10;
let b = 20;
const c = 30;

           // Part 2: Predict re-declarations
// var a = 99; // Allowed for var.
// let b = 88; // SyntaxError: Identifier 'b' has already been declared.
// const c = 77; // SyntaxError: Identifier 'c' has already been declared.

          // Part 3: Predict Object Mutability
const user = { name: 'Asad' };
user.name = 'Ali'; 
// Allowed? YES. The properties inside a const object can be mutated freely.
// user = {}; 
// Allowed? NO. Throws TypeError: Assignment to constant variable. You cannot change the structural pointer link.


// ==========================================
// CORRECTED VERSION
// ==========================================
console.log("--- B1 Output ---");

var correctedA; // Explicit hoisting visualization
console.log(correctedA); // Prints undefined safely

correctedA = 10;
let correctedB = 20;
const correctedC = 30;

console.log(correctedA, correctedB, correctedC);

// Fix re-declarations by simply re-assigning values
correctedA = 99;
correctedB = 88; 
console.log(correctedA, correctedB);

const activeUser = { name: 'Asad' };
activeUser.name = 'Ali'; // Allowed
console.log(activeUser.name);