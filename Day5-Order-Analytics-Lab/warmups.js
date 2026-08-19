let cities =["Muscat", "Ibri", "Nizwa", "Sohar", "Sur"];
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