Original code
var cartA = {
  owner: 'Asad',
  items: [{ name: 'Laptop', price: 150000 }],
  total: 150000
};

var cartB = cartA;

cartB.items.push({ name: 'Mouse', price: 2500 });
cartB.total = cartB.total + 2500;

console.log('Tab 1 cart items:', cartA.items.length);
console.log('Tab 1 total:', cartA.total);

function applyPromo(cart, discount) {
  cart.total = cart.total - discount;
  cart.promoApplied = true;
  return cart;
}

const originalCart = {
  owner: 'Sara',
  items: ['Book'],
  total: 500
};

const discountedCart = applyPromo(originalCart, 50);

console.log('Original total:', originalCart.total);

  //Output predict
// Output:
// Tab 1 cart items: 2
// Reason: cartB = cartA creates a shared reference.

// Output:
// Tab 1 total: 152500
// Reason: both variables point to the same object.

// Output:
// Original total: 450
// Reason: applyPromo mutates the original object.
     //Bugs identify

// BUG 1:
// var should be replaced with const/let

// BUG 2:
// cartB = cartA does NOT create a copy.
// Both variables share the same object reference.

// BUG 3:
// applyPromo directly mutates the cart object.

     Fixed version  
console.log("----- FIXED VERSION -----");

const fixedCartA = {
  owner: "Asad",
  items: [{ name: "Laptop", price: 150000 }],
  total: 150000
};

const fixedCartB = structuredClone(fixedCartA);

fixedCartB.items.push({
  name: "Mouse",
  price: 2500
});

fixedCartB.total += 2500;

console.log("Tab 1 items:", fixedCartA.items.length);
console.log("Tab 1 total:", fixedCartA.total);
   //expected output
// Tab 1 items: 1
// Tab 1 total: 150000
  

   applyPromo functio

function applyPromoFixed(cart, discount) {
  return {
    ...cart,
    total: cart.total - discount,
    promoApplied: true
  };
}

const originalCart2 = {
  owner: "Sara",
  items: ["Book"],
  total: 500
};

const discountedCart2 =
  applyPromoFixed(originalCart2, 50);

console.log(originalCart2.total);
console.log(discountedCart2.total);
  

 //expected output
500
450
  

    addItem function
function addItem(cart, item) {
  return {
    ...cart,
    items: [...cart.items, item],
    total: cart.total + item.price
  };
}

const cartBefore = {
  owner: "Ali",
  items: [],
  total: 0
};

const cartAfter = addItem(cartBefore, {
  name: "Keyboard",
  price: 3000
});

console.log(cartBefore);
console.log(cartAfter);
   
//expected output
cartBefore total = 0
cartAfter total = 3000