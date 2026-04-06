import { Component, signal } from '@angular/core';

interface Ferramenta {
  nome: string;
  descricao: string;
  url: string;
  icone: string;
  categoria: 'Angular' | 'DevOps' | 'Design' | 'Testes' | 'Produtividade';
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
      descricao: 'Documentação oficial. O ponto de partida obrigatório para qualquer dúvida técnica.',
      url: 'https://angular.dev',
      icone: '🅰️',
      categoria: 'Angular'
    },
    {
      nome: 'Angular CLI',
      descricao: 'Gerencia o ciclo de vida do seu projeto (ng new, ng serve, ng build).',
      url: 'https://angular.dev/tools/cli',
      icone: '⌨️',
      categoria: 'Angular'
    },
    {
      nome: 'Angular DevTools',
      descricao: 'Debug de performance e inspeção da árvore de componentes no navegador.',
      url: 'https://angular.dev/tools/devtools',
      icone: '🔍',
      categoria: 'Angular'
    },
    {
      nome: 'Postman',
      descricao: 'Indispensável para testar APIs antes de integrá-las ao seu código Angular.',
      url: 'https://www.postman.com',
      icone: '🚀',
      categoria: 'Produtividade'
    },
    {
      nome: 'Figma',
      descricao: 'Onde você verá os designs que precisará transformar em componentes.',
      url: 'https://www.figma.com',
      icone: '🎨',
      categoria: 'Design'
    },
    {
      nome: 'Cypress',
      descricao: 'Ferramenta líder para testes de ponta a ponta (E2E) simulando o usuário real.',
      url: 'https://www.cypress.io',
      icone: '🌲',
      categoria: 'Testes'
    },
    {
      nome: 'Jest',
      descricao: 'Framework de testes unitários ultrarrápido, uma ótima alternativa ao Karma.',
      url: 'https://jestjs.io',
      icone: '🃏',
      categoria: 'Testes'
    },
    {
      nome: 'Prettier',
      descricao: 'Formatador de código que garante que o projeto tenha um estilo visual único.',
      url: 'https://prettier.io',
      icone: '✨',
      categoria: 'Produtividade'
    },
    {
      nome: 'ESLint',
      descricao: 'Encontra erros e padrões ruins de código antes mesmo de você rodar a app.',
      url: 'https://eslint.org',
      icone: '🚨',
      categoria: 'Produtividade'
    },
    {
      nome: 'StackBlitz',
      descricao: 'Editor online ideal para prototipar ideias e compartilhar exemplos rápidos.',
      url: 'https://stackblitz.com',
      icone: '⚡',
      categoria: 'Produtividade'
    },
    {
      nome: 'Claude Code CLI',
      descricao: 'Acelerador de desenvolvimento IA que integra o modelo Claude ao seu terminal.',
      url: 'https://github.com/anthropic-ai/claude-code',
      icone: '🤖',
      categoria: 'Produtividade'
    }
  ]);
}
