//Percorre toda String
for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set' , 'Promise']

//percorre o Arrey pelo indice 
for (let i in assuntoEcma){
    console.log(i)
}

//percorre o Arrey pelo conteudo direto 
for (let i of assuntoEcma){
    console.log(i)
}

const assuntoMap = new Map ([
    ['Map',{aodando: true}],
    ['Set',{aodando: true}],
    ['Primise',{aodando: false}],
])

//Percorre o MAP
for(let assunto of assuntoMap){
    console.log(assunto)
}

//Percorre o MAP e mostra apenas as chaves
for(let chave of assuntoMap.keys()){
    console.log(chave)
}

//PErcorre o MAP e mostra apenas os valores
for(let valor of assuntoMap.values()){
    console.log(valor)
}

//Pecorre o Map e desconstoi ele
for(let [chave, valor] of assuntoMap.entries()){
    console.log(chave, valor)
}
