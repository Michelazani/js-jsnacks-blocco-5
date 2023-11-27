/*Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.*/

const people = [

    {
        name:'Gabriella',
        surname:'Verdi',
        age:'25'
    },
    {
        name:'Mario',
        surname:'Rossi',
        age:'55'
    },
    {
        name:'Giovanna',
        surname:'Bianchi',
        age:'5'
    },
    {
        name:'Giorgia',
        surname:'Biscotta',
        age:'15'
    },
    {
        name:'Gino',
        surname:'Ginetti',
        age:'78'
    }
]

/*Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.*/

    const newPeopleArray = people.map ((person) =>{
        person.fullName = person.name + '' + person.surname;
        person.older= person.age >= 18;
        return person
            // console.log (`${person.name} ${person.surname} + can drive`) 
    });
console.log(newPeopleArray)

const adults = newPeopleArray.filter ((person) => {
    if (person.older === true){
        return true;
        // se è true, lo aggiunge all'array, altrimenti ne esce
    };
}); 
console.log (adults)
