/**1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável.
 */
let idadeanos = 39;
document.write(`minha idade e ${idadeanos}<br><br>`)

/**
 * 2. Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras
variáveis. Apresente valor da soma no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável
 */

let x = 2;
let y = 3;
let z = y + x;
document.write(`o resultado da soma de ${x} e ${y} e ${z} <br><br>`)


/**
 *  3 Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"
 */

let totalCompra = 150.00;
let parcelaCompra = 3;
let valorParcela = totalCompra / parcelaCompra;
document.write(`o valor total da compra foi de R$${totalCompra}<br> 
forma de pagamento ${parcelaCompra} de R$${valorParcela}<br><br>`)

/**
 *  4 Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). Na segunda
coloque o total em segundos destes minutos armazenados na
primeira variável. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!"
 */

let minutos = 2;
let segundos = minutos * 60;
document.write(`${minutos} minutos equivalem  a ${segundos} segundos <br><br>`)


/**
 * 5 Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"
 */

let nomeAluno = 'eduardo vaz de faria'
let nota1 = 3;
let nota2 = 4;
let nota3 = 4;
let somaNota = nota1 + nota2 + nota3 / 3;
document.write(`o aluno  ${nomeAluno} ficou com a media ${somaNota}<br><br>`)

/**
 * 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.
 */

let valor1 = 10;
let valor2 = 20;
let vlTransicao = 0;
vlTransicao = valor1;
valor1 = valor2;
valor2 = vlTransicao;
document.write(`valor1 = ${valor1}<br> valor2 = ${valor2}<br><br>`)

/* 7 Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores. */
let eleitores = 80;
let vtbranco = 10;
let vtnulo = 12.5;
let vtvalido = eleitores - vtbranco - vtnulo;

const percentualBrancos = (vtbranco / eleitores) * 100;
const percentualNulos = (vtnulo / eleitores) * 100;
const percentualValidos = (vtvalido / eleitores) * 100;

document.write(`votos validos ${eleitores} 
percentual votos brancos ${percentualBrancos}% votos nulos ${percentualNulos}% <br><br>`)



/** 8 Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro. */

let num1 = 2;
let num2 = 3;

if (num1 == num2) {
    document.write(`numeros iguais`)
} else if (num1 > num2) {
    document.write(`primeiro numero maior que segundo numero <br><br>`)
} else {
    document.write(`segundo numero maior que o primeiro <br><br>`)
}


/* 9 As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const preco = 0.30;
const precodesc = 0.25;
let quantidade = 11;
let valorCompra = 0;

if (quantidade < 12) {
    valorCompra = quantidade * preco
} else {
    valorCompra = quantidade * precodesc
}
document.write(`${valorCompra}<br><br>`)

/**10 Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome, a idade e o ano
de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
em 2000”.
OBS: Pegue o ano atual como base */


let nome = 'eduardo';
let idade = 0;
let dtnascimento = 1983;
let anoAtual = 2023;

console.log(`seu nome e ${nome} sua idade e ${anoAtual - dtnascimento} seu ano de nascimento : ${dtnascimento} <br><br>`)


/** 11 Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar; */

let numero = 4
if (numero % 2 === 0) {
    document.write("Número par! <br><br>");
} else {
    document.write("Número ímpar! <br><br>");
}

/*Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

let anoAtual1 = 2023;
let dataNascimento = 1983;

if (dataNascimento - anoAtual1 < 18) {
    console.log(`voce nao pode votar<br><br>`)
} else (
    console.log(`voce pode votar<br><br>`)
)