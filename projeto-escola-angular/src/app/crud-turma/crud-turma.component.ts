import { Router } from '@angular/router';

import { ServicesService } from './../services/services.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Curso } from '../model/curso';
import { Form, NgForm } from '@angular/forms';
import { Turma } from '../model/turma';

@Component({
  selector: 'app-crud-turma',
  templateUrl: './crud-turma.component.html',
  styleUrls: ['./crud-turma.component.css']
})
export class CrudTurmaComponent implements OnInit {


  cursos: Curso[] = [];
  turmas: Turma[] = [];

  turma = new Turma;
  curso = new Curso;

  x!: any;

  t!: number;

  constructor(private servico: ServicesService, private rota: Router) { }

  ngOnInit(): void {

    this.servico.getListaCursos().subscribe( data =>{
      this.cursos = data;
    });



    /*
    this.servico.getTurmas().subscribe( data =>{
      this.turmas = data;
    })
    */

  }

  enviar(){

    this.turma.curso = this.cursos[this.x].id;

    this.servico.gravaTurma(this.turma,this.turma.curso).subscribe( data => {
      this.turmas.push(data);
    });




  }

  novo(){
    this. turma = new Turma;
  }


  deletar(id: any, i: number){
    this.servico.deletaTurma(id).subscribe( data => {
      alert(data);
    })
    this.turmas.splice(i,1);
  }

  matricular(id: any){

    this.servico.setIdTurma(id);
    this.rota.navigate(['/matricular']);
  }

  carregaTurmas(){

    this.curso = this.cursos[this.x];
    this.turmas = this.curso.turmas;
    this.turma = new Turma();

  }

}
