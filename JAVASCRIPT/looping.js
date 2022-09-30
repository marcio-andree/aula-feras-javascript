// iteração em com for
// for (let i=0; i < 10; i++) {
//   console.log("volta de número: "+ i);
// }

// iteração com for in quantidade de itens na lista
let lista = ['flamengo','fluminense', 'vasco','bota-fogo'];

for (const key in lista) {

  console.log(key);

}
// iteração com for of trás o valores de uma lista
for (let times of lista) {
  console.log(times);
}

// looping com while

let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}

// loop usando função
let count = 0;
function Increase(){
  while (count < 10) {
    count ++;
    console.log(count);
  }

}
Increase();
