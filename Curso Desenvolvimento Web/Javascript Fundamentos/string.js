const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))  //proura se contém a letra 3 na String

console.log(escola.substring(1)) //pega a partir da letra de índece 1
console.log(escola.substring(0,3))  //pega a partir da letra de índece 0 até a letra antes do indice 3

console.log('Escola '.concat(escola).concat("!")) //concatenação de uma String com uma variável com uma String
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //troca o idicie informado pela letra e 

console.log('Ana,Maria,Pedro'.split(',')) //divide a String pelo marcador ',' em um Arrey 