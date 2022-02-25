//Core module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

//own module
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { AmpouleComponent } from './directives/ampoule/ampoule.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { Btc2UsdPipe } from './pipes/btc2-usd.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FrontComponent } from './components/front/front.component';
import { BackComponent } from './components/back/back.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import {HttpClientModule} from "@angular/common/http";
import { TestHttpComponent } from './components/test-http/test-http.component';
import {AuthentificationInterceptorProvider} from "./auth/auth.interceptor";
import {CvModule} from "./cv/cv.module";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    NgstyleComponent,
    MiniWordComponent,
    AmpouleComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2UsdPipe,
    TodoComponent,
    TestFormComponent,
    LoginComponent,
    HeaderComponent,
    FrontComponent,
    BackComponent,
    NF404Component,
    TestObservableComponent,
    TestHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [AuthentificationInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
