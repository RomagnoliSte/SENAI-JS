/* Maior de idade -> Solicite a idade de uma pessoa. Informe se ela é maior ou menor de idade.*/
let idade = 15;

if (idade >= 18) {
  console.log(`Com ${idade} anos, você já é maior de idade.`);
} else {
  console.log(`Você ainda é menor de idade.`);
}

/* Número positivo ou negativo -> Solicite um número e informe se é positivo, negativo ou zero.*/
let numero = -5;

if (numero < 0) {
  console.log(`O número ${numero} é negativo.`);
} else if ((numero = 0)) {
  console.log(`O número digitado é zero.`);
} else {
  console.log(`O número ${numero} é positivo.`);
}

/* Par ou ímpar -> Receba um número e descubra se ele é par ou ímpar.*/
let isPar = 6;

if (isPar % 2 === 0) {
  console.log(`O número digitado é par.`);
} else {
  console.log(`O número digitado é ímpar.`);
}

/* Maior número -> Receba dois números e informe qual é o maior ou se são iguais.*/
let numero01 = 5;
let numero02 = 3;

if (numero01 == numero02) {
  console.log(`Os números digitados são iguais.`);
} else if (numero01 > numero02) {
  console.log(`O número01 é o maior.`);
} else {
  console.log(`O número02 é o maior.`);
}

/* Aprovado ou reprovado -> Solicite uma nota. Se for maior ou igual a 7, aprovado; caso contrário, reprovado.*/
let nota = 8;

if (nota >= 7) {
  console.log(`Aprovado!`);
} else {
  console.log(`Reprovado!`);
}

/* Classificação de notas -> Receba uma nota de 0 a 10 e classifique: abaixo de 5 = insuficiente; de 5 a 6,9 = recuperação; de 7 a 8,9 = bom; de 9 a 10 = excelente.*/
if (nota > 9) {
  console.log(`A nota ${nota} - é excelente!`);
} else if (nota >= 7) {
  console.log(`A nota ${nota} - é boa.`);
} else if (nota >= 5) {
  console.log(`Com a nota ${nota} - você está de recuperação.`);
} else {
  console.log(`Você tirou: ${nota} - e está reprovado.`);
}

/* Desconto na compra -> Se uma compra for acima de R$ 500, aplique 10% de desconto. Caso contrário, não aplique desconto.*/
let valorCompra = 800;
let deconto = 0;
let valorFinal = valorCompra;

if (valorCompra > 500) {
  desconto = 10;
  valorFinal = valorCompra * (desconto / 100);
}

console.log(
  `Na sua compra de: ${valorCompra} você teve ${desconto}% de desconto. O valor final da sua compra é: ${valorFinal} `,
);

/* Calculadora de IMC -> Receba peso e altura, calcule o IMC e apresente a classificação.*/

/* Login -> Solicite usuário e senha. Se ambos corresponderem aos valores cadastrados, permita o acesso. Caso contrário, negue.*/

/* Calculadora de frete -> Compras acima de R$ 200 têm frete grátis. Entre R$ 100 e R$ 199,99, o frete custa R$ 15. Abaixo disso, custa R$ 25.*/

/* Dias da semana -> Receba um número de 1 a 7 e mostre o dia correspondente.*/

/* Cardápio -> Receba um número de 1 a 4 e apresente o prato correspondente de um restaurante.*/

/* Calculadora -> Receba dois números e uma operação (+, -, * ou /). Execute a operação escolhida.*/

/* Meses do ano -> Receba um número de 1 a 12 e mostre o nome do mês.*/

/* Semáforo -> Receba uma cor e informe a ação correspondente: verde = avançar, amarelo = atenção, vermelho = parar.*/

/* Atendimento -> Receba uma opção: 1 = Financeiro, 2 = Suporte, 3 = Comercial, 4 = Cancelamento. Exiba o setor escolhido.*/

/* Conversor de temperatura -> Receba uma opção para converter Celsius em Fahrenheit ou Fahrenheit em Celsius.*/

/* Classificação de usuário -> Receba o tipo de usuário: administrador, professor ou aluno. Exiba as permissões correspondentes.*/

/* Plano de assinatura -> Receba o plano escolhido (Básico, Intermediário ou Premium) e informe os recursos disponíveis.*/

/* Máquina de bebidas -> Apresente um menu com café, chá, suco e água. Receba a escolha e informe a bebida selecionada e seu preço.*/

/* Contagem crescente -> Exiba os números de 1 até 10.*/

/* Contagem regressiva -> Exiba os números de 10 até 1.*/

/* Números pares -> Exiba todos os números pares de 1 até 100.*/

/* Tabuada -> Receba um número e apresente sua tabuada de 1 a 10.*/

/* Soma dos números -> Calcule a soma de todos os números de 1 até 100.*/

/* Múltiplos -> Receba um número e exiba seus primeiros 10 múltiplos.*/

/* Contagem personalizada -> Receba dois números: início e fim. Exiba todos os números entre eles.*/

/* Média da turma -> Receba as notas de 5 alunos, calcule e apresente a média geral.*/

/*Fatorial -> Receba um número e calcule seu fatorial. Exemplo: 5! = 120.*/

/* Números ímpares -> Exiba todos os números ímpares entre 1 e 100 e informe quantos existem.*/

/* Contagem -> Exiba os números de 1 até 10 utilizando while .*/

/* Senha correta -> Solicite uma senha e continue solicitando enquanto o usuário não informar a senha correta.*/

/* Contagem regressiva -> Receba um número e conte até zero.*/

/* Somando números -> Solicite números ao usuário e some todos. Encerre quando ele digitar zero.*/

/* Adivinhe o número -> Defina um número secreto e permita que o usuário tente adivinhar até acertar.*/

/* Tentativas de login -> Permita até três tentativas para acertar uma senha.*/

/* Caixa eletrônico -> Comece com um saldo de R$ 1.000. Permita realizar saques enquanto houver saldo suficiente.*/

/* Média de notas -> Receba notas até que o usuário digite -1. Ao final, apresente a média das notas válidas.*/

/* Validação de idade -> Solicite uma idade e continue perguntando enquanto o valor informado for inválido (menor que zero ou maior que 120).*/

/* Menu interativo -> Apresente opções de um sistema e continue exibindo o menu até o usuário escolher a opção sair.*/

/* Mensagem de boas-vindas -> Crie uma função que exiba uma mensagem de boas-vindas.*/

/* Saudação personalizada -> Crie uma função que receba um nome e exiba uma saudação.*/

/* Soma -> Crie uma função que receba dois números e retorne a soma.*/

/* Dobro -> Crie uma função que receba um número e retorne seu dobro.*/

/* Par ou ímpar -> Crie uma função que receba um número e retorne se ele é par ou ímpar.*/

/* Maior número -> Crie uma função que receba três números e retorne o maior deles.*/

/* Conversor de moedas -> Crie uma função que receba um valor em reais e uma cotação do dólar, retornando o valor convertido.*/

/* Calculadora -> Crie uma função que receba dois números e uma operação matemática, retornando o resultado.*/

/* Cálculo de desconto -> Crie uma função que receba o valor de um produto e o percentual de desconto. Retorne o preço final.*/

/* Validador de senha -> Crie uma função que receba uma senha e retorne true se ela tiver pelo menos 8 caracteres, ou false caso contrário.*/
