//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
let auto = {
    color: "Negro",
    marca: "Ford",
    modelo: "Focus",
    estado: ["Encendido", "Apagado"],

    encender: () => {
        document.write(`<p> El auto está ${auto.estado[0]}</p>`);
        //duda?: por que no me funciona con this?(o sea this.estado[0])?
    },

    apagar: () => {
        document.write(`<p> El auto está ${auto.estado[1]}</p>`);
    },
};
console.log(auto);
auto.encender();
auto.apagar();
