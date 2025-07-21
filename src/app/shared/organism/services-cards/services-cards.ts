import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-cards',
  imports: [],
  templateUrl: './services-cards.html',
  styleUrl: './services-cards.scss'
})
export class ServicesCards {
  @Input() index: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
}
