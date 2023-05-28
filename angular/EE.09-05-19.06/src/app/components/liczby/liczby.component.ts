import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './liczby.component.html',
  styleUrls: ['./liczby.component.css']
})
export class LiczbyComponent {
  message: string;
  constructor() {
    this.message = "";
  }
  onSubmit(form1: NgForm) {
    let a1 = form1.value.a1;
    let n = form1.value.n;
    let r = form1.value.r;
    let wyraz = a1;
    for(let i = 1; i <= n; i++) {
      if(i < n) this.message += `${wyraz}, `;
      else this.message += `${wyraz}`;
      wyraz += r;
    }
  }
}
