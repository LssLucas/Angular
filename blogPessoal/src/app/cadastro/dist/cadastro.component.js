"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CadastroComponent = void 0;
var core_1 = require("@angular/core");
var User_1 = require("../model/User");
var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(authService, router, alert) {
        this.authService = authService;
        this.router = router;
        this.alert = alert;
        this.user = new User_1.User();
    }
    CadastroComponent.prototype.ngOnInit = function () { };
    CadastroComponent.prototype.conferirSenha = function (event) {
        this.senha = event.target.value;
    };
    /*a conexão que é feita, no template chamar o serviço criado,
    e o serviço envia o usuario pro end point que se conecta de forma
    localhost com a API*/
    CadastroComponent.prototype.cadastrar = function () {
        var _this = this;
        if (this.senha === this.user.senha) {
            this.authService.cadastrar(this.user).subscribe(function (resp) {
                _this.user = resp;
                _this.router.navigate(['/login']);
                _this.alert.showAlertSuccess('Usuario cadastrado com sucesso :) ');
            });
        }
        else {
            this.alert.showAlertDanger('As senhas não conferem');
        }
    };
    CadastroComponent = __decorate([
        core_1.Component({
            selector: 'app-cadastro',
            templateUrl: './cadastro.component.html',
            styleUrls: ['./cadastro.component.css']
        })
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
