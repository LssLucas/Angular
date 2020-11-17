"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeleteTemaComponent = void 0;
var core_1 = require("@angular/core");
var Tema_1 = require("../model/Tema");
var DeleteTemaComponent = /** @class */ (function () {
    function DeleteTemaComponent(temaService, router, route, alert) {
        this.temaService = temaService;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.tema = new Tema_1.Tema();
    }
    DeleteTemaComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var id = this.route.snapshot.params["id"];
        this.findByIdTema(id);
    };
    DeleteTemaComponent.prototype.findByIdTema = function (id) {
        var _this = this;
        this.temaService.getByIdTema(id).subscribe(function (resp) {
            _this.tema = resp;
        });
    };
    DeleteTemaComponent.prototype.btnSim = function () {
        var _this = this;
        this.temaService.deleteTema(this.tema.id).subscribe(function () {
            _this.router.navigate(['/cadastro-tema']);
            _this.alert.showAlertSuccess('Tema apagado com sucesso');
        });
    };
    DeleteTemaComponent.prototype.btnNao = function () {
        this.router.navigate(['/cadastro-tema']);
    };
    DeleteTemaComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-tema',
            templateUrl: './delete-tema.component.html',
            styleUrls: ['./delete-tema.component.css']
        })
    ], DeleteTemaComponent);
    return DeleteTemaComponent;
}());
exports.DeleteTemaComponent = DeleteTemaComponent;
