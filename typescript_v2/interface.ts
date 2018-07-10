/*------------ versão 1-----------------------------------
function show( obj:{ category:string, product:string} ){
    console.log(obj.category);
    console.log(obj.product);
}

show( { category:"Categoria", product:"Produto"} );
-----------------------------------------------------*/


interface ObjectValue {
    category: string;
    product?: string; // opcional
}

function show( {category, product}:ObjectValue ){
    console.log(category);
    console.log(product);
}

show( { category:"Categoria", product:"Produto"} );

// declarando como tipo
let ojb: ObjectValue = {category: "Categoria 1", product: "Produto 1"}

class Product implements ObjectValue {
    category:string;
    //product:string;
}

let product = new Product();
product.category = "Categoria";

console.log(product.category);
