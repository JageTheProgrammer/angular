import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigationbar } from './core/navbar/navbar';
import { FooterComponent } from './core/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navigationbar,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Maatiala Dev');
}
