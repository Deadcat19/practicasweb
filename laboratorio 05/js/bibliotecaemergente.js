function Cargar(url,titulo,ancho,alto){
    var anc=screen.width;
    var alt=screen.height;
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    window.open(url,titulo,"width="+ancho+",height="+alto+",left="+x+",top=","scrollbars=No");
}
window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);