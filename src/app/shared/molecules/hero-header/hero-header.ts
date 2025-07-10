import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface HeroButton {
  label: string;
  path?: string;
  action?: () => void;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

@Component({
  selector: 'app-hero-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-header.html',
  styleUrl: './hero-header.scss'
})
export class HeroHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() buttons: HeroButton[] = [];
  @Input() heroImage?: string;
  @Input() highlightedWord?: string; // Para destacar "3D" en azul

  get titleParts() {
    if (!this.highlightedWord || !this.title.includes(this.highlightedWord)) {
      return [{ text: this.title, isHighlighted: false }];
    }

    const parts = this.title.split(this.highlightedWord);
    const result = [];

    for (let i = 0; i < parts.length; i++) {
      if (parts[i]) {
        result.push({ text: parts[i], isHighlighted: false });
      }
      if (i < parts.length - 1) {
        result.push({ text: this.highlightedWord, isHighlighted: true });
      }
    }

    return result;
  }
}
