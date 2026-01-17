import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  // generate 20 clovers with random positions and speeds
  clovers = Array.from({ length: 20 }).map(() => ({
    left: Math.random() * 100,
    size: 20 + Math.random() * 30,
    duration: 10 + Math.random() * 20
  }));
}
