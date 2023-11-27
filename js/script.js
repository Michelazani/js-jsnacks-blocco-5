/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).*/


const cars = [

    {
        marca:'Fiat',
        modello: 'Panda',
        alimentazione: 'benzina', 
    },
    {
        marca:'Ford',
        modello: 'Focus',
        alimentazione: 'diesel', 
    },
    {
        marca:'Audi',
        modello: 'TT',
        alimentazione: 'benzina', 
    },
    {
        marca:'Audi',
        modello: 'R8',
        alimentazione: 'elettrico', 
    },
    {
        marca:'Dacia',
        modello: 'Sander',
        alimentazione: 'gpl', 
    },
    {
        marca:'Maserati',
        modello: 'MC20',
        alimentazione: 'metano', 
    },
    {
        marca:'Honda',
        modello: 'Civic',
        alimentazione: 'diesel', 
    },
    {
        marca:'Alfa Romeo',
        modello: 'Mito',
        alimentazione: 'elettrico', 
    },
    {
        marca:'Alfa Romeo',
        modello: 'Tonale',
        alimentazione: 'gpl', 
    },
    {
        marca:'Fiat',
        modello: 'Punto',
        alimentazione: 'metano', 
    }
]; 

/*Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.*/
const gasolineCars = cars.filter((singleCar) => {
    // RIPRENDO singleCarO ALL'INTERNO DELLA PARENTESI
    if (singleCar.alimentazione == 'benzina'){
        return true;
    };
});

const dieselCars = cars.filter((singleCar) => {
    if (singleCar.alimentazione == 'diesel'){
        return true;
    };
});

const filteredCars = cars.filter((singleCar) => {
    // if (singleCar.alimentazione != 'diesel' && singleCar.alimentazione != 'benzina')
    if(singleCar.alimentazione == 'metano', 'gpl', 'elettrico'){
        return true;
    };
});

console.log(gasolineCars);
console.log(dieselCars);
console.log(filteredCars);
console.log(cars); 





/*Infine stampa separatamente i 3 array.*/
