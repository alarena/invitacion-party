import { Routes } from '@angular/router';
import { InvitacionComponent } from './components/invitacion/invitacion.component';

export const routes: Routes = [
  { path: 'invitacion', component: InvitacionComponent }, // ✅ Ruta Correcta
  { path: '', redirectTo: '/invitacion', pathMatch: 'full' }, // ✅ Redirigir a /invitacion automáticamente
  { path: '**', redirectTo: '/invitacion' } // ✅ Redirigir cualquier ruta no encontrada
];
