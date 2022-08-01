import { Disciplina } from "./disciplina";
import { Turma } from "./turma";

export class Curso{
  id!: number;
  nomeCurso!: string;

  disciplinas: Array<Disciplina> = new Array;

  turmas: Array<Turma> = new Array;
}
