"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeletePostagemComponent = void 0;
var core_1 = require("@angular/core");
var Postagem_1 = require("../model/Postagem");
var DeletePostagemComponent = /** @class */ (function () {
    function DeletePostagemComponent(postagemService, router, route, alert) {
        this.postagemService = postagemService;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.postagem = new Postagem_1.Postagem();
    }
    DeletePostagemComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var id = this.route.snapshot.params['id'];
        this.findByIdPostagem(id);
    };
    DeletePostagemComponent.prototype.findByIdPostagem = function (id) {
        var _this = this;
        this.postagemService.getByIdPostagem(id).subscribe(function (resp) {
            _this.postagem = resp;
        });
    };
    DeletePostagemComponent.prototype.btnSim = function () {
        var _this = this;
        this.postagemService.deletePostagem(this.postagem.id).subscribe(function () {
            _this.router.navigate(['/feed']);
            _this.alert.showAlertSuccess('Postagem apagada com sucesso');
        });
    };
    DeletePostagemComponent.prototype.btnNao = function () {
        this.router.navigate(['/feed']);
    };
    DeletePostagemComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-postagem',
            templateUrl: './delete-postagem.component.html',
            styleUrls: ['./delete-postagem.component.css']
        })
    ], DeletePostagemComponent);
    return DeletePostagemComponent;
}());
exports.DeletePostagemComponent = DeletePostagemComponent;
