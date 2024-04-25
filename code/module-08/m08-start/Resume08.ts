//Organización del código mediante los espacios de nombres de TypeScript


// TypeScript proporciona dos maneras de organizar el código: espacios de nombres y módulos. En este módulo se explica cómo organizar el código de TypeScript mediante espacios de nombres. Aunque tanto los espacios de nombres como los módulos proporcionan una forma de categorizar el código relacionado de maneras significativas y permitirle controlar qué código se expone al espacio de nombres global de las aplicaciones, hay algunas diferencias entre ellos.

//Introducción a los espacios de nombres de TypeScript

//Los espacios de nombres (denominados "módulos internos" en versiones anteriores de TypeScript) son una forma específica de TypeScript de organizar y categorizar el código, lo que le permite agrupar el código relacionado. Los espacios de nombres permiten agrupar variables, funciones, interfaces o clases relacionadas con las reglas de negocio en un espacio de nombres y la seguridad en otro.

// El código dentro de un espacio de nombres se extrae del ámbito global y entra en el ámbito del espacio de nombres. Esta colocación puede ayudarle a evitar conflictos de nomenclatura entre los componentes del espacio de nombres global y puede ser beneficioso al trabajar con equipos de desarrollo distribuidos que pueden utilizar nombres de componentes similares.

// Por ejemplo, namespace A y namespace B comparten una función denominada functionName. Cualquier intento de acceder a la función sin hacer referencia al espacio de nombres que la contiene produce un error porque las declaraciones de variable están en el espacio de nombres global, mientras que las dos funciones se encuentran dentro del ámbito de sus espacios de nombres respectivos.

//namespaces.ts

namespace A{
    export functionfunctionName{

    }
}

namespace B{
    export functionfunctionName{
        
    }
}

let variable1=A.functionName(); //OK
let variable2=B.functionName(); //OK
let avriable3=functionName(): //Error

// Los espacios de nombres se pueden usar para:

// * Reducir la cantidad de código en el ámbito global, limitando la "contaminación del ámbito global".
// * Proporcionar un contexto para los nombres, lo que ayuda a reducir los conflictos de nomenclatura.
// * Mejorar la reutilización.

//Ejercicio: Organizar el código mediante espacios de nombres de un solo archivo

//Puede implementar espacios de nombres en un solo archivo TypeScript o en varios archivos TypeScript.

// Nota
// Debe usar un IDE, como Visual Studio Code, para implementar espacios de nombres de varios archivos. No es posible hacerlo en el área de juegos de TypeScript.

// Complete los pasos para definir un espacio de nombres de un solo archivo:

//1. Abra una nueva área de trabajo de Visual Studio Code.

//2. Cree un nuevo archivo llamado module08_exercise.ts.

//3. Defina un nuevo espacio de nombres con la palabra clave namespace seguida del nombre del espacio de nombres. Puede definir tantos espacios de nombres como sea necesario en un solo archivo TypeScript. En la parte superior del archivo, defina dos espacios de nombres denominados Greetings y GreetingsWithLength.

namespace Greetings {
}
namespace GreetingsWithLength {
}

//4. Ahora puede definir funciones y clases dentro de la definición del espacio de nombres. Todos los componentes definidos en el espacio de nombres se limitan al espacio de nombres y se quitan del ámbito global. Agregue una nueva función llamada returnGreeting al espacio de nombres Greetings. Esta función devuelve el valor de un parámetro a la consola.

namespace Greetings {
    function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
}

//5. Agregue dos nuevas funciones, returnGreeting y getLength, al espacio de nombres GreetingsWithLength. La función returnGreeting utiliza la función auxiliar getLength para determinar la longitud del saludo antes de devolver el mensaje a la consola.

namespace GreetingsWithLength {
    function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
}

//6. Si desea que una función o una clase estén disponibles para el código fuera del espacio de nombres, agregue la palabra clave export antes de su nombre. Si se omite la palabra clave export, el componente solo está disponible dentro del espacio de nombres. Puede hacerlo si define componentes a los que solo deben poder acceder directamente otros componentes del espacio de nombres. Agregue la palabra clave export a la función returnGreeting en ambos espacios de nombres. La función getLength no debe ser accesible fuera del espacio de nombres GreetingsWithLength, de modo que omita la palabra clave export.

namespace Greetings {
    export function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
}
namespace GreetingsWithLength {
    export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
}

//7. Para usar una clase o función dentro de un espacio de nombres, utilice el nombre del espacio de nombres como prefijo para del componente. Intente llamar a la función returnGreeting sin especificar el espacio de nombres. Esto devuelve un error porque ambas funciones returnGreeting están fuera del ámbito en el espacio de nombres global. Ahora, pruebe a utilizar Greetings o GreetingsWithLength como prefijo para la función returnGreeting. Esto proporciona acceso a la función dentro de cada espacio de nombres respectivo.

returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour');         // OK
GreetingsWithLength.returnGreeting('Hola');  // OK


//Organización del código mediante espacios de nombres anidados

//También puede anidar espacios de nombres dentro de espacios de nombres, proporcionando incluso más opciones para organizar el código.

// Siga trabajando en el editor de código.

//1. Cree un nuevo espacio de nombres denominado AllGreetings y luego mueva los espacios de nombres Greetings y GreetingsWithLength que creó anteriormente dentro de él. Agregue la palabra clave export antes de ambos nombres de espacio de nombres. Esto permite que el espacio de nombres sea accesible fuera del espacio de nombres AllGreetings.

namespace AllGreetings {
    export namespace Greetings {
        export function returnGreeting (greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    }
    export namespace GreetingsWithLength {
        export function returnGreeting (greeting: string) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        function getLength(message: string): number {
            return message.length
        }
    }
}

//2. Para llamar a las funciones, empiece por escribir el nombre del espacio de nombres más externo, AllGreetings, un punto y, después, el nivel siguiente en la jerarquía del espacio de nombres, Greetings o GreetingsWithLength. Continúe por la jerarquía hasta alcanzar el nombre de la función.

AllGreetings.Greetings.returnGreeting('Bonjour');        // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK

//Definición de un alias de espacio de nombres

//TypeScript crea una jerarquía de espacios de nombres anidados que es fácil de recorrer. Sin embargo, a medida que los espacios de nombres anidados se vuelven más complejos, puede que desee crear un alias para acortar y simplificar el código. Para ello, use la palabra clave import.

// Siga trabajando en el editor de código.

//1. Escriba import greet = AllGreetings.Greetings. Esto define un nuevo alias denominado greet que representa AllGreetings.Greetings. Ahora puede usar greet en lugar de AllGreetings.Greetings en el código.

import greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');

//Compilación de espacios de nombres de un solo archivo

//Los espacios de nombres de un solo archivo se compilan de la misma manera que cualquier otro archivo TypeScript. Dado que los espacios de nombres son una construcción solo de TypeScript, se quitan del código de JavaScript resultante y se convierten en variables que se anidan según sea necesario para formar objetos similares a los espacios de nombres.

//Organización del código mediante espacios de nombres de varios archivos


//Para ampliar los espacios de nombres, puede compartirlos entre varios archivos TypeScript. Si tiene espacios de nombres en varios archivos que se relacionan entre sí, debe agregar etiquetas reference para indicar al compilador de TypeScript las relaciones entre los archivos. Por ejemplo, suponga que tiene tres archivos Typescript:

//* interfaces.ts, que declara un espacio de nombres que contiene algunas definiciones de interfaz.
//* functions.ts, que declara un espacio de nombres con funciones que implementan las interfaces en interfaces.ts.
//* main.ts, que llama a las funciones de functions.ts y representa el código principal de la aplicación.

// Para informar a TypeScript de la relación entre interfaces.ts y functions.ts, agregue reference a interfaces.ts mediante la sintaxis de barra diagonal triple (///) a la parte superior de functions.ts. Y luego, en main.ts, que está relacionado tanto con interfaces.ts como con functions.ts, agregue reference a ambos archivos.

//interfaces.ts
namespace Interfaces{

}

// function.ts
//<reference path="interfaces.ts">
namespace Functions{
    export function functionName{

    }
}

//main.ts
//<reference path="interfaces.ts">
//<reference path="functions.ts">

let x =Functions.functionName();

//Cuando haya una referencia a más de un archivo, empiece con el espacio de nombres de nivel más alto y luego trabaje hacia abajo. TypeScript usará este orden al compilar los archivos.

//Compilación de espacios de nombres de varios archivos

//Hay dos maneras de compilar varios espacios de nombres de archivo: compilación por archivo y compilación de un solo archivo.

// De forma predeterminada, al ejecutar el compilador de TypeScript en main.ts, examinará las instrucciones reference del archivo y generará un archivo JavaScript para cada archivo de entrada. Si elige esta opción, use etiquetas <script> en la página web para cargar cada archivo emitido en el orden adecuado.

// También puede indicar al compilador que genere un solo archivo de salida de JavaScript mediante la opción --outFile. En el ejemplo anterior, el comando tsc --outFile main.js main.ts indica al compilador que genere un único archivo de JavaScript denominado main.js.

//Consideraciones de diseño

//Puede utilizar espacios de nombres o módulos para la organización de código y ambos pueden contener código y declaraciones.

// Aunque los espacios de nombres son fáciles de usar para implementaciones sencillas y no dependen de un cargador de módulos, los módulos ofrecen algunas ventajas adicionales que los espacios de nombres no proporcionan. Módulos:

//* Declare sus dependencias.
//* Proporcionan una mejor reutilización del código.
//* Ofrecen un aislamiento fuerte.
//* Ocultan las instrucciones internas de las definiciones de módulo y muestran solo los métodos y parámetros asociados al componente declarado.
//* Proporcionan una mejor compatibilidad con las herramientas para la unión.
//* Se recomiendan sobre los espacios de nombres para las aplicaciones Node.js porque los módulos son los predeterminados.
//* Pueden resolver los problemas de flujo de JavaScript de nivel superior porque se crea una instancia de una referencia a un método o una clase externos solo en la invocación del método.

//Y, a partir de ECMAScript 2015, los módulos son parte nativa del lenguaje y todas las implementaciones del motor compatibles los deben admitir. Por lo tanto, para los proyectos nuevos, se recomiendan los módulos para la organización del código.

// Nota
// No es aconsejable combinar espacios de nombres y módulos en el mismo proyecto.

//En la tabla siguiente se resumen y se comparan los módulos y los espacios de nombres.

//Modulo                                  Espacio de Nombre

//Use módulos para organizar el código en archivos independientes para la agrupación lógica de la funcionalidad. - Use espacios de nombres para organizar el código en archivos independientes para la agrupación lógica de la funcionalidad.

//Los módulos se ejecutan en su ámbito local, no en el ámbito global. - Los espacios de nombres módulos se ejecutan en su ámbito local, no en el ámbito global.

//Los módulos son declarativos; las relaciones entre los módulos se especifican en términos de importaciones y exportaciones en el nivel de archivo. - Los espacios de nombres no pueden declarar sus dependencias.

//Un módulo se define mediante el uso de la palabra clave export o import dentro de un archivo. Cualquier archivo que contenga una importación o exportación de nivel superior se considera un módulo. - Un espacio de nombres se define mediante la palabra clave namespace dentro de un archivo. Las instrucciones de espacio de nombres se pueden anidar y pueden abarcar varios archivos.

//Para exponer componentes de módulo individuales fuera del módulo, use la palabra clave export. - Para exponer componentes de espacio de nombres individuales fuera del espacio de nombres, use la palabra clave export.

//Para usar un componente de un módulo en otro, use la palabra clave import. - Para usar un componente de un espacio de nombres en otro archivo TypeScript, agregue una instrucción reference con la sintaxis de barra diagonal triple (///).

//Para compilar un módulo y todos sus archivos dependientes, use el comando tsc --module. - Para compilar archivos TypeScript que contienen espacios de nombres y todos sus archivos dependientes en archivos JavaScript individuales, use el comando tsc.

//No es posible tener módulos de varios archivos compilados en un único módulo. - Para compilar todos los archivos TypeScript que contienen espacios de nombres en un único archivo JavaScript, use el comando tsc --outFile.

//Los módulos importan otro módulo mediante una API de cargador de módulos. La API se especifica al compilar el módulo. - Los espacios de nombres se cargan especificando los nombres de archivo . js (en orden) mediante la etiqueta <script> de la página HTML.

//En los módulos, puede volver a exportar los componentes ya sea mediante su nombre original o cambiándoles el nombre. - En los espacios de nombres, no puede volver a exportar componentes ni cambiarles el nombre.
