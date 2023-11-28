/*Creare un array di oggetti di squadre di volley.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Generare numeri random al posto delle nelle proprietà:
punti fatti e falli subiti*/

const volleyTeam = [
    {
        name: 'Rosso',
        score: randomNumber(10,150),
        foul: randomNumber(0,25)
    },
    {
        name: 'Verde',
        score: randomNumber(25,50),
        foul: randomNumber(0,30)    
    },
    {
        name: 'Giallo',
        score: randomNumber(10,300),
        foul: randomNumber(0,18)
    },
    {
        name: 'Arancione',
        score: randomNumber(2,95),
        foul: randomNumber(0,56)
    }
];

console.log( volleyTeam)

function randomNumber(numberOne, numberTwo){
    return Math.floor(Math.random () * (numberTwo - numberOne +1) + numberOne);
}