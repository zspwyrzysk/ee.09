import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { ContainerRightComponent } from './layout/container-right/container-right.component';
import { ContainerLeftComponent } from './layout/container-left/container-left.component';
import { ContainerLeftTwoOneComponent } from '../container-left-two/container-left-two-one/container-left-two-one.component';
import { ContainerLeftTwoTwoComponent } from '../container-left-two/container-left-two-two/container-left-two-two.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContainerLeftComponent,
    ContainerRightComponent,
    FooterComponent,
    ContainerLeftTwoOneComponent,
    ContainerLeftTwoTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ContainerLeftComponent,
    ContainerRightComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule { }
