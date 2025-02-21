/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creo un array di squadre con punti e falli da riempire casualmente dal pc
let squadre = [
    { nome: "juventus", punti: 0, falliSubiti: 0 },
    { nome: "milan", punti: 0, falliSubiti: 0 },
    { nome: "inter", punti: 0, falliSubiti: 0 },
    { nome: "napoli", punti: 0, falliSubiti: 0 },
    { nome: "roma", punti: 0, falliSubiti: 0 }
];

console.log(squadre);

// Creo una funzione per generare un numero casulale  tra max e min
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Assegno i numeri casuali a punti e falli
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = numeroCasuale(10, 100);
    squadre[i].falliSubiti = numeroCasuale(10, 100);
};


// Creo di nuovo un array con solo nomi e falli 
let squadreNomFal = squadre.map(squadra => {
    return { nome: squadra.nome, falliSubiti: squadra.falliSubiti };
});


console.log(squadreNomFal);
