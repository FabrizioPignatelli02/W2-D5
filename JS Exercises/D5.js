/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log("Es.1:",pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("Es.2:",pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("Es.3:",pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let moving = pets[0];
pets.push(moving);
pets.shift();
console.log(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i=0; i<cars.length; i++)
{
  cars[i].licenseplate = Math.floor(Math.random()*10);
}


console.log ("Es.5:",cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({brand: "Cupra", model: "Formentor", color: "orange", licenseplate: 4, trims: ["hybrid", "gt", "allure"]});
// console.log(cars);
for(let i=0; i<cars.length; i++)
{
  cars[i].trims.pop();
}

console.log("Es.6:",cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let i=0; i<cars.length; i++)
{
  const tipo = cars[i].trims.shift();
  justTrims.push(tipo);
}

console.log("Es.7:",justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i=0; i<cars.length; i++)
{
  const firstLetterColor = cars[i].color.charAt(0);
  if (firstLetterColor === "b")
  {
    console.log("Es.8: "+"Fizz")
  }
  else
  {
    console.log("Es.8: "+"Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while(numericArray[i] !== 32)
{
  console.log("Es.9:",numericArray[i]);
  i++;
}



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const newCharactersArray = [];

for (let i=0; i<charactersArray.length; i++)
{
  const element = charactersArray[i];
  switch(element){
    case "a":
      newCharactersArray.push("1");
      break;
    case "b":
        newCharactersArray.push("2");
        break;
    case "c":
      newCharactersArray.push("3");
      break;
    case "d":
      newCharactersArray.push("4");
      break;
    case "e":
      newCharactersArray.push("5");
      break;
    case "f":
      newCharactersArray.push("6");
      break;
    case "g":
      newCharactersArray.push("7");
      break;
    case "h":
      newCharactersArray.push("8");
      break;
    case "i":
      newCharactersArray.push("9");
      break;
    case "j":
      newCharactersArray.push("10");
      break;
    case "k":
      newCharactersArray.push("11");
      break;
    case "l":
      newCharactersArray.push("12");
      break;
    case "m":
      newCharactersArray.push("13");
      break;
    case "n":
      newCharactersArray.push("14");
      break;
    case "o":
      newCharactersArray.push("15");
      break;
    case "p":
      newCharactersArray.push("16");
      break;
    case "q":
      newCharactersArray.push("17");
      break;
    case "r":
      newCharactersArray.push("18");
      break;
    case "s":
      newCharactersArray.push("19");
      break;
    case "t":
      newCharactersArray.push("20");
      break;
    case "u":
      newCharactersArray.push("21");
      break;
    case "v":
      newCharactersArray.push("22");
      break;
    case "w":
      newCharactersArray.push("23");
      break;
    case "x":
      newCharactersArray.push("24");
      break;
    case "y":
      newCharactersArray.push("25");
      break;
    case "z":
      newCharactersArray.push("26");
      break;
  }
}
console.log("Es.10:",newCharactersArray);
