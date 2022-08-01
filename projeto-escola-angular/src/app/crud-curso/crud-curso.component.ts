import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../model/disciplina';
import { Curso } from '../model/curso';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-crud-curso',
  templateUrl: './crud-curso.component.html',
  styleUrls: ['./crud-curso.component.css']
})
export class CrudCursoComponent implements OnInit {

  lista: Disciplina[] = [];


  curso = new Curso;

  pqp: any[] = [];

  formulario!: FormGroup;

  constructor( private servico: ServicesService, private formBuilder: FormBuilder) { }


  onSubmit(form:HTMLElement){
      console.log(form);



  }

  ngOnInit(): void {

      this.servico.getListaDisciplinas().subscribe(data =>{
      this.lista = data;
    });


  }

  salvar(){

    this.servico.gravaCurso(this.curso).subscribe(data => {
      this.curso = data;
    })
  }

  addDisciplina(i: number){
    this.curso.disciplinas.push(this.lista[i]);
    this.lista.splice(i,1);
  }


}
