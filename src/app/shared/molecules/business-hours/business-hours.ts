import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

export interface BusinessHour {
  day: string;
  hours: string;
}

@Component({
  selector: 'app-business-hours',
  imports: [CommonModule],
  templateUrl: './business-hours.html',
  styleUrl: './business-hours.scss'
})
export class BusinessHours {
  title = input<string>('Nuestro Horario');
  hours = input<BusinessHour[]>([]);
}
