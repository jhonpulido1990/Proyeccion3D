import { Component, input } from '@angular/core';
import { StatData } from '../../../core/models/interfaces/DatosEstadistica.interface';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss'
})
export class StatCard {
  stat = input.required<StatData>();
  animationDelay = input<number>(0);
}
