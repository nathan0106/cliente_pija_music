import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contrasena',
  imports: [
    FormsModule
  ],
  templateUrl: './contrasena.component.html',
  styleUrl: './contrasena.component.css'
})
export class ContrasenaComponent {

  email: string = '';

  codigoVerificacion: string = '';

  /**
   * Envía un código único al correo del usuario utilizando EmailJS.
   */
  enviarCodigo() {
    const codigo = this.generarCodigo();
    const templateParams = {
      to_email: this.email,
      codigo: codigo
    };

    emailjs.send('tu_service_id', 'tu_template_id', templateParams, 'tu_public_key')
      .then((response) => {
        console.log('Correo enviado:', response);
        alert('Código enviado a tu correo');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Error al enviar el código');
      });
  }

  generarCodigo(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6 dígitos
  }

  cancelar(): void {
    this.router.navigate(['/login']);

  }

  constructor(private router: Router) {}

  irACodigo() {
    this.router.navigate(['/codigo']);
  }
}
