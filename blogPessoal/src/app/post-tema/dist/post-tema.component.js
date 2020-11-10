"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostTemaComponent = void 0;
var core_1 = require("@angular/core");
var Tema_1 = require("../model/Tema");
var PostTemaComponent = /** @class */ (function () {
    function PostTemaComponent(temaService, router) {
        this.temaService = temaService;
        this.router = router;
        this.tema = new Tema_1.Tema();
    }
    PostTemaComponent.prototype.ngOnInit = function () {
        this.findAllTemas();
    };
    //o metodo subscribe transforma json em objeto
    PostTemaComponent.prototype.findAllTemas = function () {
        var _this = this;
        this.temaService.getAllTemas().subscribe(function (resp) {
            _this.listaTema = resp;
        });
    };
    PostTemaComponent.prototype.findByIdTema = function () {
        var _this = this;
        this.temaService.getByIdTema(this.tema.id).subscribe(function (resp) {
            _this.tema = resp;
        });
    };
    PostTemaComponent.prototype.cadastrar = function () {
        var _this = this;
        if (this.tema.descricao == null) {
            alert('Preencha o campo de nome do tema corretamente');
        }
        else {
            this.temaService.postTema(this.tema).subscribe(function (resp) {
                _this.tema = resp;
                _this.router.navigate(['/feed']);
                alert('Tema cadastrado com sucesso!');
            });
        }
    };
    PostTemaComponent = __decorate([
        core_1.Component({
            selector: 'app-post-tema',
            templateUrl: './post-tema.component.html',
            styleUrls: ['./post-tema.component.css']
        })
    ], PostTemaComponent);
    return PostTemaComponent;
}());
exports.PostTemaComponent = PostTemaComponent;
