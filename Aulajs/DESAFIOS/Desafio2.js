// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa

// const usuario = {
//     nome: 'Ulisses',
//     empresa: {
//         nome: 'Rocketseat',
//         cor: 'Roxo',
//         Foco: 'Programação',
//         endereco: {
//             Rua: 'Rua Guilherme Gemballa',
//             numero: 260
//         }
//     }
// }
//console.log(`O nome do usuário é ${usuario.nome}`)
// console.log(`${usuario.nome} trabalha na ${empresa[1]}`)


const usuario = {
        nome: 'Ulisses',
        empresa:{
            nome: 'Rocketseat',
            cor: 'Roxo',
            foco: 'Programação',
            endereco: {
                rua: 'Guilherme Gemballa',
                numero: 260
            }
        }
    }


console.log(`O nome do usuário é ${usuario.nome}`)

console.log(`${usuario.nome} trabalha na ${usuario.empresa.nome}`)

console.log(`A empresa ${usuario.empresa.nome} está localizada na rua ${usuario.empresa.endereco.rua}, n. ${usuario.empresa.endereco.numero}`)