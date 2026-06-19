let cont = 1;
let num = 1;
let div = num % 4
console.log(`Os números divisíveis por 4 são: `)
do{
    cont += 1
    num += 1
    
    if( num % 4 == 0){
        console.log(num)
    }
}while((cont <= 20))