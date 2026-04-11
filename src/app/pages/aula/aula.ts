import { ChangeDetectionStrategy, Component, signal, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CursoService } from '../../services/curso';
import { ProgressoService } from '../../services/progresso';
import { MarkdownPipe } from '../../pipes/markdown.pipe';

@Component({
  selector: 'app-aula',
  imports: [RouterLink, MarkdownPipe],
  templateUrl: './aula.html',
  styleUrl: './aula.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Aula {
  private cursoService = inject(CursoService);
  private progressoService = inject(ProgressoService);

  // Input vindo da rota (graças ao withComponentInputBinding no app.config)
  id = input.required<string>();

  // Dados carregados reativamente quando o ID muda
  dados = computed(() => this.cursoService.getAulaPorId(this.id()));
  
  aula = computed(() => this.dados()?.aula ?? null);
  modulo = computed(() => this.dados()?.modulo ?? null);
  
  isCompleta = computed(() => this.progressoService.isAulaCompleta(this.id()));

  // Lógica de navegação baseada em signals
  aulaAnteriorId = computed(() => {
    const mod = this.modulo();
    const id = this.id();
    if (!mod) return null;
    const index = mod.aulas.findIndex(a => a.id === id);
    return index > 0 ? mod.aulas[index - 1].id : null;
  });

  proximaAulaId = computed(() => {
    const mod = this.modulo();
    const id = this.id();
    if (!mod) return null;
    const index = mod.aulas.findIndex(a => a.id === id);
    return index < mod.aulas.length - 1 ? mod.aulas[index + 1].id : null;
  });

  toggleProgresso() {
    this.progressoService.toggleAula(this.id());
  }
}
