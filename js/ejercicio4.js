// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio,
//además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos() {
        document.write(`<ul>
<li>Codigo producto: ${this.codigo}</li>
<li>Nombre producto: ${this.nombre}</li>
<li>Precio producto: ${this.precio}</li>
</ul>
`);
    }
}

let bicicleta1 = new Producto("1", "SPECIALIZED CHISEL", "$1.850.000");
let bicicleta2 = new Producto("2", "SCOOT SPARK WRC", "$2.565.000");
let bicicleta3 = new Producto("3", "SWORKS EPIC", "$3.425.000");
let catalogo = [bicicleta1, bicicleta2, bicicleta3];

bicicleta1.imprimeDatos();
bicicleta2.imprimeDatos();
bicicleta3.imprimeDatos();
