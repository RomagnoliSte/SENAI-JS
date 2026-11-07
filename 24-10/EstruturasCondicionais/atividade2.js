
let valorCompra = 1000;
let percentualDesconto = 0;
let valorDesconto = 0;
let precoFinal = valorCompra;

if (valorCompra >= 200) {
    percentualDesconto = 20;
} else if (valorCompra >= 100) {
    percentualDesconto = 10;
} else percentualDesconto = 0;

valorDesconto = valorCompra * (percentualDesconto / 100);
if (valorDesconto > 0) {
    precoFinal = valorCompra - valorDesconto;
}

console.log(`Para o valor de compra: ${valorCompra} o percentual de desconto disponível é: ${percentualDesconto}%.`)
console.log(`O valor do desconto aplicado foi ${valorDesconto} e o total da sua compra será ${precoFinal}`)

