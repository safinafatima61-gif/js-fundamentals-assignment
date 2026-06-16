// ===============================
// TASK 1: PREDICT OUTPUT (COMMENTS)
// ===============================

// Tab 1 cart items: 2
// Reason: cartB and cartA same reference share karte hain

// Tab 1 total: 152500
// Reason: same object mutate ho raha hai

// Original total: 450
// Reason: applyPromo original object ko change kar raha hai


// ===============================
// TASK 2: BUGS (EXPLAINED ABOVE CODE)
// ===============================

var cartA = {
  owner: 'Asad',
  items: [{ name: 'Laptop', price: 150000 }],
  total: 150000
};

// BUG: var use ho raha hai (unsafe, block scope nahi deta)

var cartB = cartA;

// BUG: Yeh copy nahi hai, sirf reference copy hai (same memory address)

function applyPromo(cart, discount) {
  cart.total = cart.total - discount;

  // BUG: original object mutate ho raha hai

  cart.promoApplied = true;

  // BUG: side-effect (original object change)

  return cart;
}

const originalCart = {
  owner: 'Sara',
  items: ['Book'],
  total: 500
};

const discountedCart = applyPromo(originalCart, 50);

// BUG: originalCart change ho gaya (mutation issue)

console.log('Original total:', originalCart.total);



// ===============================
// TASK 3: FIXED VERSION
// ===============================

// FIX: use const
const cartA_fixed = {
  owner: 'Asad',
  items: [{ name: 'Laptop', price: 150000 }],
  total: 150000
};

// FIX: deep copy (structuredClone)
const cartB_fixed = structuredClone(cartA_fixed);

// Tab 2 update
cartB_fixed.items.push({ name: 'Mouse', price: 2500 });
cartB_fixed.total += 2500;

console.log('Tab 1 cart items:', cartA_fixed.items.length);
console.log('Tab 1 total:', cartA_fixed.total);


// FIXED applyPromo (NO mutation)
function applyPromoFixed(cart, discount) {
  return {
    ...cart,
    total: cart.total - discount,
    promoApplied: true
  };
}

const originalCart_fixed = {
  owner: 'Sara',
  items: ['Book'],
  total: 500
};

const discountedCart_fixed = applyPromoFixed(originalCart_fixed, 50);

console.log('Original total:', originalCart_fixed.total);
console.log('Discounted total:', discountedCart_fixed.total);


// ===============================
// TASK 4: addItem FUNCTION
// ===============================

function addItem(cart, item) {
  return {
    ...cart,
    items: [...cart.items, item],
    total: cart.total + item.price
  };
}

// TEST
const testCart = {
  owner: "Ali",
  items: [{ name: "Pen", price: 50 }],
  total: 50
};

console.log("Before add:", testCart);

const updatedCart = addItem(testCart, { name: "Notebook", price: 100 });

console.log("After original:", testCart);
console.log("After new cart:", updatedCart);