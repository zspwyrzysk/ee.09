import { Component, OnInit, Input } from '@angular/core';
import { DataConfig } from '../interfaces/data-config';

@Component({
  selector: 'app-mnozenie',
  templateUrl: './mnozenie.component.html',
  styleUrls: ['./mnozenie.component.css']
})
export class MnozenieComponent implements OnInit {
  @Input()
  MyData: DataConfig = {message: "", status: 0};
  public constructor() {}
  
  
  ngOnInit() {
  }
}
