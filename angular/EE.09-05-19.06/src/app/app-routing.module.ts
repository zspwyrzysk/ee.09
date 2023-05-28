import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LiczbyComponent } from './components/liczby/liczby.component';
import { FibComponent } from './components/fib/fib.component';
const routes: Routes = [
  { path: '', component: LiczbyComponent },
  { path: 'fib', component: FibComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
