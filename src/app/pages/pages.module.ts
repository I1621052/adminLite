import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { PerfilComponent } from './perfil/perfil.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        PerfilComponent,
        HabitacionesComponent,
        ReservasComponent,
    ],
    exports: [
        DashboardComponent,
        PagesComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }