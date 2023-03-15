    const x = 2
    const y = 5
//Operações
function Soma() {
    var r = x + y
    console.log(`Soma: ${x} + ${y} = ${r}`)

}
function Sub(){
    var r = x - y
    console.log(`Subtração : ${x} - ${y} = ${r}`)
}
function Mult(){
    var r = x * y
    console.log(`Multiplicação: ${x} x ${y} = ${r}`)
}
function Divi(){
    var r = x / y
    console.log(`Divisão: ${x} ÷ ${y} = ${r}`)
}
function Pot(){
    var r = x ** y
    console.log(`Potencia: ${x} elevado a ${y} = ${r}`)
}

function Raiz(){
    var r = Math.sqrt(x)
    console.log(`Raiz: √${x} = ${r}`)
}

Soma()
Sub()
Mult()
Divi()
Pot()
Raiz()