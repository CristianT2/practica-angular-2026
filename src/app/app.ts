import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Punto1 } from './components/punto1/punto1';

@Component({
  selector: 'app-root',
  imports: [ Header, Punto1, Footer],
  styleUrl: './app.css',
  template : `
    <header>
      <app-header/>
    </header>
    <main class="my-3">
      <app-punto1></app-punto1>
    </main>
    <footer>
      <app-footer/>
    </footer>
  `
})
export class App {
  protected readonly title = signal('practica-angular');
}
