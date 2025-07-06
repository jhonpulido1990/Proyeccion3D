import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../core/models/interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss'
})
export class TestimonialCard {
  @Input() testimonial!: Testimonial;
  @Input() isActive: boolean = false;
}
