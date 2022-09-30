
// variaveis do tipo VAR podem ter escopo global ou escopo de bloco, ela pode ser redeclarada e atualizada
// escopo global a variavel pode ser chamada em qualquer parte do código
// escopo de bloco a variavel só pode ser usada dentro do bloco de código
// EX: declaração de variavel  escopo global

var mensagem = "olá eu sou escopo global"
function Saudacao() {
  var mensagem = "olá eu sou escopo de bloco"
  console.log(mensagem)
}
Saudacao()

console.log(mensagem)



// içamento ou elevanção no javascript é quando uma variavel é elevada para cima do escopo para ser executada
// por isso não se poder chamar uma variavel antes sem antes ser declarada e atribuida um valor
console.log($outramensagem)
var $outramensagem = "sou outra mensagem";
