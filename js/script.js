// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = isPalindrom();
console.log(userWord);

/**
 * Description // Funzione per determinare se la parola inserita dall'utente sia palindroma o meno
 * @param {string} userElement // La parola che andrà ad inserire l'utente nonché quella che verrà controllata nella function
 * @returns {string} // Risposta se la parola è palindroma o meno
 */
function isPalindrom(userElement) {

    userElement = prompt('Inserisci una parola');
    let result;

    if (userElement === ciao) {
        result = true;
        console.log(result);
    } else {
        result = false;
        console.log(result);
    }
    return result;
}