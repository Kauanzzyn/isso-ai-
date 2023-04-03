//formas de escrever funções

//declaração de funções
function imprime(texto){
    console.log(texto)
}

imprime("programação")
console.log('---------------------')
imprime("javascript")
console.log('---------------------')


// declaração de função com passagem de parámetros
function soma(a,b){
    return a+b
}


console.log(soma(3,4))
console.log(soma(7,8,5))
console.log('---------------------')


function multiplica(num1=3, num2=5){
    return num1 * num2
}

console.log(multiplica(5,5))
console.log('---------------------')
console.log(multiplica())
console.log('---------------------')
console.log(multiplica(2))
console.log('---------------------')


// função anônima e arrow funtion com passagem de parámetros
const resultado = (num1, num2) => {  //  o uso da crase é chamado de template strings
    return num1 / num2
}

console.log(resultado(8,4))
console.log('---------------------')

const texto2 =  nome => `O nome é $[{nome}`

console.log(texto("Kauan"))
