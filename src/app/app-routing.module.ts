import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {MiniWordComponent} from "./directives/mini-word/mini-word.component";
import {ColorComponent} from "./components/color/color.component";
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {DetailCvComponent} from "./cv/detail-cv/detail-cv.component";
import {AddPersonneComponent} from "./cv/add-personne/add-personne.component";
import {FrontComponent} from "./components/front/front.component";
import {BackComponent} from "./components/back/back.component";
import {NF404Component} from "./components/nf404/nf404.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./auth/guards/auth.guard";

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: FrontComponent, children: [
      {path: 'word', component: MiniWordComponent},
      {path: 'color/:favoriteColor', component: ColorComponent},
  ]},
  {path: 'back', component: BackComponent, children: [
    {path: 'todo', component: TodoComponent},
  ]},
  {
    path:"cv",
    loadChildren:()=>import('./cv/cv.module').then(
      m=>m.CvModule
    ),
  },

  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
