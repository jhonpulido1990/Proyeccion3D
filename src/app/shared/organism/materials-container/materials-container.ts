import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-materials-container',
  imports: [CommonModule, AnimateOnScrollModule],
  templateUrl: './materials-container.html',
  styleUrl: './materials-container.scss'
})
export class MaterialsContainer {
  @Input() title: string = ' ';
  @Input() description: string =' ';
  @Input() categories: { name: string; items: string[] }[] = [];
}
