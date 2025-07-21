import { Component, input } from '@angular/core';
import { ProjectCategory, ProjectData } from '../../../core/models/interfaces/ProjectData.interface';


@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  project = input.required<ProjectData>();
  showHoverEffects = input<boolean>(true);

  getCategoryLabel(category: ProjectCategory): string {
    const labels: Record<ProjectCategory, string> = {
      'all': 'Todos',
      'product': 'Diseño de Producto',
      'automotive': 'Automotriz',
      'medical': 'Médico',
      'architecture': 'Arquitectura'
    };
    return labels[category] || category;
  }
}
