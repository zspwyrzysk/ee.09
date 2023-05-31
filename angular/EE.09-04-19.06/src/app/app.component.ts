import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'EE.09-04-19.06';
  author = "John Doe";
  footer_message: string = "";
  
  import(odebranaZmienna: any) {
    this.footer_message = odebranaZmienna;
	 	console.log(odebranaZmienna);
	}
}
