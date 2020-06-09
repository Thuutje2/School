//Opgave 15
export class Item {
    private id: string;
    private merk: string;
    private model: string;
    private prijs: number;
    private aantal: number;
    private totaal: number;

    // constructor
    constructor(id: string, merk: string, model: string, prijs: number, aantal: number){
        this.id = id;
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.aantal = aantal;
    }
    public getID(): string {
        return this.id;
    }
    public getOmschrijving(): string {
        return (this.merk + " " + this.model);
    }
    public getPrijs(): number {
        return this.prijs;
    }
    public getAantal(): number {
        return this.aantal;
    }
    public setAantal(aantal: number): void {
        this.aantal = aantal;
    }
    
    //lab 06
     public setTotaal(totaal: number): void{
        this.totaal = totaal;
    }
    public getTotaal(): number{
        return(this.aantal * this.prijs);
    }
}