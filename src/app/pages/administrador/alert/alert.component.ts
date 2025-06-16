import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'] 
})
export class AlertComponent {
  message = '';
  visible = false;

  show(message: string) {
    this.message = message;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
