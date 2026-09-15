"use strict";
let orderTotals = [100, 200, 300, 400, 500];
let product = ["Laptop", 300];
let customerName = "Wajdan";
let uncertainValue = "Hello TypeScript";
if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase());
}
function showValue(value) {
    if (typeof value === "string") {
        console.log("Text:", value.toUpperCase());
    }
    else {
        console.log("Number:", value * 2);
    }
}
showValue("hello");
showValue(10);
console.log(orderTotals);
console.log(product);
console.log(customerName);
