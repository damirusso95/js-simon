// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// :roccia: MILESTONE 1
// Generate 5 numeri casuali. Può tornarvi utile una funzione? Provate a stamparli prima in console e poi in pagina.
// :avviso: Ricordate che questi numeri dovrete ricontrollarli più avanti quindi non "buttateli" ma conservateli da qualche parte :occhiolino:

// :roccia: MILESTONE 2
// Impostate un timer a 3 secondi, testatelo con un console.log. Una volta funzionante fate in modo che nasconda i numeri in pagina.

// :roccia: MILESTONE 3
// Sempre nella funzione temporizzata, mostrate un prompt all'utente finchè non vi ritrovate con 5 numeri salvati. Poi stampate tutto l'array dei numeri utente in console.

// :roccia: MILESTONE 4
// Sempre nella funzione temporizzata, ora dovrete confrontare i due array:
//  i numeri estratti e quelli inseriti dall'utente. Da dove partire?
//   Io inizierei a controllare di avere tutto quello che mi serve.
//    Provate con console.log se avete visibilità dei due dati.
//     Poi ragionate su come confrontare gli array e di come generare il risultato, cioè la lista dei numeri indovinati.


// array lista numeri

function creaNumeri() {
    //  ciclo che crea un numero casuale finchè la lunghezza dell'array non è 5
    while (listaN.length < 5) {
        let x = Math.floor(Math.random() * 100) + 1;
        listaN.push(x);
    }

}


// funzione timer
function timer() {
    // elimino la lista dopo 3 sec
    y = document.getElementById("lista").innerHTML = "";

    console.log(listaN)
}

