function adicionar(num1,num2){
    return num1 + num2
}
function subtracao (num1,num2){
return num1 - num2
}
function multiplicacao (num1,num2){
    return num1 * num2
}
function divisao (num1,num2){
    return num1 / num2
}
console.log('Operações Calculadora')

console.log('A subtração é ' + subtracao(10,5)) 
console.log('A soma é '  + adicionar (5,5))
console.log ('A multiplicação é '+ multiplicacao (10,5))
console.log ('A Divisão é ' + divisao (20,2))
console.log ('A Divisão é ' + divisao (0,3)) 

function quadradoDoNumero (num1){

return multiplicacao (num1,num1)
}
console.log (' A multiplicação é ' + quadradoDoNumero (2))

function mediaDosNumeros(num1,num2,num3){ 
    return adicionar(adicionar(num1, num2),num3) / 3

}
console.log ('A média dos numeros é ' + mediaDosNumeros (10,20,30))

function calculoPorcentagem(num1,num2){
    return multiplicacao (num1,num2) / 100

} 
 console.log (' O Valor é ' + calculoPorcentagem (300, 15) + '%')

function geradorDePorcentagem(num1,num2){
    return multiplicacao(divisao (num1,num2),100)
} 
console.log ('o valor é ' + geradorDePorcentagem (2, 200) + '%')