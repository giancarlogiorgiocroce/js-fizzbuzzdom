/*
    Stampare in console i numeri da 1 a 100
    Stampare cose diverse per i multipli di 3, 5 o entrambi
    Appendere tutto in HTML
*/

// Segno le variabili
const container = document.querySelector('.container');
const limit = 100

// Inizializzo il ciclo for
for (let i = 1; i <= limit; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.append(box);
    
    // Se i/3 NON ha scarto = fizz
    if (!(i % 3)) {
        box.append('Fizz');
        box.classList.add('fizz');
    }

    // Se i/5 NON ha scarto = buzz
    if (!(i % 5)) {
        box.append('Buzz');
        box.classList.add('buzz');
    }

    // Se i/3 e i/5 HANNO entrambi scarto = numeri
    if ((i % 3 && i % 5)) {
        box.append(i);
    }

    /*
        Visto che ho usato classList le classi si sommano e danno il colore
        che ho scelto nel CSS per FizzBuzz. Idem per append.
    */
};


// Come faccio a farlo in altro modo con append?
/*    
for (let i = 1; i <= limit; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.append(box);

    if (!(i % 3)) {
        box.append('Fizz');
        box.classList.add('fizz');
    } else if (!(i % 5)) {
        box.append('Buzz');
        box.classList.add('buzz'); 
    } else if (???) {
        box.append('FizzBuzz');
        box.classList.add('fizz');
        box.classList.add('buzz'); 
    } else {
        box.append(i);
    }
}
*/


// Come faccio a farlo con innerHTML?
/*

*/