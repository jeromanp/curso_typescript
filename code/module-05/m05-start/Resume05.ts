//Introduccion a las clases de TypesScript

//Las clases permiten expresar patrones comunes orientados a objetos de una manera estándar, haciendo que características como la herencia sean más legibles e interoperables.

//Componenetes de una clase

/*
Las propiedades, también denominadas campos, son los datos (o atributos) del objeto. Estas son las características que definen el objeto y que puede establecer o devolver desde el código.
constructor es una función especial que se usa para crear e inicializar objetos basados en la clase. Cuando se crea una nueva instancia de la clase, el constructor crea un nuevo objeto con la forma de clase y lo inicializa con los valores que se le han pasado.
Los descriptores de acceso son un tipo de función que se usa para aplicar get o set al valor de las propiedades. Las propiedades pueden ser de solo lectura simplemente omitiendo el descriptor de acceso set en la clase, o inaccesibles omitiendo el descriptor de acceso get (la propiedad devolverá undefined si se intenta acceder a ella, incluso si se le asigna un valor durante la inicialización).
Los métodos son funciones que definen los comportamientos o acciones que puede realizar el objeto. Puede llamar a estos métodos para invocar el comportamiento del objeto. También se pueden definir métodos a los que solo se puede tener acceso desde dentro de la propia clase y a los que otros métodos de la clase llaman normalmente para realizar una tarea.
*/

//Notas de diseño
//Puede crear clases para modelar datos, encapsular funcionalidades o proporcionar plantillas, entre otras muchas opciones. Por lo tanto, los componentes enumerados anteriormente no son necesarios en cada clase que se cree. Puede que solo necesite métodos y un constructor para un objeto de utilidad, o únicamente propiedades para administrar los datos.

//Creacion de una clase

//Para crear una clase, defina sus miembros: propiedades, un elemento constructor, descriptores de acceso y métodos.
class Car5 {
  // Properties
  // Constructor
  // Accessors
  // Methods
}

// Declaración de las propiedades de clase
// Puede pensar en las propiedades de una clase como los datos sin procesar que se pasan al objeto cuando se inicializa.

class Car4 {
  // Properties
  //  _make: string;
  // _color: string;
  // _doors: number;
  // Constructor
  // Accessors
  // Methods
}

//Definición del constructor de la clase

//Que define qué miembros tiene la función de clase constructor. El tipo de función constructor también se conoce como el tipo "lado estático" porque incluye miembros estáticos de la clase.
//El uso de constructor puede simplificar las clases y facilitar su administración cuando se trabaja con muchas clases.

class Car3 {
  // Properties
  _make: string;
  _color: string;
  _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }
  // Accessors
  // Methods
}

//Definición de los descriptores de acceso

// TypeScript admite captadores y establecedores como una forma de interceptar el acceso a una propiedad.

class Car2 {
  // Properties
  _make: string;
  _color: string;
  _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }
  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
}

//Definición de los métodos de clase

//Puede definir cualquier función de TypeScript dentro de una clase y llamarla como un método en el objeto o desde otras funciones dentro de la clase. Estos miembros de la clase describen los comportamientos que su clase puede realizar y pueden realizar cualquier otra tarea requerida por la clase.

class Car {
  // Properties
  _make: string;
  _color: string;
  _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }
  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  worker(): string {
    return this._make;
  }
}

//Creación de instancias de una clase

//1.Debajo de la declaración de clase, declare una variable denominada myCar1 y asígnele un nuevo objeto Car, pasando valores para los parámetros make, color y doors (asegúrese de que el parámetro doors tiene asignado un número par).

let myCar1 = new Car("Cool Car Company", "blue", 2); // Instantiates the Car object with all parameters

//2. Puede tener acceso a las propiedades del nuevo objeto myCar1.
console.log(myCar1.color);
console.log(myCar1._color);

//3. El miembro _color representa la propiedad definida en la clase, mientras que color es el parámetro que se pasa al constructor. Cuando se hace referencia a _color, se obtiene acceso a los datos sin procesar de la propiedad, que devuelve 'blue'. Cuando se hace referencia a color, se obtiene acceso a la propiedad a través del descriptor de acceso get o set, que devuelve 'The color of the car is blue'. Es importante comprender la diferencia entre los dos porque a menudo no se quiere permitir el acceso directo a la propiedad sin hacer alguna validación u otro trabajo en los datos antes de obtenerlos o establecerlos. Aprenderá a usar modificadores de acceso para controlar la visibilidad de los miembros de la clase más adelante en la unidad.

//4. Recuerde que el bloque set del parámetro doors comprueba el valor para determinar si es par o impar. Para probarlo, declare una variable denominada myCar2 y asígnele un nuevo objeto Car, pasando valores para los parámetros make, color y doors. Esta vez, establezca el valor del parámetro doors en un número impar. Ahora, seleccione Ejecutar. ¿Qué sucede? ¿Por qué?

let myCar2 = new Car("Galaxy Motors", "red", 3);

//5. Aunque se pasó un número impar a doors, se compila y se ejecuta sin errores porque no se realiza ninguna validación de datos en constructor. Pruebe a establecer el valor de doors en otro número impar (por ejemplo, myCar2.doors = 5) y pruébelo. Así, se debería invocar al bloque set y producirse un error. Si desea realizar este paso de validación cuando se inicializa el objeto Car, debe agregar una comprobación de validación a constructor.

// constructor(make: string, color: string, doors = 4) {
//     this._make = make;
//     this._color = color;
//     if ((doors % 2) === 0) {
//         this._doors = doors;
//     } else {
//         throw new Error('Doors must be an even number');
//     }
// }

class Car6 {
  // Properties
  _make: string;
  _color: string;
  _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  worker(): string {
    return this._make;
  }
}

//Pruebe el parámetro opcional doors omitiéndolo en la inicialización del objeto.

let myCar3 = new Car6("Galaxy Motors", "gray");
console.log(myCar3.doors); // returns 4, the default value

// 7. Pruebe los métodos enviando los valores devueltos a la consola.

console.log(myCar3.accelerate(35));
console.log(myCar3.brake());
console.log(myCar3.turn("right"));

//Modificadores de acceso

//De forma predeterminada, todos los miembros de clase son de tipo public. Esto significa que son accesibles desde fuera de la clase contenedora.
//En TypeScript, puede controlar la visibilidad de los miembros de la clase agregando la palabra clave public, private o protected antes del nombre del miembro.

/*
Modificador de acceso	                Descripción
* public. Si no especifica un modificador de acceso, el valor predeterminado es público. También puede                                   establecer explícitamente el miembro en público mediante la palabra clave public.
* private. Si modifica el miembro con la palabra clave private, no se puede tener acceso a él desde fuera la clase contenedora.
* protected. El modificador protected actúa de forma muy similar al modificador private, con la excepción de que también se puede tener acceso a los miembros declarados protected dentro de las clases derivadas. (Proporcionaremos más información al respecto más adelante en el módulo).
*/

//Ejercicio: Aplicación de modificadores de acceso a una clase

class Car7 {
  // Properties
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  private worker(): string {
    return this._make;
  }
}

let myCar4 = new Car7("Galaxy Motors", "gray");

//Las propiedades se protegen y no son accesibles como en los casos anteriores

//Definición de propiedades estáticas

//Hay otro tipo de propiedad denominada propiedad estática. Todas las instancias de una clase comparten las propiedades y los métodos estáticos.
//Para convertir una propiedad en estática, use la palabra clave static antes de un nombre de método o propiedad.

class Car8 {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car8.numberOfCars++; // Increments the value of the static property
  }
  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  private worker(): string {
    return this._make;
  }
  public static getNumberOfCars(): number {
    return Car8.numberOfCars;
  }
}

//Cree una instancia de la clase Car como de costumbre y, a continuación, use la sintaxis Car.getNumberOfCars() para devolver el número de instancias.
// Instantiate the Car object with all parameters
let myCar8 = new Car8("Cool Car Company", "blue", 2);
// Instantiates the Car object with all parameters
let myCar9 = new Car8("Galaxy Motors", "blue", 2);
// Returns 2
console.log(Car8.getNumberOfCars());

//Ampliación de una clase mediante herencia

//La herencia le permite establecer relaciones y crear jerarquías de clases en la composición de objetos.
//Por ejemplo, puede aplicar extend a la clase Car para crear una clase nueva denominada ElectricCar. La clase ElectricCarheredará las propiedades y los métodos de la clase Car, pero también puede tener sus propios atributos y comportamientos únicos, como range y charge. Así que, al ampliar la clase Car, puede crear nuevas clases que reutilicen el código de la clase Car y luego construir sobre ella.

//La clase Car incluye las propiedades make, color y doors y los métodos accelerate, brake y turn. Cuando la clase ElectricCar amplía a Car, incluye todas las propiedades y los métodos de Car, además de una nueva propiedad denominada range y un nuevo método denominado charge.

//ElectricCar es una subclase que usa la palabra clave extends para derivarse de la clase base Car. (Las clases base también se denominan superclases o clases primarias). Dado que ElectricCar amplía la funcionalidad de Car, puede crear una instancia de ElectricCar que pueda aplicar accelerate, brake y turn. Si tuviera que hacer cambios en el código de la clase base, solo tendría que cambiarlo en la clase Car y, de ese modo, todas las subclases de Car heredarán esos cambios.

/*
Entre los motivos que apoyan el uso de la herencia se encuentran los siguientes:

Reusabilidad del código. Puede diseñar un plan de desarrollo y reutilizarlo en muchos lugares. Esto también ayuda a evitar la redundancia en el código.
Se puede utilizar una base para derivar cualquier número de subclases en una jerarquía. Por ejemplo, las subclases de la jerarquía Car también podrían incluir una clase SUV o una clase Convertible.
En lugar de tener que hacer cambios de código en muchas clases diferentes que tienen una funcionalidad similar, solo hay que hacer los cambios una vez en la clase base.
Invalidación de un método
Cuando una clase derivada tiene una definición diferente para una de las funciones miembro de la clase base, se dice que la función base está invalidada. La invalidación es lo que sucede cuando se crea una función en una subclase con el mismo nombre que la función de la clase base, pero con una funcionalidad diferente.

Por ejemplo, supongamos que los automóviles eléctricos usan un tipo diferente de sistema de frenado que los automóviles tradicionales, denominado frenos regenerativos. Por lo tanto, es posible que desee invalidar el método brake de la clase base Car con un método especializado para la subclase ElectricCar.
*/

//Ejercicio: Ampliacion de una clase
class Car9 {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car9.numberOfCars++; // Increments the value of the static property
  }
  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  protected worker(): string {
    return this._make;
  }
  public static getNumberOfCars(): number {
    return Car9.numberOfCars;
  }
}

class ElectricCar extends Car9 {
  // Properties unique to ElectricCar
  private _range: number;
  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }
  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }
  // Methods
  charge() {
    console.log(this.worker() + " is charging.");
  }
  brake(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`;
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge();

console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"// returns "Spark Motors is charging"

//Ejercicio: Declaración de una interfaz para asegurar la forma de la clase

//En Typescript, puede usar una interfaz para establecer un "contrato de código" que describa las propiedades requeridas de un objeto y sus tipos. Por lo tanto, se puede utilizar una interfaz para asegurar la forma de la instancia de la clase.

// Declare una interfaz Vehicle que describa las propiedades y los métodos de la clase Car.

interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

//Observe que la interfaz incluye los parámetros del constructor, no las propiedades. Pruebe a incluir una de las propiedades privadas (por ejemplo, _make: string). TypeScript producirá un error porque la interfaz solo puede describir el lado público de la clase y no puede incluir miembros privados. Esto evita su uso para comprobar que una clase también tiene los tipos correctos para el lado privado de la instancia de la clase.

//Ahora puede implementar la interfaz Vehicle en la clase Car. A medida que se compilan los detalles de la clase, TypeScript se asegurará de que la clase se adhiera al contrato de código descrito en la interfaz.

class Car10 implements Vehicle {
    // ...
}

//Consideraciones de diseño

//Cuándo usar interfaces
// Las interfaces son una construcción en tiempo de diseño de TypeScript. Dado que JavaScript no tiene un concepto de interfaces, se quitan cuando TypeScript se transpila en JavaScript. Esto significa que no tienen ningún peso, no ocupan espacio en el archivo resultante y no tienen ningún impacto negativo en el código que se ejecutará.

//Si va a crear una aplicación de pila completa con implementaciones de cliente y de servidor, normalmente deberá definir cómo se estructurarán los datos. Si los datos en cuestión fueran para almacenar información sobre un perro, por ejemplo, podría crear una interfaz con el siguiente aspecto:

interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
    
}

//Esta interfaz se puede usar en un módulo compartido para el código de cliente y de servidor, asegurándose de que la estructura de datos es la misma en ambos lados. En el cliente, puede tener código para recuperar el perro de la API del servidor que defina, que se parece a lo siguiente:

    // async loadDog(id: number): Dog {
    //     return await (await fetch('demoUrl')).json() as Dog;
    // }

//Cuándo usar clases
// La diferencia clave entre las interfaces y las clases en cualquier lenguaje de programación es que las clases permiten definir los detalles de la implementación. Las interfaces definen únicamente cómo se estructuran los datos. Las clases permiten definir métodos, campos y propiedades. Las clases también proporcionan una forma de crear plantillas de objetos, definiendo valores predeterminados.

// Volviendo al ejemplo anterior, en el servidor puede que desee agregar código para cargar o guardar un perro en la base de datos. Una técnica común para administrar los datos en una base de datos es utilizar lo que se conoce como "patrón de registro activo", lo que significa que el propio objeto tiene save, load y métodos similares. Podemos utilizar la interfaz Dog definida anteriormente para asegurarnos de que tenemos las mismas propiedades y la misma estructura, al tiempo que agregamos el código necesario para realizar las operaciones.

class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
}