//Array

let a = [1,2,3,7,8,9];
let b = [4,5,6];

a.splice(3, 0, b)

console.log(a);

//Loopar

let fruits = ["mango", "anananas", "apple", "cherry", "peach"]

// for

for (let i = 0; i < fruits.length; i++) {
    const fruitItem = fruits[i]
    console.log("For loop " + fruitItem + ": " + i);

}

let index = 0;

// While

while (index < fruits.length) {
    console.log("While loop " + fruits[index] + ": " + index);
    index++;
}

// Do While

do {

    console.log("Do while " + index)
    index++;

} while (index < fruits.length);

// For

for (const fruitItem of fruits) {
    console.log("forof loop - " + fruitItem);
}

// ForEach, används för att loopa igenom en array. Används när vi vill utfra en funktion på varje element och när vi inte vill avbryta loopen och använda ett resultat.
fruits.forEach(fruitCounter);

function fruitCounter(item, index) {
    console.log("ForEach - " + item + index);
    console.log(item + " has " + item.length);

}

//switch

let day =  new Date().getDay();

switch (day) {
    case 1:
        console.log("Idag är det måndag");
        break;

    case 2:
        console.log("Idag är det tisdag");
        break;

    case 3:
        console.log("Idag är det onsdag");
        break;

    case 4:
        console.log("Idag är det torsdag");
        break;

    case 5:
        console.log("Idag är det fredag");
        break;

    case 6:
        console.log("Idag är det lördag");
        break;


    case 7:
        console.log("Idag är det söndag");
        break;


    default:
        console.log("Idag är det domedagen");
        break;
}

//Räkna items och förekomster av varje item


// let flowerCount = [];


let flowers = ["ros", "tulpan", "ros", "tulpan", "lilja", "solros", "solros", "tulpan"];

let flowerCounter = {};

flowers.forEach(flowerItems => {
    if (flowerCounter[flowerItems]) {
        flowerCounter[flowerItems] += 1;
    } else {
        flowerCounter[flowerItems] = 1;
    }
});

console.log(flowerCounter)


//Kortlek

const cardColor = ["Hearts", "Diamonds", "Clubs", "Spades"]
const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

console.log(cardValue);

//Funktioner

function exampleFunc1() {
    console.log("Hej");
}
exampleFunc1();

let exampleFunc2 = function() {
    console.log("Hej Hej");
}
exampleFunc2();


