var registro=[];
function Registrar(nomregistro,aperegistro,correregistro){
    var NuevoRegistro={
        nombre:nomregistro,
        apellido:aperegistro,
        correo:correregistro,
    };
    registro.push(NuevoRegistro);
}

function Mostrar(){
    return registro;
}