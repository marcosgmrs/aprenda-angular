import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Objeto para monitorar a preferência do Sistema Operacional
  private darkQuery = globalThis.matchMedia?.('(prefers-color-scheme: dark)');

  theme = signal<'light' | 'dark'>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const current = this.theme();
      globalThis.localStorage?.setItem('theme', current);
      // Aplica o tema ao elemento raiz do HTML
      globalThis.document.documentElement.setAttribute('data-theme', current);
    });

    // Ouve mudanças nas configurações do Sistema Operacional em tempo real
    this.darkQuery?.addEventListener('change', (event) => {
      // Só altera automaticamente se o usuário não tiver uma preferência salva no navegador
      if (!globalThis.localStorage?.getItem('theme')) {
        this.theme.set(event.matches ? 'dark' : 'light');
      }
    });
  }

  private getInitialTheme(): 'light' | 'dark' {
    const saved = globalThis.localStorage?.getItem('theme') as 'light' | 'dark';
    if (saved) return saved;

    // Se não houver nada salvo, retorna a preferência do sistema (ou dark como fallback)
    return this.darkQuery?.matches ? 'dark' : 'light';
  }

  toggle() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }
}