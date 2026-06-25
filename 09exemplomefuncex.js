function exibirSaudacao(){
    console.log("Olá, mundo! Estamos aprendendo função.")
}

exibirSaudacao();

function exibirData(){
    console.log(new Date().toLocaleDateString());
}
exibirData();
exibirData();
exibirData();

function calcularArea(base, altura){
    let resultado = base * altura / 2
    return resultado;
}

console.log(calcularArea(10, 7))

function converterCelsius(temp){
    resultado = (temp * 9/5) + 32
    return resultado
}

console.log(converterCelsius(35));

function saudacaoPersonalizada(nome){
    
    console.log(`Olá, ${nome}! Seja bem vindo.`)
    
}

nome = "Cawã"
console.log(saudacaoPersonalizada("Cawã"))

let mensagem = "Global";

function teste() {
    let mensagem = "Local";
    console.log(mensagem);
}

teste();
console.log(mensagem);

