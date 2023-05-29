import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-twarz',
  templateUrl: './twarz.component.html',
  styleUrls: ['./twarz.component.css']
})
export class TwarzComponent {
  result: string;
  constructor() {
    this.result  = "";
  }
  onSubmit(form1: NgForm) {
    let sum = 0;    
    if(form1.value.piling) sum += 45;
    if(form1.value.maska) sum += 30;
    if(form1.value.masaz_twarzy) sum += 20;
    if(form1.value.regulacja_brwi) sum += 5;
    this.result  = `Cena zabiegów: ${sum}`;
  }
}
