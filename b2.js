   function typeAnalyser(value) {
    return {
        input: value,
        typeofResult: typeof value,
        isArray: Array.isArray(value),
        isNull: value === null,
        toNumber: Number(value),
        toBoolean: Boolean(value),
        toString: String(value)
    };
}

// Verification Test Matrix
console.log("--- B2 Output ---");
console.log(typeAnalyser(42));
console.log(typeAnalyser('hello'));
console.log(typeAnalyser(null));
console.log(typeAnalyser([]));
console.log(typeAnalyser(undefined));
console.log(typeAnalyser(true));
console.log(typeAnalyser(0));
console.log(typeAnalyser(''));



typeof
Array.isArray()
null checking (value === null)
Type coercion using Number(), Boolean(), and String()
Truthy/Falsy values (0, '', null, undefined)
Special cases: typeof null === 'object' and Boolean([]) === true