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
    idade:number;

    comer(){
        super.comer();
        console.log('metodo do coelho');
    }
}

let coelho:Coelho = new Coelho("Bunny", 'black');

console.log(coelho.name);
console.log(coelho.color);
coelho.comer();
