
/*===========================
console.log( 5 > 4)    //true
console.log( 5 < 4)    //false
console.log( 5 >= 4)   //true
console.log( 4 <= 4)   //true 
============================*/

// DESAFIO 1

const idade = 18
//Verificar se a pessoa é maior ou igual a 18 anos 
//Se sim, deixar entrar.Se não, bloquear a entrada
//Se a pessoa tiver 17 anos, avisar para voltar quando fizer 18 anos

if (!(idade >= 18) || idade === 17) {           // uma das setenças tem que ser verdadeira
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}


/*========================================
console.log(5 == 5 && 6 == 6)   //true
console.log(5 == 5 && 6 != 6)   //false

console.log(5 != 5 || 6 == 6)   //true
console.log(5 == 5 || 6 != 6)   //true

console.log(!(5 > 6))           //true
console.log(!(5 < 6))           //false
=========================================*/
