import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly cacheKey = 'portfolio.projects';

  constructor(private storage: StorageService) {}

  getProjects(): Project[] {
    const cached = this.storage.get<Project[]>(this.cacheKey);
    if (cached && Array.isArray(cached) && cached.length) {
      return cached;
    }

    const initial: Project[] = [
      {
        id: 'p1',
        title: 'Dashboard de Analytics',
        description: 'Panel de control con visualización de datos en tiempo real usando Angular 21 y TypeScript. Incluye gráficos interactivos y exportación a CSV.',
        url: 'https://github.com',
        tags: ['Angular', 'TypeScript', 'RxJS', 'Chart.js'],
      },
      {
        id: 'p2',
        title: 'App de Gestión de Tareas',
        description: 'Aplicación web responsiva para gestionar tareas con sincronización en localStorage. Incluye filtros, búsqueda y persistencia de datos.',
        url: 'https://github.com',
        tags: ['Angular', 'Signals', 'Responsive', 'localStorage'],
      },
      {
        id: 'p3',
        title: 'E-commerce Frontend',
        description: 'Interfaz de tienda en línea con carrito de compras, búsqueda avanzada y checkout optimizado. Diseño Memphis corporativo con tema oscuro.',
        url: 'https://github.com',
        tags: ['Angular', 'Standalone Components', 'SCSS', 'UX/UI'],
      },
    ];

    this.storage.set(this.cacheKey, initial);
    return initial;
  }
}
