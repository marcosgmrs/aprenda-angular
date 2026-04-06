import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressoService {
  private readonly STORAGE_KEY = 'aprenda-angular-progresso';
  private aulasCompletas = signal<string[]>([]);

  constructor() {
    // Carregar do localStorage na inicialização
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.aulasCompletas.set(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao carregar progresso:', e);
      }
    }

    // Persistir automaticamente sempre que o signal mudar
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.aulasCompletas()));
    });
  }

  isAulaCompleta(id: string): boolean {
    return this.aulasCompletas().includes(id);
  }

  toggleAula(id: string): void {
    const atual = this.aulasCompletas();
    if (atual.includes(id)) {
      this.aulasCompletas.set(atual.filter(a => a !== id));
    } else {
      this.aulasCompletas.set([...atual, id]);
    }
  }

  getProgressoPorModulo(aulaIds: string[]): number {
    if (aulaIds.length === 0) return 0;
    const completasNesseModulo = aulaIds.filter(id => this.isAulaCompleta(id)).length;
    return Math.round((completasNesseModulo / aulaIds.length) * 100);
  }

  getTotalAulasCompletas(): number {
    return this.aulasCompletas().length;
  }
}
