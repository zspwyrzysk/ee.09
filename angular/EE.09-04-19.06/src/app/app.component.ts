import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title: string = 'EE.09-04-19.06';
  author = "John Doe";
  footer_message: string = "No message";
  public constructor(private changeDetector: ChangeDetectorRef) {

  }
  //zmienna from child component footer
  import(odebranaZmienna: string): void {
    this.footer_message = odebranaZmienna;
		//console.log(odebranaZmienna);
	}
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  //zmienna z footer
  onOutletLoaded(component: { footer_message: string; }) {
    console.log(component);
    component.footer_message = this.footer_message;
  }
}
