import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';

export interface ContactInfoItem {
  icon: string;
  title: string;
  description: string;
  lines: string[];
}

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule, AnimateOnScroll],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss'
})
export class ContactInfo {
  title = input<string>('Contact Information');
  subtitle = input<string>('Fill out the form or reach out directly through any of the channels below.');
  contactItems = input<ContactInfoItem[]>([]);
}
