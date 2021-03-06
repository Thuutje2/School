// opgave 7:
import{Persoon} from "./Persoon";
let umut: Persoon = new Persoon('Umut', 18, 'M');
let demirel: Persoon = new Persoon('Demirel', 19, 'M');

// lab 01: 
let Thuja: Persoon = new Persoon('Thuja', 17, 'V');
let thamara: Persoon = new Persoon('Thamara', 18, 'V');

// opgave 10:
demirel.setLeeftijd(24);
console.log("\n\tDe leeftijd van Demirel is: " + demirel.getLeeftijd());
 

// lab 02:
thamara.setLeeftijd(19);
console.log("\n\tDe leeftijd van Thamara is: " , thamara.getLeeftijd());

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



let persoonsgegevens: string[] = [];
persoonsgegevens.push(JSON.stringify(thamara.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(umut.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(Thuja.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(demirel.gegevensOpslaan()));

// voor elk persoon-element 
persoonsgegevens.forEach(function(gegevens){
    console.log("\n\t" , gegevens);
});  

 