//Desarrollo de funciones con tipo mediante TypeScript


//Funciones con nombre
function addNumbers (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);

 //Funciones anónimas
 let addNumbers2 = function (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);

 //
 let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([1, 2, 3]));

//Funciones flecha
// Anonymous function
let addNumbers3 = function (x: number, y: number): number {
    return x + y;
 }
 
 // Arrow function
 let addNumbers4 = (x: number, y: number): number => x + y;

 let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

//Creacion de funciones

//si solo se agrega como parametro string no se podran pasar un numero como parametro al ejecutar la funcion
function displayAlert(message:string | number) {
    alert('The message is ' + message);
}

displayAlert(5)
displayAlert("Hola mundo")

//Pruebe a llamar a la función con un solo número como parámetro; por ejemplo, sum(5). Acepta el valor, pero no devuelve el resultado correcto porque el parámetro no se pasa como matriz.

function sum2(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

//Prueba con parametros

//Parametros obligatorios
function addNumbers (x: number, y: number): number {
    return x + y;
 }
 
 addNumbers(1, 2); // Returns 3
 addNumbers(1);    // Returns an error

//Parametros opcionales
function addNumb (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumb(1, 2); // Returns 3
addNumb(1);    // Returns 1


//Parametros predeterminados
function addNumber (x: number, y = 25): number {
    return x + y;
 }
 
 addNumber(1, 2);  // Returns 3
 addNumber(1);     // Returns 26

 //Parametros REST

 let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }

 addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5


//Parametros de objeto desconstruido

//Los parámetros de función son posicionales y deben pasarse en el orden en el que se definen en la función.
interface Message {
    text: string;
    sender: string;
 }
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 
 displayMessage({sender: 'Christopher', text: 'hello, world'});

 //Definicion de tipos de funciones


 //Defina un tipo de función llamado calculator mediante un alias de tipo.
 type calculator = (x: number, y: number) => number;
//Ahora puede usar el tipo de función como una firma de tipo al declarar funciones. Declare dos variables del tipo de función calculator, una para la operación de suma y otra para la de resta.
let addNumbrs: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbrs(1, 2));
console.log(subtractNumbers(1, 2));

//También puede utilizar el tipo de función calculator para pasar valores de otra función. Escriba la función doCalculation, que devuelve el resultado de la función addNumbers o subtractNumbers según el valor pasado al parámetro operation.
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(1, 2))
//Reemplace la función calculator por la interfaz Calculator en las declaraciones de variables. Cuando haya terminado, el código debería funcionar igual.
interface Calculator {
    (x: number, y: number): number;
}

//Inferencia de tipos de funciones
let addNumbrs1: Calculator = (x: number, y: number): number => x + y;
let addNumbrs2: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbrs3: Calculator = (num1, num2) => num1 + num2;