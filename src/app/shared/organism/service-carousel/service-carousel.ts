import { Component, signal } from '@angular/core';
import { ServiceCard } from '../../molecules/service-card/service-card';
import { CarouselModule } from 'primeng/carousel';
import { Service } from '../../../core/models/interfaces/Service.interface';

@Component({
  selector: 'app-service-carousel',
  imports: [ServiceCard, CarouselModule],
  templateUrl: './service-carousel.html',
  styleUrl: './service-carousel.scss'
})
export class ServiceCarousel {

  responsiveOptions: any[] | undefined;

  services = signal<Service[]>([
    {
      id: 1,
      title: 'Prototipado Rápido',
      description: 'Creación rápida de prototipos funcionales para validar diseños y conceptos antes de la producción final.',
      image: 'assets/images/services/prototipado-rapido.jpg',
      features: [
        'Entrega en 24-48 horas',
        'Múltiples materiales disponibles',
        'Alta precisión dimensional',
        'Acabados personalizados'
      ],
      price: 'Desde $50'
    },
    {
      id: 2,
      title: 'Impresión 3D Industrial',
      description: 'Soluciones de impresión 3D para producción industrial con materiales de alta resistencia.',
      image: 'assets/images/services/impresion-industrial.jpg',
      features: [
        'Materiales certificados',
        'Producción en serie',
        'Control de calidad riguroso',
        'Soporte técnico especializado'
      ],
      price: 'Cotización personalizada'
    },
    {
      id: 3,
      title: 'Modelado y Diseño 3D',
      description: 'Servicio completo de modelado y diseño 3D para convertir ideas en modelos listos para imprimir.',
      image: 'https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?width=1080&crop=smart&auto=webp&s=b80a699978b4883b57f04855ad5be4cd26a917e8',
      features: [
        'Diseño desde cero',
        'Optimización para impresión',
        'Renderizado fotorrealista',
        'Revisiones ilimitadas'
      ],
      price: 'Desde $100'
    },
    {
      id: 4,
      title: 'Escaneado 3D',
      description: 'Captura digital precisa de objetos físicos para crear modelos 3D exactos.',
      image: 'assets/images/services/escaneado-3d.jpg',
      features: [
        'Alta resolución',
        'Procesamiento rápido',
        'Múltiples formatos de salida',
        'Ingeniería inversa'
      ],
      price: 'Desde $75'
    }
  ]);
}
