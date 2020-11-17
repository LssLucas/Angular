import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  //nome = 'Lucas Silveira dos Santos'
  //nome: string;
  nome:string = 'Lucas Silveira dos Santos'
  constructor() { }

  ngOnInit(): void {
    //this.nome = 'Lucas Silveira dos Santos'
  }

}
