import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MnozenieComponent } from './mnozenie/mnozenie.component';
import { DataConfig } from './interfaces/data-config';

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
  onOutletLoaded(component: { MyData: object; }) {
    //console.log(component);
    if (component instanceof MnozenieComponent) {
      component.MyData = this.MyData;
    }
    //component.footer_message = this.footer_message;
  }
}
