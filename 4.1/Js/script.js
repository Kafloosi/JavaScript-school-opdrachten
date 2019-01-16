var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",
    var: toet = "toet toet",
return: true
}

function getRandomizer(bottom, top) {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}

var gasgeven = getRandomizer(1,140);

console.log("De kleur van de Ford Mondeo met 4 wielen is: " + mijnauto.kleur);
