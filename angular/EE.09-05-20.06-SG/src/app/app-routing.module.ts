import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLeftTwoTwoComponent } from './container-left-two/container-left-two-two/container-left-two-two.component';
import { ContainerLeftTwoOneComponent } from './container-left-two/container-left-two-one/container-left-two-one.component';

const routes: Routes = [
  { path: '', component: ContainerLeftTwoOneComponent },
  { path: 'home', component: ContainerLeftTwoOneComponent },
  { path: 'fryzura', component: ContainerLeftTwoTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
