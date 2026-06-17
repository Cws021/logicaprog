let n1, n2;
n1 = 10
n2 = 5
console.log(`Digite o primeiro número: ${n1}`)
console.log(`Digite o segundo número: ${n2}`)
console.log("Escolha uma operação: 1(Média Aritmética), 2(Diferença do maior número pelo menor), 3(Produto entre os números), 4(Divisão do primeiro número pelo segundo)")
code = 1
switch (code) {
    case 1:
        console.log("Você selecionou: 1 - Média Aritmética")
        media = (n1 + n2) / 2
        console.log(`A média aritmética entre ${n1} e ${n2} é de ${media}`)
        break
    case 2:
        console.log("Você selecionou: 2 - Diferença do maior número pelo menor")
        if (n1 > n2) {
            diferenca = n1 - n2
            console.log(`A diferença entre ${n1} e ${n2} é de ${diferenca}`)
        } else {
            diferenca = n2 - n1
            console.log(`A diferença entre ${n2} e ${n1} é de ${diferenca}`)
        }
        break
    case 3:
        console.log("Você selecionou: 3 - Produto entre os números")
        produto = n1 * n2
        console.log(`O produto entre ${n1} e ${n2} é de ${produto}`)
        break
}
