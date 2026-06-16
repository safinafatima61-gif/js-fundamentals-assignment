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
console.log(calculateDiscount(1200, "user", false));
console.log(calculateDiscount(1200, "user", true));
console.log(calculateDiscount(600, "admin", true));
console.log(calculateDiscount(-50, "user", false));
console.log(calculateDiscount("abc", "user", false));