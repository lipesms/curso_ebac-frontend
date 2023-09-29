const alunos = [
    {
        nome: "felipe",
        nota: 9
    },
    {
        nome: "gabriela",
        nota: 10
    },
    {
        nome: "serjao dos foguetes",
        nota: 6
    },
    {
        nome: "rikelme",
        nota: 7
    },
    {
        nome: "shaolim matador de porco",
        nota: 5
    },
    {
        nome: "flavin do pneu",
        nota: 3
    }
]

function alunosAprovados(baseAlunos){
    return baseAlunos.filter((aluno) =>{
        return aluno.nota >= 6
    })
}

console.log(alunosAprovados(alunos))