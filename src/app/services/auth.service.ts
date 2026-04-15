import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Signal privado com o estado inicial do localStorage
  #token = signal<string | null>(globalThis.localStorage?.getItem('auth_token'));
  
  // Exposição pública somente leitura
  token = this.#token.asReadonly();

  logout() {
    globalThis.localStorage?.removeItem('auth_token');
    this.#token.set(null);
    // Opcional: Redirecionar para login aqui
    globalThis.location?.reload(); 
  }
}