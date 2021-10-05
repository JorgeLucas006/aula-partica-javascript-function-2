/*
1) Criar uma função anônima que recebe duas notas de um aluno do ensino médio:

a) Calcular a média do aluno.
b) Se a média for maior ou igual a 7, retornar "Aprovado!";
c) Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
d) Se a média for menor que 5, retornar "Reprovado!".
e) Chamar a função e exibir no console o resultado.
*/

console.log("1)")

var media = function(n1,n2){
  var med = (n1+n2)/2
  if(med >= 7){
    return "Aprovado!"
  }else if(med >= 5 && med < 7){
    return "Recuperação!"
  }else{
    return "Reprovado!"
  }
}

console.log(media(8,9))
console.log(media(7,6))
console.log(media(8,0))

/*
2) Criar uma função anônima que calcula a tabuada de 3.

a) Chamar a função e exibir no console o resultado.
*/

console.log("--------------")
console.log("2)")

var tab = function(){
  for(var i = 1; i < 11; i++){
    console.log("3 x "+i+" = "+i*3)
  }
  return console.log("Fim")
}

tab()

/*
3) Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.

a) Chamar a função e exibir no console o resultado.
*/

console.log("--------------")
console.log("3)")

var idade = function(ano){
  var ida = 2021 - ano
  return ida >= 18 ? "Maior de idade" : "Menor de idade"
}

// 11 Anos
console.log(idade(2010))

// 19 Anos
console.log(idade(2002))
