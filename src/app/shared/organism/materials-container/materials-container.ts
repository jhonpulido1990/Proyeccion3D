import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materials-container',
  imports: [CommonModule],
  templateUrl: './materials-container.html',
  styleUrl: './materials-container.scss'
})
export class MaterialsContainer {
  @Input() title: string = ' ';
  @Input() description: string =' ';
  @Input() categories: { name: string; items: string[] }[] = [];
}
