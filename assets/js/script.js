
// esercizio 1

var stringa = 'Sto imparando JavaScript';

var maiuscolo = stringa.toUpperCase();
document.getElementById('maiuscola').innerHTML = maiuscolo;

var minuscolo = stringa.toLowerCase();
document.getElementById('minuscola').innerHTML = minuscolo;

var strArray = stringa.split('');
document.getElementById('strArray').innerHTML = strArray;

var estraiCaratteri = stringa.charAt(2) + stringa.charAt(1) + stringa.charAt(14) + stringa.charAt(18) ;

document.getElementById('estraiCaratteri').innerHTML = estraiCaratteri;

var concatena = stringa.concat(' JS')

document.getElementById('concatena').innerHTML = concatena;

var estraiStringa = stringa.substring(5,9)

document.getElementById('estraiStringa').innerHTML = estraiStringa;

// esercizio 2

const persone = ['Giovanni','Carla','Piero','Mirtilla'];


document.getElementById('array').innerHTML = persone;

document.getElementById('lunghezza').innerHTML = persone.length;

document.getElementById('elemento').innerHTML = persone[2];

document.getElementById('ultimo').innerHTML = persone[persone.length - 1];


persone.splice(2,1,'Massimo');

document.getElementById('modificato').innerHTML = persone; 


// esercizio 3
const anni = [2001, 1990, 1987, 2018, 2010]

function calcolaEta (anni) {
    eta = 2022 - anni;
    return eta;
}

document.getElementById('eta1').innerHTML += calcolaEta(anni[0]) + ' anni';
document.getElementById('eta2').innerHTML += calcolaEta(anni[1]) + ' anni';
document.getElementById('eta3').innerHTML += calcolaEta(anni[2]) + ' anni';
document.getElementById('eta4').innerHTML += calcolaEta(anni[3]) + ' anni';
document.getElementById('eta5').innerHTML += calcolaEta(anni[4]) + ' anni';

const array = [calcolaEta(anni[0]),calcolaEta(anni[1]),calcolaEta(anni[2]),calcolaEta(anni[3]),calcolaEta(anni[4])];

document.getElementById('arrayEta').innerHTML += array;


// esercizio 4

const animali = ['coniglio', 'cane' , 'gatto', 'criceto'];

document.getElementById('intero').innerHTML = animali;

animali.push('leone')

document.getElementById('aggiunto').innerHTML = animali;

document.getElementById('estratto').innerHTML = animali.slice(0,4);

document.getElementById('verifica1').innerHTML = animali.includes('gatto');

document.getElementById('verifica2').innerHTML = animali.includes('cavallo');

