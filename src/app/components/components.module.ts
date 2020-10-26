import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { LoadingComponent } from '../components/loading/loading.component';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent,
    LoadingComponent
    ,
    ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
