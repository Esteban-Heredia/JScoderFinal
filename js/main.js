// //Datos base

// const nombre = document.getElementById("nombre").value;
// const apellido = document.getElementById("apellido");
// const edad = document.getElementById("edad");
// const dia = document.getElementById("dia");
// const hora = document.getElementById("hora");

let turnoCompleto = document.getElementById("turno-completo");
let turnoGenerado = document.getElementById("turnoGenerado");


//captura de datos
// nombre.addEventListener("input", ()=>{
// })

// apellido.addEventListener("input",()=> {
// })
    
// edad.addEventListener("input", () => {
// })
        
// dia.addEventListener("input", () => {
// })
            
// hora.addEventListener("input", () => {
// })

    
//     //Boton para generar 
    
// const turnoInfo = turnoCompleto.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     turnoGenerado.innerHTML = `<div><p> Gracias el turno se genero correctamente ${nombre.value} !!!</p></div>`
// });

// const turnoInfo = turnoCompleto.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     turnoGenerado.innerHTML = `<div><p> Gracias el turno se genero correctamente ${nombre.value} !!!</p></div>`
// });

function capturar(){

    // funcion para armar el obj

    function Turno(nombre,apellido,edad,dia,hora){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dia = dia;
        this.hora = hora;
    }

    
    // Datos de los input
    
    let nombreObj = document.getElementById("nombre").value;
    let apellidoObj = document.getElementById("apellido").value;
    let edadObj = document.getElementById("edad").value;

    // NOSE COMO HACER PARA QUE ME TOME EL VALOR DEL DIA ME APARECE SOLO EL DIA NO EL MES NI AÑO.. (SE QUE DEBE SER UNA TONTERA PERO ESTOY HACE DIAS CON ESO JAJAJ)
    
    let diaObj = document.getElementById("edad").value;
    let horaObj = document.getElementById("hora").value;
    
    // copia de los datos capturados
    
    turnoObj = new Turno(nombreObj,apellidoObj,edadObj,diaObj,horaObj);
    console.log(turnoObj)
    
    cargaTurno ();

}

// Donde se alojaran todos los turnos creados

const turnosGral = [];

 function cargaTurno(){
   turnosGral.push(turnoObj);
   console.log(turnosGral);

   turnoGenerado.innerHTML += `<div><p> Gracias el turno se genero correctamente ${turnoObj.nombre} !!!</p></div>`
   
   
   const turnosJson = JSON.stringify(turnosGral)
   localStorage.setItem("turnosGral", turnosJson)
 }



// function CargaDeDatos (nombre,apellido,edad,dia,hora){

//     let nombre = document.getElementById("nombre").value;

//     this.nombre = nombre.value;
//     this.apellido = apellido.value;
//     this.edad = edad.value;
//     this.dia = dia.value;
//     this.hora = hora.value;
    
//     const personaturno = new CargaDeDatos ( nombre , apellido, edad, dia, hora);
//     turnos.push(personaturno);
// }



//     let nombreDatos = document.getElementById("nombre").value;

//     let turno = CargaDeDatos(nombreDatos);

//     console.log(turno)
// }



// carga los datos al array


// console.log(CargaDeDatos)




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