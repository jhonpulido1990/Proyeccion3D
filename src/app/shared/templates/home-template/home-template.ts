import { Component } from '@angular/core';
import { TestimonialCarousel } from '../../organism/testimonial-carousel/testimonial-carousel';
import { ServiceCarousel } from "../../organism/service-carousel/service-carousel";
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { CTASection } from "../../molecules/cta-section/cta-section";
import { SectionHero } from '../../organism/section-hero/section-hero';
import { signal } from '@angular/core';
import { ServicesSection } from "../../organism/services-section/services-section";
import { ServiceItemData } from '../../molecules/service-item/service-item';
import { ClientsMarqueeSection } from '../../organism/clients-marquee-section/clients-marquee-section';
import { ClientsSectionData } from '../../../core/models/interfaces/ClientData.interface';

@Component({
  selector: 'app-home-template',
  imports: [TestimonialCarousel, ServiceCarousel, HeroHeaderComponent, CTASection, SectionHero, ServicesSection, ClientsMarqueeSection],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss'
})
export class HomeTemplate {
  // Hero con imagen (Home)
  homeHeroData = signal({
    title: 'Proyección 3D BIC',
    highlightedWords: ['3D'],
    subtitle: 'Transformando Ideas en Realidad',
    description: 'Somos especialistas en ingeniería inversa, modelado 3D y soluciones industriales. Ofrecemos escaneo láser, impresión 3D, análisis por elementos finitos (FEA) y diseño de plantas. Servicios en Bogotá, Medellín y toda Colombia.',
    heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop',
    config: {
      layout: 'hero-with-image' as const,
      textAlign: 'left' as const
    }
  });

  myServicesArray = signal<ServiceItemData[]>([
    {
      id: 'prototipado-rapido',
      title: 'Prototipado Rápido',
      description: 'Convierte conceptos en prototipos físicos en días, no semanas. Perfecto para probar forma, ajuste y función antes de la producción final.',
      icon: 'bi bi-printer',
      linkText: 'Saber Más',
      linkUrl: '/services/prototipado-rapido'
    },
    {
      id: 'impresion-multi-material',
      title: 'Impresión Multi-Material',
      description: 'Crea piezas complejas con nuestras capacidades avanzadas de impresión multi-material, combinando diferentes propiedades mecánicas en una sola impresión.',
      icon: 'bi bi-layers',
      linkText: 'Saber Más',
      linkUrl: '/services/impresion-multi-material'
    },
    {
      id: 'produccion-serie',
      title: 'Producción en Serie',
      description: 'Escala desde el prototipo hasta la producción con calidad consistente y precios competitivos para lotes pequeños y medianos.',
      icon: 'bi bi-lightning',
      linkText: 'Saber Más',
      linkUrl: '/services/produccion-serie'
    },
    {
      id: 'diseno-optimizacion',
      title: 'Diseño y Optimización',
      description: 'Optimizamos tus diseños para impresión 3D, reduciendo material, tiempo de impresión y mejorando la resistencia estructural.',
      icon: 'bi bi-gear',
      linkText: 'Saber Más',
      linkUrl: '/services/diseno-optimizacion'
    },
    {
      id: 'materiales-especializados',
      title: 'Materiales Especializados',
      description: 'Amplia gama de materiales técnicos: PLA, ABS, PETG, TPU, materiales conductivos, biodegradables y de alta resistencia.',
      icon: 'bi bi-palette',
      linkText: 'Saber Más',
      linkUrl: '/services/materiales-especializados'
    },
    {
      id: 'post-procesamiento',
      title: 'Post-Procesamiento',
      description: 'Servicios completos de acabado: lijado, pintura, ensamblaje, tratamientos químicos y acabados profesionales.',
      icon: 'bi bi-tools',
      linkText: 'Saber Más',
      linkUrl: '/services/post-procesamiento'
    }
  ]);



  ctaData = signal({
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
  });

  aboutHeroData = signal({
    title: 'Transformando Ideas En Realidad',
    description: 'Somos un equipo de diseñadores e ingenieros apasionados dedicados a expandir los límites de lo posible con la tecnología de impresión 3D. Con años de experiencia, hemos ayudado a cientos de clientes a dar vida a sus visiones.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Equipo de trabajo colaborando en impresión 3D',
    button: {
      label: 'Sobre Nosotros',
      path: '/about',
      variant: 'primary' as const
    }
  });

  // Datos de clientes que confían en la empresa
  clientsData = signal<ClientsSectionData>({
    title: 'Clientes que Confían en Nosotros',
    subtitle: 'Empresas líderes que han elegido nuestros servicios de impresión 3D para sus proyectos más importantes',
    clients: [
      {
        id: 'ecoplantas',
        name: 'Ecoplantas',
        logo: 'assets/images/logos/ecoplantas.png',
        alt: 'Logo Ecoplantas'
      },
      {
        id: 'industrias-tiagho',
        name: 'Industrias Tiagho',
        logo: 'assets/images/logos/industriasTiagho.png',
        alt: 'Logo Industrias Tiagho'
      },
      {
        id: 'interpesaje',
        name: 'Interpesaje',
        logo: 'assets/images/logos/interpesaje.png',
        alt: 'Logo Interpesaje'
      },
      {
        id: 'interpesaje1',
        name: 'Interpesaje División Industrial',
        logo: 'assets/images/logos/interpesaje1.png',
        alt: 'Logo Interpesaje División Industrial'
      },
      {
        id: 'p3d',
        name: 'P3D',
        logo: 'assets/images/logos/P3D.png',
        alt: 'Logo P3D'
      },
      {
        id: 'p3d-original',
        name: 'P3D Original',
        logo: 'assets/images/logos/P3DOriginal.png',
        alt: 'Logo P3D Original'
      },
      {
        id: 'payan-cia',
        name: 'Payán & CIA',
        logo: 'assets/images/logos/Payan_CIA.png',
        alt: 'Logo Payán & CIA'
      },
      {
        id: 'pci',
        name: 'PCI',
        logo: 'assets/images/logos/PCI.png',
        alt: 'Logo PCI'
      },
      {
        id: 'pimec',
        name: 'Pimec',
        logo: 'assets/images/logos/pimec.png',
        alt: 'Logo Pimec'
      },
      {
        id: 'super',
        name: 'Super',
        logo: 'assets/images/logos/Super.png',
        alt: 'Logo Super'
      },
      {
        id: 'ternium',
        name: 'Ternium',
        logo: 'assets/images/logos/Ternium.png',
        alt: 'Logo Ternium'
      },
      {
        id: 'wtt',
        name: 'WTT',
        logo: 'assets/images/logos/Wtt.png',
        alt: 'Logo WTT'
      }
    ]
  });
}
