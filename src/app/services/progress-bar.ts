import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProgressoService } from '../services/progresso.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="progress-container">
      <div class="progress-info">
        <span>Seu aprendizado</span>
        <span class="percentage">{{ progresso() }}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" [style.width.%]="progresso()"></div>
      </div>
    </div>
  `,
  styles: [`
    .progress-container { margin: 1.5rem 0; width: 100%; max-width: 1200px; }
    .progress-info { 
      display: flex; justify-content: space-between; 
      font-size: 0.75rem; margin-bottom: 0.5rem; 
      color: var(--cor-texto-secundario); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    }
    .percentage { color: var(--cor-primaria); }
    .progress-track { height: 6px; background: var(--cor-borda); border-radius: 10px; overflow: hidden; }
    .progress-fill { 
      height: 100%; 
      background: linear-gradient(90deg, var(--cor-primaria), #60a5fa); 
      transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
      position: relative;
      overflow: hidden;
    }
    /* Efeito de Brilho (Shine) */
    .progress-fill::after {
      content: '';
      position: absolute;
      top: 0; left: 0; bottom: 0;
      width: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      animation: shine 2s infinite;
    }
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `]
})
export class ProgressBarComponent {
  private progressoService = inject(ProgressoService) as ProgressoService;
  protected progresso = this.progressoService.progresso;
}