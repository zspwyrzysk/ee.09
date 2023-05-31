import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface SquareConfig {
  message: string;
  width: number;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  //zmienna from child component footer
  @Input()
  author: string = "No author";
  message: string | undefined;

  MyData = {message: "", status: 0};
  
  
  @Output()
  zmiennaEksportujaca = new EventEmitter();

  ngOnInit() {
    this.message = `message form ${this.constructor.name}`;
    this.MyData = {message: this.message, status: 200};
    this.eksport();
  }
  eksport() {
    this.zmiennaEksportujaca.emit(this.MyData);
  }
}
