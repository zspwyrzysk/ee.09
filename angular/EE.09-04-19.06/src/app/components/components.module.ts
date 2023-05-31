import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { ContainerRightComponent } from './container-right/container-right.component';
import { MnozenieComponent } from './mnozenie/mnozenie.component';
import { DzialaniaComponent } from './dzialania/dzialania.component';
import { FooterComponent } from './footer/footer.component';

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
    FormsModule
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
