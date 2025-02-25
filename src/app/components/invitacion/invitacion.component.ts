import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent {
  nombreInvitado: string = ''; // Guardará el nombre del invitado
  confirmado: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 📌 Capturar el nombre desde la URL
    this.route.queryParams.subscribe(params => {
      if (params['nombre']) {
        this.nombreInvitado = decodeURIComponent(params['nombre']); // Decodifica el nombre
      }
    });

    // 📌 Revisar si el usuario ya confirmó anteriormente
    const asistenciaGuardada = localStorage.getItem('asistencia');
    if (asistenciaGuardada) {
      this.confirmado = true;
    }
  }

  confirmarAsistencia() {
    this.confirmado = true;
    localStorage.setItem('asistencia', 'confirmada');
    this.enviarNotificacion();
  }

  enviarNotificacion() {
    const telefonoOrganizadora = '526674100316';
    const mensaje = `Hola! ${this.nombreInvitado} ha confirmado su asistencia 🎉.`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${telefonoOrganizadora}&text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
  }
}
