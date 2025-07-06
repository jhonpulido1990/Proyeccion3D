import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.html',
  styleUrl: './carousel-indicators.scss'
})
export class CarouselIndicators {
  @Input() total: number = 0;
  @Input() current: number = 0;
  @Output() indicatorClick = new EventEmitter<number>();

  onIndicatorClick(index: number): void {
    this.indicatorClick.emit(index);
  }

  get indicators(): number[] {
    return Array.from({ length: this.total }, (_, i) => i);
  }
}
