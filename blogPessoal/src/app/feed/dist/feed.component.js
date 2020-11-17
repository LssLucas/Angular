"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeedComponent = void 0;
var core_1 = require("@angular/core");
var environment_prod_1 = require("./../../environments/environment.prod");
var Postagem_1 = require("../model/Postagem");
var Tema_1 = require("../model/Tema");
var FeedComponent = /** @class */ (function () {
    function FeedComponent(postagemService, temaService, alert, router) {
        this.postagemService = postagemService;
        this.temaService = temaService;
        this.alert = alert;
        this.router = router;
        this.postagem = new Postagem_1.Postagem();
        this.tema = new Tema_1.Tema();
    }
    FeedComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var token = environment_prod_1.environment.token;
        if (token == '') {
            this.router.navigate(['/login']);
            this.alert.showAlertInfo('Faça o login para acessar o feed.');
        }
        this.findAllPostagens();
        this.findAllTemas();
    };
    FeedComponent.prototype.findAllPostagens = function () {
        var _this = this;
        this.postagemService.getAllPostagens().subscribe(function (resp) {
            _this.listaPostagens = resp;
        });
    };
    FeedComponent.prototype.publicar = function () {
        var _this = this;
        this.tema.id = this.idTema;
        this.postagem.tema = this.tema;
        if (this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null) {
            this.alert.showAlertDanger('Preencha todos os campos antes de publicar');
        }
        else {
            this.postagemService.postPostagem(this.postagem).subscribe(function (resp) {
                _this.postagem = resp;
                _this.postagem = new Postagem_1.Postagem();
                _this.alert.showAlertSuccess('Postagem realizada com sucesso');
                _this.findAllPostagens();
            });
        }
    };
    FeedComponent.prototype.findByTituloPostagem = function () {
        var _this = this;
        if (this.titulo === '') {
            this.findAllPostagens();
        }
        else {
            this.postagemService.getByTituloPostagem(this.titulo).subscribe(function (resp) {
                _this.listaPostagens = resp;
            });
        }
    };
    //o metodo subscribe transforma json em objeto
    FeedComponent.prototype.findAllTemas = function () {
        var _this = this;
        this.temaService.getAllTemas().subscribe(function (resp) {
            _this.listaTemas = resp;
        });
    };
    FeedComponent.prototype.findByIdTema = function () {
        var _this = this;
        this.temaService.getByIdTema(this.idTema).subscribe(function (resp) {
            _this.tema = resp;
        });
    };
    FeedComponent.prototype.findByNomeTema = function () {
        var _this = this;
        if (this.nomeTema === '') {
            this.findAllTemas();
        }
        else {
            this.temaService.getByNomeTema(this.nomeTema).subscribe(function (resp) {
                _this.listaTemas = resp;
            });
        }
    };
    FeedComponent = __decorate([
        core_1.Component({
            selector: 'app-feed',
            templateUrl: './feed.component.html',
            styleUrls: ['./feed.component.css']
        })
    ], FeedComponent);
    return FeedComponent;
}());
exports.FeedComponent = FeedComponent;
