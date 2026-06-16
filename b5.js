// 1. addToCart(cart, item)
function addToCart(cart, item) {
    return [...cart, item];
}

const cart = ['milk', 'eggs'];
const newCart = addToCart(cart, 'bread');

console.log(newCart);
console.log(cart);


// 2. updateUserAge(user, newAge)
function updateUserAge(user, newAge) {
    return {
        ...user,
        age: newAge
    };
}

const user = { name: 'Ali', age: 25 };
const updatedUser = updateUserAge(user, 26);

console.log(updatedUser);
console.log(user);


// 3. incrementScore(scores, playerName)
function incrementScore(scores, playerName) {
    return {
        ...scores,
        [playerName]: scores[playerName] + 1
    };
}

const scores = { Ali: 5, Sara: 3 };
const newScores = incrementScore(scores, 'Ali');

console.log(newScores);
console.log(scores);


// 4. reverseString(str)
function reverseString(str) {
    return str.split('').reverse().join('');
}

const text = 'hello';
const reversed = reverseString(text);

console.log(reversed);
console.log(text);


// 5. removeItem(arr, index)
function removeItem(arr, index) {
    return arr.filter((_, i) => i !== index);
}

const numbers = [1, 2, 3, 4];
const newNumbers = removeItem(numbers, 1);

console.log(newNumbers);
console.log(numbers);