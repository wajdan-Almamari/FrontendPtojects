//------------------------------------------------------
//2.1	—	Arrays:	the	Basics

let cities = ["Muscat", "Ibri", "Nizwa", "Sohar", "Sur"];
console.log(cities);

// push() - adds to the end
cities.push("Barka");
console.log(cities);

// pop() - removes from the end
cities.pop();
console.log(cities);

// shift() - removes from the beginning
cities.shift();
console.log(cities);

// unshift() - adds to the beginning
cities.unshift("Muscat");
console.log(cities);

// Length before duplicate
console.log(cities.length);

// Add duplicate
cities.push("Muscat");
console.log(cities);

// Length after duplicate
console.log(cities.length);

// Classic for loop
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}


// for...of loop
for (const city of cities) {
    console.log(city);
}

//------------------------------------------------------
//2.2	—	Destructuring
console.log("-------------Destructuring--------------------");
const order = { id: 101, customer: "Sara Ahmed", total: 249.99, status: "Shipped" };
const { customer, total } = order;
console.log(`customer : ${customer} , Totatl : ${total}`);

// Array Destructuring + Rest
const numbers = [13, 0, 8, 95];
const [first, second, ...rest] = numbers;
console.log(`first: ${first}`);
console.log(`second: ${second}`);
console.log(`rest: ${rest}`);

// Destructuring directly in function parameter
function orderSummery({ id, customer, total, status }) {
    return `${id} - ${customer} - ${total} - ${status}`;
}
console.log(orderSummery(order));

//------------------------------------------------------
//2.3	—	Spread	&	Rest
console.log("-------------Spread & Rest--------------------");

//Combine arrays using spread
const onlineOrders = [101, 102, 103];
const storeOrders = [201, 202, 203];

const allOrders = [...onlineOrders, ...storeOrders];

console.log(allOrders);

const cancellOrder = { ...order , status : "CancelledOrder"};
console.log("Original:", order);
console.log("Copy:", cancellOrder);

//Rest parameter
function getTotals(...totals) {
    return totals;
}

console.log(getTotals(100, 250, 75, 300));