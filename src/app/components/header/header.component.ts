import { Component, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <nav class="nav" role="navigation" aria-label="Principal">
        <a routerLink="/" class="brand" aria-label="Mi Portafolio - inicio">Mi Portafolio</a>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" aria-current="page">Home</a></li>
          <li><a routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contacto</a></li>
        </ul>
        <button 
          class="theme-toggle" 
          (click)="toggleTheme()" 
          aria-label="Cambiar tema {{ isDark ? 'claro' : 'oscuro' }}" 
          [attr.aria-pressed]="isDark"
          title="Cambiar tema">
          <!-- theme icon SVG (sun/moon neutral) -->
          <svg class="theme-icon" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4" stroke="currentColor" fill="currentColor"/>
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.2 4.2l1.4 1.4" />
              <path d="M18.4 18.4l1.4 1.4" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M4.2 19.8l1.4-1.4" />
              <path d="M18.4 5.6l1.4-1.4" />
            </g>
          </svg>
        </button>
      </nav>
    </header>
  `,
  styles: [
    `
      .site-header { 
        padding: 1rem; 
        background: linear-gradient(90deg, var(--surface), var(--surface)); 
        border-bottom: 1px solid rgba(0,0,0,0.08); 
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .nav { 
        display:flex; 
        gap:1rem; 
        align-items:center; 
        justify-content:space-between; 
        max-width:1100px;
        margin:0 auto 
      }
      .nav-links { 
        list-style:none; 
        display:flex; 
        gap:0.75rem; 
        margin:0; 
        padding:0 
      }
      .nav a { 
        text-decoration:none; 
        color: var(--text); 
        padding:0.35rem 0.75rem; 
        border-radius:8px;
        transition: background-color 150ms ease, color 150ms ease;
      }
      .nav a:focus { 
        outline: 2px solid var(--memphis-accent);
        outline-offset: 2px;
      }
      .nav a.active { 
        background: rgba(47,111,224,0.15);
        color: var(--memphis-accent);
        font-weight:600;
      }
      .nav a:hover { 
        background: rgba(47,111,224,0.08) 
      }
      .brand { 
        font-weight:700; 
        color:var(--memphis-accent);
        text-decoration:none;
        font-size:1.1rem;
      }
      .theme-toggle{
        background:transparent;
        border:1px solid rgba(0,0,0,0.08);
        padding:0.4rem 0.6rem;
        border-radius:8px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        transition: all 150ms ease;
      }
      .theme-toggle:hover {
        background: rgba(0,0,0,0.04);
      }
      .theme-toggle:focus {
        outline: 2px solid var(--memphis-accent);
        outline-offset: 2px;
      }

      /* icon animation: plays once on load */
      .theme-icon { 
        color:var(--memphis-accent); 
        transform-origin:center; 
        animation: iconPop 900ms cubic-bezier(.2,.9,.3,1) 400ms both; 
        transition: color 220ms ease; 
      }
      .theme-toggle[aria-pressed='true'] .theme-icon { 
        color: var(--memphis-accent); 
      }
      @keyframes iconPop {
        0% { transform: translateY(0) scale(1); }
        25% { transform: translateY(-12px) scale(1.15); }
        60% { transform: translateY(6px) scale(0.95); }
        100% { transform: translateY(0) scale(1); }
      }

      @media (max-width:600px) {
        .nav-links { gap: 0.5rem }
        .nav a { padding: 0.35rem 0.5rem; font-size: 0.9rem }
        .brand { font-size: 1rem }
      }
    `,
  ],
})
export class HeaderComponent {
  private readonly storage = inject(StorageService);
  private readonly platformId = inject(PLATFORM_ID);

  get isDark(): boolean {
    return (this.storage.get('theme') || 'light') === 'dark';
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const current = this.storage.get('theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    this.storage.set('theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }
}
