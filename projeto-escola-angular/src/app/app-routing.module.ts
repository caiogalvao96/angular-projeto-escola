import { CrudCursoComponent } from './crud-curso/crud-curso.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CrudTurmaComponent } from './crud-turma/crud-turma.component';
import { MatriculaComponent } from './matricula/matricula.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'aluno', component: AlunoComponent},
  {path:'curso', component: CrudCursoComponent},
  {path:'turma', component: CrudTurmaComponent},
  {path:'matricular', component: MatriculaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
