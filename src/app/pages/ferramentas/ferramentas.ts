import { Component, signal } from '@angular/core';

interface Ferramenta {
  nome: string;
  descricao: string;
  url: string;
  icone: string;
}

@Component({
  selector: 'app-ferramentas',
  imports: [],
  templateUrl: './ferramentas.html',
  styleUrl: './ferramentas.css',
})
export class Ferramentas {
  ferramentas = signal<Ferramenta[]>([
    {
      nome: 'Angular.io',
      descricao: 'A documentação oficial do Angular. Tudo o que você precisa saber, direto da fonte.',
      url: 'https://angular.dev',
      icone: '🅰️'
    },
    {
      nome: 'Angular CLI',
      descricao: 'A ferramenta de linha de comando oficial para criar e gerenciar apps Angular.',
      url: 'https://angular.dev/tools/cli',
      icone: '⌨️'
    },
    {
      nome: 'StackBlitz',
      descricao: 'O melhor editor online para testar código Angular instantaneamente no navegador.',
      url: 'https://stackblitz.com',
      icone: '⚡'
    },
    {
      nome: 'Angular DevTools',
      descricao: 'Extensão do Chrome/Firefox para debugar e analisar a performance de apps Angular.',
      url: 'https://angular.dev/tools/devtools',
      icone: '🔍'
    },
    {
      nome: 'PrimeNG',
      descricao: 'Uma das bibliotecas de componentes UI mais populares para Angular.',
      url: 'https://primeng.org',
      icone: '🎨'
    },
    {
      nome: 'RxJS Tools',
      descricao: 'Visualizador de operadores RxJS para ajudar a entender fluxos reativos.',
      url: 'https://rxmarbles.com',
      icone: '🎢'
    }
  ]);
}
