"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var delete_postagem_component_1 = require("./delete-postagem/delete-postagem.component");
var delete_tema_component_1 = require("./delete-tema/delete-tema.component");
var feed_component_1 = require("./feed/feed.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var post_tema_component_1 = require("./post-tema/post-tema.component");
var put_postagem_component_1 = require("./put-postagem/put-postagem.component");
var put_tema_component_1 = require("./put-tema/put-tema.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'feed', component: feed_component_1.FeedComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'feed/cadastro-tema', component: post_tema_component_1.PostTemaComponent },
    { path: 'editar-post/:id', component: put_postagem_component_1.PutPostagemComponent },
    { path: 'delete-post/:id', component: delete_postagem_component_1.DeletePostagemComponent },
    { path: 'editar-tema/:id', component: put_tema_component_1.PutTemaComponent },
    { path: 'delete-tema/:id', component: delete_tema_component_1.DeleteTemaComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
