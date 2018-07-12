/*
class Aninal{
    constructor(public name:string, public color:string){

    }
}

let animal:Aninal = new Aninal('Coelho','branco');

console.log( animal.name );
console.log( animal.color );
*/

interface AninalInterface{
        name:string;
        color:string;
        comer();
}

class Aninal implements AninalInterface{
    constructor(public name:string, public color:string){
    }

    comer(){
        console.log('metodo do animal');
    }
}

class Coelho extends Aninal{
    private _idade:number;

    get idade():number {
        return this._idade;
    }

    set idade(value:number) {
        this._idade = value;
    }

    comer(){
        super.comer();
        console.log('metodo do coelho');
    }
}

let coelho:Coelho = new Coelho("Bunny", 'black');
coelho.idade = 2;

console.log(coelho.name);
console.log(coelho.color);
console.log(`idade: ${coelho.idade}`);
coelho.comer();
