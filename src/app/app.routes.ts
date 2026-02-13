import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: '' },
];
