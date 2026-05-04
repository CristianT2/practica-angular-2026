import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header, Footer],
  styleUrl: './app.css',
  template : `
    <header>
      <app-header/>
    </header>
    <main class="my-3">
      <router-outlet/>
    </main>
    <footer>
      <app-footer/>
    </footer>
  `
})
export class App {
  protected readonly title = signal('practica-angular');
}
