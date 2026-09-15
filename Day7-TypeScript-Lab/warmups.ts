let orderTotals: number[] = [100, 200, 300, 400, 500];

let product: [string, number] = ["Laptop", 300];
let customerName = "Wajdan";

let uncertainValue: unknown = "Hello TypeScript";

if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase());
}

function showValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("Text:", value.toUpperCase());
    } else {
        console.log("Number:", value * 2);
    }
}
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
function greetUser(name: string, title?: string): string {
    if (title) {
        return "Hello " + title + " " + name;
    }

    return "Hello " + name;
}

function calculatePrice(price: number, tax: number = 0.05): number {
    return price + (price * tax);
}

class Customer {
    private balance: number;
    readonly id: number;

    constructor(id: number, balance: number, public name: string) {
        this.id = id;
        this.balance = balance;
    }

    showBalance(): void {
        console.log(this.balance);
    }
}
interface UserInfo {
    name: string;
    age: number;
}
function showUser(user: UserInfo): void {
    console.log(user.name);
    console.log(user.age);
}
let customer = new Customer(1, 500, "Wajdan");
let myUser = {
    name: "Wajdan",
    age: 22,
    city: "Muscat"
};
console.log(customer.id);
console.log(customer.name);
customer.showBalance();
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.10));

console.log(item);
showValue("hello");
showValue(10);

console.log(orderTotals);
console.log(product);
console.log(customerName);

showUser(myUser);