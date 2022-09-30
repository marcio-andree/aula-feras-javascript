// A variavel declarada como let em um bloco de cóidgo só está disponivel dentro do escopo local
// let pode ser atualizado porém não pode ser redeclarado
// exemplo de atualização de let
let $teste = 10
console.log($teste)
$teste = "olá fui atualizada"
console.log($teste)

// exemplo mostrando que não pode ser redeclarada
// let $teste = 10;
// let $teste = "não posso ser redeclarada"
// console.log($teste);
// recebemos  como saída o seguinte erro SyntaxError: Identifier '$teste' has already been declared ou seja variavel $teste já foi declarada




// ################################################################################################
let mensagem = "olá estou em escopo global"
let contador = 5

if (contador > 4){
  let mensagem = "olá eu sou escopo local"
  console.log(mensagem)
}
console.log(mensagem) // obs a varivel que está fora do escopo é exibida porém a que estão dentro do escopo não pois só funciona lá
