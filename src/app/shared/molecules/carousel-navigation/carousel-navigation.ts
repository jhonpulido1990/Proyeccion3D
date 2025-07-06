import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrl: './carousel-navigation.scss'
})
export class CarouselNavigation {
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onPrevious(): void {
    this.previous.emit();
  }

  onNext(): void {
    this.next.emit();
  }
}
