// b4.js

// ==========================================
// BUG 1: Cart Duplication Bug
// ==========================================

// Bug:
// Spread operator creates a shallow copy.
// The items array is still shared between cart1 and cart2.

// Wrong Output:
// ['JS Book', 'React Book', 'Node Book']

const cart1 = { items: ['JS Book', 'React Book'], total: 150 };
const cart2 = { ...cart1 };

cart2.items.push('Node Book');

console.log(cart1.items);
// Output: ['JS Book', 'React Book', 'Node Book']

// Fixed Version:
const fixedCart1 = { items: ['JS Book', 'React Book'], total: 150 };

const fixedCart2 = {
...fixedCart1,
items: [...fixedCart1.items]
};

fixedCart2.items.push('Node Book');

console.log(fixedCart1.items);
// Output: ['JS Book', 'React Book']

console.log(fixedCart2.items);
// Output: ['JS Book', 'React Book', 'Node Book']

// ==========================================
// BUG 2: Function Mutating Original Object
// ==========================================

// Bug:
// Objects are passed by reference-value.
// Mutating the object inside the function changes the original object.

// Wrong Output:
// myOrder.total = 117

function applyTax(order) {
order.total = order.total * 1.17;
return order;
}

const myOrder = { id: 1, total: 100 };
const taxedOrder = applyTax(myOrder);

console.log(myOrder.total);
// Output: 117

// Fixed Version:
function applyTaxFixed(order) {
return {
...order,
total: order.total * 1.17
};
}

const myOrder2 = { id: 1, total: 100 };

const taxedOrder2 = applyTaxFixed(myOrder2);

console.log(myOrder2.total);
// Output: 100

console.log(taxedOrder2.total);
// Output: 117

// ==========================================
// BUG 3: Config Reset Doesn't Work
// ==========================================

// Bug:
// Reassigning a function parameter does not affect
// the original object outside the function.
//
// Also, spread only performs a shallow copy.
// Nested objects remain shared.

// Wrong Output:
// appConfig.theme = 'light'
// appConfig.nested.fontSize = 20

const defaultConfig = {
theme: 'dark',
lang: 'en',
nested: { fontSize: 14 }
};

function resetConfig(config) {
config = { ...defaultConfig };
config.nested.fontSize = 14;
}

const appConfig = {
theme: 'light',
lang: 'ur',
nested: { fontSize: 20 }
};

resetConfig(appConfig);

console.log(appConfig.theme);
// Output: light

console.log(appConfig.nested.fontSize);
// Output: 20

// Fixed Version:
function resetConfigFixed() {
return structuredClone(defaultConfig);
}

const appConfigFixed = resetConfigFixed();

console.log(appConfigFixed.theme);
// Output: dark

console.log(appConfigFixed.nested.fontSize);
// Output: 14



Summary

Bug 1: Shallow copy → shared array reference
Fix: items: [...cart1.items] or structuredClone()

Bug 2: Object mutation changes original object
Fix: Return a new object using the spread operator

Bug 3: Reassigning a parameter does not affect the original object, and nested objects remain shared
Fix: Use structuredClone(defaultConfig) and assign the returned object outside the function.