import { Curso } from './../model/curso';
import { Turma } from './../model/turma';
import { Pessoa } from './../model/pessoa';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private idTurma: any;

  getIdTurma(): any{
    return this.idTurma;
  }

  setIdTurma(newidTurma:any){
    this.idTurma = newidTurma;
  }



  constructor( private  http: HttpClient ) { }

  getListaUsuarios(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/projetoescola/aluno/busca");
  }

  getAluno(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/projetoescola/aluno/busca");
  }

  gravaAluno( aluno: Pessoa): Observable<any>{
    return this.http.post("http://localhost:8080/projetoescola/aluno/save", aluno, { responseType: 'text'});
  }

  consultaUserById(id: number) : Observable<any> {
    return this.http.get("http://localhost:8080/projetoescola/aluno/aluno?id="+id);
  }

  deleteUserById(id: number) : Observable<any> {
    return this.http.delete("http://localhost:8080/projetoescola/aluno?idAluno="+id, { responseType: 'text'});
  }

  getListaDisciplinas(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/projetoescola/disciplina/disciplinas");
  }

  getListaCursos(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/projetoescola/curso/cursos");
  }

  getTurmaById(idTurma:number): Observable<any> {
    return this.http.get("http://localhost:8080/projetoescola/turma/turma?idTurma="+idTurma)
  }

  getTurmas(): Observable<any> {
    return this.http.get("http://localhost:8080/projetoescola/turma/turmas");
  }

  gravaTurma(turma: Turma, idCurso:number): Observable<any> {
    return this.http.post("http://localhost:8080/projetoescola/turma/turmagrava/"+idCurso, turma,);
  }

  deletaTurma(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/projetoescola/turma/deletar/"+id, { responseType: 'text'});
  }

  getAlunoByRg(rg: string): Observable<any> {
    return this.http.get("http://localhost:8080/projetoescola/aluno/alunorg?rg="+rg);
  }

  matricularAluno(aluno: Pessoa, idTurma: number): Observable<any> {
    return this.http.post("http://localhost:8080/projetoescola/matricula/matricular?idTurma="+idTurma, aluno, { responseType: 'text'});
  }

  gravaCurso(curso: Curso): Observable<any> {
    return this.http.post("http://localhost:8080/projetoescola/curso/salvar/", curso);
  }

  getCurso(nome: string): Observable<any> {
    return this.http.get("http://localhost:8080/projetoescola/curso/curso?nome="+nome)
  }
}
