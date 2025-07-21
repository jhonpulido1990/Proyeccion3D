import { Component, input, signal, computed } from '@angular/core';
import { ProjectCard } from '../../molecules/project-card/project-card';
import { TabButton } from '../../molecules/tab-button/tab-button';
import { ProjectCategory, ProjectData, ProjectTab } from '../../../core/models/interfaces/ProjectData.interface';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard, TabButton],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss'
})
export class ProjectsSection {
  projects = input<ProjectData[]>([]);
  sectionTitle = input<string>('Nuestros Proyectos');
  
  // Signal para la pestaña activa
  private _activeTab = signal<ProjectCategory>('all');
  
  // Computed para obtener la pestaña activa
  activeTab = computed(() => this._activeTab());
  
  // Computed para los tabs disponibles
  availableTabs = computed(() => {
    const projects = this.projects();
    const tabs: ProjectTab[] = [
      { id: 'all', label: 'Todos', count: projects.length }
    ];
    
    // Contar proyectos por categoría
    const categoryCounts = projects.reduce((acc, project) => {
      if (project.category !== 'all') {
        acc[project.category] = (acc[project.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    
    // Agregar tabs solo si hay proyectos en esa categoría
    if (categoryCounts['product']) {
      tabs.push({ id: 'product', label: 'Diseño de Producto', count: categoryCounts['product'] });
    }
    if (categoryCounts['automotive']) {
      tabs.push({ id: 'automotive', label: 'Automotriz', count: categoryCounts['automotive'] });
    }
    if (categoryCounts['medical']) {
      tabs.push({ id: 'medical', label: 'Médico', count: categoryCounts['medical'] });
    }
    if (categoryCounts['architecture']) {
      tabs.push({ id: 'architecture', label: 'Arquitectura', count: categoryCounts['architecture'] });
    }
    
    return tabs;
  });
  
  // Computed para proyectos filtrados
  filteredProjects = computed(() => {
    const projects = this.projects();
    const activeTab = this.activeTab();
    
    if (activeTab === 'all') {
      return projects;
    }
    
    return projects.filter(project => project.category === activeTab);
  });

  onTabChange(tabId: string) {
    this._activeTab.set(tabId as ProjectCategory);
  }
}
