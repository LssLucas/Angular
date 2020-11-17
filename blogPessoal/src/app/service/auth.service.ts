
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //API

  //injeção de dependencias é no construtor
  constructor(private http: HttpClient) { }

  // o user login vai 'chegar' por meio do parâmetro userLogin
  logar(userLogin: UserLogin){
    //e vai ser postado pelo retorno da funcao
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }
  //é o service que manda o json pro cadastro.component.ts
  cadastrar(user : User){
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }
  btnSair(){
    let ok = false
    let token = environment.token
    if(token != ''){
      ok = true 
    }
    return ok
  }
  btnLogin(){
    let ok = false
    let token = environment.token
    if(token == ''){
      ok = true 
    }
    return ok
  }
}