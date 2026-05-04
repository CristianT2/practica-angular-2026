import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {

  productos = [
    {
      nombre: "Lenovo ThinkPad X1",
      descripcion: "Procesadores hasta Intel® Core™ i7 de 11va generación y Evo® opcional, Impresionante pantalla de 14 pulgadas",
      imagen: `assets/images/producto1.jpg`,
      precio: 3050999,
    },
    {
      nombre: "ASUS Zenbook Pro 16X",
      descripcion: "Procesador Intel® Core™ hasta i9 12ª Gen,Graficos NVIDIA® GeForce RTX™ 3060 Memoria RAM hasta 32 GB Almacenamiento hasta 1TB SSD",
      imagen: `assets/images/producto2.webp`,
      precio: 3399999,
    },
    {
      nombre: "Samsung Galaxy Book3",
      descripcion: "Procesador Intel® Core™ i5-1335U Memoria RAM 8 GB LPDDR4x Almacenamiento 512 GB NVMe SSD",
      imagen: `assets/images/producto3.jpeg`,
      precio: 2169999,
    },
    {
      nombre: "iPhone 13 Pro Max",
      descripcion: "Pantalla: 6.7 pulgadas, 1284 x 2778 pixels Cámara: Cuádruple, 12MP+12MP +12MP+TOF 3D",
      imagen: `assets/images/producto4.webp`,
      precio: 2919900,
    },
    {
      nombre: "Samsung Galaxy S23 Ultra",
      descripcion: "Pantalla AMOLED de 6,8 pulgadas, 12 GB de RAM256, 1 TB de memoria, procesador Qualcomm Snapdragon 8",
      imagen: `assets/images/producto5.jpeg`,
      precio: 2550899,
    },
    {
      nombre: "Monitor Acer Predator X34",
      descripcion: "Pantalla IPS curvo LCD de 34 pulgadas con una resolución de 3440px-1440px es giratorio y reclinable",
      imagen: `assets/images/producto6.webp`,
      precio: 1529982,
    },
  ];

  carrito: any[] = [];
  total: number = 0;

  constructor(){};

  // Función para agregar al carrito
  agregarAlCarrito(producto: any){
    this.carrito.push(producto);
    this.actualizarTotal();
  };

  // Función para calcular el total
  actualizarTotal() {
    this.total = this.carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  };

  // Función para vaciar el carrito
  limpiarCarrito() {
    this.carrito = [];
    this.total = 0;
  }
}
