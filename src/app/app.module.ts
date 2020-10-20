import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
