import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo',
  imports: [],
  templateUrl: './codigo.component.html',
  styleUrl: './codigo.component.css'
})
export class CodigoComponent {

  moveToNext(event: any, index: number) {
    const input = event.target;
    const value = input.value;
  
    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      (nextInput as HTMLElement)?.focus();
    } else if (value.length === 0 && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      (prevInput as HTMLElement)?.focus();
    }
  }
}
