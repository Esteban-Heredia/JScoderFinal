let turno = prompt ("Le gustaria generar un turno? si o no");
let cierre = 0;

if (turno=="si") {

    Nturno = parseInt(prompt ("cuantos turnos le gustaria generar?"))

    do {
        let Nombre = prompt ("Ingrese el nombre del turno");
        let Apellido = prompt ("Ingrese el apellido");
        let edad = parseInt(prompt("Ingrese su edad"));
        let dia = prompt ("Ingrese el dia que le gustaria lunes  martes  miercoles  jueves  viernes ninguno");
        let horario = prompt ("En que horario le gustaria el turno: mañana tarde noche");
    
        switch (dia) {
                case "lunes":
                   mostrar ("usted selecciono el dia " + dia)
                    break;
                case "martes":
                    mostrar ("usted selecciono el dia " + dia)
                 break;
                case "miercoles":
                    mostrar ("usted selecciono el dia " + dia)
                 break;
                case "jueves":
                   mostrar ("usted selecciono el dia " + dia)
                    break;
                case "viernes":
                    mostrar ("usted selecciono el dia " + dia)
                    break;
                default:
                    alert ("No se pudo generar correctamente el dia del turno, desde ya muchas gracias!")
                    break;
        };
        
        switch (horario) {
                case "mañana":
                    mostrar ("Usted selecciono el horario " + horario)
                    break;
                case "terde":
                    mostrar ("Usted selecciono el horario " + horario)
                    break;
                case "noche":
                    mostrar ("Usted selecciono el horario " + horario)
                    break;
                default:
                    alert ("No se pudo generar correctamente el dia del turno, desde ya muchas gracias!")
                    break;
            }
        
            mostrar ("El turno se guardo para " + Nombre + " " + Apellido + ".Su edad es de " + edad);

            cierre++;

    } while (Nturno == cierre);

} else {
    alert ("gracias no se guardo ningun turno!")
};


function mostrar (variable){
    console.log(variable);
};