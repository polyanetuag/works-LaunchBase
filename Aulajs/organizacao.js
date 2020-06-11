const classA = [
    {
        name: 'Miguel',
        grade: 4,
    },
    {
        name: 'Larissa',
        grade: 10
    },
    {
        name: 'Luis',
        grade: 5
    },
    {
        name: 'Mais um student',
        grade: 10
    }
]

const classB = [
    {
        name: 'Lucas',
        grade: 6
    },
    {
        name: 'Marta',
        grade: 0
    },
    {
        name: 'Afonso',
        grade: 5
    },
    {
        name: 'Novo student',
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congratulations!`)
    } else {
        console.log(`${turma} average: ${average}. Study more!`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(classA)
studentsflunkeds(classB)



