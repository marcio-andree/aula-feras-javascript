function valida() {

  if (document.getElementById("nome").value == ''){
    document.getElementById("nome").style.border = "solid 1px red";
  }
  if (document.getElementById("idade").value == ''){
    document.getElementById("idade").style.border = 'solid 1px red';
  } else {
    let idadeUsuario = document.getElementById("idade").value;
    if (idadeUsuario < 18) {
      alert("Cadastro válido apenas para maiores de 18 anos");
    }
  }
  if (document.getElementById("email").value == ''){
    document.getElementById("email").style.border = 'solid 1px red'
  }

}
