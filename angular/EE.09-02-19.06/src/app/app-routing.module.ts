import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ObliczeniaComponent } from './obliczenia/obliczenia.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'obliczenia', component: ObliczeniaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
