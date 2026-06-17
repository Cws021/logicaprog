let menu;
console.log("Menu de opcões")
console.log("-------------------")
cod = 2
console.log("Digite seu sexo: (1) Masculino, (2) Feminino")
console.log(`Código inserido: ${cod}`)

switch ( cod ) { 
    case 1:
        console.log(`Você selecionou: 1 - Masculino`)
        console.log("Banheiro masculino á direita")
        break
    case 2: 
        console.log(`Você selecionou: 2 -  Feminino`)
        console.log("Banheiro feminino á esquerda")
}