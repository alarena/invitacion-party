import { Component } from '@angular/core';
import { InvitacionComponent } from './components/invitacion/invitacion.component'; // 👈 Importamos el componente

@Component({
  selector: 'app-root',
  standalone: true, // 👈 Indica que este componente es standalone
  imports: [InvitacionComponent], // 👈 Importa el componente aquí
  template: `<app-invitacion></app-invitacion>`, // 👈 Usa el componente aquí
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
