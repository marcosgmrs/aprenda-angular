import { Component, inject, computed } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (crumbs().length > 0) {
      <nav class="breadcrumbs-nav">
        <a routerLink="/" class="crumb-item">Início</a>
        @for (crumb of crumbs(); track crumb.url) {
          <span class="separator">/</span>
          <a [routerLink]="crumb.url" class="crumb-item" [class.active]="$last">
            {{ crumb.label }}
          </a>
        }
      </nav>
    }
  `,
  styleUrl: './breadcrumbs.css'
})
export class Breadcrumbs {
  private router = inject(Router);
  private cursoService = inject(CursoService);

  private routeEvent = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects || this.router.url),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  crumbs = computed(() => {
    const url = this.routeEvent();
    if (!url || url === '/') return [];

    const segments = url.split('/').filter(s => s !== '');
    const breadcrumbs: { label: string; url: string }[] = [];
    let currentUrl = '';

    segments.forEach((segment, index) => {
      currentUrl += `/${segment}`;
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);

      // Tradução de IDs técnicos para Títulos reais do CursoService
      if (this.cursoService.getModuloPorId(segment)) {
        label = this.cursoService.getModuloPorId(segment)?.titulo || label;
      } else {
        const aulaData = this.cursoService.getAulaPorId(segment);
        if (aulaData) label = aulaData.aula.titulo;
      }

      // Ajustes específicos de labels
      if (segment === 'modulos') label = 'Trilha de Módulos';
      if (segment === 'glossario') label = 'Glossário';
      if (segment === 'ferramentas') label = 'Ferramentas';
      if (segment === 'entrevista') label = 'Entrevista';

      breadcrumbs.push({ label, url: currentUrl });
    });
    return breadcrumbs;
  });
}
