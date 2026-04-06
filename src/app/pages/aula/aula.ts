import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CursoService, Aula as AulaData, Modulo } from '../../services/curso';
import { ProgressoService } from '../../services/progresso';

@Component({
  selector: 'app-aula',
  imports: [RouterLink],
  templateUrl: './aula.html',
  styleUrl: './aula.css',
})
export class Aula implements OnInit {
  private route = inject(ActivatedRoute);
  private cursoService = inject(CursoService);
  private progressoService = inject(ProgressoService);

  aula = signal<AulaData | null>(null);
  modulo = signal<Modulo | null>(null);
  aulaAnteriorId = signal<string | null>(null);
  proximaAulaId = signal<string | null>(null);

  isCompleta = signal(false);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.carregarAula(id);
    });
  }

  carregarAula(id: string) {
    const dados = this.cursoService.getAulaPorId(id);
    if (dados) {
      this.aula.set(dados.aula);
      this.modulo.set(dados.modulo);
      this.isCompleta.set(this.progressoService.isAulaCompleta(id));
      this.setNavegacao(dados.modulo, id);
    }
  }

  setNavegacao(modulo: Modulo, aulaId: string) {
    const index = modulo.aulas.findIndex(a => a.id === aulaId);
    this.aulaAnteriorId.set(index > 0 ? modulo.aulas[index - 1].id : null);
    this.proximaAulaId.set(index < modulo.aulas.length - 1 ? modulo.aulas[index + 1].id : null);
  }

  toggleProgresso() {
    const id = this.aula()?.id;
    if (id) {
      this.progressoService.toggleAula(id);
      this.isCompleta.set(this.progressoService.isAulaCompleta(id));
    }
  }
}
