import { Injectable, signal, computed, inject } from '@angular/core';
import { CursoService } from './curso';

@Injectable({ providedIn: 'root' })
export class ProgressoService {
  private cursoService = inject(CursoService);
  
  // Armazena IDs das aulas concluídas
  private aulasConcluidas = signal<Set<string>>(new Set(this.loadFromStorage()));

  // Cálculo reativo da porcentagem
  progresso = computed(() => {
    const total = this.cursoService.getTotalAulas();
    if (total === 0) return 0;
    return Math.round((this.aulasConcluidas().size / total) * 100);
  });

  // Método essencial para o BotaoConcluir funcionar
  estaConcluida(aulaId: string): boolean {
    return this.aulasConcluidas().has(aulaId);
  }

  alternarConclusao(aulaId: string) {
    this.aulasConcluidas.update(set => {
      const novoSet = new Set(set);
      if (novoSet.has(aulaId)) novoSet.delete(aulaId);
      else novoSet.add(aulaId);
      this.saveToStorage(novoSet);
      return novoSet;
    });
  }

  private loadFromStorage(): string[] {
    const data = globalThis.localStorage?.getItem('progresso_curso');
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(set: Set<string>) {
    globalThis.localStorage?.setItem('progresso_curso', JSON.stringify(Array.from(set)));
  }
}