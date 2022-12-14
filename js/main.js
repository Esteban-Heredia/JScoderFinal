let turno = prompt ("Le gustaria generar un turno? si o no");
let cierre = 0;
let nTurno;
let vueltas = 0;

const nuevoTurnoDato = [];
const diaHorario = [];


if (turno=="si") {

    nTurno = parseInt(prompt ("cuantos turnos le gustaria generar?"))

    do {


        // Pusheo de dato al array 

        nuevoTurnoDato.push({nombre: prompt("Ingrese el nombre del turno")});
        nuevoTurnoDato.push({apellido: prompt("Ingrese el apellido")});
        nuevoTurnoDato.push({edad: prompt("ingresa su edad")});

        // Pusheo del dia y la hora del turno

        diaHorario.push({dia: prompt("Ingrese el dia que le gustaria lunes  martes  miercoles  jueves  viernes ninguno")});
        diaHorario.push({horario: prompt("En que horario le gustaria el turno: mañana tarde noche")});
        
        console.log(nuevoTurnoDato);
        console.log(diaHorario);

        const nomb = nuevoTurnoDato[0];
        const apell = nuevoTurnoDato[1];
        const anio = nuevoTurnoDato[2];

        const dia = diaHorario[0];
        const horario = diaHorario[1];


        // Mensaje para mostrar al ""usuario""
        
            mostrar ("El turno se guardo para " + nomb.nombre + " " + "Con apellido " + apell.apellido + " Y su edad es " + anio.edad + ". El turno quedo registrado para el dia " + dia.dia + " en el horario de " + horario.hora + " Muchas gracias!");


            cierre++;

            
            
        } while (nTurno != cierre);
        
} else {
    alert ("gracias no se guardo ningun turno!")
};

// funcion imple para no poner cada dos seg console.log
function mostrar (variable){
    console.log(variable);
};


let pregunta = prompt("Te gustaria saber si se guardo el turno? si / no");


if (pregunta = "si" ) {
    
    let resultado = nuevoTurnoDato.filter((elemento) => elemento.nombre);
    

    //  Deja ver a nombre de quien se guardo el turno 
    mostrar (resultado[0])
}

