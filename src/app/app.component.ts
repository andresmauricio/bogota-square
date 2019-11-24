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
    {plan: 'gratuito', cercania : 1, distancia: 10, active: true , nombre: 'lugar 1'},
    {plan: 'pagado', cercania : 3, distancia: 20, active: false , nombre: 'lugar 2'},
    {plan: 'gratuito', cercania : 2, distancia: 40, active: true , nombre: 'lugar 3'},
    {plan: 'gratuito', cercania : 1, distancia: 10, active: true , nombre: 'lugar 4'},
    {plan: 'pagado', cercania : 3, distancia: 20, active: false , nombre: 'lugar 5'},
    {plan: 'gratuito', cercania : 2, distancia: 40, active: true , nombre: 'lugar 6'},

  ];
}
