const soma = function (x:number , y: number):number
{
    return x + y;
}

const sub = (x:number, y:number): number => {
    return x - y;
}

let funcao = (name:string) => {
    return 'Welcome '+ name;
}

let getNome = name => 'Nome: '+ name;

let getNomeCompleto = (nome:string, sobrenome?:string):string => {
    if(typeof sobrenome != 'undefined')
        return nome+' '+sobrenome;
    else
        return nome;
};


console.log(
    soma(3,1)
 );

 console.log(
     sub(3,1)
  );

console.log(
    funcao('Rossano')
);

console.log(
    getNome('Rossano')
);

console.log(
    getNomeCompleto('Rossano', 'Bavaresco')
);

console.log(
    getNomeCompleto('Rossano')
);
