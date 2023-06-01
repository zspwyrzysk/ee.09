import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-container-left',
  templateUrl: './container-left.component.html',
  styleUrls: ['./container-left.component.css']
})
export class ContainerLeftComponent {
  onSubmit(form1: NgForm) {
    console.log(form1);
  }
}
