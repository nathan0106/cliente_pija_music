import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';


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


  generarCodigo(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  /**
   * Envía un código único al correo del usuario utilizando EmailJS.
   */
  enviarCodigo(): void {
    const codigo = this.generarCodigo();

    const templateParams = {
      to_email: this.email,
      codigo: codigo,
    };

    // Reemplaza con tus propias claves de EmailJS
    const SERVICE_ID = 'tu_service_id';
    const TEMPLATE_ID = 'tu_template_id';
    const USER_ID = 'tu_user_id'; // o public key

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Correo enviado correctamente:', response.status, response.text);
        alert('Hemos enviado un código a tu correo electrónico.');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('No se pudo enviar el correo. Intenta nuevamente.');
      });
  }

  cancelar(): void {
    this.email = '';

  }
}
