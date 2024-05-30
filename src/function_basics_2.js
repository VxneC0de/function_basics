//Tasks 1

/*
Is "else" required?

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:
*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
*/

/*
Will the function work differently if else is removed?
*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
*/

/*
Is there any difference in the behavior of these two variants?
*/

//ANSWER:

/*

No, no hay ninguna diferencia en el comportamiento de estas dos variantes de la función checkAge(age). Ambas funciones harán exactamente lo mismo.

En JavaScript, si una sentencia if es verdadera, entonces se ejecuta el bloque de código correspondiente y se omite el resto. Por lo tanto, si age > 18 es verdadero, ambas funciones retornarán true y no se ejecutará ninguna otra parte de la función.

Si age > 18 es falso, entonces la sentencia if es ignorada y el código continúa ejecutándose. En la primera función, se entra en el bloque else, mientras que en la segunda función simplemente se sigue con la siguiente línea. En ambos casos, se ejecuta return confirm('Did parents allow you?');.

Por lo tanto, el uso de else en este caso es opcional y no afecta a la funcionalidad de la función. Es más una cuestión de estilo y legibilidad del código. Algunos desarrolladores prefieren incluirlo para hacer explícita la bifurcación en el flujo de control, mientras que otros prefieren omitirlo cuando no es necesario para mantener el código más limpio y menos anidado. Ambos enfoques son válidos.

*/


//////////////////////////////////////////////////////////////////////////////

//Tasks 2

/*
Rewrite the function using '?' or '||'

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.
*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
*/

/*
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

- Using a question mark operator ?
- Using OR ||
*/

//ANSWER:


//Usando el operador de interrogacion ?

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

//Usando el operador OR ||

function checkAge(age) {
  return age > 18 || confirm('Did parents allow you?');
}



//////////////////////////////////////////////////////////////////////////////

//Tasks 3

/*
Function min(a, b)

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:
*/

/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/


//ANSWER:

function min(a, b) {
  return a < b ? a : b;
}

/*
Esta función utiliza el operador ternario ? : para retornar a si a es menor que b, y b en caso contrario. Así, siempre retorna el menor de los dos números. Por ejemplo, min(2, 5) retornará 2, min(3, -1) retornará -1, y min(1, 1) retornará 1.
*/


//////////////////////////////////////////////////////////////////////////////

//Tasks 4

/*
Function pow(x,n)

Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
*/

/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

/*
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only natural values of n: integers up from 1.
*/


//ANSWER:

function pow(x, n) {
  return x ** n;
}

/*
Esta función utiliza el operador de exponente ** para elevar x a la potencia de n. Por ejemplo, pow(3, 2) retornará 9, pow(3, 3) retornará 27, y pow(1, 100) retornará 1.
*/

/*CREACION DE LA PAGINA EN index_1.html*/

/*
Este código HTML crea un botón en la página web. Cuando haces clic en el botón, la función calculatePower() se ejecuta. Esta función solicita al usuario que introduzca los valores de x y n, y luego muestra el resultado de pow(x, n) en el párrafo con el id demo.
*/