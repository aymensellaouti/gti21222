import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CvComponent} from "./cv/cv.component";
import {ItemComponent} from "./item/item.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {EmbaucheComponent} from "./embauche/embauche.component";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {AddPersonneComponent} from "./add-personne/add-personne.component";
import {DetailCvComponent} from "./detail-cv/detail-cv.component";
import {CvRouting} from "./cv.routing";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    AddPersonneComponent,
    DetailCvComponent,
  ],
  imports: [
    CommonModule,
    CvRouting,
    FormsModule
  ]
})
export class CvModule { }
