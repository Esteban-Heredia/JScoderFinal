let Nombre = "";
let Apellido = "";
let edad = 0;


let horario = "";
let dia= "";

Nombre = prompt ("Ingrese el nombre del turno");
Apellido = prompt ("Ingrese el apellido");
edad = parseInt(prompt("Ingrese su edad"));

function mostrar (variable){
    console.log(variable)
};


mostrar ("El turno se guardo para " + Nombre + " " + Apellido + ".Su edad es de " + edad);