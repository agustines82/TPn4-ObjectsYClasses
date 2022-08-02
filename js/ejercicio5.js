// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la tabla de generaciones.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anio) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }

    mostrarGeneracion() {
        if (1930 <= this.anio && this.anio <= 1948) {
            document.write(`<p>${this.nombre} pertenece a la Silent Generation que se caracteriza por su austeridad</p>`);
        } else if (this.anio <= 1968) {
            document.write(`<p>${this.nombre} pertenece a la generacion Baby Boom que se caracteriza por su ambición</p>`);
        } else if (this.anio <= 1980) {
            document.write(`<p>${this.nombre} pertenece a la generacion X que se caracteriza por su obseción por el éxito</p>`);
        } else if (this.anio <= 1993) {
            document.write(`<p>${this.nombre} pertenece a la generacion Y que se caracteriza por su tendencia a frustrase</p>`);
        } else if (this.anio <= 2010) {
            document.write(`<p>${this.nombre} pertenece a la generacion Z que se caracteriza por su irreverencia</p>`);
        } else {
            document.write(`<p>${this.nombre} no está categorizado en ninguna generación</p>`);
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(`<p>${this.nombre} es mayor de edad</p>`);
        } else {
            document.write(`<p>${this.nombre} es menor de edad</p>`);
        }
    }

    mostrarDatos() {
        document.write(`<ul>
<li>Nombre: ${this.nombre}</li>
<li>Edad: ${this.edad}</li>
<li>DNI: ${this.dni}</li>
<li>Sexo: ${this.sexo}</li>
<li>Peso: ${this.peso}</li>
<li>Altura: ${this.altura}</li>
<li>Fecha de nacimiento: ${this.anio}</li>
</ul>`);
    }

    generarDNI() {
        document.write(`DNI aleatorio: ${parseInt(Math.random() * (99999999 - 10000000) + 10000000)}`);
    }
}

//creacion de variables para ingresar valores por pantalla:
let nombrex = prompt("Ingrese su Nombre y Apellido"); // Como validar que sean letras las que me ingresan y no numeros? ????
let edadx = parseInt(prompt("Ingrese su edad")); // como validar que sean numeros los que me ingresan y no letras?  ????
let dnix = parseInt(prompt("Ingrese su DNI"));
let sexox = prompt("Ingrese su sexo");
let pesox = parseInt(prompt("Ingrese su peso"));
let alturax = parseFloat(prompt("Ingrese su altura"));
let aniox = parseInt(prompt("Ingrese el año de su nacimiento yyyy"));

//creacion del objeto:
let persona1 = new Persona(nombrex, edadx, dnix, sexox, pesox, alturax, aniox);
console.log(persona1);

//ejecucion de los metodos del objeto:
persona1.mostrarDatos();
persona1.mostrarGeneracion(); //persona1.mostrarGeneracion(this.anio); no me funka!!! XQ?
persona1.esMayorDeEdad(); //persona1.esMayorDeEdad(this.edad);no me funka!!! XQ?
persona1.generarDNI();
