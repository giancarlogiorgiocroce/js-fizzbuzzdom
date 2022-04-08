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

    if (!(i % 3) && !(i % 5)) {
        box.append('FizzBuzz');
        box.classList.add('fizz');
        box.classList.add('buzz'); 
    } else if (!(i % 5)) {
        box.append('Buzz');
        box.classList.add('buzz'); 
    } else if (!(i % 3)) {
        box.append('Fizz');
        box.classList.add('fizz');
    } else {
        box.append(i);
    };

// Le possibilità non si sovrascrivono a vicenda; se voglio
// che una possibilità "combinata" venga recepita la devo
// mettere in cima ai casi possibili.
};



// Come faccio a farlo con innerHTML?
/*
for (let i = 1; i <= limit; i++) {
    // container.innerHTML += `<div class="box"></div>`;
    // console.log(container);
    
    if (!(i % 15)) {
        container.innerHTML += `<div class="box fizz buzz">FizzBuzz>/div>`;
    } else if (!(i % 5)) {
        container.innerHTML += `<div class="box buzz">Buzz</div>`;
    } else if (!(i % 15)) {
        container.innerHTML += `<div class="box fizz">Fizz</div>`;
    }

    if ((i % 3 && i % 5)) {
        container.innerHTML += `<div class="box">${i}</div>`;
    }

};
*/