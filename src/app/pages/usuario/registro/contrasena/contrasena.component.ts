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
  generarCodigo(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Código de 6 dígitos
  }
  /**
   * Envía un código único al correo del usuario utilizando EmailJS.
   */

  
  enviarCodigoPorEmail(destinatario: string) {
    this.codigoVerificacion = this.generarCodigo();
  
    const templateParams = {
      to_email: destinatario,
      codigo: this.codigoVerificacion
    };
  
    emailjs.send('service_mr0wi2s', 'template_vfun32f', templateParams, 'LqcTSCxadm1LJMmQg')
      .then((response) => {
        console.log('Correo enviado!', response.status, response.text);
      }, (error) => {
        console.error('Error al enviar', error);
      });
  }

  cancelar(): void {
    this.email = '';

  }

  constructor(private router: Router) {}

  irACodigo() {
    this.router.navigate(['/codigo']);
  }
}
