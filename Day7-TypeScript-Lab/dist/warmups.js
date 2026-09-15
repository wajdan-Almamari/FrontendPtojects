"use strict";
// ======================
// 2.2 Type Annotations & Inference
// ======================
// Typed array
let orderTotals = [100, 200, 300, 400, 500];
// Tuple [name, price]
let product = ["Laptop", 300];
// Type inference
let customerName = "Wajdan";
// unknown + narrowing
let uncertainValue = "Hello TypeScript";
if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase());
}
// ======================
// 2.3 Union & Intersection Types
// ======================
// Union
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
// ======================
// 2.4 Typed Functions
// ======================
// Required + optional parameter + return type
function greetUser(name, title) {
    if (title) {
        return "Hello " + title + " " + name;
    }
    return "Hello " + name;
}
// Default parameter
function calculatePrice(price, tax = 0.05) {
    return price + (price * tax);
}
// ======================
// 2.5 Classes & Access Modifiers
// ======================
class Customer {
    constructor(id, balance, name) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    showBalance() {
        console.log(this.balance);
    }
}
function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}
// Extra property: city
// No "implements"
let myUser = {
    name: "Wajdan",
    age: 22,
    city: "Muscat"
};
// ======================
// 2.7 Inheritance & Abstract Classes
// ======================
class Animal {
    describe() {
        console.log("Animal sound:", this.makeSound());
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow";
    }
}
// ======================
// 2.8 Generics
// ======================
// Generic function
function getLast(items) {
    return items[items.length - 1];
}
// Generic class with constraint
class SimpleRepository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// ======================
// Tests
// ======================
console.log(getLast([10, 20, 30]));
console.log(getLast(["A", "B", "C"]));
let cat = new Cat();
cat.describe();
let customer = new Customer(1, 500, "Wajdan");
console.log(customer.id);
console.log(customer.name);
customer.showBalance();
console.log(greetUser("Wajdan"));
console.log(greetUser("Wajdan", "Ms."));
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.10));
console.log(item);
showValue("hello");
showValue(10);
console.log(orderTotals);
console.log(product);
console.log(customerName);
showUser(myUser);
// Generic Repository test
let userRepository = new SimpleRepository();
userRepository.add({
    id: 1,
    name: "Wajdan"
});
console.log(userRepository.getAll());
