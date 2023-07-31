/* condicional */

let numero = parseInt(prompt( "Ingrese su edad"));

if (numero <18 ){
    alert ("usted es menor de edad, no puede ingresar");        
} else {
    alert ("usted es mayor de edad, puede ingresar");
}


/* For */

for (let entrada = 1 ; entrada <=5 ; entrada++){
    let nombre = prompt ("ingrese su nombre");

    alert (`Entrada ${entrada} Nombre : ${nombre}`);
}


/* while */

let nombre = prompt ("ingrese su nombre");

while ( nombre != "ESC") {
    switch (nombre) {
        case "Efrain":
            alert ("Hola Efrain");
            break;

        case "Jesus":
            alert ("Hola Jesus");
            break;
        
        case "Angelica":
            alert ("Hola Angelica");
            break;

        case "Saimon":
            alert ("Hola Saimon");
            break;

        default:
            alert ("Nombre no reconocido");
            break;
    }
    nombre = prompt ("ingrese su nombre");
}