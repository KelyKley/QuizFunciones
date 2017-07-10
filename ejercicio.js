
//Ejercicio 1
function numero_capicua(){
var numero = prompt ("Ingrese un numero, para saber si es Capicua");

if (numero.length >= 4)
{
  for(i=0; i < numero.length/2; i++)
  {
	   if (numero[i]===numero[numero.length-1-i])
	    {
		      console.log("El numero ingresado SI es capicua");
	    }
	else
  { console.log("El numero ingresado NO es capicua");}

  }
}
}
numero_capicua();


//Ejercicio 2
function potencia(base,exponente){

  var resolver = Math.pow(base, exponente)
console.log(resolver);

}
potencia(2,3);


//Ejercicio 3
function buscador(arr){
var cadena = arr.join("");


var letraBuscar = "a";
var i = 0;
var conteo = 0;
while (i != -1)
{
var i = cadena.indexOf(letraBuscar,i);

if (i != -1)
{
i++;
conteo++;
}
}
console.log("Se encontro " +conteo+ " letras "+ letraBuscar.toUpperCase());
}
var arr =["murcielago", "pato","caballo", "zebra"];
buscador(arr);

//Ejercicio 4
function contador(a){
  var separa = a.split(" ");
  var posicion = separa.length;
  console.log("Hay "+posicion+" palabras en esta oración.");
}
var a = "El mundo es tan cruel";
contador(a);


//Ejercicio 6
function buscarVocales(){

var palabra = arr.join("");

	var vocal = 0;
	palabra = palabra.toLowerCase();
	for (var i = 0; i < palabra.length; i++)
		{
			if(palabra.charAt(i)=='a' || palabra.charAt(i)=='e' || palabra.charAt(i)=='i' || palabra.charAt(i)=='o' || palabra.charAt(i)=='u')
			{
				vocal++;
				}

		}

console.log("Tiene "+vocal+" vocales.");
}
var arr =["ojo","mouse","lapiz"];
buscarVocales(arr);


//Ejercicio 7
function sumaImpares(inicio,final){

var op1 = ((final-inicio)/2)+1;
var op2 = ((inicio+final)/2);
var opera = op1 * op2;
console.log(opera);
}

sumaImpares(1,7);


//Ejercicio 9
var a = "roma";
function invertirPalabra(){
  var reverse = a.split("").reverse().join("");
  console.log(reverse);
}
invertirPalabra();
