// Um objeto tem propriedades e funcionalidades que se relacionam com um valor; 
//Coleção de propriedades


const aluno01 = {
    nome:'Miguel',
    nota: 9.8
}

const aluno02 = {
    nome:'Larissa',
    nota: 10
}

const aluno03 = {
    nome:'Luis',
    nota: 2
}


const media = ((aluno01.nota + aluno02.nota + aluno03.nota) / 3).toFixed(2)

console.log(`A media dos alunos é ${media}.`)