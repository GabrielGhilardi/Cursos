//Operador rest(juntar)/Spread(espalhar) - passa varios valor para uma funcao
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(2,3,4,5)

//spread com objeto
const funcionario = {nome: 'Maria', salario: 12389.90}
const copiaFuncionario = {ativo: true, ...funcionario}
console.log(copiaFuncionario)

//spread com array
const grupoA = ['Joao','Pedro','Gloria']
const grupoFinal =['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)