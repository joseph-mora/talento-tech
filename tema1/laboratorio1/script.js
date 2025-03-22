/*1. Parte 1: Declaración de Variables y Tipos de Datos (30 minutos) 
- Declara tres variables: `nombre` (string), `edad` (number) y `esEstudiante` (booleano). 
- Muestra los valores de estas variables en la consola. 
- Cambia los valores de las variables y observa los resulta*/

let nombre= "joseph"
let edad= 35
let esEstudiante= true

console.log("me llamo ", nombre ,"tengo "+ edad + " anos" + " y soy estudiante? "+ esEstudiante)

edad=String(edad)
nombre=Number(nombre)
esEstudiante=Number(esEstudiante)

console.log(typeof(edad))
console.log(typeof(nombre))
console.log(typeof(esEstudiante))

/* 2. Parte 2: 
Operaciones Matemáticas y Comparación (30 minutos) 
- Declara dos variables numéricas, `a` y `b`. 
- Realiza las operaciones de suma, resta, multiplicación y división entre `a` y `b`. 
- Compara los valores de `a` y `b` utilizando los operadores `==`, `!=`, `>`, `<`, `>=`, `<=`
y muestra los resultados en la consola. */

let a = 5
let b = 5

suma = a+b
resta = a-b
multiplicacion = a*b
division = a/b
igual = a==b
noIgual= a!=b
mayor= a>b
menor= a<b
mayorIgual= a>=b
menorIgual= a<=b

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

console.log("A es igual a b " + igual)
console.log("A no es igual a b " + noIgual)
console.log("A es mayor a b " + mayor)
console.log("A es menor a b " + menor)
console.log("A es mayor igual a b " + mayorIgual)
console.log("A es menor igual a b " + menorIgual)

/* Parte 3: 
Uso de Operadores Lógicos y Concatenación de Strings (30 minutos) 
- Declara dos variables booleanas: `esMayorDeEdad` y `tieneLicencia`. 
- Usa operadores lógicos (`&&`, `||`) para determinar si una persona puede conducir. 
- Crea un mensaje de bienvenida utilizando concatenación de strings y template literals. 
 */

let esMayorDeEdad = true
let tieneLicencia = false

if (esMayorDeEdad && tieneLicencia){
    console.log("Puede conducir")
} else {
    console.log("No puede conducir")
}

if (esMayorDeEdad || tieneLicencia){
    console.log("Es mayor de edad")
}

/* 4. Parte 4: 
Desafío Final (30 minutos) Opcional 
- Escribe un programa que solicite al usuario ingresar su nombre, edad y si es estudiante 
(sí/no). 
- Basado en la entrada del usuario, muestra un mensaje personalizado en la consola que 
incluya: 
- Si el usuario es mayor de edad. - Si tiene derecho a descuento por ser estudiante.  */

let usuario=prompt("Cual es tu nombre: ")
let aNo=prompt("Cual es tu edad: ")
let estudiante=prompt("Eres estudiante: (si) (no) ")

if (aNo >= 18 && estudiante==="si"){
    alert("SeNor " + usuario + " Usted es mayor de edad y tiene descuento")
}if(aNo<18 && estudiante){
    alert("seNor "+usuario+" usted es menor de edad y tiene descuento")
}if(aNo>=18 && estudiante==="no"){
    alert("seNor "+usuario+" es mayor de edad")
}else{
    alert("SeNor "+usuario+" Es menor de edad y no tiene descuento")
}