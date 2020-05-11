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

    // opgave 8:
    public getGeslacht(): string{
        return this.geslacht;
    }
    public setGeslacht(geslacht: string): void{
        this.geslacht = geslacht;
    }
    
    // opgave 9:
    public setLeeftijd(leeftijd: number): void{
        this.leeftijd = leeftijd;
     }
       
    public getLeeftijd(): number{
        return this.leeftijd;
    }
}