/*
¡Escribamos algunas funciones! Escríbalos en la scriptetiqueta de un archivo HTML esqueleto. Si olvidó cómo configurarlo, revise nuestras instrucciones sobre cómo ejecutar código JavaScript.
*/

//Por ahora, simplemente escriba cada función y pruebe el resultado con console.log.

//- Escribe una función llamada add7 que tome un número y devuelva ese número + 7.

function add7(num) {
    return num + 7;
  }
  console.log(add7(3)); 




//- Escribe una función llamada multiplyque tome 2 números y devuelva su producto.

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(3, 4));





//- Escriba una función llamada capitalizeque tome una cadena y la devuelva con solo la primera letra en mayúscula. Asegúrese de que pueda aceptar cadenas en minúsculas, MAYÚSCULAS o ambas.

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  console.log(capitalize("hOlA"));


//OTHER

/*
function capitalize(str) {
    return str.toUpperCase(0).;
  }
  console.log(capitalize("hOlA"));
*/


//- Escriba una función llamada lastLetterque tome una cadena y devuelva la última letra de esa cadena:
//lastLetter("abcd")debería regresar"d"


function lastLetter(str) {
  return str.charAt(str.length - 1);
}
console.log(lastLetter("abcd")); 

