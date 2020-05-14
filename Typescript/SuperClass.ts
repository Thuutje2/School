class SuperClass{
    protected voornaam: string;
    protected achternaam: string = "Delmar";
    private creditcard: string = "Visa";
    //constructor
    constructor(voornaam: string){
        this.voornaam = voornaam;
    }
    public getAchternaam(): string{
        return this.achternaam;
    }
   
   public getCreditCard():string{
        return this.creditcard;
    }

    
    
}
class SubClass extends SuperClass{
    // constructor
    constructor(voornaam: string){
        // get SuperClass constructor
        super(voornaam);
        this.voornaam = voornaam;
    }
}
let shireen: SubClass = new SubClass("Shireen");
console.log("Shireens' geërfde achternaam: " + shireen.getAchternaam());
console.log("Shireens' CC-type: " + shireen.getCreditCard());