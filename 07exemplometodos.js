class Pessoa {
    
    nome;
    idade;

    //Método construtor (ajuda a criar os objetos)
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //método comum
    apresentar() {
        console.log(`Olá! meu nome é ${this.nome}!`)
    }
} //fim da classe Pessoa

let pessoa1 = new Pessoa("Roberto", 33);
console.log(pessoa1.nome)

pessoa1.apresentar()