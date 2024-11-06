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
    document.getElementById("welcome").innerHTML = "Välkommen " + firstName + "!";
    console.log("Hej " + firstName);
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
    // console.log(+ tal1 + + tal2);
    
}

// for (let i = 1; i < 1001; i++) {
//     console.log("Du har " + i + " tuggummin!");
// }


for (let i = 100; i > 0; i--) {
    

    if (i = 1) {
        (console.log("Du har " + i + " godis kvar!"));
    }
    else {  
        (console.log("Du har " + i + " godisar kvar!"));
    }
}


// greet ();


// let tal1 = Number(prompt("Ange ett tal"));
// let tal2 = Number(prompt("Ange ett till tal"));
// let tal3 = Number(prompt ("ange ett tal: "));

// let summa = tal1 + tal2;
// let diff = tal1 - tal2;
// let produkt = tal1 * tal2;
// let rundat = Math.round(tal3);
// let decimal = tal3.toFixed(2);

// console.log ("Summan är: " + summa);
// console.log ("Det differensen med: " + diff);
// console.log ("Produkten är: " + produkt);
// console.log ("Avrundat tal blir: " + rundat)
// console.log ("Avrundat tal till två decimaler: " + decimal)





