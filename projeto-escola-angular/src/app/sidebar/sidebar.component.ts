import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private rota: Router) { }

  ngOnInit(): void {
  }

  navegar(d: number){
    if(d == 1){
      this.rota.navigate(['/curso']);
    }else if(d == 2){
      this.rota.navigate(['/aluno']);
    }
    else{
      this.rota.navigate(['/turma']);
    }
  }
}
