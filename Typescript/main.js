"use strict";
exports.__esModule = true;
// opgave 7:
var Persoon_1 = require("./Persoon");
var umut = new Persoon_1.Persoon('Umut', 18, 'M');
var demirel = new Persoon_1.Persoon('Demirel', 19, 'M');
// lab 01: 
var Thuja = new Persoon_1.Persoon('Thuja', 17, 'V');
var thamara = new Persoon_1.Persoon('Thamara', 18, 'V');
// opgave 10:
demirel.setLeeftijd(24);
console.log("\n\tDe leeftijd van Demirel is: " + demirel.getLeeftijd());
// lab 02:
thamara.setLeeftijd(19);
console.log("\n\tDe leeftijd van Thamara is: ", thamara.getLeeftijd());
// opgave 11:
console.log(thamara.getGegevens());
console.log(demirel.getGegevens());
// lab 04:
Thuja.setGemiddeldCijfer(8);
Thuja.setIsStudent(true);
umut.setGemiddeldCijfer(5);
umut.setIsStudent(true);
thamara.setGemiddeldCijfer(7);
thamara.setIsStudent(true);
demirel.setGemiddeldCijfer(2);
demirel.setIsStudent(false);
var persoonsgegevens = [];
persoonsgegevens.push(JSON.stringify(thamara.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(umut.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(Thuja.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(demirel.gegevensOpslaan()));
// voor elk persoon-element, toon element
persoonsgegevens.forEach(function (gegevens) {
    console.log("\n\t", gegevens);
});
// opgave 14
var Users_1 = require("./Users");
var shireen = new Users_1.User("Shireen", 22, 'V', "Shireen@gmail.com", "Uh65Tg", "klant");
console.log(shireen.toString());
var sam = new Users_1.User("Sam", 18, 'M', "Sam@gmail.com", "Ujstdk", "klant");
console.log(sam.toString());
