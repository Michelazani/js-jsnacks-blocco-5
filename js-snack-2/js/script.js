/*Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/




const numbersArray = [1,2,3,4,5];
const lettersArray = ['a','b','c','d','e'];

if (lettersArray.length !== numbersArray.length){
    alert ('impossible to merge');
}
else{
    const mergedArray = [];

    lettersArray.forEach((element, index) => {
        mergedArray.push (numbersArray[index], element);
    });
console.log(mergedArray)
}



