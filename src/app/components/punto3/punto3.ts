import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {

  iconos = ['🎸', '🎻', '🪕', '🎸', '🎻', '🪕', '🎹', '🎷', '🎺', '🎹', '🎷', '🎺'];
  cartas: any[] = [];
  intentos: number = 0;
  maxIntentos: number = 10;
  seleccionadas: any[] = [];
  juegoIniciado: boolean = false;
  bloquearTablero: boolean = false;
  intentoHabilitado: boolean = false;

  constructor() {
    this.inicializarTablero();
  }

  inicializarTablero() {
    // Mezclamos los iconos aleatoriamente
    const mezclados = [...this.iconos].sort(() => Math.random() - 0.5);
    this.cartas = mezclados.map(icono => ({
      valor: icono,
      visible: false,
      emparejada: false
    }));
    this.intentos = this.maxIntentos;
    this.juegoIniciado = false;
    this.intentoHabilitado = false;
    this.seleccionadas = [];
  }

  iniciarJuego() {
    this.juegoIniciado = true;
    this.intentoHabilitado = false;
  }

  habilitarIntento() {
    if (this.juegoIniciado && !this.bloquearTablero && this.seleccionadas.length === 0 && this.intentos > 0) {
      this.intentoHabilitado = true;
    }
  }

  voltearCarta(carta: any) {
    // Validaciones: juego iniciado, tablero no bloqueado, carta no visible y máximo 2 seleccionadas
    if (!this.juegoIniciado || !this.intentoHabilitado || this.bloquearTablero || carta.visible || carta.emparejada) return;

    carta.visible = true;
    this.seleccionadas.push(carta);

    if (this.seleccionadas.length === 2) {
      this.intentoHabilitado = false;
      this.verificarPareja();
    }
  }

  verificarPareja() {
    this.bloquearTablero = true;
    const [c1, c2] = this.seleccionadas;

    if (c1.valor === c2.valor) {
      c1.emparejada = true;
      c2.emparejada = true;
      this.seleccionadas = [];
      this.bloquearTablero = false;
      this.verificarVictoria();
    } else {
      // Si falla, restamos intento y tapamos después de 1 segundo
      this.intentos--;
      setTimeout(() => {
        c1.visible = false;
        c2.visible = false;
        this.seleccionadas = [];
        this.bloquearTablero = false;
        this.verificarDerrota();
      }, 1000);
    }
  }

  verificarVictoria() {
    if (this.cartas.every(c => c.emparejada)) {
      alert('¡Victoria! Has encontrado todas las parejas.');
      this.juegoIniciado = false;
    }
  }

  verificarDerrota() {
    if (this.intentos === 0) {
      alert('Juego terminado. Te quedaste sin intentos.');
      this.juegoIniciado = false;
    }
  }
}
