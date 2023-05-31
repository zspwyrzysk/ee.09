import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataConfig } from '../../../interfaces/data-config';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  //zmienna from child component footer
  @Input()
  author: string | undefined;
  message: string | undefined;
  MyData: DataConfig | undefined;
  constructor() {}
  
  @Output()
  zmiennaEksportujaca = new EventEmitter();

  ngOnInit() {
    this.message = `message form child ${this.constructor.name}`;
    this.MyData = {message: this.message, status: 200};
    this.eksport();
  }
  eksport() {
    this.zmiennaEksportujaca.emit(this.MyData);
  }
}
