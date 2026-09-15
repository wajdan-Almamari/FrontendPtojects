// ======================
// 2.2 Type Annotations & Inference
// ======================

// Typed array
let orderTotals: number[] = [100, 200, 300, 400, 500];

// Tuple [name, price]
let product: [string, number] = ["Laptop", 300];

// Type inference
let customerName = "Wajdan";

// unknown + narrowing
let uncertainValue: unknown = "Hello TypeScript";

if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase());
}


// ======================
// 2.3 Union & Intersection Types
// ======================

// Union
function showValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("Text:", value.toUpperCase());
    } else {
        console.log("Number:", value * 2);
    }
}

// Intersection
type ProductInfo = {
    name: string;
};

type ProductPrice = {
    price: number;
};

type FullProduct = ProductInfo & ProductPrice;

let item: FullProduct = {
    name: "Laptop",
    price: 300
};


// ======================
// 2.4 Typed Functions
// ======================

// Required + optional parameter + return type
function greetUser(name: string, title?: string): string {
    if (title) {
        return "Hello " + title + " " + name;
    }

    return "Hello " + name;
}

// Default parameter
function calculatePrice(
    price: number,
    tax: number = 0.05
): number {
    return price + (price * tax);
}


// ======================
// 2.5 Classes & Access Modifiers
// ======================

class Customer {
    private balance: number;
    readonly id: number;

    constructor(
        id: number,
        balance: number,
        public name: string
    ) {
        this.id = id;
        this.balance = balance;
    }

    showBalance(): void {
        console.log(this.balance);
    }
}


// ======================
// 2.6 Interfaces & Structural Typing
// ======================

interface UserInfo {
    name: string;
    age: number;
}

function showUser(user: UserInfo): void {
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

abstract class Animal {
    abstract makeSound(): string;

    describe(): void {
        console.log("Animal sound:", this.makeSound());
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}


// ======================
// 2.8 Generics
// ======================

// Generic function
function getLast<T>(items: T[]): T {
    return items[items.length - 1];
}

// Generic class with constraint
class SimpleRepository<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
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
let userRepository =
    new SimpleRepository<{ id: number; name: string }>();

userRepository.add({
    id: 1,
    name: "Wajdan"
});

console.log(userRepository.getAll());