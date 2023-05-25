import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dzialania',
  templateUrl: './dzialania.component.html',
  styleUrls: ['./dzialania.component.css']
})
export class DzialaniaComponent implements OnInit{
  result: number;

  constructor() {
    this.result = 0;
  }
  onSubmit(form1: NgForm) {
    // Przekaliśmy naszą zmienną lokalną 'f' z formularza dzięki czemu mamy dostęp do poszczególnych pól
    console.log("a: " + form1.value.a);
    console.log("b: " + form1.value.b);
    console.log(form1.value);
    let a = form1.value.a;
    let b = form1.value.b;
    this.result = 0;
    if(form1.value.o1 === "+") this.result = a + b;
    this.result = 0;
    if(form1.value.o2 === "-") this.result = a - b;
    
  }
  
  ngOnInit() {
  }
}
