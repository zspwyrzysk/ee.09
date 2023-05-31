import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  
  @Output()
  zmiennaEksportujaca = new EventEmitter();

  ngOnInit() {
    this.message = `message form ${this.constructor.name}`;
    this.eksport();
  }
  eksport() {
    this.zmiennaEksportujaca.emit(this.message);
  }
}
