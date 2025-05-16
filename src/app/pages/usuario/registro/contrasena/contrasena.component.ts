import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contrasena',
  imports: [
    FormsModule,
    CommonModule
    
  ],
  templateUrl: './contrasena.component.html',
  styleUrl: './contrasena.component.css'
})
export class ContrasenaComponent {

  constructor(private router: Router) {}


  email: string = '';

  codigoVerificacion: string = '';

  /**
   * Envía un código único al correo del usuario utilizando EmailJS.
   */
  enviarCodigo() {
    const codigo = this.generarCodigo();
    const templateParams = {
      email: this.email,
      codigo: codigo
    };



    emailjs.send('service_mr0wi2s', 'template_exnwzy8', templateParams, 'LqcTSCxadm1LJMmQg')
      .then((response) => {
        console.log('Correo enviado:', response);
        alert('Código enviado a tu correo');

      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Error al enviar el código');
      });
  }

  generarCodigo() {
    const codigo = Math.floor(100000 + Math.random() * 900000).toString(); 
    localStorage.setItem('Codigo', codigo); 
    console.log('Código generado:', codigo);
  
    this.router.navigate(['/codigo']);
    return codigo;
  }

  cancelar(): void {
    this.router.navigate(['/login']);

  }


  esCorreoValido(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  
}

