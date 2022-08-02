// la idea es hacer el ejercicio 2 agregando un switch . segun lo planteado en clase.
class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(monto) {
        this.saldo += monto;
        document.write(`<p>Depositó $${monto}</p>`);
    }

    extraer(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            document.write(`<p>Extrajo $${monto}</p>`);
        } else {
            document.write("<br>Fondos insuficientes");
        }
    }

    informar() {
        document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldo}</p>`);
    }
}

let nuevoUsuario = new Cuenta(prompt("Ingrese su nuevo Usurario"));

do {
    let menu = parseInt(
        prompt(
            `Seleccione una opcion: 
        1- Ingrese dinero en su cuenta
        2- Retire dinero de su cuenta
        3- Consulte su saldo`
        )
    );

    switch (menu) {
        case 1:
            let montoIngresado = parseInt(prompt("Ingrese el monto a depositar"));
            nuevoUsuario.ingresar(montoIngresado);
            break;
        case 2:
            let montoExtraer = parseInt(prompt("Ingrese el monto a extraer"));
            nuevoUsuario.extraer(montoExtraer);
            break;
        case 3:
            nuevoUsuario.informar();
            break;

        default:
            document.write("Ingreso una opcion invalida");
    }
} while (confirm("Desea realizar otra operación?"));
