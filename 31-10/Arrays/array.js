let idades = [12, 23, 21, 28, 17];
console.table(idades);

let frutas = ["Maça", "Pera"];

frutas.unshift("Morango");
frutas.push("Uvaia");
frutas.splice(2, 0, "Kiwi");
frutas.pop();
frutas.shift();

console.log(frutas);

let nomes = ["Matheus", "Ana", "Igor"];

nomes.forEach((elemento) => {
    console.log(elemento)
});