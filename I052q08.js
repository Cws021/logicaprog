base = 2
exp = 4
cont = 1
pot = 1
do {
    pot = pot * base
    console.log(pot)
    cont ++
} while(cont <= exp)
console.log(pot)