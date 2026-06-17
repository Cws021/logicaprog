let peso;
peso = 80
planeta = 1
console.log(`Digite o seu peso: ${peso} kg`)
console.log("Escolha o número do planeta: 1(Mercúrio), 2(Vênus), 3(Marte), 4(Júpiter), 5(Saturno), 6(Urano)")
switch (planeta) {
    case 1:
        console.log("Você selecionou: 1 - Mercúrio")
        pesonoplaneta = peso * 0.37
        console.log(`Seu peso no planeta Mercúrio é de ${pesonoplaneta} kg`)
        break
    case 2:
        console.log("Você selecionou: 2 - Vênus")
        pesonoplaneta = peso * 0.88
        console.log(`Seu peso no planeta Vênus é de ${pesonoplaneta} kg`)
        break
    case 3:
        console.log("Você selecionou: 3 - Marte")
        pesonoplaneta = peso * 0.38
        console.log(`Seu peso no planeta Marte é de ${pesonoplaneta} kg`)
        break
    case 4:
        console.log("Você selecionou: 4 - Júpiter")
        pesonoplaneta = peso * 2.64
        console.log(`Seu peso no planeta Júpiter é de ${pesonoplaneta} kg`)
        break
    case 5:
        console.log("Você selecionou: 5 - Saturno")
        pesonoplaneta = peso * 1.15
        console.log(`Seu peso no planeta Saturno é de ${pesonoplaneta} kg`)
        break
    case 6:
        console.log("Você selecionou: 6 - Urano")
        pesonoplaneta = peso * 1.17
        console.log(`Seu peso no planeta Urano é de ${pesonoplaneta} kg`)
        break
    default:
        console.log("Planeta inválido")
}