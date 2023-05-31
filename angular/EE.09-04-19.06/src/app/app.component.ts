import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { DataConfig } from './interfaces/data-config';

import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, flameIcon, cogIcon, bankIcon, cloudIcon} from '@cds/core/icon';
import { MnozenieComponent } from './components/container-left/mnozenie/mnozenie.component';
import { DzialaniaComponent } from './components/container-left/dzialania/dzialania.component';

ClarityIcons.addIcons(userIcon, cloudIcon);
ClarityIcons.addIcons(flameIcon);
ClarityIcons.addIcons(cogIcon);
ClarityIcons.addIcons(bankIcon);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title: string = 'EE.09-04-19.06';
  author = `John Doe from parent ${this.constructor.name}`;
  MyData: DataConfig = {message: "", status: 0};
  public constructor(private changeDetector: ChangeDetectorRef) {

  }
  //zmienna from child component footer
  import(odebranaZmienna: { message: string; status: number; }): void {
    this.MyData = odebranaZmienna;
		//console.log(this.MyData);
	}
  
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  
  //zmienna z footer
  onOutletLoaded(component: { MyData: DataConfig; }) {
    //console.log(component);
    if (component instanceof MnozenieComponent) {
      component.MyData = this.MyData;
    }
    if (component instanceof DzialaniaComponent) {
      component.MyData = this.MyData;
    }
    //component.footer_message = this.footer_message;
  }
}
