let nome = ['Filipe Cust','Amanda','Gabriela']
console.log(nome)
nome.push('João')
console.log(nome)
nome.push('Pedro')
console.log(nome)
nome.pop()
console.log(nome)



// Aula em video
// Lenght (Comprimento Text) soma os caracteres, incluindo os espaço e informa o tamanho da string 

let texto = "Oi, eu sou a Amanda"
console.log (texto.length);

//indexOf (Extrair por Posição) ex: o "S" está na posição 7 contando os espaços
//Sempre que o indexof retorna -1 ele não encontrou a palavra

console.log (texto.indexOf("s"))

//Slice (Extrair parte do texto) Informar onde deve começar a pegar o texto e onde deve terminar (sempre contar espaços). 
//OBS: todo 1° caractere começa a contar no 0

console.log (texto.slice(13,19))

//.trim (Remover os espaços em branco antes e depois da primeira ocorrencia de um caractere alfanumerico) 
// Sempre no começo ou no final da STRING, ela não remove os espaço entre as palavras

console.log(texto.trim())

//Split (serve para transformar uma string em uma Array)
console.log (texto.split("v"))

//Replace (Nos permite trocar alguma palavra do texto)
// Ex: Quero trocar o nome Amanda por Gabi, somente usar o cód abaixo:

console.log(texto.replace("Amanda", "Gabi"))