import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";


import { NavComponent } from './container-top/nav/nav.component';
import { ContainerRightComponent } from './container-right/container-right.component';
import { MnozenieComponent } from './container-left/mnozenie/mnozenie.component';
import { DzialaniaComponent } from './container-left/dzialania/dzialania.component';
import { FooterComponent } from './container-bottom/footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    ContainerRightComponent,
    MnozenieComponent,
    DzialaniaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  exports: [
    NavComponent,
    ContainerRightComponent,
    MnozenieComponent,
    DzialaniaComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
