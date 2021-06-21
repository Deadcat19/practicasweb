Algoritmo Ejemplo4
	Definir can Como Entero;
	Definir pre,sbt,des,igv,tot Como Real;
	Definir cat, com como texto;
	can=0;pre=0;sbt=0;des=0;igv=0;tot=0;cat="";com="";
	Escribir "Ingresa la cantidad a comprar:";
	leer can;
	Escribir "Ingresa el precio del producto:";
	Leer pre;
	Escribir "Ingresa la categoria:";
	leer cat;
	Escribir "Ingresa el tipo de comprobante [F]Factura o [B]Boleta:";
	Leer com;
	sbt=can*pre;
	si (cat="d")Entonces
		des=sbt*0.07;
	SiNo
		des=sb*0.03;
	FinSi
	
	si (com="f")Entonces
		igv=sbt*0.19;
	SiNo
		igv=0;
	FinSi
	tot=sbt-des+igv;
	Escribir "Eñ subtotal es: ",sbt;
	Escribir "El descuento es: ",des;
	Escribir "El igv es: ",igv;
	Escribir "El total es: ",tot;
	
	
FinAlgoritmo
