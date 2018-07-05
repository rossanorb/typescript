
/*
let obj: object = {
    name:'Rossano',
    last_name:'Bavaresco'
};

obj = 'string';   tipo objeto do Typescript */


let pessoa: Object = {
    name:'Rossano',
    last_name:'Bavaresco'
};

pessoa = 2; // sem erros pois é objecto nativo do javascript

let myArray1:Array<any> = [2,'string', false, {name:'Rossano'}];
let myArray2:any[] = [2,'string', false, {name:'Rossano'}];
