import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { KalkulacjaComponent } from './components/kalkulacja/kalkulacja.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kalkulacja', component: KalkulacjaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
