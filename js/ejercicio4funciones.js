/*
 Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
 la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

var numero = parseInt(prompt("Ingrese un valor numerico para mostrar su tabla de multiplicar del 1 al 10"));

function tablaMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero*i));
    document.write("<br>")
  }
}

tablaMultiplicar(numero);