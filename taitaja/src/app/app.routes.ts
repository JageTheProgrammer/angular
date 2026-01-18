import { Routes } from '@angular/router';
import { AboutPageComponent } from './ciomponents/about/about';
import { Home } from './ciomponents/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: AboutPageComponent
  }
];
