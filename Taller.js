// Taller de JavaScript - Ana María García / A00412509

// 1. Variables

// 1.1 con var (se puede reasignar)
var nombre = "Ana";
console.log(nombre);
nombre = "María";
console.log(nombre);

// 1.2 con const (no se puede cambiar = error si lo intentamos)
try {
    const apellido = "García";
    console.log(apellido);
} catch (error) {
    console.log("Error:", error.message);
}

// 1.3 let solo vive en el bloque
if (false) {
    let edad = 18;
    console.log(edad);
}


// 2. Tipos de datos

// 2.1 primitivos
let texto = "Max y leo";
let numero = 14;
let booleano = true;
let vacio = null;
let indef;

console.log(typeof texto, texto);
console.log(typeof numero, numero);
console.log(typeof booleano, booleano);
console.log(typeof vacio, vacio); 
console.log(typeof indef, indef);

// 2.2 objeto y array
let persona = { nombre: "Ana", edad: 18 };
let hobbies = ["jugar futbol", "cocinar", "bailar"];
console.log(typeof persona, persona);
console.log(typeof hobbies, hobbies);


// 3. Conversión de tipos

// 3.1 implícita
let n1 = 10;
let n2 = "5";
console.log(n1 + n2); 
console.log(n1 * n2); 

// 3.2 explícita
console.log(String(25));
console.log(Number("100"));
console.log(Boolean(""));     
console.log(Boolean("hola")); 


// 4. Operadores, condicionales, ciclos y errores

// 4.1 comparaciones
console.log(10 === "10"); 
console.log(10 == "10");  

// 4.2 par o impar
let num = 7;
if (num % 2 === 0) {
    console.log("par");
} else {
    console.log("impar");
}

// 4.3 for simple
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 4.4 try catch
try {
    throw new Error("falló algo");
} catch (error) {
    console.log("Error capturado:", error.message);
}


// 5. Funciones

// 5.1 función normal
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(3, 4));

// 5.2 arrow en una línea
const mult = (a, b) => a * b;
console.log(mult(5, 6));

// 5.3 arrow sin parámetros
const saludar = () => "¡Hola amigos!";
console.log(saludar());


// 6. Scope y this

// 6.1 global y local
let globalVar = "soy global";

function ejemplo() {
    let localVar = "soy local";
    console.log(globalVar); // funciona
    console.log(localVar);  // funciona
}
ejemplo();
console.log(globalVar);

// 6.2 this en un objeto
let zapatilla = {
    marca: "Nike",
    mostrarMarca: function() {
        console.log(this.marca); 
    }
}
zapatilla.mostrarMarca();


// 7. Arrays

// 7.1 mutables
let frutas = ["fresa", "sandía"];
console.log(frutas);
frutas.push("Naranja"); 
console.log(frutas);
frutas.pop();          
console.log(frutas);

// 7.2 inmutables
let numeros = [1, 2, 3];
let dobles = numeros.map(n => n * 2);
let mayores = numeros.filter(n => n > 1);
console.log(dobles);
console.log(mayores);

// 7.3 recorrer y buscar
frutas.forEach(f => console.log(f));
console.log(frutas.find(f => f === "fresa"));
console.log(frutas.findIndex(f => f === "sandía"));


// 8. Objetos y clases

// 8.1 objeto con método
let libro = {
    titulo: "Los ojo del perro siberiano",
    autor: "Antonio J. Molina",
    mostrarInfo: function() {
        console.log(this.titulo, "-", this.autor);
    }
};
libro.mostrarInfo();

// 8.2 clase básica
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return "Hola, soy " + this.nombre;
    }
}
let animal1 = new Animal("Max");
console.log(animal1.saludar());

// 8.3 herencia
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}
let perro1 = new Perro("Maxito", "Labrador");
console.log(perro1.saludar());
console.log("Raza:", perro1.raza);
