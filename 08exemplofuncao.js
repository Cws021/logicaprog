let num;
console.log(somar(2, 2))
function somar (a, b) {

    let resultado = a + b
    return resultado;

}

console.log(somar(20, 20))

somar(4, 5); //o retorno da função se perde.

function direcionador(){
    console.log("Siga em frente! Estude sempre!");
}

direcionador();

let texto = direcionador();
console.log(texto) // variáve não recebe o retorno da função 

function mensagem() {
    return "Ame mais, brigue menos!";
}

mensagem();
console.log(mensagem());

function tudao() {
    console.log(`Ínicio da função tudao`)
    direcionador(); //chamando a função direcionador
    let calc = somar(2, 3);
    console.log(`Resultado da soma: ${calc}`)
    let msg = mensagem()
    direcionador();
    console.log(`Mensagem do dia: ${msg}`)
    console.log(`Fim da função tudão`)
}

tudao();






// guardando o valor retornado em uma variavel
// num = somar(10, 20);
// console.log(num);


// function div(a, b) {
//     let resultado = a / b
//     return resultado;

// }
// console.log(div(10, 2))