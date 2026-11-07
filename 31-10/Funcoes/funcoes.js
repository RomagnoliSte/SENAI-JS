//funcao simples
// function nomeDaFuncao() {
//     console.log("Bom dia!")
//     console.log("Boa tarde!")
//     console.log("Boa noite!")
//     console.log("__________")
// };

// nomeDaFuncao();

// function boasVindas() {
//     console.log("Seja bem-vinda ao JavaScript")
// }

// boasVindas();

// function dizerOla() {
//     console.log("Olá!!")
// }

// dizerOla()

// function mostrarCurso() {
//     console.log("Curso: Desenvolvimento Web com JavaScript");
// }

// mostrarCurso()

// function fazerSuco() {
//     console.log("Suco de laranja")
// }

// fazerSuco()

//COM PARAMETRO
// function fazerSuco(sabor) {
//     console.log(`Fazendo suco de ${sabor}`);
// }

// fazerSuco("Abacaxi")
// fazerSuco("Manga")
// fazerSuco("Limão")

// function somar(num1, num2) {
//     let result = num1 + num2;
//     console.log(`${num1} + ${num2} : ${result}`)
// }

// somar(2, 3);

// function saudarPessoa(nome) {
//     console.log(`Olá, ${nome}!`);
//     console.log(`Seja bem-vindo(a)!`);
// };

// saudarPessoa("Steh");

// function dobro(numero) {
//     let result = numero * 2;
//     console.log(`O dobro de ${numero} é: ${result}`);
// }

// dobro(2);
// dobro(4);
// dobro(16);

// function enviarEmail(destinatario) {
//     console.log(`E-mail enviado para: ${destinatario} com sucesso!`)
// }

// enviarEmail("steh@gmail.com")

// function dobrar(n) {
//     return n * 2
// }

// let result = dobrar(3);
// console.log(result)

// function aoQuadrado(num) {
//     return n * n;
// }

// let result = aoQuadrado(64);
// console.log(result)

// function triplo(num) {
//     return num * 3;
// }

// let valorTriplo = triplo(4);
// console.log(`O triplo do valor informado é ${valorTriplo}`);

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
// }

// let nome = nomeCompleto("Stephanie", "Romagnoli");
// console.log(`O nome completo é: ${nome}`)

// function celsiusParaFahrenheit(celsius) {
//     let Fahrenheit = celsius * 1.8 + 32;
//     return Fahrenheit
// }

// let fahrenheit = celsiusParaFahrenheit(36);
// fahrenheit = fahrenheit.toFixed(2);
// console.log(`A conversao para fahrenheit do valor informado é: ${fahrenheit}`)

//Arrow function
// const saudacao = () => console.log("Olá!");
// saudacao();

//const dobrar = (n) => n*2;

const multiplicar = (num1, num2) => num1 * num2;
console.log(multiplicar(7, 3));