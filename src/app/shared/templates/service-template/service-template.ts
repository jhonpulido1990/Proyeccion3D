import { Component } from '@angular/core';
import { CTASection } from "../../molecules/cta-section/cta-section";
import { signal } from '@angular/core';
import { HeroHeaderComponent } from "../../molecules/hero-header/hero-header";
import { FeatureGrid } from '../../organism/feature-grid/feature-grid';
import { CommonModule } from '@angular/common';
import { ServicesCards } from '../../organism/services-cards/services-cards';
import { MaterialsContainer } from '../../organism/materials-container/materials-container';

@Component({
  selector: 'app-service-template',
  imports: [CTASection, HeroHeaderComponent, FeatureGrid, CommonModule, ServicesCards, MaterialsContainer],
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


  gridTitle = 'Our Process';
  gridDescription =
    'From concept to delivery, we ensure a smooth and efficient experience.';

  // Array of service objects
  services = [
    {
      title: '3D Modeling',
      description:
        'We create detailed and accurate 3D models for your projects, from prototypes to final products.',
    },
    {
      title: 'Rapid Prototyping',
      description:
        'Quickly turn your ideas into reality with our fast and reliable prototyping services.',
    },
    {
      title: 'Consultation',
      description:
        'We discuss your project requirements, timeline, and budget to determine the best approach.',
    },
    {
      title: 'Custom 3D Printing',
      description:
        'Bring your designs to life with our custom 3D printing solutions tailored to your needs.',
    },
    {
      title: 'Design & Optimization',
      description:
        'We review or create designs, optimizing them for 3D printing to ensure the best results.',
    },
    {
      title: 'Production',
      description:
        'Your project is printed using the most appropriate technology and materials for your needs.',
    },
    {
      title: 'Finishing & Delivery',
      description:
        'We apply any necessary post-processing and deliver your completed project on time.',
    },
    {
      title: 'Finishing & Delivery',
      description:
        'We apply any necessary post-processing and deliver your completed project on time.',
    },
    {
      title: 'Finishing & Delivery',
      description:
        'We apply any necessary post-processing and deliver your completed project on time.',
    },
    {
      title: 'Finishing & Delivery',
      description:
        'We apply any necessary post-processing and deliver your completed project on time.',
    },
    {
      title: 'Finishing & Delivery',
      description:
        'We apply any necessary post-processing and deliver your completed project on time.',
    },
    {
      title: 'Finishing & Delivery',
      description:
        'We apply any necessary post-processing and deliver your completed project on time.',
    },
  ];


   materialContainer ={
  title:  'Materials We Use',
  description: 'We work with a wide range of materials to bring your ideas to life.',
   }

  // Array of our materials objects
  materialsCategories = [

    {
      name: 'Engineering Plastics',
      items: [
        'ABS (Acrylonitrile Butadiene Styrene)',
        'PLA (Polylactic Acid)',
        'PETG',
      ],
    },
    {
      name: 'High-Performance Materials',
      items: ['Standard Resin', 'Tough Resin', 'Flexible Resin'],
    },
    {
      name: 'Specialty Materials',
      items: ['Stainless Steel', 'Aluminum', 'Titanium'],
    },
  ];
}
