// Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
// Los métodos de la agenda serán los siguientes:
// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.
// Crea un menú con opciones por consola para probar todas estas funcionalidades.
class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    //propiedades getters y setters:
    set setNombre(_nombre) {
        this.nombre = _nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setTelefono(_telefono) {
        this.telefono = _telefono;
    }
    get getTelefono() {
        return this.telefono;
    }
    //metodos:
    mostrarContacto() {
        document.write(`<p>Nombre: ${this.nombre}, Telefono: ${this.telefono}</p>`);
    }
}

class Agenda {
    constructor(tamanio) {
        this.contactos = [];
        this.tamanio = tamanio;
    }
    //propiedades getters y setters:
    set setTamanio(newTamanio) {
        this.tamanio = newTamanio;
    }
    get getTamanio() {
        return this.tamanio;
    }

    //metodos:
    existeContacto(newContacto) {
        const encontrar = this.contactos.includes(newContacto);
        if (encontrar) {
            alert("El contacto ya existe");
            return true;
        } else {
            alert("El contacto no existe y se puede agragar a la agenda");
            return false;
        }
    }

    buscarContacto(contacto) {
        const encontrar2 = this.contactos.includes(contacto);
        if (encontrar2) {
            return document.write(`<p>Nombre: ${contacto.nombre}, Telefono: ${contacto.telefono}</p>`);
        } else {
            alert("El contacto no existe");
        }
    }

    agendaLlena() {
        let cantidad = this.contactos.length;
        if (cantidad >= this.tamanio) {
            alert("La agenda está llena");
            return true;
        } else {
            return false;
        }
    }

    huecosLibres() {
        if (this.contactos.length === this.tamanio) {
            alert("la agenda está llena");
        } else {
            let resto = this.tamanio - this.contactos.length;
            alert(`Le quedan ${resto} espacios en la agenda`);
        }
    }

    aniadirContacto(newContacto) {
        if (this.existeContacto(newContacto)) {
            alert("El contacto ya existe. No puede agregarse a la agenda");
        } else {
            //hay que verificar que la agenda no este llena; y sino agrear el contacto.
            if (!this.agendaLlena()) {
                this.contactos.push(newContacto);
                alert("contacto agregado");
            }
        }
    }

    eliminarContacto(contacto) {
        if (this.existeContacto(contacto)) {
            let index = (contacto) => this.contactos.findIndex(contacto);
            this.contactos.splice(index, 1);
            alert("Contacto eliminado");
        }
    }

    listarContactos() {
        for (let i = 0; i < this.contactos.length; i++) {
            document.write(`<p>Nombre: ${this.contactos[i].getNombre} Teléfono: ${this.contactos[i].getTelefono}</p>`);
        }
    }
}

//creamos la agenda y definimos su tamaño en 3:
let agenda = new Agenda(3);

//creamos 4 contactos:
let agustin = new Contacto("Agustin Sampayo", 156592000);
let julieta = new Contacto("Julieta Sampayo", 156592000);
let ignacio = new Contacto("Ignacio Sampayo", 156592000);
let justina = new Contacto("Justina Sampayo", 156592000);

//cargamos los contacto a la agenda:
agenda.aniadirContacto(agustin);
agenda.aniadirContacto(julieta);
agenda.aniadirContacto(ignacio);
agenda.aniadirContacto(justina); // no deja cargar por que la agenda esta llena.OK.

//listamos los contactos:
agenda.listarContactos();
document.write(`<hr>`);
//buscamos contactos:
agenda.buscarContacto(agustin);
agenda.buscarContacto(julieta);
agenda.buscarContacto(justina); //no lo encuentra por que no se cargó por que la agenda está llena.OK.
document.write(`<hr>`);

//eliminamos contactos:
agenda.eliminarContacto(agustin); //ok

//listamos los contactos de nuevo (dedebia desaparecer agustin):
agenda.listarContactos(); //ok
document.write(`<hr>`);

agenda.huecosLibres();
