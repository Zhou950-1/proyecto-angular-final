import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <div class="container">© {{ year }} - Mi Portafolio. Todos los derechos reservados.</div>
    </footer>
  `,
  styles: [
    `
      .site-footer { padding: 1rem; text-align:center; border-top:1px solid var(--muted); margin-top:2rem; color: var(--muted) }
      .container { max-width:1100px; margin:0 auto; padding:1rem; font-size:0.875rem }
    `,
  ],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
