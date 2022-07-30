// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

class Libro {
    constructor(isbn, titulo, autor, paginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    // Crear sus respectivos métodos get y set correspondientes para cada propiedad.
    //los metodos set te permiten modificar el valor de la propiedad
    set setIsbn(isbn) {
        this.isbn = isbn;
    }
    set setTitulo(titulo) {
        this.titulo = titulo;
    }
    set setAutor(autor) {
        this.autor = autor;
    }
    set setPaginas(paginas) {
        this.paginas = paginas;
    }
    //los metodos get te permiten retornar el valor de la propiedad.
    get getIsbn() {
        return this.isbn;
    }
    get getTitulo() {
        return this.titulo;
    }
    get getAutor() {
        return this.autor;
    }
    get getPaginas() {
        return this.paginas;
    }

    //Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
    // “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

    mostrarLibro() {
        document.write(`<p>“El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.paginas}”</p>`);
    }
}

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
let libroUno = new Libro("978-849-187-505-5", "La Teoría del Caos: Las Leyes de lo Impredecible", "Alberto P&Eacute;Rez Izquierdo", 1276);
let libroDos = new Libro("978-987-718-609-3", "Las voces del cuerpo", "Alejandra Brener", 256);

libroUno.mostrarLibro();
libroDos.mostrarLibro();

// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

if (libroUno.getPaginas > libroDos.getPaginas) {
    document.write('<p>El libro "La Teoría del Caos: Las Leyes de lo Impredecible" tiene mas páginas</p>');
} else if (libroUno.getPaginas < libroDos.getPaginas) {
    document.write('<p>El libro "Las voces del cuerpo" tiene mas páginas</p>');
} else {
    document.write("<p>Ambos libros tienen idéntica cantidad de páginas</p>");
}

// tambien sale asi:
if (libroUno.paginas > libroDos.paginas) {
    document.write('<p>El libro "La Teoría del Caos: Las Leyes de lo Impredecible" tiene mas páginas</p>');
} else if (libroUno.paginas < libroDos.paginas) {
    document.write('<p>El libro "Las voces del cuerpo" tiene mas páginas</p>');
} else {
    document.write("<p>Ambos libros tienen idéntica cantidad de páginas</p>");
}
