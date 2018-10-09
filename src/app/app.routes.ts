import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { OsComponent } from './os/os.component';
const appRoutes: Routes = [
    { path: '', component: AgendaComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'ordemServico', component: OsComponent },
    { path: '**', component: AgendaComponent }
];

export const routing = RouterModule.forRoot(appRoutes);