// assertion types
const meu_nome: any = 'Rossano';
// let count = (<string>meu_nome).length ;
let count = (meu_nome as string).length;

console.log(count);


let obj = {
    name: 'Rossano'
};
(<any>obj).texto = 'School of net';
// (obj as any).texto = 'School of net';

console.log(obj);


let num = 2;

let numString = num + '';
console.log(typeof numString);

let strigNum  = '-234';
let num2 = +strigNum;
console.log(typeof num2);
console.log(num2);
