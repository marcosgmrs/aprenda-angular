import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CursoService, Modulo } from '../../services/curso';
import { ProgressoService } from '../../services/progresso';

@Component({
  selector: 'app-modulo-detalhe',
  imports: [RouterLink],
  templateUrl: './modulo-detalhe.html',
  styleUrl: './modulo-detalhe.css'
})
export class ModuloDetalhe implements OnInit {
  private route = inject(ActivatedRoute);
  private cursoService = inject(CursoService);
  private progressoService = inject(ProgressoService);

  modulo = signal<Modulo | null>(null);

  progresso = computed(() => {
    const curModulo = this.modulo();
    if (!curModulo) return 0;
    const ids = curModulo.aulas.map(a => a.id);
    return this.progressoService.getProgressoPorModulo(ids);
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    const modulo = this.cursoService.getModuloPorId(id);
    this.modulo.set(modulo ?? null);
  }

  isAulaCompleta(id: string): boolean {
    return this.progressoService.isAulaCompleta(id);
  }
}