import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about-page',
  templateUrl: 'about.html',
  styleUrls: ['about.css']
})


export class AboutPageComponent {
  clovers = Array.from({ length: 20 }).map(() => ({
    left: Math.random() * 100,
    size: 20 + Math.random() * 30,
    duration: 10 + Math.random() * 20
  }));
}
