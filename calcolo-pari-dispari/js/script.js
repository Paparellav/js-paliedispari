// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt ('Scegli pari o dispari');
const userNumber = parseInt(prompt('Inserisci un numero fra 1 e 5'));
console.log(userChoice);
console.log("Numero utente", userNumber);

const computerNumber = generateRndInteger(1,5);
console.log("Numero computer", computerNumber);

let sum = userNumber + computerNumber;
let evenOrOdd = pariOrDispari(sum)
console.log("La somma dei numeri è:", sum);
console.log("Il risultato finale è:", evenOrOdd);

if (userChoice === evenOrOdd) {
    console.log("Hai vinto cojone");
} else {
    console.log("Hai perso cojone");
}

// FUNCTIONS
function generateRndInteger(min, max) {
    const randNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randNumber;
}

function pariOrDispari(mySum) {
    let result;
    if (mySum % 2 === 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}