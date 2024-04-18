// Definiciónde genéricos en Typescript

//Aunque los genéricos son compatibles con muchos lenguajes de programación (incluido TypeScript), actualmente no están disponibles en JavaScript. Por tanto, para algunos codificadores de JavaScript, los genéricos son un misterio. Ahora que va camino de ser un codificador de TypeScript, vamos a desvelar los misterios de genéricos y a agregar estas herramientas útiles a su kit de herramientas de programación.

//Introducción a los genéricos

//Los genéricos son plantillas de código que puede definir y reutilizar en todo el código base. Proporcionan una manera de indicar a las funciones, clases o interfaces qué tipo quiere usar al llamarlas. Esto es similar a los argumentos que se pasan a una función, salvo en que un genérico le permite indicar al componente qué tipo debe esperar en el momento en que se llama.

//Cree funciones genéricas cuando el código sea una función o una clase que:

// * Funcione con varios tipos de datos.
// * Use ese tipo de datos en varios lugares.

//Los genéricos pueden:

// * Proporcionar más flexibilidad a la hora de trabajar con tipos.
// * Permitir la reutilización de código.
// * Reducir la necesidad de usar el tipo any.

// ¿Por qué usar genéricos?

// Para entender por qué podría necesitar hacerlo, resulta útil ver un ejemplo.

// La función getArray genera una matriz de elementos de tipo any.

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

// Después, la variable numberArray se declara mediante una llamada a la función getArray, en la que se le pasa una matriz de números, y la variable stringArray se declara con una matriz de cadenas. Pero dado que se usa el tipo any, no hay nada que impida que el código inserte una cadena (string) en numberArray o un número (number) en stringArray.

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25); // OK
stringArray.push("Rabbits"); // OK
numberArray.push("This is not a number"); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]

//¿Qué ocurre si quiere especificar el tipo de los valores que contendrá la matriz cuando llame a la función? ¿Y si quiere que TypeScript realice después la comprobación de tipos de los valores que se pasan para asegurarse de que son del tipo especificado? Aquí es donde entran en juego los genéricos.

// En este ejemplo se vuelve a escribir la función getArray mediante genéricos. De este modo, la matriz puede aceptar cualquier tipo que se especifique al llamar a la función.

function getArray2<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

//Los genéricos definen una o varias variables de tipo entre corchetes angulares (< >) para identificar el tipo o los tipos que se van a pasar al componente. Como verá, las variables de tipo también se conocen como parámetros de tipo o parámetros genéricos. En el ejemplo anterior, a la variable de tipo de la función se le denomina <T>. T es un nombre común para un genérico, pero puede asignarle el nombre que quiera.

// Después de especificar la variable de tipo, puede usarla en vez del tipo en los parámetros, en el tipo de valor devuelto o en cualquier otro lugar de la función en el que agregaría una anotación de tipo.

// La variable de tipo "T" se puede usar siempre que se necesite una anotación de tipo. En la función "getArray", se usa para especificar el tipo del parámetro "items" y el tipo de valor devuelto de la función, así como para devolver una nueva matriz de elementos.

// Para llamar a la función y pasarle un tipo, anexe <type> al nombre de la función. Por ejemplo, getArray<number> indica a la función que solo acepte una matriz de valores numéricos (number) y que devuelva una matriz de valores numéricos (number). Dado que el tipo se ha especificado como number, TypeScript esperará que se pasen valores number a la función y producirá un error si se pasan otros valores.

// Nota

// Si omite la variable de tipo al llamar a la función, TypeScript deducirá el tipo, pero esto solo funciona con datos simples. Al pasar matrices u objetos, se deduce el tipo "any" y se eliminan las comprobaciones de tipo.

//En este ejemplo, con las declaraciones de variable para numberArray y stringArray actualizadas para llamar a la función con el tipo deseado, TypeScript evita que se agreguen elementos no válidos a la matriz.

let numberArray2 = getArray2<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
numberArray.push("This is not a number"); // Generates a compile time type check error

let stringArray2 = getArray2<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
stringArray.push(30); // Generates a compile time type check error

//Uso de varias variables de tipo

// No está limitado a usar una única variable de tipo en los componentes genéricos.

// Por ejemplo, la función identity acepta dos parámetros, value y message, y devuelve el parámetro value. Puede usar dos genéricos, T y U, para asignar distintos tipos a cada parámetro y al tipo de valor devuelto. La variable returnNumber se inicializa mediante una llamada a la función identity con <number, string> como tipos para los argumentos value y message; returnString se inicializa llamando a la función con <string, string>; y returnBoolean se inicializa llamándola con <boolean, string>. Al usar estas variables, TypeScript puede comprobar el tipo de los valores y devolver un error en tiempo de compilación si hay un conflicto.

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");

returnNumber = returnNumber * 100; // OK
returnString = returnString * 100; // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

//Uso de los métodos y las propiedades de un tipo genérico

//A la hora de usar variables de tipo para crear componentes genéricos, solo se pueden usar las propiedades y los métodos de los objetos que están disponibles para cada tipo. Esto impide que se produzcan errores al intentar realizar una operación con un valor de parámetro que es incompatible con el tipo que se le pasa.

// Si se agrega la instrucción let result: T = value + value a la función identity, TypeScript genera el error La parte izquierda de una operación aritmética debe ser de tipo "any", "number", "bigint" o un tipo de enumeración porque no sabe qué valor se le pasará en tiempo de ejecución. Si se pasara un valor no numérico, la expresión generaría un error, por lo que TypeScript informa del problema en tiempo de compilación.

function identity2<T, U>(value: T, message: U): T {
  let result: T = value + value; // Error
  console.log(message);
  return result;
}

//Uso de restricciones genéricas para limitar los tipos

// La función identity puede aceptar cualquier tipo que decida pasar a las variables de tipo. Pero, en este caso, debe restringir los tipos que el parámetro value puede aceptar a un intervalo de tipos en el que puede realizar una operación de adición, en lugar de aceptar cualquier tipo posible. Esto se denomina restricción genérica.

// Hay varias maneras de hacer esto en función de la variable de tipo. Una forma consiste en declarar un tipo (type) personalizado como una tupla y, después, extender (extend) la variable de tipo con el tipo personalizado. En el ejemplo siguiente se declara ValidTypes como una tupla con un valor string y un valor number. Después, extiende T con el nuevo tipo. De este modo, solo se pueden pasar tipos number o string a la variable de tipo.

type ValidTypes = string | number;

function identity3<T extends ValidTypes, U>(value: T, message: U): T {
  let result: T = value + value; // Error
  console.log(message);
  return result;
}

let returnNumber3 = identity<number, string>(100, "Hello!"); // OK
let returnString3 = identity<string, string>("100", "Hola!"); // OK
let returnBoolean3 = identity<boolean, string>(true, "Bonjour!"); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

//También puede restringir un tipo a la propiedad de otro objeto. En este ejemplo se usa extends con el operador keyof, que toma un tipo de objeto y genera una unión literal de cadena o de valores numéricos de sus claves. Aquí se usa K extends keyof T para garantizar que el parámetro de clave es del tipo correcto para el tipo asignado a pet.

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error

//Obtendrá más información sobre el uso de restricciones genéricas con clases más adelante en este módulo.


//Uso de restricciones de tipos con genéricos

// Observará que TypeScript todavía genera un error con la expresión value + value en la función identity. Pero ahora sabe que solo los tipos number y string se pueden pasar a la función.

// Puede usar la restricción de tipos typeof en un bloque if para comprobar el tipo del parámetro value antes de realizar una operación, tal y como se muestra en el ejemplo siguiente. A partir de la instrucción if, TypeScript puede determinar si la operación funcionará con los valores proporcionados en el bloque.

type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100

// Nota
// Solo se puede usar una restricción de tipos typeof para comprobar los tipos primitivos string, number, bigint, function, boolean, symbol, object y sin definir. Para comprobar el tipo de una clase, use una restricción de tipos instanceof.

//Ejercicio: Implementación de genéricos con interfaces y clases