// opgave 5 
export class Persoon{
    public naam: string;
    protected leeftijd: number;
    protected geslacht: string;
    public isStudent: boolean;
    public gemiddeldCijfer: number;


    // opgave 6:
    // constructor-methode:
    constructor(naam: string, leeftijd: number, geslacht: string){
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        console.log('\n\tNieuw Persoon-object aangemaakt.');
        console.log('\tDe property naam is ' + this.naam);
    }
}