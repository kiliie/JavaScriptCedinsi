/**
 * Determinar la calificación de un estudiante 
 * según la siguiente escala de ponderación: 
•0 y 2.9 la ponderación es Insuficiente.
•3.0 y 3.5 ponderación es Regular.
•3.6 y 4.0 ponderación es Bien.
•4.1 y 4.5 Muy Bien.
•4.6 y 5.0 es Excelente
 * 
 */
let calificacion = 3.5;
let mensaje = "";
switch (true){
    case calificacion >= 0 && calificacion <= 2.9:
        mensaje = `Insuficiente ${calificacion}`; //Template String
        break;
    case calificacion >= 3 && calificacion <= 3.5:
        mensaje = `Regular ${calificacion}`;
        break;
    case calificacion > 3.5 && calificacion <= 4.0:
        mensaje = `Bien ${calificacion}`;
        break;
    case calificacion >= 4.1 && calificacion <= 4.5:
        mensaje = `Muy Bien ${calificacion}`;
        break;
    case calificacion > 4.5 && calificacion <= 5.0:
        mensaje = `Excelente ${calificacion}`;
        break;
    default:
        mensaje = `Fuera de rango la calificación ${calificacion}`;        
}
    console.log(mensaje);