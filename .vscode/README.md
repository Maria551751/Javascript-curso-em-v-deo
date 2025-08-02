#  DOM 
- Document
- Object
- Model

- O Dom é uma estrutura que representa um documento WEB (Como o HTML) em uma forma que pode ser manipulada por linguagens de pregramação como o JavaScript. 

- Elemento Parent 
É o elemento que contem um ou mais elementos filhos. Em termos de arvoré DOM, o elemento parent é o nó acima na hierarquia que abriga um ou mais nós filhos.

- Elemento child 
É o elemento que está contido dentro de outro elemnto, ou seja, o nó abaixo do elemnto pai na árvore do DOM.



# Principais métodos para selecionar o DOM são: 
- getElementById()
  - Este método retorna um único elemento do DOM que possui o ID especificado. se nenhum elemento com ID fornecido for encontrado, ele retorna null

- getElementsByClassName()
  - Este método retorna uma coleção de todos os elementos que possuiem a classe CSS especificamente. ele retorna um objeto do tipo HTMLCollection, que é uma lista viva de elementos

- getElementsByTagName()
  - Retorna uma coleção (HTMLCollection) de todos os elementos com a tag HTML especificada.
Útil para selecionar todos os elementos de um determinado tipo (por exemplo, todos os <div> ou todos os <span>).
Exemplo: document.getElementsByTagName("div")

- querySelector()
  - etorna o primeiro elemento que corresponde a um seletor CSS especificado.
Permite selecionar elementos usando seletores mais complexos do CSS (como IDs, classes, atributos, etc.).
Exemplo: document.querySelector("#meuElemento .minhaClasse")

- querySelectorAll()
  - Retorna uma coleção (NodeList) de todos os elementos que correspondem a um seletor CSS especificado.
Semelhante ao querySelector, mas retorna todos os elementos correspondentes, não apenas o primeiro.
Exemplo: document.querySelectorAll("div.minhaClasse > p").





#   DIV
- A tag <div> é um elemento de bloco HTML usado para agrupar outros elementos HTML. 
Ela atua como um contêiner genérico, permitindo que você organize o conteúdo de uma página em seções. 
É frequentemente usada para aplicar estilos (usando CSS) a um grupo de elementos ou para criar layouts de página. 




#  FUNÇÃO EM JS
- é um conjunto de códigos de linhas que vão ser executadas só quando o evento ocorrer 
para criar uma função vc vai utilizar o seguinte codigo "function() {}"

EX: 
function saudacao(nome) {
  return "olá, " + nome + "!";
}





#  ALGUNS EVENTOS DOM
# eventos de mouse
- click (quando um elemnto é clicado com o botão do mouse)
- mouseover (quando o cursor do mouse entra na área de um elemento)
# eventos de teclado
- keydown (quando uma tecla é pressionada)


# Condições
if = se
else = se não

# Condição simples
- if (condição) {
   # true
}

# Condição composta
- if (condição) {
   # true
} else {
  # false
}

# Condições aninhadas 
- É quando pegamos uma condição composta e criamos outras condições a partir daí
- Else if

-  if (cond) {
  # bloco1
  } else {
    if (cond2){
  # bloco2 
    } else {
  # bloco3
  }
}


# Condição multipla
- serve para valores fixos 
- É mais limitado do que o if
- útil em situações pontuais 

- switch (expressão) {
  case valor 1: 

    break
  case valor 2:

    break
  case valor 3: 

    break (obrigatorios)

  default:
  (é como se fosse o else só que no switch)
}


# Repetições 
- while = enquanto 

function comerPizza() {
- while (temFatia()) {
        comerFatia()
  }

}

# estrutura de repetição com teste lógico no inicio
- While (condição) {

}


# estrutura de repetição com teste lógico no final
do {
  
} while (condição)

# estrutura FOR 
- ela possui 3 partes 
a inicialização, o teste lógico e um incremento e tem um bloco

- for (inicio; teste; incr){

}

EX:  for (var c =1; c<=10; c++){
  
}

# VARIÁVEIS
- Variáveis SIMPLES só conseguem armazenar UM valor por vez.

- Variáveis COMPOSTAS devem ser capazes de armazenar VÁRIOS VALORES em uma mesma estrutura

- UM ARRAY OU VETOR OU UMA VARIAVEL COMPOSTA É UMA VARIAVEL QUE TEM VARIOS ELEMENTOS. CADA ELENTO É COMPOSTO PELO SEU VALOR OU UMA CHAVE DE VERIFICAÇÃO 

# codigos 
- length = quantas posições o codigo tem 
EX: 

let num = [5, 6, 7, 8, 9]
console.log(`O vetor tem ${num.length} posições`)

o resultado será = O vetor tem 5 posições; 


# agr quando queremos saber qual é o primeiro array(vetor) de um codigo usamos:

console.log(`O primeiro valor do vetor é ${num[0]}`)

o resultado será = O primeiro valor do vetor é 5

# quando queremos organizar o codigo usamos:
- sort()

EX: 
let num = [3 , 4, 2, 5, 1]
num.sort()
o resultado será = [1, 2, 3, 4, 5]

# mas quando queremos adicionar um vetor nós usamos :
push()
EX:

let num = [1, 2, 3, 4, 5]
num.push(6)
o resultado será = [1, 2, 3, 4, 5, 6]


# para procurar um determinado numero vamos usar:
let num = [3, 4, 5, 6, 7]
num.indexOf(7)

a resposta vai ser = tem e está na pisição 5 


# FUNÇÕES
- São ações executadas ou em decorrencia de algum evento.

- Uma função pode receber parametro e retornar um resultado.


# TUDO QUE FOI VISTO NO CURSO DE JAVASCRIPT

- Fundamenetos 
- Variaveis e dados 
- Operadores 
- Condições 
- Repetição
- array
- function

# TUDO QUE PRECISO VER AINDA OU IR MAIS AFUNDO 
- Function 
- Objetos
- Modularização 
- RegEX
- JSON
- AjAX
- NodejS