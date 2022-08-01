import { ServicesService } from './../services/services.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  lista: any[] = [];

  constructor(private rota: Router, private servico: ServicesService) { }

  ngOnInit(): void {

  }

  sair(){
    this.rota.navigate([""]);
  }

  listar(){

    this.servico.getListaUsuarios().subscribe( data =>{
      alert(data);
      this.lista = data;
      console.log(data);
    });


  }

}
