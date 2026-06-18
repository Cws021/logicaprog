// cont = 1;
// soma = cont
// while(cont <= 100){
//     cont += 1
//     soma = soma + cont
//     console.log(soma)
// }
let cont = 1;
let acum = 0;

while (cont <= 100) {
    acum += cont;
    cont += 1;
}
console.log(`A soma dos valores de 1 a 100 é ${acum}`)