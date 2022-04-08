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
    box.append(i);
    container.append(box);
    
    if (!(i % 3)) {
        box.append('Fizz');
        box.classList.add('fizz');
    }

    if (!(i % 5)) {
        box.append('Buzz');
        box.classList.add('buzz'); 
    }
};
