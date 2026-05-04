import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {

  eventos = [
    {
      nombre: 'Taller de Yoga al Aire Libre',
      descripcion: 'Una sesión de relajación profunda frente a los cerros.',
      foto: `assets/images/yoga.webp`,
    },
    {
      nombre: 'Festival Gastronómico',
      descripcion: 'Vení a degustar los mejores platos regionales y vinos.',
      foto: `assets/images/gastronomico.jpg`
    },
    {
      nombre: 'Concierto de Cuerdas',
      descripcion: 'Una noche mágica con violines, guitarras y charangos.',
      foto: `assets/images/cuerdas.jpg`
    },
    {
      nombre: 'Observación Astronómica',
      descripcion: 'Explorá las constelaciones con telescopios profesionales.',
      foto: `assets/images/astronomico.webp`
    },
  ];
}
