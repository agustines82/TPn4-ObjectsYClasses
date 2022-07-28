// Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

let cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar(monto) {
        if (isNaN(monto)) {
            alert("El valor ingresado para el deposito no es un numero");
        } else {
            this.saldo += monto;
        }
    },

    extraer(monto) {
        if (isNaN(monto)) {
            alert("El valor ingresado para la extraccion no es un numero");
        } else if (this.saldo >= monto) {
            this.saldo -= monto;
        } else {
            alert("saldo insuficiente");
        }
    },

    informar() {
        document.write(
            `<p>Cuenta del titular: ${this.titular}  Saldo ${this.saldo} </p>`
        );
    },
};

let montoIngresar = parseFloat(
    prompt("Ingrese el monto a depositar en su cuenta")
);
cuenta.ingresar(montoIngresar);
cuenta.informar();

let montoExtraer = parseFloat(
    prompt("Ingrese el monto a extraer de su cuenta")
);
cuenta.extraer(montoExtraer);
cuenta.informar();
