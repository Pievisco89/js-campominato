/* metto il prompt e le condizioni iniziali per decidere il livello di difficoltà*/
var scegliLivello = prompt("Scegli livello: 0, 1, 2");
/* condizione livello difficoltà */
switch(scegliLivello){
  case "0":
    var limit = 100;
    break;
  case "1":
    var limit = 80;
    break;
  case "2":
    var limit = 50;
    break;
  default: 
    alert("Errore");
}

var numeriBombe = 16;
var arrNumeriComputer = arrNumGenerator(numeriBombe, limit);
var arrNumeriUtente = [];
var tentativi = limit - numeriBombe;

console.log(arrNumeriComputer);



/* variabile flag */
var fine_gioco = false;

while(fine_gioco === false){
  var numeroUtente = parseInt(prompt("Inserisci un numero"));

  if(arrNumeriUtente.includes(numeroUtente) === true){
    /* alert per numero già inserito dall'utente */
    alert("Numero già inserito!"); 

  }else if(arrNumeriComputer.includes(numeroUtente) === true){
    /* alert per numero presente nell'array computer */
    alert("Booooom! Hai perso! Punteggio: " + arrNumeriUtente.length + " punti!"); 
    console.log("Hai inserito: " + arrNumeriUtente.join() + ". Ti ha fatto perdere il numero: " + numeroUtente + "!");
    fine_gioco = true;
 
  }else if(numeroUtente > limit){
    /* numero inserito superiore al limit, quindi non valido */
    alert("Numero non valido!") 
 
  }else if(numeroUtente < 1){
    /* numero inserito inferiore a 1, quindi non valido */
    alert("Numero non valido!") 
 
  }else if(isNaN(numeroUtente) === true){
    /* non è stato inserito un numero */
    alert("Devi inserire un numero!");
 
  }else{

    arrNumeriUtente.push(numeroUtente);
    /* condizione per la vittoria finale */
    if(tentativi === arrNumeriUtente.length){ 
      
      alert("Complimenti! Hai vinto!"); 
      fine_gioco = true;

    }
  }
}


/* funzione per pushare in arrNumeriComputer i numeri random */
function arrNumGenerator(num, max){
  var arrNum =[];
/* ciclo while per creare numeri casuali */
  while(arrNum.length < num){
    var numRandom = getNumRandom(max);
    /* se il numRandom non è nell'arrNum */
    if(arrNum.includes(numRandom) === false){
      /* pusho nell'array i numeri creati */
      arrNum.push(numRandom); 
    }
  }
  return arrNum;
}

/* funzione per generare numeri casuali */
function getNumRandom(max){
  /* return = numero random con un limite massimo  */
  return Math.floor(Math.random() * max) + 1;

}