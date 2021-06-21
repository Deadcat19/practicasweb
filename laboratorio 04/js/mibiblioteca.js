//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var tchkEst=document.getElementById("chkEst");

//creamos procedimientos para validar
//nombre
function Validarnombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombres</li>";
    }else{
        error.style.display="none";
    }
}
//apellido
function Validarapellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus apellidos</li>";
    }else{
        error.style.display="none";
    }
}
//correo
function Validarcorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su correo</li>";
    }else{
        error.style.display="none"
    }
}
//sexo
function Validarsexo(){
    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un sexo</li>";
    }else{
        error.style.display="none"
    }
}
//estado
function Validarestado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione el estado</li>";
    }else{
        error.style.display="none"
    }
}
//creamos un proceidmiento para validar
function Validar(){
    //reiniciamos el estilo error
    error.innerHTML=""
    //llamamos a los procedimentos para validar
    Validarnombre();
    Validarapellido();
    Validarcorreo();
    Validarsexo();
    Validarestado();
}
//creamos un procedimiento para asignar la clase error
function Llamarclase(m){
    error.style.display="block";
    error.innerHTML+="<li>" +m+"</li>"
}
//creamos una funcion registar
function Registrar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        Llamarclase("Por favor ingresa tus nombres");
        Llamarclase("Por favor ingresa tus apellidos");
        Llamarclase("Por favor ingresa tu correo");
        Llamarclase("Por favor seleccione un sexo");
        Llamarclase("Por favor seleccione el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        Llamarclase("Po favor ingresa tus apellidos");
        Llamarclase("Por favor ingresa tu correo");
        Llamarclase("Por favor seleccione un sexo");
        Llamarclase("Por favor seleccione el estado");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        Llamarclase("Por favor ingresa tu correo");
        Llamarclase("Por favor seleccione un sexo");
        Llamarclase("Por favor seleccione el estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        Llamarclase("Por favor seleccione un sexo");
        Llamarclase("Por favor seleccione el estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        Llamarclase("Por favor seleccione un estado");
        chkEst.focus();
    }else{
        alert("Se registro correctamente");
        error.innerHTML="";
    }
    }