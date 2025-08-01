import { Component } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { ServiceData } from '../../../core/models/interfaces/serviceData.interface';
import { ServicesSectionItem } from "../../organism/services-section-item/services-section-item";

@Component({
  selector: 'app-service-template',
  imports: [CTASection, HeroHeaderComponent, ServicesSectionItem],
  templateUrl: './service-template.html',
  styleUrl: './service-template.scss'
})
export class ServiceTemplate {

  // Simple (Services)
  servicesHeroData = signal({
    title: 'Our Services',
    description: 'Comprehensive 3D printing solutions tailored to your unique needs.',
    config: {
      layout: 'simple' as const,
      backgroundColor: '#0f172a',
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

  // En tu projects-template.ts
  servicesData = signal<ServiceData[]>([
    {
      id: 'rapid-prototyping',
      title: 'Rapid Prototyping',
      description: 'Turn concepts into physical prototypes in days, not weeks. Perfect for testing form, fit, and function.',
      icon: 'bi-printer',
      image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Rapid Prototyping',
      imagePosition: 'right',
      features: [
        'Quick turnaround times - as fast as 24 hours',
        'Multiple material options for functional testing',
        'Iterative design support with expert feedback',
        'High-precision prints with fine detail resolution'
      ]
    },
    {
      id: 'multi-material-printing',
      title: 'Multi-Material Printing',
      description: 'Create complex parts with our advanced multi-material capabilities, combining different properties in a single print.',
      icon: 'bi-layers',
      image: 'https://images.unsplash.com/photo-1581093458791-9d2b88c0ed60?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Multi-Material Printing',
      imagePosition: 'left',
      features: [
        'Combine rigid and flexible materials in one part',
        'Full-color printing capabilities',
        'Transparent and opaque material combinations',
        'Functional mechanical properties in a single print'
      ]
    },
    {
      id: 'production-runs',
      title: 'Production Runs',
      description: 'Scale from prototype to production with consistent quality and competitive pricing for small to medium batch sizes.',
      icon: 'bi-lightning',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Production Runs',
      imagePosition: 'right',
      features: [
        'Batch sizes from 10 to 10,000+ units',
        'Consistent quality across production runs',
        'Material selection optimized for end-use applications',
        'Quality control and inspection services included'
      ]
    },
    {
      id: 'design-services',
      title: 'Design Services',
      description: 'Our expert designers can help optimize your designs for 3D printing or create custom designs from scratch.',
      icon: 'bi-palette',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Design Services',
      imagePosition: 'left',
      features: [
        'Design optimization for 3D printing',
        'Reverse engineering of existing parts',
        'Custom design creation from concept sketches',
        'Material and process recommendations'
      ]
    },
    {
      id: '3d-scanning-modeling',
      title: '3D Scanning & Modeling',
      description: 'Convert physical objects into digital 3D models with our high-precision scanning services.',
      icon: 'bi-file-code',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop',
      imageAlt: '3D Scanning & Modeling',
      imagePosition: 'right',
      features: [
        'High-resolution scanning up to 0.1mm accuracy',
        'Post-processing and mesh optimization',
        'Conversion to editable CAD formats',
        'Dimensional analysis and inspection reports'
      ]
    },
    {
      id: 'finishing-assembly',
      title: 'Finishing & Assembly',
      description: 'Complete post-processing services to achieve your desired aesthetic and functional requirements.',
      icon: 'bi-truck',
      image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3a2ed?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Finishing & Assembly',
      imagePosition: 'left',
      features: [
        'Surface smoothing and polishing',
        'Custom painting and color matching',
        'Assembly of multi-part components',
        'Functional testing and quality assurance'
      ]
    }
  ]);
}
