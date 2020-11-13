"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertasService = void 0;
var core_1 = require("@angular/core");
var alertas_component_1 = require("../alertas/alertas.component");
var AlertasService = /** @class */ (function () {
    function AlertasService(bsModelService) {
        this.bsModelService = bsModelService;
    }
    AlertasService.prototype.showAlert = function (message, type) {
        var bsModalRef = this.bsModelService.show(alertas_component_1.AlertasComponent);
        bsModalRef.content.type = type;
        bsModalRef.content.message = message;
    };
    AlertasService.prototype.showAlertDanger = function (message) {
        this.showAlert(message, 'danger');
    };
    AlertasService.prototype.showAlertSuccess = function (message) {
        this.showAlert(message, 'success');
    };
    AlertasService.prototype.showAlertInfo = function (message) {
        this.showAlert(message, 'info');
    };
    AlertasService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AlertasService);
    return AlertasService;
}());
exports.AlertasService = AlertasService;
