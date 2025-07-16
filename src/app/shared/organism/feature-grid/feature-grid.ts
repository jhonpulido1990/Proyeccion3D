import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-feature-grid',
  imports: [CommonModule],
  templateUrl: './feature-grid.html',
  styleUrl: './feature-grid.scss',

})
export class FeatureGrid {
  @Input() icon?: string | undefined = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() reverse: boolean = false; // Para invertir columnas
  @Input() texts: string[] = [];
  @Input() checkIcon?: string | undefined = '';
}
