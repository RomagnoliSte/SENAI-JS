let a = 2;
let b = 9;

console.log("--- Operadores aritméticos ---");
console.log(a + b);  //soma
console.log(a - b);  //subtração
console.log(a * b);  //multiplicação
console.log(a / b);  //divisão
console.log(a % b);  //módulo ou resto da divisão
console.log(a ** b); //potência

console.log("--- Operadores de comparação ---");
let c = 8;
let d = "8";

console.log(c == d); // igual (valor)
console.log(c === d); // igual (tipo + valor)
console.log(c != d);  // diferente (valor)
console.log(c !== d); // diferente (tipo + valor)
console.log(c > d); //maior
console.log(c < d); //menor
console.log(c >= d); //maior ou igual
console.log(c <= d); //menor ou igual

console.log("--- Operadores lógicos ---");

let chocolate = true;
let pipoca = false;

console.log(chocolate && pipoca); //E = AND

let elseve = true;
let siage = false;
console.log(elseve || siage); //OU = OR

let logado = true;
console.log(!logado);

console.log("--- Operadores de atribuição ---");

let pontos = 10; //atribuição simples
pontos += 4;     //atribuição dele mesmo + soma
pontos -= 7;     //atribuição dele mesmo + subtração

console.log(pontos);