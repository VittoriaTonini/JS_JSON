//importiamo il nostro file json nel nostro codice javascript per poterci lavorare

//import con sintassi classica
let requestURL = './classe.json';       //percorso del file JSON da caricare
let request = new XMLHttpRequest();     // creiamo un oggetto per fare richieste HTTP
request.open('GET', requestURL);        // prepariamo una richiesta GET verso il file
request.responseType = "json";          // chiediamo che la risposta venga convertita in JSON
request.send();                         // inviamo la richiesta

request.onload = function() {           //onload è un evento che significa "quando viene caricata la richiesta, allora fai"
    const classe = request.response;    //crei classe e lo rendi uguale alla risposta della richiesta
    console.log(classe);
    console.log(classe.insegnanti[1].cognome);
}