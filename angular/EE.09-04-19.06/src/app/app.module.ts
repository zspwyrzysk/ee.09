import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MnozenieComponent } from './mnozenie/mnozenie.component';
import { DzialaniaComponent } from './dzialania/dzialania.component';

@NgModule({
  declarations: [
    AppComponent,
    MnozenieComponent,
    DzialaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Użycie paczki będzie możliwe w każdym komponencie
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
