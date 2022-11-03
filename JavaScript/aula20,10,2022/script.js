

var videoGames = ['switch', 'ps4', 'xbox', 'ds', 'ps3',]; 
console.log(videoGames[0])
console.log(videoGames[1])
console.log(videoGames[2])
console.log(videoGames[3])
console.log(videoGames[4])

//ForEach é um metodo que executa uma função para cada item array. É uma forma mais simples de utilizarmos um loop com arrays

videoGames.forEach(function(a, b, c,){
    console.log(a, b, c,)
})

var hexa = [1958,1962, 1970, 1994, 2002]

hexa.forEach(function(c){
    console.log(' O Brasil ganhou a copa', c)
})