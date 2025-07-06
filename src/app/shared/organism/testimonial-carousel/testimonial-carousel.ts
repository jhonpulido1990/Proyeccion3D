import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { TestimonialCard } from '../../molecules/testimonial-card/testimonial-card';
import { CarouselNavigation } from '../../molecules/carousel-navigation/carousel-navigation';
import { CarouselIndicators } from '../../molecules/carousel-indicators/carousel-indicators';
import { Testimonial } from '../../../core/models/interfaces/testimonial.interface';


@Component({
  selector: 'app-testimonial-carousel',
  imports: [TestimonialCard, CarouselNavigation, CarouselIndicators],
  templateUrl: './testimonial-carousel.html',
  styleUrl: './testimonial-carousel.scss'
})
export class TestimonialCarousel implements OnInit, OnDestroy, AfterViewInit {
  currentSlide = 0;
  autoplayInterval: any;
  autoplayDuration = 5000; // 5 segundos - CORREGIDO
  isTransitioning = false;
  isPaused = false;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Product Manager, TechInnovate',
      quote: 'Working with Proyección 3D BIC was a game-changer for our product development process. Their expertise in 3D printing helped us reduce our prototyping time by 70%.',
      avatar: 'assets/images/testimonials/sarah-johnson.jpg'
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      title: 'CEO, MedTech Solutions',
      quote: 'The quality and precision of their 3D printing services exceeded our expectations. They delivered complex medical prototypes with incredible accuracy.',
      avatar: 'assets/images/testimonials/carlos-rodriguez.jpg'
    },
    {
      id: 3,
      name: 'Maria Lopez',
      title: 'Design Director, Creative Labs',
      quote: 'Their multi-material printing capabilities allowed us to create prototypes that looked and felt like final products. Exceptional service and quality.',
      avatar: 'assets/images/testimonials/maria-lopez.jpg'
    }
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngAfterViewInit(): void {
    // Set CSS custom property for slides count
    this.elementRef.nativeElement.style.setProperty('--slides-count', this.testimonials.length.toString());
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  // Pausar autoplay cuando el usuario interactúa
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.pauseAutoplay();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.resumeAutoplay();
  }

  nextSlide(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    
    // Reiniciar autoplay solo si no es automático
    if (this.isPaused) {
      this.resetAutoplay();
    }

    setTimeout(() => {
      this.isTransitioning = false;
    }, 600); // Tiempo de transición CSS
  }

  previousSlide(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentSlide = this.currentSlide === 0
      ? this.testimonials.length - 1
      : this.currentSlide - 1;
    
    if (this.isPaused) {
      this.resetAutoplay();
    }

    setTimeout(() => {
      this.isTransitioning = false;
    }, 600);
  }

  goToSlide(index: number): void {
    if (this.isTransitioning || index === this.currentSlide) return;

    this.isTransitioning = true;
    this.currentSlide = index;
    this.resetAutoplay();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 600);
  }

  private startAutoplay(): void {
    this.stopAutoplay(); // Limpiar cualquier interval existente
    this.autoplayInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, this.autoplayDuration);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  private pauseAutoplay(): void {
    this.isPaused = true;
  }

  private resumeAutoplay(): void {
    this.isPaused = false;
  }

  private resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
