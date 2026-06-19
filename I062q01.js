let menu;
console.log("Menu de opcões");
console.log("Codigo opcões");
console.log("1 Incluir");
console.log("2 Alterar")
console.log(" Excluir");
console.log("4 Pesquisar");
console.log("5 Sair");
console.log("Informe o código referente à ação desejada");
cod = 6;
console.log(`Código inserido: ${cod}`)

switch ( cod ) {
    case 1:
        console.log("Você selecionou : 1 - Incluir")
        break
    case 2:
        console.log("Você selecionou : 2 - ALTERAR")
        break
    case 3:
        console.log("Você selecionou : 3 - EXCLUIR")
        break
    case 4:
        console.log("Você selecionou : 4 - PESQUISAR")
        break
    case 5:
        console.log("Você selecionou : 5 - SAIR")
        break
    default: 
    console.log("ERROR: Código errado.")
        break
}