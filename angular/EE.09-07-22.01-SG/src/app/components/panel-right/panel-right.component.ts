import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.css']
})
export class PanelRightComponent {
  showVar = true;
  toggleImage() {
    this.showVar = !this.showVar;
  }
}
