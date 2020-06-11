// Criar um programa que calcula a média
// das turmas de alunos e
// envia mensagem do cálculo da média

const alunosDaTurmaA = [
    {
        nome:'Miguel',
        nota: 1.8,
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


function enviarMensagem(media,turma) {
    if (media >5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5. Estudem mais!`)
    }
}

 enviarMensagem(media1, 'turmaA')
 enviarMensagem(media2, 'turmaB')


// Marcar aluno como reprovado se a nota
// for menor que 5 
// e também, enviar mensagem

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
        if (aluno.nota < 5) {
            aluno.reprovado = true;
        }

    //console.table(alunos)       // método para mostrar dados em forma de tabela
}

function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)



