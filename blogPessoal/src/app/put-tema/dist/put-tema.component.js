"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PutTemaComponent = void 0;
var core_1 = require("@angular/core");
var Tema_1 = require("../model/Tema");
var PutTemaComponent = /** @class */ (function () {
    //dependencias
    function PutTemaComponent(temaService, router, route, alert) {
        this.temaService = temaService;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.tema = new Tema_1.Tema();
    }
    PutTemaComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var id = this.route.snapshot.params['id'];
        this.findByIdTema(id);
    };
    PutTemaComponent.prototype.findByIdTema = function (id) {
        var _this = this;
        this.temaService.getByIdTema(id).subscribe(function (resp) {
            _this.tema = resp;
        });
    };
    PutTemaComponent.prototype.salvar = function () {
        var _this = this;
        this.temaService.putTema(this.tema).subscribe(function (resp) {
            _this.tema = resp;
            _this.router.navigate(['/cadastro-tema']);
            _this.alert.showAlertSuccess('Tema atualizado com sucesso');
        });
    };
    PutTemaComponent = __decorate([
        core_1.Component({
            selector: 'app-put-tema',
            templateUrl: './put-tema.component.html',
            styleUrls: ['./put-tema.component.css']
        })
    ], PutTemaComponent);
    return PutTemaComponent;
}());
exports.PutTemaComponent = PutTemaComponent;
