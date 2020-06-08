// Calcular o IMC e nível de obesidade de uma pessoa

const nome = 'Julia'
const peso = 60
const altura = 1.70

const imc = (peso / (altura * altura)).toFixed(2)

console.log(`O imc de ${nome} é igual a ${imc}.`)


if(imc < 30 ) {
    console.log(`${nome}, você está com o peso normal.`)
    
}else{
    console.log(`${nome}, você está acima do peso.`)
}