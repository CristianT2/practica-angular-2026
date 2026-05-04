import { Routes } from '@angular/router';
import { Punto1 } from './components/punto1/punto1';
import { Punto2 } from './components/punto2/punto2';

export const routes: Routes = [
    {
        path: '',
        component: Punto1,
        title: 'Eventos'
    },
    {
        path: 'punto2',
        component: Punto2,
        title: 'Productos'
    }
];
