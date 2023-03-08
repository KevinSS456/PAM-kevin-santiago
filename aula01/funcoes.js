let num1 = 2
const num2 = 3

function soma(){
   return num1 + num2
}

console.log(soma())

// num1 = 6
// num2 = 9 // n funciona pois é constante

const funcaoSoma = (a,b) => {
    return a+b
}

console.log(funcaoSoma(1,2))