import { Pessoa } from "./pessoa";
import { Turma } from "./turma";

export class Matricula{

  dataMatricula!: string;
  aluno: Pessoa = new Pessoa();
  turma: Turma = new Turma();
}
