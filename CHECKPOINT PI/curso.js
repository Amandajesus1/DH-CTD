let alunos = require("./aluno");

let curso = {
  curso: String,
  notaAprovacao: 7,
  maxFaltas: 4,
  listaEstudantes: alunos.listaAlunos,
  adicionarAluno: function (nome, faltas, notas) {
    this.listaEstudantes.push(new alunos.ConstrutorAluno(nome, faltas, notas));
  },
  resultadoaprovacao: function (aluno) {
    let objetoAluno = this.listaEstudantes.filter((x) => x.nome == aluno);
    let media = objetoAluno[0].calcularMedia();
    let faltas = objetoAluno[0].faltas;
  
    if (faltas == this.maxFaltas) {
      media > this.notaAprovacao * 1.1 ? true : false;
    } else if (media >= this.notaAprovacao && faltas < this.maxFaltas) {
      return true;
    }
    return false;
  },
  arrayResultados: () => {

    }
  },
};

