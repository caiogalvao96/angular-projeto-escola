import { Curso } from "./curso";
import { Matricula } from "./matricula";

export class Turma {

  id!: number;
  sigla!: string;

  curso!: number;

  matriculas!: Array<Matricula>;

}
