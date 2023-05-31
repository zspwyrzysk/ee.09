import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { ContainerRightComponent } from './container-right/container-right.component';
import { MnozenieComponent } from './container-left/mnozenie/mnozenie.component';
import { DzialaniaComponent } from './container-left/dzialania/dzialania.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerLeftComponent } from './container-left/container-left.component';

@NgModule({
  declarations: [
    NavComponent,
    ContainerLeftComponent,
    ContainerRightComponent,
    MnozenieComponent,
    DzialaniaComponent,
    FooterComponent,
    ContainerLeftComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
  ],
  exports: [
    NavComponent,
    ContainerLeftComponent,
    ContainerRightComponent,
    MnozenieComponent,
    DzialaniaComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
