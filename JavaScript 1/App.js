// const types = ["Boolean"];
// types [1] = "String";
// types [2] = "Number";
// types [3] = "Null";
// types [4] = "Undefined";
// types [5] = "NaN";

// let cars = ["volvo", "Saab"];

// let myName = "Mårten";
// const siffra = 2;



// console.log ("Hej jag heter " + myName + "och jag är " + siffra + " År");
// console.log ("Här är några av mina favoritdatatyper: " + types); 
// console.log (cars); 



// Code along plusPoäng



function greet () {
    let input = document.getElementById("userName").value
    let firstName = input; 
    document.getElementById("welcome").innerHTML = `Välkommen ${firstName}!`;
}



function count () {
    let input1 = document.getElementById("tal1").value;
    let input2 = document.getElementById("tal2").value;
    let tal1 = Number(input1);
    let tal2 = Number(input2);
    let summa = tal1 + tal2;
    let diff = tal1 - tal2;
    let produkt = tal1 * tal2;
    document.getElementById("slutsumma").innerHTML = "Addition: " + tal1 + " + " + tal2 + " = " + summa;
    document.getElementById("diff").innerHTML = "Subtraktion: " + tal1 + " - " + tal2 + " = " + diff;
    document.getElementById("produkt").innerHTML = "Multiplikation: " + tal1 + " * " + tal2 + " = " + produkt;
}


//Return

function add(a, b) {
    return a + b
}

console.log("Svaret är " + add(5, 10))

//Arrow

const times = (c, d) => c * d; 

console.log("Svaret är " + times(19, 10))


let greetings = (firstNames, lastNames) => "Hej " + firstNames + " " + lastNames;

console.log(greetings("Mårten", "Gullström Öhlin" ));

    








