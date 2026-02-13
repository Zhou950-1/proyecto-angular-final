import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="container portfolio">
      <h2>Portfolio</h2>
      <p class="intro">Aquí puedes ver algunos de mis proyectos más destacados. Cada uno representa una combinación de creatividad, tecnología y buenas prácticas de desarrollo.</p>
      <div class="grid">
        <app-project-card *ngFor="let p of projects; trackBy: trackByProjectId\" [project]=\"p\"></app-project-card>
      </div>
    </section>
  `,
  styles: [
    `
      .container{max-width:1100px;margin:0 auto;padding:1rem}
      h2{margin-top:0;color:var(--text)}
      .intro{color:var(--text);max-width:60ch;font-size:1.05rem;margin-bottom:2rem}
      .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;margin-top:2rem}
      @media (max-width:600px){.grid{grid-template-columns:1fr}}
    `,
  ],
})
export class PortfolioComponent {
  projects: Project[] = [];

  constructor(private ps: ProjectsService) {
    this.projects = this.ps.getProjects();
  }

  trackByProjectId(index: number, project: Project) {
    return project.id;
  }
}
