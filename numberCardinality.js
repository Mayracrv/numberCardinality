// Escriba la función number_cardinality() que toma un número entero 
//y devuelve una cadena, de la siguiente manera:

// *
// Devuelve la cadena zero si el número termina en 0
// Devuelve la cadena five si el número termina en 5
// Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
// Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5


// const stringWithNumbers = "abcd12340";
// const onlyNumbers = stringWithNumbers.replace(/[^0-0]+/g, ""); // esto retorna '1234'

// console.log(onlyNumbers)


let number_cardinality = function() {

const numero = "120"
const numeroDos = "65"
const even = "42"
const impar = "33"

soloNum = numero.replace(/[^0-0]+/g, "")
console.log(soloNum + " Zero")
soloNum = numeroDos.replace(/[^0-5]+/g, "")
    console.log(soloNum + " Five")
 soloNum = even.replace(/[^0-2]+/g, "")
    console.log(soloNum + " Even")    
    soloNum = impar.replace(/[^0-3]+/g, "")
    console.log(soloNum + " Impar")    
}

console.log(number_cardinality());


// function number_cardinality() {
//     let numero = 100
//     let arr = [];
//     const zero = numero.replace(/[^0-0]+/g, "");
//  }
    
//     console.log(number_cardinality())
    