import { Component, OnInit, signal } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-container-left-two-two',
  templateUrl: './container-left-two-two.component.html',
  styleUrls: ['./container-left-two-two.component.css']
})
export class ContainerLeftTwoTwoComponent implements OnInit {
  message = signal("");
  haircut_price: number = 0;

  onSubmit(form1: NgForm) {
    switch(form1.value.promotion) {
      case 'k': this.haircut_price = 25; break;
      case 's': this.haircut_price = 30; break;
      case 'p': this.haircut_price = 40; break;
      case 'd': this.haircut_price = 50; break;
    }
    this.message.set(`Cena strzyżenia: ${this.haircut_price}`);
  }
  ClearMessage() {
    this.message.set("");
  }
  ngOnInit() {
    this.message.set("");
  }
}
