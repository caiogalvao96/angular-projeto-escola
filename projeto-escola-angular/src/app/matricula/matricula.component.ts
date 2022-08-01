import { Matricula } from './../model/matricula';
import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from '../model/turma';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  id!: number;

  teste = 'aaaaa bbbbb ccc ddddd';

  turma = new Turma;

  matriculas: Matricula[] = [];

  aluno = new Pessoa;

  alunoRg: string = '';

  constructor( private servico: ServicesService) { }



  ngOnInit(){

    this.id = this.servico.getIdTurma();

    if(this.id != undefined){
      this.servico.getTurmaById(this.id).subscribe( data => {
        this.turma = data;
        this.matriculas = data.matriculas;
        })
    }
  }

  buscarAluno(){
    this.servico.getAlunoByRg(this.alunoRg).subscribe(data => {
      this.aluno = data;
    })
  }

  matricular(){
    this.servico.matricularAluno(this.aluno, this.turma.id).subscribe(data => {
      alert(data);
    })
  }

}
