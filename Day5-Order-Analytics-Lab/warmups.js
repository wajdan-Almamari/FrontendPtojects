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

const cancellOrder = { ...order, status: "CancelledOrder" };
console.log("Original:", order);
console.log("Copy:", cancellOrder);

//Rest parameter
function getTotals(...totals) {
    return totals;
}

console.log(getTotals(100, 250, 75, 300));

//------------------------------------------------------
//2.4	—	Array	Methods
console.log("------------- Array Methods --------------------");

const orders = [
    { id: 101, customer: "Sara", total: 250, status: "Shipped" },
    { id: 102, customer: "Ali", total: 120, status: "Pending" },
    { id: 103, customer: "Maha", total: 300, status: "Shipped" },
    { id: 104, customer: "Ahmed", total: 80, status: "Cancelled" },
    { id: 105, customer: "Noor", total: 190, status: "Pending" },
    { id: 106, customer: "Omar", total: 450, status: "Shipped" },
    { id: 107, customer: "Huda", total: 60, status: "Pending" },
    { id: 108, customer: "Salim", total: 210, status: "Shipped" }

];
// 1. reduce - combined total of all orders
const combinedTotal = orders.reduce((sum, order) => {
    return sum + order.total;
}, 0);

console.log("Combined Total:", combinedTotal);

// 2. filter - only Shipped orders
const shippedOrders = orders.filter(order => order.status === "Shipped");

console.log("Shipped Orders:", shippedOrders);

// 3. map - customer names only
const customerNames = orders.map(order => order.customer);

console.log("Customer Names:", customerNames);

// 4. find - first order over $200
const orderOver200 = orders.find(order => order.total > 200);

console.log("First Order Over $200:", orderOver200);