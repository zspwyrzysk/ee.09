import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  author: string = "";
  message: string = "Hello from child";
  
  @Output()
  zmiennaEksportujaca = new EventEmitter();

  ngOnInit() {
    this.message = 'Zmienna z componentu footer';
    this.eksport();
  }
  eksport() {
    this.zmiennaEksportujaca.emit(this.message);
  }
}
