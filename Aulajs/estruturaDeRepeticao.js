// Criar um programa que calcula a média
// das turmas de alunos e
// envia mensagem do cálculo da média

const alunosDaTurmaA = [
    {
        nome:'Miguel',
        nota: 1.8
    },
    {
        nome:'Larissa',
        nota: 10
    },
    {
        nome:'Luis',
        nota: 2
    },
    {
        nome: 'Mais um aluno',
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome:'Lucas',
        nota: 10
    },
    {
        nome:'Marta',
        nota: 10
    },
    {
        nome:'Afonso',
        nota: 0
    }, 
    {
        nome: 'Novo aluno',
        nota: 5
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}
    
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media,turma) {
    if (media >5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5. Estudem mais!`)
    }
}

 enviaMensagem(media1, 'turmaA')
 enviaMensagem(media2, 'turmaB')