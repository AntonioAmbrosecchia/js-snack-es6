/*
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


// Creo l'array con oggetti (bici da corsa)

let biciclette = [
    { nome: "mountain bike", peso: 7.2 },
    { nome: "bici da cittè", peso: 6.8 },
    { nome: "bici da strada", peso: 7.1 },
    { nome: "BMX", peso: 6.9 },
    { nome: "bici da corsa", peso: 6.7 }
];

console.log(biciclette);


// Uso in ciclo for per trovare la bici col peso minore
let biciLeggera = biciclette[0];

for (let index = 1; index < biciclette.length; index++) {
    if (biciclette[index].peso < biciLeggera.peso) {
        biciLeggera = biciclette[index];
    }
}

console.log("la bici più teggera è la:", biciLeggera.nome, "che pesa", biciLeggera.peso, "kg");


