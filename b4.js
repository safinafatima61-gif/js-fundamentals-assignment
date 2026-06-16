// BUG 1: Cart Duplication Bug
const cart1 = { items: ['JS Book', 'React Book'], total: 150 };
const cart2 = { ...cart1 };

cart2.items.push('Node Book');

console.log(cart1.items);

// Fixed Version
const fixedCart1 = { items: ['JS Book', 'React Book'], total: 150 };

const fixedCart2 = {
  ...fixedCart1,
  items: [...fixedCart1.items]
};

fixedCart2.items.push('Node Book');

console.log(fixedCart1.items);
console.log(fixedCart2.items);


// BUG 2: Function Mutating Original Object
function applyTax(order) {
  order.total = order.total * 1.17;
  return order;
}

const myOrder = { id: 1, total: 100 };
applyTax(myOrder);

console.log(myOrder.total);

// Fixed Version
function applyTaxFixed(order) {
  return {
    ...order,
    total: order.total * 1.17
  };
}

const myOrder2 = { id: 1, total: 100 };

const taxedOrder2 = applyTaxFixed(myOrder2);

console.log(myOrder2.total);
console.log(taxedOrder2.total);


// BUG 3: Config Reset Issue
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
console.log(appConfig.nested.fontSize);

// Fixed Version
function resetConfigFixed() {
  return structuredClone(defaultConfig);
}

const appConfigFixed = resetConfigFixed();

console.log(appConfigFixed.theme);
console.log(appConfigFixed.nested.fontSize);