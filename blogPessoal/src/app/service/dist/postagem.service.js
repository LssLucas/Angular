"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostagemService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_prod_1 = require("./../../environments/environment.prod");
var PostagemService = /** @class */ (function () {
    function PostagemService(http) {
        this.http = http;
        this.token = {
            headers: new http_1.HttpHeaders().set('Authorization', environment_prod_1.environment.token)
        };
    }
    PostagemService.prototype.getAllPostagens = function () {
        return this.http.get('http://localhost:8080/postagens', this.token);
    };
    PostagemService.prototype.getByIdPostagem = function (id) {
        return this.http.get("http://localhost:8080/postagens/" + id, this.token);
    };
    PostagemService.prototype.postPostagem = function (postagem) {
        return this.http.post('http://localhost:8080/postagens', postagem, this.token);
    };
    PostagemService.prototype.putPostagem = function (postagem) {
        return this.http.put('http://localhost:8080/postagens', postagem, this.token);
    };
    PostagemService.prototype.getByTituloPostagem = function (titulo) {
        return this.http.get("http://localhost:8080/postagens/titulo/" + titulo, this.token);
    };
    PostagemService.prototype.deletePostagem = function (id) {
        return this.http["delete"]("http://localhost:8080/postagens/" + id, this.token);
    };
    PostagemService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostagemService);
    return PostagemService;
}());
exports.PostagemService = PostagemService;
