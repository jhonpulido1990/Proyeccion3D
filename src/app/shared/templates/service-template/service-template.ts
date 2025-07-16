import { Component } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { FeatureGrid } from '../../organism/feature-grid/feature-grid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-template',
  imports: [CTASection, HeroHeaderComponent, FeatureGrid, CommonModule],
  templateUrl: './service-template.html',
  styleUrl: './service-template.scss',
})
export class ServiceTemplate  {


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

 // Array of feature grids objects
  features = [
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
      icon: 'pi pi-print',
      title: 'Rapid Prototyping',
      description:
        'Turn concepts into physical prototypes in days, not weeks. Perfect for testing form',
      reverse: false,
      checkIcon:'pi pi-check',
      texts: [
        'Step 1: Upload your 3D model or idea.',
        'Step 2: We review and optimize your design.',
        'Step 3: Choose materials and finishes.',
        'Step 4: We print and post-process your part.',
        'Step 5: Receive your finished product quickly.',
      ],
    },

    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
      icon: 'pi pi-truck',
      title: 'Rapid Prototyping',
      description:
        'Turn concepts into physical prototypes in days, not weeks. Perfect for testing form, fit, and function.',
      reverse: true,
      checkIcon:'pi pi-check',
      texts: [
        'Step 1: Upload your 3D model or idea.',
        'Step 2: We review and optimize your design.',
        'Step 3: Choose materials and finishes.',
        'Step 4: We print and post-process your part.',
        'Step 5: Receive your finished product quickly.',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
      icon: 'pi pi-palette',
      title: 'Rapid Prototyping',
      description:
        'Turn concepts into physical prototypes in days, not weeks. Perfect for testing form, fit, and function.',
      reverse: false,
      checkIcon:'pi pi-check',
      texts: [
        'Step 1: Upload your 3D model or idea.',
        'Step 2: We review and optimize your design.',
        'Step 3: Choose materials and finishes.',
        'Step 4: We print and post-process your part.',
        'Step 5: Receive your finished product quickly.',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
      icon: 'pi pi-bolt',
      title: 'Rapid Prototyping',
      description:
        'Turn concepts into physical prototypes in days, not weeks. Perfect for testing form, fit, and function.',
      reverse: true,
      checkIcon:'pi pi-check',
      texts: [
        'Step 1: Upload your 3D model or idea.',
        'Step 2: We review and optimize your design.',
        'Step 3: Choose materials and finishes.',
        'Step 4: We print and post-process your part.',
        'Step 5: Receive your finished product quickly.',
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop',
      icon: 'pi pi-clone',
      title: 'Rapid Prototyping',
      description:
        'Turn concepts into physical prototypes in days, not weeks. Perfect for testing form, fit, and function.',
      reverse: false,
      checkIcon:'pi pi-check',
      texts: [
        'Step 1: Upload your 3D model or idea.',
        'Step 2: We review and optimize your design.',
        'Step 3: Choose materials and finishes.',
        'Step 4: We print and post-process your part.',
        'Step 5: Receive your finished product quickly.',
      ],
    },
  ];

}
