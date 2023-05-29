import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TwarzComponent } from './twarz/twarz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'twarz', component: TwarzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
