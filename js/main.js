//Datos base

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad= document.getElementById("edad");
const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const turnoCompleto = document.getElementById("turno-completo");
const turnoGenerado = document.getElementById("turnoGenerado");


//captura de datos
nombre.addEventListener("input", ()=>{
    CargaDeDatos
})

apellido.addEventListener("input",()=> {
    CargaDeDatos
})

edad.addEventListener("input", () => {
    CargaDeDatos
})

dia.addEventListener("input", () => {
    CargaDeDatos
})

hora.addEventListener("input", () => {
    CargaDeDatos
})

turnoCompleto.addEventListener("", () => {
    CargaDeDatos
})

//Boton para generar 

turnoGenerado.addEventListener("submit", (e)=>{
    e.preventDefault();
    turnoCompleto.innerHTML = `<div><p> El turno esta a nombre de ${nombre}</p></div>`
});



const turnos = [];

console.log(turnos)

// carga los datos al array

function CargaDeDatos (nombre,apellido,edad,dia,hora){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dia = dia;
    this.hora = hora;
}


const personaturno = new CargaDeDatos ( nombre , apellido, edad, dia, hora);

turnos.push(personaturno);

// let cantidadTurnos;
// let cierre = 0 ;


// let preguntaBase;

// const botonsi = document.getElementById("btnSI");
// const botonno = document.getElementById("btnNO");

// botonsi.onclick = ()=>{
//     preguntaBase != true;
// }

// botonno.onclick = ()=>{
//     preguntaBase = false;
// } 


// if (preguntaBase == botonsi) {

//     console.log("bien ahi!!")
    
// } else if (preguntaBase == botonno) {

//     console.log("a tu mama!")

// }





//  if (preguntaBase === true) {

//     console.log("entro el turno")
//     cantidadTurnos = prompt("¿Cuantos turnos te gustaria generar?");

//     do {
        

//         let nombre = prompt ("Ingrese su nombre");
//         let apellido = prompt ("Ingrese su apellido");
//         let edad = prompt ("Ingrese su edad");
//         let dia = prompt ("¿Que dia te gustaria el turno?");
//         let hora = prompt ("¿Que horario te gustaria?");
    
        


//         cierre++;
        
//     } while (cantidadTurnos != cierre);


//   } else (preguntaBase === false){
//     console.log("a tu mama")
//     alert("NO SE PUDO GENERAR EL TURNO CORRECTAMENTE!")    
//   }

// console.log(turnos);

// let pregunta = prompt("Te gustaria saber si se guardo el turno? si / no");
// let buscado = prompt ("a nombre de quien se guardo el turno?");

// if (pregunta == "si" ) {
    
//     let resultado = turnos.filter((elemento) => elemento.nombre === buscado);   

//     //Deja ver a nombre de quien se guardo el turno 

//    mostrar (resultado);
// }


// //funcion imple para no poner cada dos seg console.log

// function mostrar (variable){
//     console.log(variable);
// };