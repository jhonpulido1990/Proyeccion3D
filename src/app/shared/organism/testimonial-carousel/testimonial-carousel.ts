import { Component, OnInit, signal } from '@angular/core';
import { TestimonialCard } from '../../molecules/testimonial-card/testimonial-card';
import { Testimonial } from '../../../core/models/interfaces/testimonial.interface';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-testimonial-carousel',
  imports: [TestimonialCard, CarouselModule],
  templateUrl: './testimonial-carousel.html',
  styleUrl: './testimonial-carousel.scss'
})
export class TestimonialCarousel implements OnInit {

responsiveOptions: any[] | undefined;

testimonials = signal<Testimonial[]>([
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
]);

ngOnInit(): void {
  this.responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]
}

}
