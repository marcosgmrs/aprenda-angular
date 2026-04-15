import { Component, inject, input, ChangeDetectionStrategy, computed } from '@angular/core';
import { ProgressoService } from '../services/progresso.service';

@Component({
  selector: 'app-botao-concluir',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button 
      [class.concluida]="estaConcluida()" 
      (click)="alternar()"
      class="btn-concluir">
      @if (estaConcluida()) {
        ✅ Aula Concluída
      } @else {
        Marcar como Concluída
      }
    </button>
  `,
  styles: [`
    .btn-concluir {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--cor-primaria);
      background: transparent;
      color: var(--cor-primaria);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-concluir:hover { background: rgba(59, 130, 246, 0.1); }
    .btn-concluir.concluida {
      background: var(--cor-primaria);
      color: white;
    }
  `]
})
export class BotaoConcluir {
  private progressoService = inject(ProgressoService);
  aulaId = input.required<string>();

  estaConcluida = computed(() => this.progressoService.estaConcluida(this.aulaId()));

  alternar() { this.progressoService.alternarConclusao(this.aulaId()); }
}