// 2.1 Variables & Dynamic Typing
const name = "Wajdan";

let value = 0;
console.log(typeof value); //number

value = "Hello";
console.log(typeof value); //string

// 2.2 Operators & Comparisons

console.log("10" == 10);   // true
console.log("10" === 10);  // false

const userName = "";

if (userName) {
    console.log("User name is entered");
} else {
    console.log("User name is empty");
}

// 2.3 Control Flow
const grades = [85, 92, 58, 73, 40];
for (const grade of grades) {
    if (grade >= 60) {
        console.log(`${grade}: Pass`);
    } else {
        console.log(`${grade}: Fail`);
    }
}
const score = 85;
switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    default:
        console.log("F");
}
//2.4 Functions, All Four Ways

// 1. Function Declaration
function isEvenDeclaration(number) {
    return number % 2 === 0;
}

console.log(isEvenDeclaration(4));


// 2. Function Expression
const isEvenExpression = function (number) {
    return number % 2 === 0;
};

console.log(isEvenExpression(4));


// 3. Arrow Function
const isEvenArrow = (number) => {
    return number % 2 === 0;
};

console.log(isEvenArrow(4));


// 4. Default Parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("wajdan"));


// 5. Rest Parameter
function sum(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(sum(10, 20, 30));