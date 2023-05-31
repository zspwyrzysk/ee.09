import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mnozenie',
  templateUrl: './mnozenie.component.html',
  styleUrls: ['./mnozenie.component.css']
})
export class MnozenieComponent implements OnInit {
  @Input()
  footer_message: string = "no message";
  public constructor() {}
  
  
  ngOnInit() {
  }
}
