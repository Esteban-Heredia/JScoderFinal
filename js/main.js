// Datos base generales

let turnoCompleto = document.getElementById("turno-completo");
let turnoGenerado = document.getElementById("turnoGenerado");
let tablaContainer = document.getElementById('tabla');


// Donde se alojaran todos los turnos creados

const turnosGral = [];


// boton para iniciar la funcion capturar

let btn = document.getElementById("boton")
btn.addEventListener("click", capturar);


// Constructor de obj de turno

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
    let diaObj = document.getElementById("edad").value;
    let horaObj = document.getElementById("hora").value;
    
    // copia de los datos capturados
    
    turnoObj = new Turno(nombreObj,apellidoObj,edadObj,diaObj,horaObj);
    console.log(turnoObj)
    
    
    turnosGral.push(turnoObj)
    console.log(turnosGral)
    
    const turnosJson = JSON.stringify(turnosGral)
    localStorage.setItem("algo", turnosJson)
    
    cargaTurno ();
};


// funcion que muestra el turno generado

function cargaTurno(){

  turnoGenerado.innerHTML += `<div><div><p> Gracias el turno se genero correctamente ${turnoObj.nombre} !!!</p></div><br><div><button id="boton-eliminar" type="reset" onclick="capturar();">Agendar Turno!</button></div>`
   
};


// filtro de busqueda

const input = document.getElementById("buscar")
let mostrarBusqueda = document.getElementById("mostrarBusqueda")

input.addEventListener("input", (event) => {
  const valor = event.target.value
  const resultado = turnosGral.filter(p => p.nombre.includes(valor))
  if(resultado.length > 0){
    mostrarTurnos(resultado)
  }
  console.log(resultado)
});

// Función que muestra el turno buscado

function mostrarTurnos(resultados) {
  // Obtenemos el elemento donde insertaremos la tabla

  // Creamos una variable para almacenar la tabla
  let tabla = '';

  // Si hay resultados, creamos la tabla
  if (resultados.length > 0) {
    resultados.forEach(p => {
      tabla += `
        <tr>
          <td>${p.nombre}</td>
          <td>${p.apellido}</td>
          <td>${p.edad}</td>
          <td>${p.dia}</td>
          <td>${p.hora}</td>
        </tr>
      `;
    });
  }

    // Insertamos la tabla en el elemento container
    tablaContainer.innerHTML = tabla;
  }