import { Routes } from '@angular/router';
import {WelcomeComponent} from './welcome.component';

export const routes: Routes = [
  {
    path: '**',
    component: WelcomeComponent
  },
  {
    path: '',
    pathMatch: "full",
    component: WelcomeComponent
  }
];
