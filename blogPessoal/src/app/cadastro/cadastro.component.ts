import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasComponent } from '../alertas/alertas.component';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user : User = new User ()
  senha: string
  constructor( 
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
    ) {}
  ngOnInit(){  }
  conferirSenha(event: any){
    this.senha = event.target.value
  }
  /*a conexão que é feita, no template chamar o serviço criado,
  e o serviço envia o usuario pro end point que se conecta de forma
  localhost com a API*/
  cadastrar(){
    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
      this.user = resp
      this.router.navigate(['/login'])
      this.alert.showAlertSuccess('Usuario cadastrado com sucesso :) ')
      })
    } else {
      this.alert.showAlertDanger('As senhas não conferem')
    }
  }
}
