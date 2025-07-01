import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: HomeLayout
  }
];
export default pagesRoutes;
