//Crie um programa com um objeto para armazenar dados de um programador, 
//como `nome`, `idade` e `tecnologias` que trabalha.

   
const tecnologias =  [
        { nome: 'C++', 
          especialidade:'Desktop'
        },
        { nome: 'Python', 
          especialidade: 'Data Science'
        },
        { nome: 'JavaScript', 
          especialidade: 'Web/Mobile' 
        }
    ]


const usuario = [
    {   nome:'César',
        idade: 30,
        tecnologia: tecnologias[0]
    },
    {   nome:'Paulo',
        idade: 38,
        tecnologia: tecnologias[1]
    },
    {   nome:'Luana',
        idade: 34,
        tecnologia: tecnologias[2]
    }
]

console.log(`${usuario[0].nome} usa ${usuario[0].tecnologia.nome}, com especialidade em ${usuario[0].tecnologia.especialidade}`)

console.log(`${usuario[1].nome} usa ${usuario[1].tecnologia.nome}, com especialidade em ${usuario[1].tecnologia.especialidade}`)

console.log(`${usuario[2].nome} usa ${usuario[2].tecnologia.nome}, com especialidade em ${usuario[2].tecnologia.especialidade}`)