//funções

/*
    function nomeDaFunção (parâmetros){
        ações
    }
*/

var a = 7
var b = 8
var total = a + b
console.log(total)

function soma(c,d){
    var total = c + d
    return console.log(total)
}

soma(10,50)
soma(7,5)

//Calculo da área de um quadrado
function areaDeUmQuadrado(lado){
    var area = lado*lado;
    return console.log(area)
}

areaDeUmQuadrado(4)

//Faça uma função que ele calcule a área de um retângulos de lados diferentes

function areaDeUmRetangulo(lados,lados2){
    var area = lados*lados2;
    return console.log(area)
}

areaDeUmRetangulo(5,6)

//função

function pi(){
    return 3.1415
}

//È possivel chamar uma funçao no console sem o conssole.log

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Gosta do céu'
    }else if (cor === 'verde'){
        return 'É palmeirense'
    }else{
        return 'Você gosta de nada'
    }
}

//

function perimetro(l1,l2,l3,l4){
    var total = l1 + l2 + l3 + l4;
    console.log(total)
}


function nomeCompleto(nome,sobrenome){
    var somasNomes = nome + " " + sobrenome
    console.log(somasNomes)
}