import { Component } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { ProjectData } from '../../../core/models/interfaces/ProjectData.interface';
import { ProjectsSection } from "../../organism/projects-section/projects-section";

@Component({
  selector: 'app-projects-template',
  imports: [CTASection, HeroHeaderComponent, ProjectsSection],
  templateUrl: './projects-template.html',
  styleUrl: './projects-template.scss'
})
export class ProjectsTemplate {

  // Portfolio
  portfolioHeroData = signal({
    title: 'Nuestro Portafolio',
    description: 'Explora nuestra diversa gama de proyectos de impresión 3D en varias industrias.',
    config: {
      layout: 'hero-with-background' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000&auto=format&fit=crop',
      hasOverlay: true,
      maxWidth: '48rem'
    }
  });

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

  // En tu projects-template.ts o donde uses la sección
  projectsData = signal<ProjectData[]>([
    {
      id: 'ergonomic-speaker',
      title: 'Diseño de Altavoz Ergonómico',
      description: 'Un diseño revolucionario de altavoz optimizado tanto para acústica como para estética.',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Diseño de Altavoz Ergonómico',
      link: '/portfolio/ergonomic-speaker',
      featured: true
    },
    {
      id: 'brake-component',
      title: 'Componente de Freno Ligero',
      description: 'Componente de freno personalizado que reduce el peso manteniendo la integridad estructural.',
      category: 'automotive',
      image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Componente de Freno Ligero',
      link: '/portfolio/brake-component'
    },
    {
      id: 'medical-implant',
      title: 'Implante Médico Personalizado',
      description: 'Implante específico para paciente diseñado a partir de datos de TC para un ajuste anatómico perfecto.',
      category: 'medical',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Implante Médico Personalizado',
      link: '/portfolio/medical-implant'
    },
    {
      id: 'sustainable-housing',
      title: 'Concepto de Vivienda Sostenible',
      description: 'Modelo a escala de un diseño innovador de vivienda sostenible para entornos urbanos.',
      category: 'architecture',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Concepto de Vivienda Sostenible',
      link: '/portfolio/sustainable-housing'
    },
    {
      id: 'smart-home-controller',
      title: 'Controlador de Casa Inteligente',
      description: 'Prototipo para un dispositivo intuitivo de control de casa inteligente con diseño ergonómico.',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Controlador de Casa Inteligente',
      link: '/portfolio/smart-home-controller'
    },
    {
      id: 'dashboard-elements',
      title: 'Elementos de Tablero Personalizados',
      description: 'Componentes interiores a medida para un fabricante de vehículos de lujo.',
      category: 'automotive',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Elementos de Tablero Personalizados',
      link: '/portfolio/dashboard-elements'
    },
    {
      id: 'surgical-model',
      title: 'Modelo de Planificación Quirúrgica',
      description: 'Modelo anatómico utilizado para la planificación quirúrgica de un procedimiento complejo.',
      category: 'medical',
      image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Modelo de Planificación Quirúrgica',
      link: '/portfolio/surgical-model'
    },
    {
      id: 'historic-restoration',
      title: 'Proyecto de Restauración Histórica',
      description: 'Modelo detallado para la restauración de una fachada de edificio histórico.',
      category: 'architecture',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Proyecto de Restauración Histórica',
      link: '/portfolio/historic-restoration'
    },
    {
      id: 'modular-lighting',
      title: 'Sistema de Iluminación Modular',
      description: 'Solución de iluminación personalizable con componentes interconectables.',
      category: 'product',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&auto=format&fit=crop',
      imageAlt: 'Sistema de Iluminación Modular',
      link: '/portfolio/modular-lighting'
    }
  ]);
}
