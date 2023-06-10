import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bkColor: string = "Maroon";
  listStyleType: string = "circle";
  textColor: string = "white";
  fontSize: string = "100%";
  borderImg: string = '';
  onChangeBackground(color: string) {
    this.bkColor = color;
  }
  onItemChange(event: any) {
    this.listStyleType = event.target.value;
  }
  onOptionChange(event: any) {
    this.textColor = event.target.value;
  }
  onFontSizeChange(event: any) {
    this.fontSize = event.target.value;
  }
  onDrawBorder(event: any) {
    event.target.checked ? this.borderImg = '1px solid white' : this.borderImg = 'none';
  }
  title = 'EE.09-06-22.01-SG';
}
