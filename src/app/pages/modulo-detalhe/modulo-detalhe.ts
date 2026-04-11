import { ChangeDetectionStrategy, Component, inject, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CursoService } from '../../services/curso';
import { ProgressoService } from '../../services/progresso';

@Component({
  selector: 'app-modulo-detalhe',
  imports: [RouterLink],
  templateUrl: './modulo-detalhe.html',
  styleUrl: './modulo-detalhe.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuloDetalhe {
  private cursoService = inject(CursoService);
  private progressoService = inject(ProgressoService);

  // Input vindo da rota
  id = input.required<string>();

  modulo = computed(() => this.cursoService.getModuloPorId(this.id()) ?? null);

  progresso = computed(() => {
    const curModulo = this.modulo();
    if (!curModulo) return 0;
    const ids = curModulo.aulas.map(a => a.id);
    return this.progressoService.getProgressoPorModulo(ids);
  });

  isAulaCompleta(id: string): boolean {
    return this.progressoService.isAulaCompleta(id);
  }
}