"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var environment_prod_1 = require("./../../environments/environment.prod");
var AuthService = /** @class */ (function () {
    //API
    //injeção de dependencias é no construtor
    function AuthService(http) {
        this.http = http;
    }
    // o user login vai 'chegar' por meio do parâmetro userLogin
    AuthService.prototype.logar = function (userLogin) {
        //e vai ser postado pelo retorno da funcao
        return this.http.post('http://localhost:8080/usuarios/logar', userLogin);
    };
    //é o service que manda o json pro cadastro.component.ts
    AuthService.prototype.cadastrar = function (user) {
        return this.http.post('http://localhost:8080/usuarios/cadastrar', user);
    };
    AuthService.prototype.btnSair = function () {
        var ok = false;
        var token = environment_prod_1.environment.token;
        if (token != '') {
            ok = true;
        }
        return ok;
    };
    AuthService.prototype.btnLogin = function () {
        var ok = false;
        var token = environment_prod_1.environment.token;
        if (token == '') {
            ok = true;
        }
        return ok;
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
