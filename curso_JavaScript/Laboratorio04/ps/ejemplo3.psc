Algoritmo Ejemplo3
	Definir bas,alt,area Como Real;
	Definir men como texto;
	bas=0;alt=0;area=0;men="";
	Escribir "Ingrese la base del rectagulo:";
	Leer bas;
	Escribir "Ingrese la altura del rectangulo:";
	Leer alt;
	area=bas*alt;
	si(area>100)Entonces
		men="Es un rectangulo grande";
	SiNo
		men="Es un rectangulo pequeño";
	FinSi
	Escribir "El area del rectangulo es;",area;
	Escribir men;
FinAlgoritmo
