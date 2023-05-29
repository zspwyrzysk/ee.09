import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-kalkulacja',
  templateUrl: './kalkulacja.component.html',
  styleUrls: ['./kalkulacja.component.css']
})
export class KalkulacjaComponent {
  message: string;
  constructor() {
    this.message = "";
  }
  onSubmit(form1: NgForm) {
    // console.log("OK");
    const dystans = form1.value.dystans;
    const spalanie = form1.value.spalanie;
    // console.log(dystans, spalanie);
    // console.log(typeof dystans, typeof spalanie);
    let liters: number;
    liters = spalanie*dystans/100;
    this.message = `Potrzebujesz: ${liters} litrów paliwa`;
  }
}
