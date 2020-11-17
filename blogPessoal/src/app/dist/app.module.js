"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var navbar_component_1 = require("./navbar/navbar.component");
var footer_component_1 = require("./footer/footer.component");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var feed_component_1 = require("./feed/feed.component");
var perfil_lateral_component_1 = require("./perfil-lateral/perfil-lateral.component");
var login_component_1 = require("./login/login.component");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var ngx_order_pipe_1 = require("ngx-order-pipe");
var post_tema_component_1 = require("./post-tema/post-tema.component");
var put_postagem_component_1 = require("./put-postagem/put-postagem.component");
var put_tema_component_1 = require("./put-tema/put-tema.component");
var delete_postagem_component_1 = require("./delete-postagem/delete-postagem.component");
var delete_tema_component_1 = require("./delete-tema/delete-tema.component");
var alertas_component_1 = require("./alertas/alertas.component");
var modal_1 = require("ngx-bootstrap/modal");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                feed_component_1.FeedComponent,
                perfil_lateral_component_1.PerfilLateralComponent,
                login_component_1.LoginComponent,
                cadastro_component_1.CadastroComponent,
                post_tema_component_1.PostTemaComponent,
                put_postagem_component_1.PutPostagemComponent,
                put_tema_component_1.PutTemaComponent,
                delete_postagem_component_1.DeletePostagemComponent,
                delete_tema_component_1.DeleteTemaComponent,
                alertas_component_1.AlertasComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angular_fontawesome_1.FontAwesomeModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ngx_order_pipe_1.OrderModule,
                modal_1.ModalModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
