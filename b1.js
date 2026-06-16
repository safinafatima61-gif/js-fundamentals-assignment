// Part 1: Predict and explain
console.log(a);

// Output: undefined
// Why: 'var' variables are hoisted to the top of the scope and initialized as 'undefined'.

// console.log(b);
// Output: ReferenceError

// console.log(c);
// Output: ReferenceError

var a = 10;
let b = 20;
const c = 30;

// Part 2: Predict re-declarations

// Part 3: Predict Object Mutability
const user = { name: 'Asad' };
user.name = 'Ali';

// CORRECTED VERSION
console.log("--- B1 Output ---");

var correctedA;
console.log(correctedA);

correctedA = 10;
let correctedB = 20;
const correctedC = 30;

console.log(correctedA, correctedB, correctedC);

correctedA = 99;
correctedB = 88;

console.log(correctedA, correctedB);

const activeUser = { name: 'Asad' };
activeUser.name = 'Ali';

console.log(activeUser.name);





















































