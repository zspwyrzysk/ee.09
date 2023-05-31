import { Component, Input } from '@angular/core';
import { MnozenieComponent } from '../../container-left/mnozenie/mnozenie.component';
import { DataConfig } from 'src/app/interfaces/data-config';

import '@cds/core/alert/register.js';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input()
  MyData: DataConfig = {message: "", status: 0};
  //zmienna z footer
  onOutletLoaded(component: { MyData: DataConfig; }) {
    //console.log(component);
    if (component instanceof MnozenieComponent) {
      component.MyData = this.MyData;
    }
    //component.footer_message = this.footer_message;
  }
}
