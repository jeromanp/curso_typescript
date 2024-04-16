# Introduccion a las clases de TypesScript

Las clases permiten expresar patrones comunes orientados a objetos de una manera estándar, haciendo que características como la herencia sean más legibles e interoperables.

## Componentes de una clase

- Las **propiedades**, también denominadas campos, son los datos (o atributos) del objeto. Estas son las características que definen el objeto y que puede establecer o devolver desde el código.
- El **constructor** es una función especial que se usa para crear e inicializar objetos basados en la clase. Cuando se crea una nueva instancia de la clase, el constructor crea un nuevo objeto con la forma de clase y lo inicializa con los valores que se le han pasado.
- Los **descriptores** de acceso son un tipo de función que se usa para aplicar get o set al valor de las propiedades. Las propiedades pueden ser de solo lectura simplemente omitiendo el descriptor de acceso set en la clase, o inaccesibles omitiendo el descriptor de acceso get (la propiedad devolverá undefined si se intenta acceder a ella, incluso si se le asigna un valor durante la inicialización).
- Los **métodos** son funciones que definen los comportamientos o acciones que puede realizar el objeto. Puede llamar a estos métodos para invocar el comportamiento del objeto. También se pueden definir métodos a los que solo se puede tener acceso desde dentro de la propia clase y a los que otros métodos de la clase llaman normalmente para realizar una tarea.

> Notas de diseño
> Puede crear clases para modelar datos, encapsular funcionalidades o proporcionar plantillas, entre otras muchas opciones. Por lo tanto, los componentes enumerados anteriormente no son necesarios en cada clase que se cree. Puede que solo necesite métodos y un constructor para un objeto de utilidad, o únicamente propiedades para administrar los datos.

## Creación de una clase

Para crear una clase, defina sus miembros: propiedades, un elemento constructor, descriptores de acceso y métodos.

```ts:
class Car {
  // Properties
  // Constructor
  // Accessors
  // Methods
}
```

## Declaración de las propiedades de clase

```ts:
class Car4 {
  // Properties
   _make: string;
  _color: string;
  _doors: number;
  // Constructor
  // Accessors
  // Methods
}
```

## Definición del constructor de la clase

Que define qué miembros tiene la función de clase constructor. El tipo de función constructor también se conoce como el tipo "lado estático" porque incluye miembros estáticos de la clase.

El uso de constructor puede simplificar las clases y facilitar su administración cuando se trabaja con muchas clases.

```ts:
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
  // Methods
}
```

## Definición de los descriptores de acceso

TypeScript admite captadores y establecedores como una forma de interceptar el acceso a una propiedad.

```ts:
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
}

```

## Definiciónn de los métodos de clase

Puede definir cualquier función de TypeScript dentro de una clase y llamarla como un método en el objeto o desde otras funciones dentro de la clase. Estos miembros de la clase describen los comportamientos que su clase puede realizar y pueden realizar cualquier otra tarea requerida por la clase.

```ts:
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
```

## Creación de instancias de una clase

1. Debajo de la declaración de clase, declare una variable denominada myCar1 y asígnele un nuevo objeto Car, pasando valores para los parámetros make, color y doors (asegúrese de que el parámetro doors tiene asignado un número par).

```ts:
let myCar1 = new Car("Cool Car Company", "blue", 2); // Instantiates the Car object with all parameters

```

2. Puede tener acceso a las propiedades del nuevo objeto myCar1.

```ts:
console.log(myCar1.color);
console.log(myCar1._color);
```

3. El miembro \_color representa la propiedad definida en la clase, mientras que color es el parámetro que se pasa al constructor. Cuando se hace referencia a \_color, se obtiene acceso a los datos sin procesar de la propiedad, que devuelve 'blue'. Cuando se hace referencia a color, se obtiene acceso a la propiedad a través del descriptor de acceso get o set, que devuelve 'The color of the car is blue'. Es importante comprender la diferencia entre los dos porque a menudo no se quiere permitir el acceso directo a la propiedad sin hacer alguna validación u otro trabajo en los datos antes de obtenerlos o establecerlos. Aprenderá a usar modificadores de acceso para controlar la visibilidad de los miembros de la clase más adelante en la unidad.

4. Recuerde que el bloque set del parámetro doors comprueba el valor para determinar si es par o impar. Para probarlo, declare una variable denominada myCar2 y asígnele un nuevo objeto Car, pasando valores para los parámetros make, color y doors. Esta vez, establezca el valor del parámetro doors en un número impar. Ahora, seleccione Ejecutar. ¿Qué sucede? ¿Por qué?

```ts:
let myCar2 = new Car("Galaxy Motors", "red", 3);
```

5. Aunque se pasó un número impar a doors, se compila y se ejecuta sin errores porque no se realiza ninguna validación de datos en constructor. Pruebe a establecer el valor de doors en otro número impar (por ejemplo, myCar2.doors = 5) y pruébelo. Así, se debería invocar al bloque set y producirse un error. Si desea realizar este paso de validación cuando se inicializa el objeto Car, debe agregar una comprobación de validación a constructor.

```ts:
constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}
```

```ts:
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
```

Pruebe el parámetro opcional doors omitiéndolo en la inicialización del objeto.

```ts:
let myCar3 = new Car6("Galaxy Motors", "gray");
console.log(myCar3.doors); // returns 4, the default value
```

7. Pruebe los métodos enviando los valores devueltos a la consola.

```ts:
console.log(myCar3.accelerate(35));
console.log(myCar3.brake());
console.log(myCar3.turn("right"));
```
## Modificadores de acceso
De forma predeterminada, todos los miembros de clase son de tipo public. Esto significa que son accesibles desde fuera de la clase contenedora.

En TypeScript, puede controlar la visibilidad de los miembros de la clase agregando la palabra clave public, private o protected antes del nombre del miembro.

* _public_. Si no especifica un modificador de acceso, el valor predeterminado es público. También puede establecer explícitamente el miembro en público mediante la palabra clave public.
* _private_. Si modifica el miembro con la palabra clave private, no se puede tener acceso a él desde fuera la clase contenedora.
* _protected_. El modificador protected actúa de forma muy similar al modificador private, con la excepción de que también se puede tener acceso a los miembros declarados protected dentro de las clases derivadas. 





```ts:

```
```ts:

```

```ts:

```

```ts:

```

```ts:

```

```ts:

```

```ts:

```

```ts:

```

```ts:

```

```ts:

```