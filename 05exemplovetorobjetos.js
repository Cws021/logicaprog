// Declarando um vetor
let alunos = [
    {nome: "Ana", idade: 18, ativo: true},
    {nome: "Carlos", idade: 22, ativo: false},
    {nome: "Maria", idade: 20, ativo: true}
];
console.log(alunos)

///Acessando pelo índice

console.log(`Nome do primeiro aluno: ${alunos[0].nome}`)

for (let cont = 0; cont < alunos.length; cont++){
    console.log(`Nome: ${alunos[cont].nome}`)
    console.log(`Idade: ${alunos[cont].idade}`)
    if(alunos[cont].ativo){
        console.log(`Situação: Está matriculado \n`)
    }else{
        console.log(`Situação: Não está matriculado \n`)
    }
}
console.log("------------------")
for (let aluno of alunos) {
    console.log(`Nome: ${aluno.nome}`)
    console.log(`idade: ${aluno.idade}`)
    if(aluno.ativo){
        console.log(`Situação: Ativo \n`)

    }else{
        console.log(`Situação: Inativo \n`)
    }
console.log("------------------")
}
