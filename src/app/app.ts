import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  styleUrl: './app.css',
  template : `
    <header>
      <app-header></app-header>
    </header>
    <main></main>
    <footer>
      <app-footer></app-footer>
    </footer>
  `
})
export class App {
  protected readonly title = signal('practica-angular');
}
