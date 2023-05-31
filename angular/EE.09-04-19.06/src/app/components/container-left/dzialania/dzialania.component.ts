import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataConfig } from '../../../interfaces/data-config';

@Component({
  selector: 'app-dzialania',
  templateUrl: './dzialania.component.html',
  styleUrls: ['./dzialania.component.css']
})
export class DzialaniaComponent implements OnInit {
  
  result: number;
  operator: string;
  message: string;
  @Input()
  MyData: DataConfig = {message: "", status: 0};
  constructor() {
    this.result = 0;
    this.message = '';
    this.operator = '';
  }
  onItemSelector(operator: string) {
    this.operator = operator;
  }
  onSubmit(form1: NgForm) {
    console.log("a: " + form1.value.a);
    console.log("b: " + form1.value.b);
    console.log(form1.value);    
    let a = form1.value.a;
    let b = form1.value.b;
    if(this.operator === "+") this.result = a + b;
    if(this.operator === "-") this.result = a - b;
    if(this.operator === "*") this.result = a * b;
    if(this.operator === "/") this.result = a / b;
    if(this.operator === "^") this.result = Math.pow(a, b);
    console.log(this.result);
    this.message = `Wynik: ${this.result}`;
  }

  ngOnInit() {
  }
  
}
