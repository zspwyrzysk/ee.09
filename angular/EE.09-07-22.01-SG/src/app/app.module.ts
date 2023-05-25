import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './galeria/galeria.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelLeftComponent } from './components/panel-left/panel-left.component';
import { PanelRightComponent } from './components/panel-right/panel-right.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PanelLeftComponent,
    PanelRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
