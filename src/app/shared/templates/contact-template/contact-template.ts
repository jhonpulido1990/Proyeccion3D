import { Component, signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { ContactFormData } from '../../molecules/contact-form/contact-form';
import { ContactSection } from "../../organism/contact-section/contact-section";

@Component({
  selector: 'app-contact-template',
  imports: [HeroHeaderComponent, ContactSection],
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

  contactData = signal({
    contactItems: [
      {
        icon: 'pi-map-marker',
        title: 'Nuestra Ubicación',
        description: 'Visítanos en nuestra oficina',
        lines: ['123 Innovation Drive', 'Suite 400', 'San Francisco, CA 94107']
      },
      {
        icon: 'pi-envelope',
        title: 'Envíanos un Email',
        description: 'Envíanos un correo electrónico',
        lines: ['info@3dprintingcompany.com', 'sales@3dprintingcompany.com']
      },
      {
        icon: 'pi-phone',
        title: 'Llámanos',
        description: 'Danos una llamada',
        lines: ['+1 (415) 555-0123', 'Lunes - Viernes, 9am - 6pm PST']
      }
    ],
    businessHours: [
      { day: 'Lunes - Viernes', hours: '9:00 AM - 6:00 PM' },
      { day: 'Sábado', hours: '10:00 AM - 4:00 PM' },
      { day: 'Domingo', hours: 'Cerrado' }
    ],
    serviceOptions: [
      { value: 'prototyping', label: 'Prototipado Rápido' },
      { value: 'production', label: 'Producción en Serie' },
      { value: 'design', label: 'Servicios de Diseño' },
      { value: 'scanning', label: 'Escaneo 3D' },
      { value: 'other', label: 'Otro' }
    ]
  });
}
