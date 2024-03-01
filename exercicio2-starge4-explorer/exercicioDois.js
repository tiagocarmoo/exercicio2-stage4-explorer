const students = [
    {
        name: 'Rafaela',
        noteOne: 9,
        noteTwo: 10,
    },
    {
        name: 'Larissa',
        noteOne: 8,
        noteTwo: 5,
    },
    {
        name: 'Roberto',
        noteOne: 5,
        noteTwo: 9,
    },
    {
        name: 'Thomas',
        noteOne: 3,
        noteTwo: 5,
    },
    {
        name: 'Camilly',
        noteOne: 9,
        noteTwo: 9,
    },
    {
        name: 'Tiago',
        noteOne: 7,
        noteTwo: 9,
    },
    {
        name: 'Lucas',
        noteOne: 5,
        noteTwo: 3,
    },
    {
        name: 'Giovanna',
        noteOne: 2,
        noteTwo: 6,
    },
]

function average(student) {
    const average = (student.noteOne + student.noteTwo) / 2
    return average
}

for (index = 0; index < students.length; index++) {

    if (average(students[index]) >= 7) {
        alert(`A média do(a) aluno(a) ${students[index].name} foi: ${average(students[index]).toFixed(1)}
        Parabéns! você passou no concurso.`);
    } else {
        alert(`A média do(a) aluno(a) ${students[index].name} foi: ${average(students[index]).toFixed(1)}
        Você fracassou! MELHORE.`);
    }
}