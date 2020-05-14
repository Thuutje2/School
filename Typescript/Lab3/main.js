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
