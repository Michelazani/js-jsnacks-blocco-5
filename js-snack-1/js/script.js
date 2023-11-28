/*Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:*/

const browserOpen =
{
    "tab": ["Facebook", "GitHub", "Gmail", "Yahoo", "X", 'Youtube'], 
    "activeTab" : 0
}

const blackList = ["Facebook", "GitHub", "Gmail"]

browserOpen.tab = browserOpen.tab.filter((element) => {
    // rimuovo elemento se presente in blacklist
    if ( !blackList.includes (element.toLowerCase())){
        return true
    }
})

console.log (browserOpen)
/*Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.*/
