let n1, n2, n3, n4, n5;
n1 = 10;
n2 = 20;
n3 = 30;
n4 = 50;
n5 = 40;
console.log(`Digite o primeiro número: ${n1}`);
console.log(`Digite o segundo número: ${n2}`);
console.log(`Digite o terceiro número: ${n3}`);
console.log(`Digite o quarto número: ${n4}`);
console.log(`Digite o quinto número: ${n5}`);
if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    console.log(`O maior número é ${n1}, que é o primeiro número`);
} else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    console.log(`O maior número é ${n2}, que é o segundo número`);
} else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    console.log(`O maior número é ${n3}, que é o terceiro número`);
} else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    console.log(`O maior número é ${n4}, que é o quarto número`);
} else {
    console.log(`O maior número é ${n5}, que é o quinto número`);
}
if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
    console.log(`O menor número é ${n1}, que é o primeiro número`);
}
else if (n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5) {
    console.log(`O menor número é ${n2}, que é o segundo número`);
}
else if (n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5) {
    console.log(`O menor número é ${n3}, que é o terceiro número`);
}
else if (n4 < n1 && n4 < n2 && n4 < n3 && n4 < n5) {
    console.log(`O menor número é ${n4}, que é o quarto número`);
}
else {
    console.log(`O menor número é ${n5}, que é o quinto número`);
}
