import { Component, Input, signal, computed, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ServiceCard } from '../../molecules/service-card/service-card';
import { Service } from '../../../core/models/interfaces/Service.interface';

@Component({
  selector: 'app-service-carousel',
  imports: [CommonModule, ServiceCard],
  templateUrl: './service-carousel.html',
  styleUrl: './service-carousel.scss'
})
export class ServiceCarousel implements OnInit, OnDestroy {
  @Input() title: string = 'Nuestros Servicios';
  @Input() subtitle: string = 'Descubre nuestras soluciones completas de impresión 3D y diseño digital.';
  @Input() autoPlay: boolean = true;
  @Input() autoPlayInterval: number = 5000; // 5 segundos
  @Input() pauseOnHover: boolean = true;

  public currentIndex = signal(0);
  private isAnimating = signal(false);
  private autoPlayTimer: number | null = null;
  private isPaused = signal(false);

  // Inyectar PLATFORM_ID para verificar si estamos en el navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @Input() services = signal<Service[]>([
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

  // Computed properties - Solo una tarjeta actual
  currentService = computed(() => this.services()[this.currentIndex()]);
  totalServices = computed(() => this.services().length);
  canGoPrev = computed(() => this.totalServices() > 1);
  canGoNext = computed(() => this.totalServices() > 1);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.autoPlay && this.totalServices() > 1) {
        this.startAutoPlay();
      }
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  // ===============================
  // AUTOPLAY METHODS
  // ===============================

  private startAutoPlay() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.autoPlay || this.totalServices() <= 1) return;

    this.stopAutoPlay();

    this.autoPlayTimer = window.setInterval(() => {
      if (!this.isPaused() && !this.isAnimating()) {
        this.goToNext();
      }
    }, this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  private resetAutoPlay() {
    if (this.autoPlay && isPlatformBrowser(this.platformId)) {
      this.stopAutoPlay();
      setTimeout(() => {
        this.startAutoPlay();
      }, 100);
    }
  }

  // ===============================
  // MOUSE EVENTS
  // ===============================

  onMouseEnter() {
    if (this.pauseOnHover) {
      this.isPaused.set(true);
    }
  }

  onMouseLeave() {
    if (this.pauseOnHover) {
      this.isPaused.set(false);
    }
  }

  // ===============================
  // NAVIGATION METHODS
  // ===============================

  goToPrev() {
    if (this.canGoPrev() && !this.isAnimating()) {
      this.isAnimating.set(true);

      // Navegación infinita hacia atrás
      if (this.currentIndex() === 0) {
        this.currentIndex.set(this.totalServices() - 1);
      } else {
        this.currentIndex.update(index => index - 1);
      }

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }

      this.resetAutoPlay();
    }
  }

  goToNext() {
    if (this.canGoNext() && !this.isAnimating()) {
      this.isAnimating.set(true);

      // Navegación infinita hacia adelante
      if (this.currentIndex() === this.totalServices() - 1) {
        this.currentIndex.set(0);
      } else {
        this.currentIndex.update(index => index + 1);
      }

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.totalServices() && !this.isAnimating()) {
      this.isAnimating.set(true);
      this.currentIndex.set(index);

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.isAnimating.set(false), 300);
      } else {
        this.isAnimating.set(false);
      }

      this.resetAutoPlay();
    }
  }

  // ===============================
  // UTILITY METHODS
  // ===============================

  getIndicators() {
    return Array.from({ length: this.totalServices() }, (_, i) => i);
  }

  getTitleWords() {
    return this.title.split(' ').map((word, index) => ({
      word,
      delay: index * 0.05
    }));
  }

  isPlaying() {
    return this.autoPlayTimer !== null;
  }
}
