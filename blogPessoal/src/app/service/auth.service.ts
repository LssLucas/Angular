
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { userLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//injeção de dependencias é no construtor
  constructor(private http: HttpClient) { }

  // o user login vai 'chegar' por meio do parâmetro userLogin
  logar(userLogin: userLogin){
    //e vai ser postado pelo retorno da funcao
    return this.http.post('http://localhost:9000/usuarios/logar', userLogin)
  }
  //é o service que manda o json pro cadastro.component.ts
  cadastrar(user : User){
    return this.http.post('http://localhost:9000/usuarios/cadastrar', user)
  }
}
