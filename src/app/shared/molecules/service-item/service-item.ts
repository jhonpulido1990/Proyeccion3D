import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ServiceItemData {
  id: string;
  title: string;
  description: string;
  icon: string;
  linkText?: string;
  linkUrl?: string;
}

@Component({
  selector: 'app-service-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './service-item.html',
  styleUrl: './service-item.scss'
})
export class ServiceItem {
  service = input.required<ServiceItemData>();
}
