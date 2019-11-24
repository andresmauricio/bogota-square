import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bogota-square';
  lat = 51.678418;
  lng = 7.809007;
  lugares: any = [
    {active: true , nombre: 'lugar 1'},
    {active: false , nombre: 'lugar 2'},
    {active: true , nombre: 'lugar 3'},

  ];
}
