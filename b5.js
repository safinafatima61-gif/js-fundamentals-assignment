```javascript
// b5.js

// ==========================================
// 1. addToCart(cart, item)
// Returns a NEW array with item added
// ==========================================

function addToCart(cart, item) {
    return [...cart, item];
}

const cart = ['milk', 'eggs'];
const newCart = addToCart(cart, 'bread');

console.log(newCart); // ['milk', 'eggs', 'bread']
console.log(cart);    // ['milk', 'eggs']


// ==========================================
// 2. updateUserAge(user, newAge)
// Returns a NEW user object
// ==========================================

function updateUserAge(user, newAge) {
    return {
        ...user,
        age: newAge
    };
}

const user = { name: 'Ali', age: 25 };
const updatedUser = updateUserAge(user, 26);

console.log(updatedUser); // { name: 'Ali', age: 26 }
console.log(user);        // { name: 'Ali', age: 25 }


// ==========================================
// 3. incrementScore(scores, playerName)
// Returns a NEW scores object
// ==========================================

function incrementScore(scores, playerName) {
    return {
        ...scores,
        [playerName]: scores[playerName] + 1
    };
}

const scores = { Ali: 5, Sara: 3 };
const newScores = incrementScore(scores, 'Ali');

console.log(newScores); // { Ali: 6, Sara: 3 }
console.log(scores);    // { Ali: 5, Sara: 3 }


// ==========================================
// 4. reverseString(str)
// Strings are immutable
// ==========================================

function reverseString(str) {
    return str.split('').reverse().join('');
}

const text = 'hello';
const reversed = reverseString(text);

console.log(reversed); // 'olleh'
console.log(text);     // 'hello'


// ==========================================
// 5. removeItem(arr, index)
// Returns a NEW array with item removed
// ==========================================

function removeItem(arr, index) {
    return arr.filter((_, i) => i !== index);
}

const numbers = [1, 2, 3, 4];
const newNumbers = removeItem(numbers, 1);

console.log(newNumbers); // [1, 3, 4]
console.log(numbers);    // [1, 2, 3, 4]
```





Why these functions are pure

✅ They never modify the original input.
✅ They always return a new value.
✅ Same input always produces the same output.
✅ No side effects occur.

This satisfies all requirements for Primitives + Immutability + Functions.