function Aluno(_nome, _faltas, _notas) {
    this.nome = _nome;
    this.faltas = _faltas;
    this.notas = _notas;
    this.calcularMedia = function () {
      let qtdNotas = this.notas.length;
      let somaNotas = this.notas.reduce((a, b) => a + b);
      return (somaNotas / qtdNotas).toFixed(2);
    };
    this.adicionarFalta = () => {
      console.log(this.faltas);
      this.faltas++;
      console.log(this.faltas);
    };
  };

let aluno1 = new Aluno("Armando", 2, [9, 7, 10]);
let aluno2 = new Aluno("Pedro", 1, [5, 6, 10]);
let aluno3 = new Aluno("Amanda Jesus", 2, [2, 4, 6]);
let aluno4 = new Aluno("João", 4, [8, 9, 4]);
let aluno5 = new Aluno("Luiza Sonza", 6, [9, 2, 9]);
let aluno6 = new Aluno("Whinderson Nunes", 13, [4, 5, 8]);
let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

console.log (listaAlunos)

module.exports = {
  ConstrutorAluno: Aluno,
  listaAlunos: listaAlunos,
  
}