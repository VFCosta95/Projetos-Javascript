// Aula 01
/*
alert('Hello World'); // Criar um alerta
var n1 = prompt('Qual o seu nome') // Variavel no Prompt
document.write(n1) // Mostra a variavel na tela
window.confirm('Voce esta Apredendo ?') // Cria um alerta de S/N 
*/

// Comentarios JS - // ou /* */



// Aula 02 - Variavel
/* 
        Regras de Variaveis
- Pode começar com uma letra, $ ou _
- Não pode começar com numeros
- E possivel usar letras e numeros
- Não podem conter espaços
- Não pode ser palavras reservadas
*/

/* 
Abrir o NodeJS
1° - Vai no botão iniciar e abrir o NodeJS
2° - Clicar dentro do VS Code em terminal e new terminal ou aperta ctrl + shift + ´
*/



// Aula 03 - Manipulação de Dados

// var nome = prompt('Qual seu nome') // Variavel Prompt.
// alert(`Welcome ${nome}`) // Trazer a variavel para aperecer no alert.

// Exemplos para juntar a variavel na frase:
// + significa concatenar a variavel com a frase
// `${}` O template string usa-se a crase com a frase dentro e usar ${} para colocar a variavel dentro.

/*
var n1 = prompt('Digite um numero: ')
var n2 = prompt('Digite outro numero: ')
var res = n1 + n2
alert(res)
*/
// O sinal de + usa pra adição e pra concatenação
// number + number = adição
// string + string = concatenação

//Convertendo Strings em Numeros Inteiros
/*
var n1 = Number.parseInt(prompt('Digite um numero'))
var n2 = Number.parseInt(prompt('Digite outro numero '))
var res = n1 + n2
alert(res)
*/

// Ou - Converter para Numeros Reais

/*
var n1 = Number.parseFloat(prompt('Digite um numero'))
var n2 = Number.parseFloat(prompt('Digite outro numero '))
var res = n1 + n2
alert(res)
*/

// Ou - Converter automaticamente os Numeros sejam eles inteiros ou reais

/*
var n1 = Number(prompt('Digite um numero '))
var n2 = Number(prompt('Digite outro numero: '))
var res = n1 + n2
alert(res)
*/

/*
// Exemplos Concatenação e Templates de Strings
var s = 'JavaScript'
document.write('Estou apredendo '+ s)
document.write(`Estou aprendendo ${s}`) 
s.length // Quantos caracteres a string tem
s.toUpperCase // Tudo para 'Maiusculas'
s.toLowerCase // Tudo para 'Minusculas'
*/

// Exemplos de Sintaxe para Lenght / UpperCase / LowerCase
/*
let nome = prompt('Qual o nome ?')
document.write(`Seu nome tem ${nome.length} letras`)
document.write(`Seu nome em letras maiusculas fica ${nome.toLocaleUpperCase()}`)
document.write(`Seu nome em letras minusculas fica ${nome.toLowerCase()}`)
*/

// Exemplos para converte números em moedas Locais - Sintaxe
/*
n1 = 1500,2
document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // Converte o valor para Real
document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})) // Converte o valor para Dolar
document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})) // Converte o valor para Euro
*/



// Aula 04
// Iniciando estudos com DOM...
/*
O que e ?       
E um modelo de objetos para documentos, selecionar os elementos dentro da arvore DOM
O que e Arvore DOM ?
A arvoré DOM e um modelo que se estrutura em formato de árvore, com vários galhos que indicam diferentes elementos da página.

Exemplos 
var n1 = 25
var n2 = 32

*Marca
var n1 = document.getElementsByTagName('p')[0] Cochete para selecionar a variavel

*ID
var n1 = document.getElementByID()

*Nome
var n1 = document.getElementByName()

*Classe
var n1 = document.getElementByClassName()

*Seletor
var n1 = querySelector(div#n1) A Hashtag seleciona o ID
var n1 = querySelectorAll(div.n1) O ponto seleciona a classe

*/

// Eventos DOM
/*
Evento e tudo aquilo que possa acontecer com qualquer elemento.
*/
//Exemplo

var a = document.getElementById('caixa')//Selecionamos o ID 'caixa'
function clicar(){// Criamos a função clicar
        
        a.innerText = 'Netherlands'//Selecionamos a variavel 'a' com innerHTML para mudar o texto
        a.style.background = 'orange'//Sintaxe para mudar a cor de fundo
        a.style.color = 'black'//Sintaxe para mudar a cor da fonte
}
function entrar(){
        a.innerHTML = 'Argentina'
        a.style.background = 'lightblue'
        a.style.color = 'yellow'
}
function sair(){
        a.innerHTML = 'Portugal'
        a.style.background = 'darkred'
        a.style.color = 'green'
}


/*
Alguns Exemplos:

mouseenter, mousemove, mousedown, mouseup

*/

// O que é uma função ?
// E um conjunto de codigos, e um conjuntos de linhas que vão ser executadas quando o evento ocorrer.
// Para executar as linhas de codigo o 1° passo e colocar dentro de um bloco.
// Bloco em JS e delimitado dentro dos sinais de {}.
// Abre a chave, coloca o codigo e fecha chave.
// Nomeia o bloco como function
// Para o metodo funcionar tem que dar um nome pra função
// Geralmente o nome da função são os nomes da ação que deve colocar
// Sintaxe:
/*
function açao(){
}
*/

// Usando o Math
// Math -  permite executar tarefas matemáticas em números.
// Ao contrário de outros objetos, o objeto Math não possui construtor.
// O objeto Math é estático.
// Todos os métodos e propriedades podem ser usados sem criar um objeto de matemática primeiro.
// Math.pow - Math.pow(x, y)retorna o valor de x à potência de y:
/*
Sintaxe - Exemplos

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
*/


// Laços de Repetições
/*
Laços de Repetiçõesoferecem um jeito fácil e rápido de executar uma ação repetidas vezes. Executar o mesmo comando varias vezes para chegar em um determinado resultado.

Executar o mesmo comando varias vezes para chegar em um determinado resultado
*/

// Estruturas While - é usada quando tem uma quantidade inderteminada de repetições 
// Sintaxe While
/*
while(condicao){
        //comandos
}

var x = 1
while(x <= 10){
        //comando
        document.write(x)
        x++
}
*/


//Do While - e quase o mesmo funcionamento que o while, a diferença é que com o uso dele teremos os comandos executados ao menos uma única vez.
/* 
do{
        //Comandos
 }while(condicao)


var x = 1 
do{
        console.log(x)
        x++;
}while(x == 10)
*/


// For - A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
/*
Sintaxe For:

for(variavel; condição; incremento){

}

for(var x = 1; x < 11; x++){
        document.write(x)
}
*/
