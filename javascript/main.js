let nombreIngresado = prompt("¿Cómo te llamas?")
alert("Hola " + nombreIngresado.toUpperCase())
let edadIngresada = Number(prompt("¿Qué edad tienes?"))

if (edadIngresada >=18) {
alert("Felicitaciones eres mayor de edad... puedes votar y tomar alcohol")
}


alert(nombreIngresado.toUpperCase() + ", el 2023 puede ser un gran año para ti, mientras esperamos que llegue te invito a jugar")

alert("Piensa en un número del 1 al 10... si ya lo hiciste, puedes dar clic a OK") 

alert("A ese número sumale 3... ¿lo tienes?")

alert("Ahora multiplica por 2 el resultado, ¿seguimos?")

alert("A ese número súmale 4")

alert("El resultado divídelo por 2")

alert("A lo que quedó réstale el número que pensaste...")

let numeroAdivinado = prompt("¿Tú número es el 5? =) ").toUpperCase

switch (numeroAdivinado) {
    case "SI":
        alert("Gracias por participar " + nombreIngresado.toUpperCase())
        ;

    case "":
        alert("No escribiste nada, por favor coloca SI/NO");

    default:
        alert("Creo que tenemos que repasar funciones matemáticas jeje " + nombreIngresado.toUpperCase()
        )
}

let compartirPersonas = Number(prompt("¿Con cuántas personas quieres compartir este truco?"))

for (let index = 0; index < compartirPersonas; index++) {
    let nombre = prompt("Nombre de la persona número " + (index + 1))
    alert(nombre.toUpperCase() + " Caera en tu adivinanza")
}

