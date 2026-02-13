import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card">
      <img *ngIf="project().image" [src]="project().image" alt="{{ project().title }}" />
      <div class="card-body">
        <h3>{{ project().title }}</h3>
        <p>{{ project().description }}</p>
        <div class="tags">
          <small *ngFor="let t of project().tags">{{ t }}</small>
        </div>
        <a *ngIf="project().url" [href]="project().url" target="_blank" rel="noopener noreferrer" aria-label="Ver proyecto: {{ project().title }}">Ver</a>
      </div>
    </article>
  `,
  styles: [
    `
      .card { 
        border: 1px solid rgba(0,0,0,0.08); 
        border-radius: 12px; 
        overflow: hidden; 
        display: flex; 
        flex-direction: column;
        background: var(--surface);
        transition: transform 200ms ease, box-shadow 200ms ease;
        height: 100%;
      }
      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      }
      img { 
        width: 100%; 
        height: 180px; 
        object-fit: cover;
        background: linear-gradient(135deg, var(--memphis-blue-1), var(--memphis-blue-2));
      }
      .card-body { 
        padding: 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      h3 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
        color: var(--text);
      }
      p {
        margin: 0 0 1rem;
        color: var(--text);
        font-size: 0.95rem;
        flex: 1;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
      }
      .tags small { 
        background: rgba(47,111,224,0.1);
        color: var(--memphis-accent);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
      }
      a {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--memphis-accent);
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 500;
        font-size: 0.9rem;
        transition: opacity 150ms ease;
      }
      a:hover {
        opacity: 0.9;
      }
      a:focus {
        outline: 2px solid var(--memphis-accent);
        outline-offset: 2px;
      }
    `,
  ],
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
