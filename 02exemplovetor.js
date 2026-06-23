//  Assunto Vetores(Arrays)

let alunos = ["Ana", "Bruno", "Carlos", "Diana", "Marcos"]

let notas = [8.5, 3, 8, 10, 7]


// console.log(alunos) //Exibe os dados do vetor

// console.log(alunos[3]) //Diana

// console.log(alunos[0]) //Ana

alunos[2] = "Antonio"
console.log(alunos[2])
console.log(alunos)

// //for para percorrer cada índice do vetor
// for(cont = 0; cont < alunos.length; cont++){
//     console.log(`Aluno(a) ${cont+1}: ${alunos[cont]}`)
// }

// console.log(notas)
// console.log(notas[2])

// //for para percorrer cada índice 
// for(let cont = 0; cont < alunos.length; cont++){
//     console.log(`Nome: ${alunos[cont]}, nota ${notas[cont]}`)
// }

// console.log(alunos.length)

//exemplo com for of 

for (let aluno of alunos) {
    console.log(`Nome: ${aluno}`);

}
//aluno recebe o dado do vetor, índice recebe o índice do vetor
alunos.forEach(function(aluno, indice)
{
    console.log(`índice: ${indice}, aluno: ${aluno}`);
});

// métodos push, unshiift, pop, shift
// push - adiciona ao final do vetor
alunos.push("Raimundo")
console.log(alunos)

// pop - remove do final do vetor
alunos.pop()
console.log(alunos)

// unshift - adiciona ao ínicio do vetor

alunos.unshift("Raimundo")
console.log(alunos)

// shift - remove do ínicio do vetor

alunos.shift("Raimundo")
console.log(alunos)

