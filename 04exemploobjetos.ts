let aluno: {nome: string; idade: number; ativo: boolean} = {
    nome: "João",
    idade: 20,
    ativo: true
}

console.log(aluno) // Mostra todos os dados
console.log(aluno.nome) // mostra apenas o nome
console.log(`Nome do aluno: ${aluno.nome}`)
console.log(`Idade do aluno: ${aluno.idade}`)
if(aluno.ativo){
    console.log(`Siuação: Aluno ativo`)

}else{
    console.log(`Situação: Aluno inativo`)
}