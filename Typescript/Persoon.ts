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

    // Lab 03:  
    public setNaam(naam: string): void{
        this.naam = naam;
    }

    public getNaam(): string{
        return this.naam;
    }   
    
    public setIsStudent(isStudent: boolean): void{
        this.isStudent = isStudent;
    }
    public getIsStudent(): boolean{
        return this.isStudent;
    }

    public setGemiddeldCijfer(gemiddeldCijfer: number): void{
        this.gemiddeldCijfer = gemiddeldCijfer;
    }
    public getGemiddeldCijfer(): number{
        return this.gemiddeldCijfer;
    }
   
  
    // opgave 11:
    public getGegevens(): string {
        let gegevens: string =
        "\n\tDe gegevens van " + this.naam + " zijn: \n" +
        "\tLeeftijd: " + this.leeftijd + "\n" +
        "\tGeslacht: " + this.geslacht + "\n";
        return gegevens;
    }

    // opgave 12:
    public toString(): string{
        return ("\tDe gegevens van " + this.naam + " zijn: \n" +
        "\tLeeftijd: "  + this.leeftijd + "\n" +
        "\tGeslacht: " + this.geslacht+ "\n");
    }

    // Lab 04:
    public gegevensOpslaan(): object{
        let persoonsgegevens: object = {"Naam": this.naam, "Leeftijd": this.leeftijd,
    "Geslacht": this.geslacht,"Is Student": this.isStudent , "Gemiddeld Cijfer": this.gemiddeldCijfer};
    return persoonsgegevens;
    }
    

}

