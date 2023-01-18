import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule //Módulo de Paginación
  ],
  exports:[
    CardComponent
  ]
})
export class ComponentsModule { }
