import { Component, OnInit, Input } from '@angular/core';
import { DataConfig } from 'src/app/interfaces/data-config';

@Component({
  selector: 'app-container-right',
  templateUrl: './container-right.component.html',
  styleUrls: ['./container-right.component.css']
})
export class ContainerRightComponent implements OnInit {
  @Input()
  MyData: DataConfig = {message: "", status: 0};
  
  ngOnInit() {
  }
}
