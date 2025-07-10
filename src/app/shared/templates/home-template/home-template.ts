import { Component } from '@angular/core';
import { TestimonialCarousel } from '../../organism/testimonial-carousel/testimonial-carousel';
import { ServiceCarousel } from "../../organism/service-carousel/service-carousel";
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";

@Component({
  selector: 'app-home-template',
  imports: [TestimonialCarousel, ServiceCarousel, HeroHeaderComponent],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss'
})
export class HomeTemplate {
  heroData = {
    title: 'Proyección 3D BIC',
    subtitle: 'Transformando Ideas en Realidad',
    description: 'Desde el concepto hasta la creación, ofrecemos soluciones de impresión 3D de vanguardia para diseñadores, ingenieros y empresas.',
    highlightedWord: '3D',
    heroImage: '/assets/images/hero-tech.jpg',
    buttons: [
      {
        label: 'Nuestros Servicios',
        path: '/services',
        variant: 'primary' as const,
        icon: 'fas fa-arrow-right'
      },
      {
        label: 'Ver Portafolio',
        path: '/portfolio',
        variant: 'secondary' as const
      }
    ]
  };
}
