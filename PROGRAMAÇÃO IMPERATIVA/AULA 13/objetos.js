let carro = { 
    nome: "Fox",
    Ano: "2021",
    Cor: "Vermelho",
    Ligar: function() {
        console.log("O carro" + this.nome + "está ligado")
    }
}
carro.Ligar()

// MESA DE TRABALHO


let cliente1 = {
    nome: ['Natte', 'Abigael'],
    tipoDeConta: ['Conta Corrente'],
    numeroDeConta:[5486273622],
    saldo:[27771],
  
    function saudacao(nome, tipoDeConta, numeroDeConta, saldo){
      return ('Olá' + this.nome[0] + 'Seu saldo é de:' + this.saldo);
    }
  }
  console.log(saudacao);
  
