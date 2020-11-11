"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PutPostagemComponent = void 0;
var core_1 = require("@angular/core");
var Postagem_1 = require("../model/Postagem");
var Tema_1 = require("../model/Tema");
var PutPostagemComponent = /** @class */ (function () {
    function PutPostagemComponent(postagemService, temaService, router, route) {
        this.postagemService = postagemService;
        this.temaService = temaService;
        this.router = router;
        this.route = route;
        this.postagem = new Postagem_1.Postagem();
        this.tema = new Tema_1.Tema();
    }
    PutPostagemComponent.prototype.ngOnInit = function () {
        this.idPost = this.route.snapshot.params["id"];
        this.findByIdPostagem(this.idPost);
        this.findAllTemas();
    };
    PutPostagemComponent.prototype.findByIdPostagem = function (id) {
        var _this = this;
        this.postagemService.getByIdPostagem(id).subscribe(function (resp) {
            _this.postagem = resp;
        });
    };
    PutPostagemComponent.prototype.salvar = function () {
        var _this = this;
        this.tema.id = this.idTema;
        this.postagem.tema = this.tema;
        this.postagemService.putPostagem(this.postagem).subscribe(function (resp) {
            _this.postagem = resp;
            _this.router.navigate(['/feed']);
            alert('Postagem alterada com sucesso');
        }, function (error) {
            if (error.status == '500') {
                alert('Preencha todos os campos corretamente antes de enviar!!!');
            }
        });
    };
    //o metodo subscribe transforma json em objeto
    PutPostagemComponent.prototype.findAllTemas = function () {
        var _this = this;
        this.temaService.getAllTemas().subscribe(function (resp) {
            _this.listaTemas = resp;
        });
    };
    PutPostagemComponent.prototype.findByIdTema = function () {
        var _this = this;
        this.temaService.getByIdTema(this.idTema).subscribe(function (resp) {
            _this.tema = resp;
        });
    };
    PutPostagemComponent = __decorate([
        core_1.Component({
            selector: 'app-put-postagem',
            templateUrl: './put-postagem.component.html',
            styleUrls: ['./put-postagem.component.css']
        })
    ], PutPostagemComponent);
    return PutPostagemComponent;
}());
exports.PutPostagemComponent = PutPostagemComponent;
