import { Component, PLATFORM_ID, effect, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly storage = inject(StorageService);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    // apply saved theme on app startup so it is persistent across pages
    if (isPlatformBrowser(this.platformId)) {
      try {
        const theme = this.storage.get<string>('theme') || 'light';
        if (theme === 'dark') {
          document.documentElement.classList.add('dark-theme');
        } else {
          document.documentElement.classList.remove('dark-theme');
        }
      } catch (e) {
        console.warn('Theme restoration error:', e);
      }
    }
  }
}
