"use strict";
exports.__esModule = true;
// opgave 5 
var Persoon = /** @class */ (function () {
    // opgave 6:
    // constructor-methode:
    function Persoon(naam, leeftijd, geslacht) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        console.log('\n\tNieuw Persoon-object aangemaakt.');
        console.log('\tDe property naam is ' + this.naam);
    }
    return Persoon;
}());
exports.Persoon = Persoon;
