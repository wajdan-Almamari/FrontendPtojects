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
let item = {
    name: "Laptop",
    price: 300
};
function greetUser(name, title) {
    if (title) {
        return "Hello " + title + " " + name;
    }
    return "Hello " + name;
}
function calculatePrice(price, tax = 0.05) {
    return price + (price * tax);
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.10));
console.log(item);
showValue("hello");
showValue(10);
console.log(orderTotals);
console.log(product);
console.log(customerName);
