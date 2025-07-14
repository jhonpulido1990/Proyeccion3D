import { Component, signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";

@Component({
  selector: 'app-contact-template',
  imports: [HeroHeaderComponent],
  templateUrl: './contact-template.html',
  styleUrl: './contact-template.scss'
})
export class ContactTemplate {
  // Contact
  contactHeroData = signal({
    title: 'Get In Touch',
    description: 'Have a project in mind? We\'d love to hear from you.',
    config: {
      layout: 'simple' as const,
      backgroundColor: '#0f172a',
      maxWidth: '48rem'
    }
  });
}
