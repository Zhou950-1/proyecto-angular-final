import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="home-hero">
      <svg class="hero-bg-svg" viewBox="0 0 1200 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="exponentialGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:var(--memphis-blue-1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:var(--memphis-blue-2);stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Smooth wave curve covering full height -->
        <path d="M 0 500 Q 300 400 600 350 T 1200 300 L 1200 0 L 0 0 Z" fill="url(#exponentialGrad)" />
      </svg>
      <div class="hero container">
        <div class="hero-left">
          <p class="eyebrow">Hola — Soy</p>
          <h1 class="hero-title">Juan García</h1>
          <p class="hero-sub">Frontend Developer — Angular & TypeScript</p>

          <p class="bio">Desarrollador web especializado en la creación de aplicaciones escalables y accesibles. Con experiencia en Angular y TypeScript, me enfoco en construir soluciones de calidad que ofrecen una excelente experiencia de usuario.</p>

          <div class="hero-ctas">
            <a class="btn primary" routerLink="/portfolio">Ver proyectos</a>
            <a class="btn ghost" routerLink="/contact">Contactar</a>
          </div>
        </div>

        <div class="hero-right" aria-hidden="false">
          <div class="profile-card">
            <svg class="profile-icon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="100" cy="70" r="35" fill="currentColor"/>
              <path d="M 40 160 Q 40 130 70 130 L 130 130 Q 160 130 160 160 L 160 170 Q 160 190 150 195 L 50 195 Q 40 190 40 170 Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .container{max-width:1100px;margin:0 auto;padding:1rem}
      .home-hero{background:linear-gradient(180deg,#ffffff,#f5f5f5);padding:2.5rem 0;position:relative;overflow:hidden}
      :host-context(html.dark-theme) .home-hero{background:linear-gradient(180deg,#0a0a0f,#030306)}
      .hero{display:flex;gap:2rem;align-items:center}
      .hero-left{flex:1}
      
      /* Hero text colors - white on blue background */
      .home-hero .eyebrow{color:#ffffff;font-weight:700;margin:0 0 0.25rem;opacity:0.95}
      .home-hero .hero-title{font-size:2.25rem;margin:0;color:#ffffff;font-weight:700}
      .home-hero .hero-sub{margin:0.5rem 0;color:#ffffff;font-size:1.1rem;opacity:0.92}
      .home-hero .bio{color:#ffffff;margin-top:1rem;max-width:46ch;opacity:0.9}
      
      /* Light mode fallback: dark text if outside SVG coverage */
      .home-hero .eyebrow,
      .home-hero .hero-title,
      .home-hero .hero-sub,
      .home-hero .bio {
        color:#ffffff;
      }
      
      /* Dark mode hero text */
      :host-context(html.dark-theme) .eyebrow{color:#ffffff;opacity:0.98}
      :host-context(html.dark-theme) .hero-title{color:#ffffff}
      :host-context(html.dark-theme) .hero-sub{color:#ffffff;opacity:0.95}
      :host-context(html.dark-theme) .bio{color:#ffffff;opacity:0.93}
      
      .hero-ctas{margin-top:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap}
      .btn{display:inline-flex;align-items:center;justify-content:center;padding:0.7rem 1.2rem;border-radius:8px;text-decoration:none;font-weight:500;transition:all 150ms ease;white-space:nowrap;border:3px solid transparent;box-shadow:0 4px 12px rgba(0,0,0,0.15)}
      .btn.primary{background:#ffffff;color:var(--memphis-blue-2);border:3px solid #ffffff;font-weight:600}
      .btn.primary:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(0,0,0,0.25)}
      .btn.primary:focus{outline:2px solid #ffffff;outline-offset:2px}
      .btn.ghost{border:3px solid #ffffff;color:#1a1a1a;background:#ffffff;font-weight:600}
      .btn.ghost:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(0,0,0,0.25)}
      .btn.ghost:focus{outline:2px solid #ffffff;outline-offset:2px}
      
      /* Light mode: dark buttons fallback if outside SVG */
      .home-hero .btn.primary{background:#ffffff;color:var(--memphis-blue-2);border:3px solid #ffffff}
      .home-hero .btn.ghost{border:3px solid #ffffff;color:#1a1a1a;background:#ffffff}
      
      /* Dark mode: keep light buttons */
      :host-context(html.dark-theme) .home-hero .btn.primary{background:#ffffff;color:var(--memphis-blue-2);border:3px solid #ffffff}
      :host-context(html.dark-theme) .home-hero .btn.ghost{border:3px solid #ffffff;color:#1a1a1a;background:#ffffff}

      .hero-right{width:260px;position:relative;display:flex;align-items:center;justify-content:center}
      .profile-card{width:240px;height:240px;border-radius:20px;box-shadow:0 8px 20px rgba(20,20,20,0.07);overflow:hidden;background:linear-gradient(135deg,#F0F7FF,#EFF8FF);transform-origin:center;display:flex;align-items:center;justify-content:center}
      .profile-icon{width:200px;height:200px;border-radius:14px;background:linear-gradient(135deg,var(--memphis-blue-1),var(--memphis-blue-2));color:white;display:flex;align-items:center;justify-content:center}

      /* hero background with smooth exponential SVG curve */
      .home-hero { position:relative; overflow:hidden; min-height:600px }
      .hero-bg-svg { 
        position:absolute; left:0; top:0; right:0; bottom:0;
        width:100%; height:100%;
        z-index:0; pointer-events:none;
      }
      .hero-bg-svg path,
      .hero-bg-svg stop {
        transition: all 280ms ease;
      }
      .home-hero > .hero { position:relative; z-index:1 }

      /* pop animation: plays once on load */
      .profile-card { animation: memphisPop 1100ms cubic-bezier(.2,.9,.3,1) 600ms both; }
      @keyframes memphisPop {
        0% { transform: translateY(0) scale(0.9); }
        30% { transform: translateY(-22px) scale(1.18); }
        65% { transform: translateY(8px) scale(0.95); }
        100% { transform: translateY(0) scale(1); }
      }

      @media (max-width:800px){
        .hero{flex-direction:column;align-items:flex-start}
        .hero-right{width:100%;display:block}
        .profile-card{width:200px;height:200px}
      }
    `,
  ],
})
export class HomeComponent {}
