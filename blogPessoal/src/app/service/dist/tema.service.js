"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TemaService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var TemaService = /** @class */ (function () {
    function TemaService(http) {
        this.http = http;
        this.token = {
            headers: new http_1.HttpHeaders().set('Authorization', localStorage.getItem('token'))
        };
    }
    TemaService.prototype.getAllTemas = function () {
        return this.http.get('http://localhost:8080/tema', this.token);
    };
    TemaService.prototype.getByIdTema = function (id) {
        return this.http.get("http://localhost:8080/tema/" + id, this.token);
    };
    TemaService.prototype.postTema = function (tema) {
        return this.http.post('http://localhost:8080/tema', tema, this.token);
    };
    TemaService.prototype.putTema = function (tema) {
        return this.http.put('http://localhost:8080/tema', tema, this.token);
    };
    TemaService.prototype.deleteTema = function (nome) {
        return this.http["delete"]("http://localhost:8080/tema/nome/" + nome, this.token);
    };
    TemaService.prototype.getByNomeTema = function (nome) {
        return this.http.get("http://localhost:8080/tema/nome/" + nome, this.token);
    };
    TemaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TemaService);
    return TemaService;
}());
exports.TemaService = TemaService;
