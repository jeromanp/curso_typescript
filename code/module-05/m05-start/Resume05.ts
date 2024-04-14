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
class Car {
  // Properties
  // Constructor
  // Accessors
  // Methods
}

// Declaración de las propiedades de clase
// Puede pensar en las propiedades de una clase como los datos sin procesar que se pasan al objeto cuando se inicializa.

class Car2 {
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

class Car4 {
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

class Car5 {
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
