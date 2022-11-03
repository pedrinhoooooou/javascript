// Condicionais if e else

var GraziPossuiGraduacao = true     

if (GraziPossuiGraduacao){
    console.log('Grazi está na faculdade')
}else{
    console.log('Grazi não esta na faculdade')
}

var idade = prompt('digite a sua idade:')

if (idade >= 18){
    console.log('vai preso')
}else{
    console.log('os pai vão preso')
}

//Operadores Logicos

/*
    == -> igualdade
    > -> maior que 
    < -< menor que
    >!= -> maior ou igual
    <= -> menor ou igual
*/

var a = 1,
    b = 5,
    c = 2,
    d = 1;

console.log(a>b) 

console.log(a<b)

console.log( a == d)

console.log(b>= a)

console.log(c<= b)

console.log(d != a)

console.log(d != b)
