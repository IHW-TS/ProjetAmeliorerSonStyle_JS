let tabPers = [
  {
    nom: "Brusel",
    sex : "m",
    age: 35
  },
  {
    nom: "Dupont",
    sex : "n",
    age: 36
  },  
{
    nom: "Toto",
    sex : "f",
    age: 40
  },
  {
    nom: "Dupont",
    sex : "m",
    age: 10
  },
];

// La deuxième variente est une fonction largement plus efficace que Dupont vous présentera plus tard. 

////////////////////////////////////////////////////////////////////////////
///////////////////  Trier les personnes Majeurs  //////////////////////////
////////////////////////////////////////////////////////////////////////////

let tabPersF = [];
for (let { age, sex } of tabPers) {
    if ( age > 18 ) {
        tabPersF.push(age);
    }
}
console.log(tabPersF);

/*
//////Varient 2//////

var c = tabPers.filter((a) => {
  return a.age > 18;
});
console.log(c);
*/

////////////////////////////////////////////////////////////////////////////
///////////////////  Trier les personnes Mineurs  //////////////////////////
////////////////////////////////////////////////////////////////////////////

let tabPersF = [];
for (let { age, sex } of tabPers) {
    if ( age < 18 ) {
        tabPersF.push(age);
    }
}
console.log(tabPersF);

/*
//////Varient 2//////

var c = tabPers.filter((a) => {
  return a.age < 18;
});
console.log(c);

*/

////////////////////////////////////////////////////////////////////////////
////////////////////////  Trier les "Dupont"  //////////////////////////////
////////////////////////////////////////////////////////////////////////////

let tabPersF = [];
for (let { nom } of tabPers) {
    if ( nom == "Dupont" ) {
        tabPersF.push(nom);
    }
}
console.log(tabPersF);

/*
//////Varient 2//////

var c = tabPers.filter((a) => {
  return a.nom == "Dupont";
});
console.log(c);

*/

////////////////////////////////////////////////////////////////////////////
////////////////////  Trier les "Dupont" Mineur  ///////////////////////////
////////////////////////////////////////////////////////////////////////////

let tabPersF = [];
for (let { nom, age} of tabPers) {
    if ( nom == "Dupont" && age < 18) {
        tabPersF.push(nom, age);
    }
}
console.log(tabPersF);

/*
//////Varient 2//////

var c = tabPers.filter((a) => {
  return a.nom == "Dupont" && a.age < 18;
});
console.log(c);

*/

////////////////////////////////////////////////////////////////////////////
////////  Trier les personnes dont le nom commence par un "A"  /////////////
////////////////////////////////////////////////////////////////////////////

// Je vois de nom qui commence avec "A" donc bon je donne un exemple de tri alphabetique a la place 


var nb = tabPers.sort((x, y) => {
  if (x.nom < y.nom) {
    return -1;
  } 
  if (x.nom > y.nom) {
    return 1;
  }
  return 0;
});

console.log(tabPers);


//////////////////////////////////////////////////////////////////////////////////////
// Les personnes de sex feminin dont le nom commence par un "A" et qui son majeure. //
//////////////////////////////////////////////////////////////////////////////////////

// Toujours pas de "A" en vue
