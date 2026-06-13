```javascript
// b3.js

function calculateDiscount(price, userType, isMember) {

    // Rule 1: Validate price
    if (typeof price !== "number" || price <= 0) {
        return "Invalid price";
    }

    // Rule 2: Admin gets 50% off
    if (userType === "admin") {
        price = price * 0.50;
    }
    // Rule 3: Price > 1000 gets 20% off
    else if (price > 1000) {
        price = price * 0.80;
    }
    // Rule 4: Price > 500 gets 10% off
    else if (price > 500) {
        price = price * 0.90;
    }

    // Rule 5: Members get an additional 5% off
    if (isMember === true) {
        price = price * 0.95;
    }

    // Rule 6: Minimum final price is 1
    if (price < 1) {
        price = 1;
    }

    // Rule 7: Return rounded to 2 decimal places
    return price.toFixed(2);
}

// Test Cases
console.log(calculateDiscount(1200, "user", false)); // 960.00
console.log(calculateDiscount(1200, "user", true));  // 912.00
console.log(calculateDiscount(600, "admin", true));  // 285.00
console.log(calculateDiscount(-50, "user", false));  // Invalid price
console.log(calculateDiscount("abc", "user", false)); // Invalid price
```
Explanation of the main test cases
calculateDiscount(1200, "user", false)
Price > 1000 → 20% off
1200 × 0.80 = 960.00
calculateDiscount(1200, "user", true)
20% off → 960
Additional 5% member discount → 960 × 0.95 = 912.00
calculateDiscount(600, "admin", true)
Admin discount (50%) → 600 × 0.50 = 300
Additional 5% member discount → 300 × 0.95 = 285.00

This solution covers:

typeof
Arithmetic operators (*)
Comparison operators (>, <=)
Logical conditions (if, else if)
Guard clauses
Function return values
toFixed(2) for formatting to 2 decimal place