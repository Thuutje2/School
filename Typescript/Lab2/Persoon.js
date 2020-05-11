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
    // opgave 8:
    Persoon.prototype.getGeslacht = function () {
        return this.geslacht;
    };
    Persoon.prototype.setGeslacht = function (geslacht) {
        this.geslacht = geslacht;
    };
    // opgave 9:
    Persoon.prototype.setLeeftijd = function (leeftijd) {
        this.leeftijd = leeftijd;
    };
    Persoon.prototype.getLeeftijd = function () {
        return this.leeftijd;
    };
    return Persoon;
}());
exports.Persoon = Persoon;
