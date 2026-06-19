cont = 1;
usu = 20
num = 2;
pot = cont
console.log(`Digite um número para poteciação: ${num}`)
do {
    pot = num ** cont
    console.log(`${num} elevado ao ${cont} é ${pot}`)
    cont += 1
}while(cont <= usu)  