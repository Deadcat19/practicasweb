// variables para los controles
var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnActualiza=document.getElementById("btnActualizar");

function Buscar(codigo){
    var db = database.ref().child("registro");
    db.once("value",function (snapshot){
        snapshot.forEach(function (data){
            var key =data.key;
            if (key == codigo){
                var cod = key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;

                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        });
    });
}

function Mostrar(){
    var i = 0;
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    var db=database.ref().child("Registro");
    db.once("value",function(snapshot){
        if (snapshot.exists()){
            snapshot.forEach(function(data){
                var cod = data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                var fila=tbody.insertRow(i);
                var titulonom=fila.insertCell(0);
                var tituloape=fila.insertCell(1);
                var titulocor=fila.insertCell(2);
                var tituloact=fila.insertCell(3);
                var titulobor=fila.insertCell(4);
                titulonom.innerHTML= nombre;
                tituloape.innerHTML= apellido;
                titulocor.innerHTML= correo;
                tituloact.innerHTML =
                    "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulobor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}

window.onload = Mostrar();

function Limpiar(){
    txtNom.value = "";
    txtApe.value = "";
    txtCor.value = "";
    txtNom.focus();
}
// creamos un procedimiento para registrar
function Registrar(){
    if(txtNom,value.value == "" || txtNom.value == null){
        alert("Ingrese sus nombres");
        txtNom.focus();
    }else if (txtApe.value == "" || txtApe.value == null){
        alert("Ingrese sus apellidos");
        txtApe.focus();
    }else if (txtCor.value == "" || txtCor.value == null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else{
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;

        var db = database.ref("registro");

        var registros = db.push();

        registros.set({
            nombre: nom,
            apellido: ape,
            correo: cor,
        });
        alert("Se registro el dato");
        // llamamos a la funcion
        Limpiar();
        Mostrar();
    }
}
function Actualizar(){
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var cor = txtCor.value;
    var db = database.ref("registro/" + cod);
    db.update({
        nombre: nom,
        apellido: ape,
        correo: cor,
    });
    alert("Se actualizo el dato");
    Limpiar();
    Mostrar();
}
function Eliminar(codigo){
    var result=confirm("??Estas seguro que quieres eliminar el registro?");
    if(result){
        var cod=codigo;
        var db=database.ref("registro/"+cod).remove();
        alert("Se elimino el dato");
        Limpiar();
        Mostrar();
    }
}
// asignamos el procediemnto del boton
btnRegistrar.addEventListener("click",Registrar);
btnActualizar.addEventListener("click",Actualizar);