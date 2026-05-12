import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inscripcion } from '../../models/inscripcion';
import { InscripcionService } from '../../services/inscripcion-service';

@Component({
  selector: 'app-parte2',
  imports: [CommonModule, FormsModule],
  templateUrl: './parte2.html',
  styleUrl: './parte2.css',
})
export class Parte2 implements OnInit {

  nuevaInscripcion: Inscripcion = {
    dni: '', precio: 0, categoriaAlumno: 0,
    fechaInscripcion: new Date(), email: '', curso: ''
  };

  fechaString: string = '';
  precioFinal: number = 0;
  indiceEditando: number = -1;

  constructor(public inscripcionService: InscripcionService) { }

  ngOnInit() {
    this.calcularPrecioFinal();
  }

  calcularPrecioFinal() {
    if (this.nuevaInscripcion.precio > 0 && this.nuevaInscripcion.categoriaAlumno > 0) {
      this.precioFinal = this.inscripcionService.obtenerPrecioConDescuento(
        this.nuevaInscripcion.precio,
        this.nuevaInscripcion.categoriaAlumno
      );
    } else {
      this.precioFinal = 0;
    }
  }

  registrar() {
    if (!this.nuevaInscripcion.dni || this.nuevaInscripcion.precio <= 0) {
      alert('Por favor, complete los campos obligatorios (DNI y Precio).');
      return;
    }

    // Convertimos el string del input a objeto Date antes de guardar
    this.nuevaInscripcion.fechaInscripcion = new Date(this.fechaString);

    if (this.indiceEditando === -1) {
      this.inscripcionService.agregarInscripcion(this.nuevaInscripcion);
    } else {
      this.inscripcionService.modificarInscripcion(this.indiceEditando, this.nuevaInscripcion);
      this.indiceEditando = -1;
    }

    this.resetearFormulario();
  }

  // Función para cargar los datos en el formulario
  prepararEdicion(item: Inscripcion, index: number) {
    this.indiceEditando = index;
    this.nuevaInscripcion = { ...item };
    this.fechaString = new Date(item.fechaInscripcion).toISOString().split('T')[0];
    this.calcularPrecioFinal();
  }

  eliminar(index: number) {
    if (confirm('¿Está seguro de eliminar esta inscripción?')) {
      this.inscripcionService.eliminarInscripcion(index);
    }
  }

  resetearFormulario() {
    this.nuevaInscripcion = {
      dni: '',
      precio: 0,
      categoriaAlumno: 0,
      fechaInscripcion: new Date(),
      email: '',
      curso: ''
    };
    this.fechaString = '';
    this.precioFinal = 0;
    this.indiceEditando = -1;
  }

}
