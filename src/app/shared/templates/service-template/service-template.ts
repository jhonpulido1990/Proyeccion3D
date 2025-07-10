import { Component } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";

@Component({
  selector: 'app-service-template',
  imports: [CTASection],
  templateUrl: './service-template.html',
  styleUrl: './service-template.scss'
})
export class ServiceTemplate {
  ctaData = {
    title: '¿Listo para Dar Vida a tus Ideas?',
    description: 'Contáctanos hoy para discutir tu proyecto y descubrir cómo nuestras soluciones de impresión 3D pueden ayudarte a innovar más rápido.',
    backgroundImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
    highlightedWord: 'Ideas',
    button: {
      label: 'Contáctanos',
      path: '/contact',
      variant: 'primary' as const,
      icon: 'pi pi-phone'
    }
  };
}
