import { ServicesService } from './../services/services.service';
import { Pessoa } from './../model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Pessoa[] = [];

  aluno = new Pessoa;

  constructor( private servico: ServicesService) { }

  ngOnInit(): void {

    this.servico.getListaUsuarios().subscribe( data => {
      this.alunos = data;
    })
  }

  salvar(){
    this.servico.gravaAluno(this.aluno).subscribe( data => {
      alert(data);
    });
  }
  editar(id: number){
    this.servico.consultaUserById(id).subscribe( data => {
      this.aluno = data;
    })
  }

  deletar(id: number){
    if(confirm("Deseja mesmo deletar?")){
      this.servico.deleteUserById(id).subscribe( data => {
        alert(data);
        this.ngOnInit();
      })
    }


  }

}
