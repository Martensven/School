// ** Övning 1. **

let fruits = ["Apple", "Cherry", "Mango", "Pear", "Peach"];
fruits.push("Pineapple");
fruits.forEach(countFunction);

function countFunction(item, index,) {
  console.log(item + " has " + item.length + " characters");
  console.log(item + ": " + index); 
}

//Vi skapar en lista (Array) som heter "fruits" och innehåller olika frukter (Strings). 
//In till frukter vill vi lägga till (push) en till frukt (String)
//Vi skapar en loop (ForEach (För varje)) där vi deklarerar loopen med en funktion som heter "countFunction". Denna kommer att köra nedan funktion en gång per frukt (Item)
//Funktionen som heter "countFunction" kommer att innehålla frukterna (items) och listplatser (index)
//Vi skriver ut i konsolen: Frukt följt av ett semikolon och mellanrum, följt av hur långt ordet är (hur många bokstäver)
//Vi skriver även ut i konsolen: Frukt följt av ett semikolon och mellanrum, följt av vilken plats i listan som frukten ligger på.


// ** Övning 2. ** 
for (let i = 0; i < fruits.length; i++) {
  const fruitItem = fruits[i];
  console.log(fruitItem + ": " + i);
}

// ** Övning 3. **
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i] + " " + i);
  i++;
}

//Vi deklarerar index (listordningen) som en flexibel variabel som börjar på 0.
//Vi startar en loop som kommer att köras medans index är mindre än längden på vår lista.
//Vi skriver ut i konsolen: frukt följt av ett mellanrum följt av listnumret (i). Eftersom i börjar på 0 så blir första utskrivningen "Apple 0"
//Vi lägger sedan på 1 till i, alltså (i = 0+1 = 1)
//Då blir nästa: "Cherry 1" eftersom i nu är 1.
//Vi slutar sedan loopen när i är 5, då vi har 6 st frukter i listan.

// ** Övning 4. ** 
let index = 0;

do {
  console.log("Do...while loop " + index);
  index++;
} while (index < fruits.length);


// ** Övning 5. ** 


for (const fruit of fruits) {
  console.log(fruit);
}

//Vi startar en for of-loop. Där den går igenom alla frukter (items) en efter en i listan och sparar ner dem i en ny statisk variabel som heter "fruit".
//Vi skrivar sedan ut listan "fruit" i konsolen.



// ** Övning 6. ** 
let suits = ["spader", "hjärter", "klöver", "ruter"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deck = [];

for (let suit of suits) {
  for (let value of values) {
    deck.push(`${suit} ${value}`);
  }
}
console.log(deck);

//Vi skapar en dynamisk lista (array) som heter "suits" och innehåller 4 olika spelkorts-färger (Strings).
//Vi skapar en dynamisk lista (array) som heter "values" och innehåller 13 olika spelkorts-nummer (Number)
//Vi skapar en dynamisk lista (array) som vi lämnar tom.

//Vi skapar en for of loop som sparar innehållet i listan "suits" i en ny dynamisk lista som heter "suit"
//Vi skapar sedan en till for of loop, som sparar innehållet i listan "values" till en ny dynamisk lista som heter "value" och sedan 
//lägger till värdena från "suit" och "value", som vi nu har deklarerat som objekt. De ska då läggas in enligt for of-loopen som tar första färgen (item) i suit och lägger på nummer från "value" tills vi har spader 2-14, hjärter 2-14 etc.
//Vi skriver sedan ut listan i konsolen.

// ** Övning 7. **
let flowers = [
  "Ros",
  "Tulpan",
  "Lilja",
  "Ros",
  "Tulpan",
  "Solros",
  "Solros",
  "Tulpan",
];


let flowerItems = [];
let flowerCounts = [];

for (let flower of flowers) {
  let index = flowerItems.indexOf(flower);

  if (index !== -1) {
    flowerCounts[index]++;
    console.log(`${flower} finns redan, räknas om till ${flowerCounts[index]}`);
  } else {
    flowerItems.push(flower);
    flowerCounts.push(1);
    console.log(`${flower} är ny, lägg till med 1`);
  }
}

console.log("Unika blomnamn:", flowerItems);
console.log("Antal av varje blomma:", flowerCounts);


//Globalscope

let globalVar = "Jag är global"

function globalScope () {
    console.log(globalVar);
}

globalScope();
console.log(globalVar);

//Functionscope, variabel finns enbart inom functionen

function functionScope () {
    let functionScope = "Jag är funktionell"
    console.log(functionScope);
    
}
functionScope();

//Blockscope, funkar endast inom blocket, om man inte använder "var"

{
    let blockScope = "Jag är block"
    console.log(blockScope);
}
console.log(blockScope);