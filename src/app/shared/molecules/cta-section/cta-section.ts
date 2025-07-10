import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

export interface CTAButton {
  label: string;
  path: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

@Component({
  selector: 'app-cta-section',
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss'
})
export class CTASection {
  @Input() title!: string;
  @Input() description!: string;
  @Input() backgroundImage?: string;
  @Input() button?: CTAButton;
  @Input() highlightedWord?: string;
  @Input() overlay?: boolean = true;
}
