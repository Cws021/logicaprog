cont = 1;
num = 1;
div = num % 4
console.log(`Os números divisíveis por 4 são: `)
while(cont <= 200){
    cont += 1
    num += 1
    
    if( num % 4 == 0){
        console.log(num)
    }
}