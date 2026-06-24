let aluno = {
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

//exemplo notação de Conchetes

let propriedade = "nome";

console.log(aluno[propriedade])

// também funciona diretamente
console.log(aluno["idade"]);

//Declarando novo obejeto
let produto = {
    nome: "Notebook",
    preco: 3000
}
console.log()
console.log(produto)

//Modificando o preço do Notebook
produto.preco = 2800;
console.log()
console.log(produto)

//Adicionar uma nova propriedade (Uma nova chave)

produto.estoque = 15
console.log(produto)