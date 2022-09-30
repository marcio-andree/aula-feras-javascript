let idade = 20;

function MaiorOuMenor() {
  if (idade >= 18) {
    let apto = idade;
    console.log("idade é ", apto, " anos Apto a tirar CNH");
  } else {
    let inapto = idade;
    console.log("Idade é ", inapto, "anos Inapto a tirar CNH");
  }
}
console.log(idade);
MaiorOuMenor();



let $time = "fluminense"

switch ($time) {
  case "flamengo":
    console.log('Maior do brasil')
    break;

  case "vasco":
    console.log(" kkkk ")
    break;

  case "bota fogo":
      console.log(" ta velho em amigo")
      break;
  case "fluminense":
      console.log("El maricon")
       break;

  default:
    break;
}
