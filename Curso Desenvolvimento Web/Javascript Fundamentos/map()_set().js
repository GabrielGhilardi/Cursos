const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angula', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function (){}, 'Funcao'],
    [{},'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave,valor)
})

console.log(chavesVariadas.has(123))//verifica se contem o atributo
chavesVariadas.delete(123)// deleta o atributo
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)// conta quantos atributos tem

// não aceita repitição - não indexada 
const times = new Set()
times.add('Vasco')
times.add('Gremio').add('Palmeiras').add('Interncional')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Gremio')