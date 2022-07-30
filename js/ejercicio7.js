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

class Agenda {
    constructor(nombre, telefono, tamanio) {
        super(nombre, telefono);
        this.tamanio = tamanio;
    }

    aniadirContacto() {
        // antes de agregar el contacto hay que fijarse que ya no exista previamente en la agenda para no duplicarlo.
    }

    existeContacto() {
        //indica si el contacto pasado existe o no.
    }

    listarContactos() {
        //Lista toda la agenda
    }

    buscarContacto() {
        //busca un contacto por su nombre y muestra su teléfono.
    }

    eliminarContacto() {
        //elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    }

    agendaLlena() {
        //indica si la agenda está llena.
    }

    huecosLibres() {
        //indica cuántos contactos más podemos ingresar.
    }
}
class Contacto extends Agenda {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}
