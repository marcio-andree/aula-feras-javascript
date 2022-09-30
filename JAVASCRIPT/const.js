// const só pode ser acessadas dentro  e  fora do bloco que foram criadas porém não pode ser redeclarada nem atualizada
const  $mensagem = "ola"

if ($mensagem === "ola") {
  const $mensagem = "estou dentro do IF"
  console.log($mensagem)
}

console.log($mensagem)

// exemplo do que não pode ser feito
// const $teste = "eu não posso ser redeclara nem atualizada"
// $teste = 100
// console.log($teste)
// saida que objtivamos TypeError: Assignment to constant variable. tentar atribuir um novo valor a uma variavel constante
