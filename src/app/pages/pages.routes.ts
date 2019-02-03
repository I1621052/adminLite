import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReservasComponent } from './reservas/reservas.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'perfil', component: PerfilComponent },
            { path: 'habitaciones', component: HabitacionesComponent },
            { path: 'reserva', component: ReservasComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
            
        ]
    }
]
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);