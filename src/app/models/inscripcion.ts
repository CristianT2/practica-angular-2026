export interface Inscripcion {

  dni: string;
  precio: number;
  categoriaAlumno: number; // 1, 2 o 3
  fechaInscripcion: Date;
  email: string;
  curso: string;
}
