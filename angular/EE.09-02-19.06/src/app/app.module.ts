import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObliczeniaComponent } from './obliczenia/obliczenia.component';
import { MainComponent } from './main/main.component';

import {provideClientHydration} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    ObliczeniaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
