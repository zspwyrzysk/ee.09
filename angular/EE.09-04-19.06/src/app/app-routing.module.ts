import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DzialaniaComponent } from './components/container-left/dzialania/dzialania.component';
import { MnozenieComponent } from './components/container-left/mnozenie/mnozenie.component';

const routes: Routes = [
  { path: '', component: DzialaniaComponent },
  { path: 'dzialania', component: DzialaniaComponent },
  { path: 'mnozenie', component: MnozenieComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
