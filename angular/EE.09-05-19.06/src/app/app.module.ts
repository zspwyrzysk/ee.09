import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FibComponent } from './components/fib/fib.component';
import { LiczbyComponent } from './components/liczby/liczby.component';

@NgModule({
  declarations: [
    AppComponent,
    FibComponent,
    LiczbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
