let n1, n2, n3;
n1 = 10;
n2 = 50;
n3 = 30;
console.log(`Digite o primeiro número: ${n1}`);
console.log(`Digite o segundo número: ${n2}`);
console.log(`Digite o terceiro número: ${n3}`);
if (n1 < n2 && n2 < n3) {
    console.log(`A ordem crescente dos números é: ${n1}, ${n2}, ${n3}`);
} else if (n2 < n1 && n1 < n3) {
    console.log(`A ordem crescente dos números é: ${n2}, ${n1}, ${n3}`);
} else if (n3 < n1 && n1 < n2) {
    console.log(`A ordem crescente dos números é: ${n3}, ${n2}, ${n1}`);
}