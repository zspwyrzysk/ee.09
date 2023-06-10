import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-obliczenia',
  templateUrl: './obliczenia.component.html',
  styleUrls: ['./obliczenia.component.css']
})
export class ObliczeniaComponent {
  message: string = '';

  onSubmit(form1: NgForm) {
    const typ_paliwa: number = form1.value.typ_paliwa;
    const ile_paliwa: number = form1.value.ile_paliwa;
    let wartosc: number = 0.0;
    switch(typ_paliwa) {
      case 1: wartosc = 4 * ile_paliwa; break;
      case 2: wartosc = 3.5 * ile_paliwa; break;
    }
    this.message = `koszt paliwa: ${wartosc} zł`;
  }

}
