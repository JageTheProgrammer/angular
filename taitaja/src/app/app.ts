import { Component, signal } from '@angular/core';
import { Navigationbar } from './core/navbar/navbar';
import { Home } from './ciomponents/home/home';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navigationbar, Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Maatiala Dev');
}
