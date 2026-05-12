import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {

  private inscripciones: Inscripcion[] = [
    {
      dni: '33123456',
      precio: 10000,
      categoriaAlumno: 1,
      fechaInscripcion: new Date(),
      email: 'alvarez@email.com',
      curso: 'Desarrollo Web',
    },
    {
      dni: '37123456',
      precio: 15000,
      categoriaAlumno: 2,
      fechaInscripcion: new Date(),
      email: 'alvarez@email.com',
      curso: 'Seguridad Informática',
    },
    {
      dni: '37123456',
      precio: 15000,
      categoriaAlumno: 3,
      fechaInscripcion: new Date(),
      email: 'alvarez@email.com',
      curso: 'Seguridad Informática',
    },
  ];

  constructor() {}
  
  agregarInscripcion(inscripcion: Inscripcion): void {
    this.inscripciones.push(inscripcion);
  }

  obtenerInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  modificarInscripcion(indice: number, modificada: Inscripcion) {
    this.inscripciones[indice] = { ...modificada };
  }

  eliminarInscripcion(indice: number) {
    this.inscripciones.splice(indice, 1);
  }


  // Función para calcular el total con descuento
  obtenerPrecioConDescuento(precio: number, categoria: number): number {
    let desc = 0;
    if (categoria == 1) desc = 0.35; // Estudiante
    if (categoria == 2) desc = 0.50; // Egresado
    return precio * (1 - desc);
  }

  obtenerEstadisticas(){

    let estadisticas = {
      estudiantes: 0,
      egresados: 0,
      particulares: 0,
      totalRecaudado: 0
    };
    
    this.inscripciones.forEach(i => {
      const cat = Number(i.categoriaAlumno);
      if(cat === 1) estadisticas.estudiantes++;
      else if(cat === 2) estadisticas.egresados++;
      else if(cat === 3) estadisticas.particulares++;

      estadisticas.totalRecaudado += this.obtenerPrecioConDescuento(i.precio, i.categoriaAlumno);
    });

    return estadisticas;
  }
}
