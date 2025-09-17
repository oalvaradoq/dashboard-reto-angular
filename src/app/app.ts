import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './components/navigation/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar],
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('dashboard-reto-angular');
}
