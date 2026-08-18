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