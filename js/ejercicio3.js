//Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto, ancho) {
        this.altura = alto;
        this.anchura = ancho;
    }

    modificarAltura(alto) {
        if (isNaN(alto)) {
            alert("El valor indicado de altura no es un numero");
        } else {
            this.altura = alto;
        }
    }

    modificarAncho(ancho) {
        if (isNaN(ancho)) {
            alert("El valor indicado de ancho no es un numero");
        } else {
            this.anchura = ancho;
        }
    }

    propiedades() {
        document.write(`<ul>
    <li>Alto: ${this.altura}</li>
    <li>Ancho:${this.anchura}</li>
    </ul>`);
    }

    perimetro(alto, ancho) {
        if (isNaN(ancho) || isNaN(alto)) {
            alert("Los valores ingresados no son numeros");
        } else {
            document.write(
                `<p>El perimetro de su rectangulo es igual a ${
                    alto * 2 + ancho * 2
                }</p>`
            );
        }
    }

    area(alto, ancho) {
        if (isNaN(ancho) || isNaN(alto)) {
            alert("Los valores ingresados no son numeros");
        } else {
            document.write(
                `<p>El area de su rectangulo es ${alto * ancho}</p>`
            );
        }
    }
}

let anchox = parseFloat(prompt("ingrese la altura de su rectangulo"));
let altox = parseFloat(prompt("ingrese el ancho de su rectangulo"));

let rectanguloA = new Rectangulo(anchox, altox);
rectanguloA.propiedades();
rectanguloA.perimetro(altox, anchox);
rectanguloA.area(altox, anchox);

rectanguloA.modificarAltura(25);
rectanguloA.modificarAncho(2);
rectanguloA.propiedades();
