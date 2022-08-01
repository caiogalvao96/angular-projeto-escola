import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlunoComponent } from './aluno/aluno.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudCursoComponent } from './crud-curso/crud-curso.component';
import { CrudTurmaComponent } from './crud-turma/crud-turma.component';
import { MatriculaComponent } from './matricula/matricula.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlunoComponent,
    SidebarComponent,
    CrudCursoComponent,
    CrudTurmaComponent,
    MatriculaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
