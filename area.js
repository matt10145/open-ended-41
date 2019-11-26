const readlineSync = require("readline-sync");

const PI = Math.PI;

let shape;
let area = 0;
let terminate = false;

console.log("");
do {
    shape = readlineSync.question("Enter a shape: ");
    shape = shape.toLowerCase();
    if (shape === "circle") {
        terminate = true;
    }
    else if (shape === "rectangle") {
        terminate = true;
    }
    else if (shape === "square") {
        terminate = true;
    }
    else if (shape === "triangle") {
        terminate = true;
    }
    else {
        // intentionally empty
    }
} while (terminate == false);

if (shape === "circle") {
    let radius = readlineSync.question("Enter a radius: ");
    area = PI*(radius ** 2);
    area = area.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2});
    console.log(`\nArea: ${area}`);
}
else if (shape === "rectangle") {
    let length = readlineSync.question("Enter a length: ");
    let width = readlineSync.question("Enter a width: ");
    area = length * width;
    area = area.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2});
    console.log(`\nArea: ${area}`);
}
else if (shape === "square") {
    let side = readlineSync.question("Enter a side: ");
    area = Math.pow(side, 2);
    area = area.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2});
    console.log(`\nArea: ${area}`);
}
else if (shape === "triangle") {
    let base = readlineSync.question("Enter a base: ");
    let height = readlineSync.question("Enter a height: ");
    area = (base * height)*0.5;
    area = area.toLocaleString("en-US", {minimumFractionDigits:2, maximumFractionDigits:2});
    console.log(`\nArea: ${area}`);
}
