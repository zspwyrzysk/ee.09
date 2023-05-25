import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class AppComponent {
  title = 'Galeria';
  images = ["lanzarotte.jpg", "pekin.jpg", "serengeti.jpg", "tajlandia.jpg", "wenecja.jpg"];
  current_image = 'lanzarotte.jpg';
  changeImg(number_of_image: number) {
    // console.log(number_of_image);
    this.current_image = this.images[number_of_image];
  }
}
