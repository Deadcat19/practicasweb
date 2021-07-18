// declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");


function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}
// creemos un procedimiento para registrar el usuario
function RegistrarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingresa la contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        auth.createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    // Signed in
    alert("Se registro el usuario en el Firebase");
    Limpiar();
    // ...
  })
  .catch((error) => {
    alert("No se pudo registrar el Usuario en Firebase");
    Limpiar();
    // ..
  });
    }
}

// llamamos al procedimiento en el boton
btnRegistrar.addEventListener("click",RegistrarUsuario);