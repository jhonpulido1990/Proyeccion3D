import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimateOnScroll } from 'primeng/animateonscroll';

export interface PageHeroButton {
  label: string;
  path?: string;
  action?: () => void;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

export interface PageHeroConfig {
  layout: 'hero-with-image' | 'hero-with-background' | 'simple' | 'centered';
  backgroundColor?: string;
  backgroundImage?: string;
  hasOverlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  maxWidth?: string;
  textColor?: string;
  textAlign?: 'left' | 'center';
}

@Component({
  selector: 'app-hero-header',
  imports: [CommonModule, RouterModule, AnimateOnScroll],
  templateUrl: './hero-header.html',
  styleUrl: './hero-header.scss'
})
export class HeroHeaderComponent {
  @Input() title!: string;
  @Input() highlightedWords?: string[] = [];
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() heroImage?: string;
  @Input() imageAlt?: string;
  @Input() buttons?: PageHeroButton[] = [];
  @Input() config: PageHeroConfig = {
    layout: 'simple',
    backgroundColor: '#0f172a',
    textColor: 'white',
    textAlign: 'left',
    maxWidth: '48rem'
  };

  get titleParts() {
    if (!this.highlightedWords || this.highlightedWords.length === 0) {
      return [{ text: this.title, isHighlighted: false }];
    }

    let result = [{ text: this.title, isHighlighted: false }];

    this.highlightedWords.forEach(word => {
      const newResult: any[] = [];
      result.forEach(part => {
        if (part.isHighlighted) {
          newResult.push(part);
        } else {
          const splitParts = part.text.split(word);
          for (let i = 0; i < splitParts.length; i++) {
            if (splitParts[i]) {
              newResult.push({ text: splitParts[i], isHighlighted: false });
            }
            if (i < splitParts.length - 1) {
              newResult.push({ text: word, isHighlighted: true });
            }
          }
        }
      });
      result = newResult;
    });

    return result;
  }

  get containerClasses(): string {
    const classes = ['page-hero'];

    if (this.config.layout) {
      classes.push(`page-hero--${this.config.layout}`);
    }

    if (this.config.backgroundImage) {
      classes.push('page-hero--with-bg-image');
    }

    if (this.config.hasOverlay) {
      classes.push('page-hero--with-overlay');
    }

    if (this.config.textAlign) {
      classes.push(`page-hero--text-${this.config.textAlign}`);
    }

    return classes.join(' ');
  }

  get containerStyles(): any {
    const styles: any = {};

    if (this.config.backgroundColor) {
      styles.backgroundColor = this.config.backgroundColor;
    }

    if (this.config.backgroundImage) {
      styles.backgroundImage = `url(${this.config.backgroundImage})`;
    }

    return styles;
  }

  get overlayStyles(): any {
    const styles: any = {};

    if (this.config.overlayColor) {
      styles.backgroundColor = this.config.overlayColor;
    }

    if (this.config.overlayOpacity !== undefined) {
      styles.opacity = this.config.overlayOpacity;
    }

    return styles;
  }
}
