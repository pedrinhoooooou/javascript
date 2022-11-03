var pessoa = {
    nome: 'Grazi',
    idade: 20,
    profissao: 'monitora do professor bonitão',
    faculdade: true,
}

pessoa.faculdade
console.table(pessoa)

//objeto com funções ou métododos

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },
    areas:  function(lado) {
        return lado*lado
    }
}

//Arrays

//È um grupo de valores geralmente relacionados. servem para guardarmos diferentes valores em uma única variável

var VideoGames = ['PS4', 'Xbox', 'Switch']

console.log(VideoGames.length)  