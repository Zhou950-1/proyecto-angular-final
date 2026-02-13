import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="container contact">
      <h2>Contacto</h2>
      <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <div class="form-group">
          <label for="name">Nombre
            <input id="name" formControlName="name" type="text" aria-required="true" aria-invalid="{{ form.get('name')?.invalid && form.get('name')?.touched }}" />
          </label>
          <span class="error" *ngIf="form.get('name')?.invalid && form.get('name')?.touched">Campo requerido</span>
        </div>

        <div class="form-group">
          <label for="email">Email
            <input id="email" formControlName="email" type="email" aria-required="true" aria-invalid="{{ form.get('email')?.invalid && form.get('email')?.touched }}" />
          </label>
          <span class="error" *ngIf="form.get('email')?.hasError('required') && form.get('email')?.touched">Email requerido</span>
          <span class="error" *ngIf="form.get('email')?.hasError('email') && form.get('email')?.touched">Email inválido</span>
        </div>

        <div class="form-group">
          <label for="message">Mensaje
            <textarea id="message" formControlName="message" aria-required="true" aria-invalid="{{ form.get('message')?.invalid && form.get('message')?.touched }}"></textarea>
          </label>
          <span class="error" *ngIf="form.get('message')?.hasError('required') && form.get('message')?.touched">Mensaje requerido</span>
          <span class="error" *ngIf="form.get('message')?.hasError('minlength') && form.get('message')?.touched">Mínimo 10 caracteres</span>
        </div>

        <button type="submit" [disabled]="form.invalid" aria-busy="{{ sent }}">{{ sent ? 'Enviando...' : 'Enviar' }}</button>
      </form>
      <div *ngIf="sent" role="status" aria-live="polite" class="success-message">Mensaje enviado exitosamente. Gracias por contactarme.</div>
    </section>
  `,
  styles: [
    `
      .container{max-width:700px;margin:0 auto;padding:1rem}
      h2{color:var(--text)}
      .form-group{margin-bottom:1rem;display:flex;flex-direction:column}
      label{font-weight:500;margin-bottom:0.5rem;color:var(--text)}
      input,textarea{width:100%;padding:0.5rem;border:1px solid #ddd;border-radius:4px;font-family:inherit;color:var(--text)}
      input:focus,textarea:focus{outline:none;border-color:var(--memphis-blue-2);box-shadow:0 0 0 2px rgba(47,111,224,0.1)}
      button{margin-top:0.5rem;padding:0.6rem 1rem;background:var(--memphis-blue-2);color:white;border:none;border-radius:4px;cursor:pointer;font-weight:500}
      button:disabled{opacity:0.6;cursor:not-allowed}
      button:hover:not(:disabled){background:var(--memphis-blue-1)}
      .error{color:#d32f2f;font-size:0.875rem;margin-top:0.25rem}
      .success-message{margin-top:1rem;padding:0.75rem;background:rgba(76,175,80,0.1);color:var(--text);border-radius:4px;border-left:4px solid #4caf50;font-weight:500}
    `,
  ],
})
export class ContactComponent {
  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { validators: [Validators.required, Validators.minLength(10)] }),
  });

  sent = false;

  constructor(private storage: StorageService) {}

  submit() {
    if (this.form.invalid) return;
    interface ContactMessage { name: string; email: string; message: string; date?: string }
    const payload = this.form.value as { name: string; email: string; message: string };
    const messages = (this.storage.get<ContactMessage[]>('contact.messages') ?? []) as ContactMessage[];
    messages.push({ ...payload, date: new Date().toISOString() });
    this.storage.set('contact.messages', messages);
    this.sent = true;
    this.form.reset();
    setTimeout(() => (this.sent = false), 5000);
  }
}
