// declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}
function ValidarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        auth.createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    // Signed in
    alert("Bienvenidos al Sistema");
    window.location="pagina11.html";
    Limpiar();
    // ...
  })
  .catch((error) => {
    alert("Usuario y contraseña no valida");
    Limpiar();
    // ..
  });
    }
}

btnIngresar.addEventListener("click",ValidarUsuario);