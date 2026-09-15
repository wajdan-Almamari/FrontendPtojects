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

console.log(orderTotals);
console.log(product);
console.log(customerName);