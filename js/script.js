// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola');
console.log(userWord);
let myWord = checkPalindrom(userWord);
console.log(myWord);
let result;

if (userWord === myWord) {
    result = ('La parola è palindroma');
} else {
    result = ('La parola non è palindroma');
}

console.log(result);

/**
 * Description // Funzione per determinare se la parola inserita dall'utente sia palindroma o meno
 * @param {string} userElement // La parola che andrà ad inserire l'utente nonché quella che verrà controllata nella function
 * @returns {string} // Risposta se la parola è palindroma o meno
 */

function checkPalindrom(userElement) {
    return userElement === userElement.split('').reverse().join(''); 
}