# Inferencia en los tipos de variables

## Declaración de una variable

### Declaración de una variable:

```ts:
let b: number; //* Se declara explicitamente en tipo
let c = 1; //* Al declarar la variable y asignar un valor, se infiere el tipo
let d; //* Al declarar no se inicializa el tipo
```

### Booleano

```ts:
let flag: boolean;
let yes = true;
let no = false;
```

### Número

```ts:
let e: number;
let f = 0;
let z: number = 123.456;
let bigger: bigint = 100n;
```

### String

```ts:
let s: string;
let empty = "";
let abc = "abc";
```

```ts:
let firstName2: string = "Mateo";
let sentence: string = `My name is ${firstName2}.
    I am new to TypeScript.`;
console.log(sentence); //My name is Mateo.I am new to TypeScript.
```

## ENUM

Coleccion de valores a los que se pueden acceder.

Asignando valor inicial en cero

```ts:
enum ContractStatus {
  Permanent, //0
  Temp, //1
  Apprentice, //2
}
```

O, si se desea comience en una valor en específico

```ts:
enum ContractStatus2 {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus); //Temp
```

## ANY

Representar cualquier valor de JavaScript sin restricciones

```ts:
let randomValue: any = 10;
randomValue = "Mateo"; // OK
randomValue = true; // OK

console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
```

## UNKNOWN

No se puede acceder a las propiedades de un tipo unknown; tampoco se pueden llamar ni construir

```ts:
let randomValue2: unknown = 10;
randomValue = true;
randomValue = "Mateo";

console.log(randomValue2.name); // Error: Object is of type unknown //no se puede acceder a las propiedades
randomValue(); // Error: Object is of type unknown
randomValue2.toUpperCase(); // Error: Object is of type unknown
```

## Aserción de tipos

Indica a TypeScript que ha realizado cualquier comprobación especial que necesitara antes de llamar a la instrucción.

```ts:
let randomValue3: unknown = 10;

randomValue = true;
randomValue = "Mateo";

if (typeof randomValue3 === "string") {
  console.log((randomValue3 as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}
```

## Restricción de tipos

En el ejemplo anterior se muestra el uso de typeof en el bloque if para examinar el tipo de una expresión en tiempo de ejecución.

Tipos

- string typeof s === "string"
- number typeof n === "number"
- boolean typeof b === "boolean"
- undefined typeof undefined === "undefined"
- function typeof f === "function"
- array Array.isArray(a)

## Tipos de unión

Ayudan a controlar situaciones en las que un tipo se compone de dos o más tipos posibles.

```ts:
//la función add acepta dos valores que pueden ser number o string.

function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Parameters must be numbers or strings");
}
console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add("one", 2)); //* Returns error
```

## Tipos de inserción

Combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes.

```ts:
//UNO
interface Employee {
  employeeID: number;
  age: number;
}
```

```ts:
//DOS
interface Manager {
  stockPlan: boolean;
}
```

```ts:
//Combinacion
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};
```

## Tipos literales

Es un subtipo más concreto de un tipo colectivo. Limitar los resultador del valor a declarar.

```ts:
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid //No existe dentro de testResult
```

```ts:
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid //El tipo "7 no se puede asignar"
```

## Matrices

Declaración de una matriz

```ts:
//Una manera de declarar matrices
let list: number[] = [1, 2, 3];
//Otra manera de declarar matrices
let list2: Array<number> = [1, 2, 3];
```

## Truplas

```ts:
let person1: [string, number] = ['Marcia', 35];
let person2: [string, number] = ['Marcia', 35, true]; //Error el tipo boolean no se puede asignar

```
