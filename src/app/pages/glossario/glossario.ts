import { Component, signal } from '@angular/core';

interface Termo {
  id: string;
  termo: string;
  definicao: string;
  categoria: 'Basico' | 'Arquitetura' | 'Reatividade' | 'Ferramentas' | 'Mercado' | 'Web';
}

@Component({
  selector: 'app-glossario',
  imports: [],
  templateUrl: './glossario.html',
  styleUrl: './glossario.css',
})
export class Glossario {
  termos = signal<Termo[]>([
    {
      id: 'componente',
      termo: 'Componente',
      definicao: 'O bloco de construção básico de uma interface Angular. Combina um template HTML, estilos CSS e lógica TypeScript.',
      categoria: 'Basico'
    },
    {
      id: 'signal',
      termo: 'Signal',
      definicao: 'Um sistema de rastreamento de estado que permite ao Angular saber exatamente quais partes da interface precisam ser atualizadas quando um valor muda.',
      categoria: 'Reatividade'
    },
    {
      id: 'diretiva',
      termo: 'Diretiva',
      definicao: 'Classes que adicionam comportamento extra a elementos no DOM. Podem ser estruturais (@if, @for) ou de atributo ([ngClass]).',
      categoria: 'Basico'
    },
    {
      id: 'servico',
      termo: 'Serviço',
      definicao: 'Classes usadas para organizar lógica de negócio, compartilhar dados ou fazer chamadas de API, separadas da interface.',
      categoria: 'Arquitetura'
    },
    {
      id: 'di',
      termo: 'Injeção de Dependência (DI)',
      definicao: 'Um padrão de design onde o Angular fornece instâncias de classes (como serviços) para componentes automaticamente.',
      categoria: 'Arquitetura'
    },
    {
      id: 'pipe',
      termo: 'Pipe',
      definicao: 'Funções simples usadas em templates para transformar a exibição de dados (ex: formatar datas ou moedas).',
      categoria: 'Basico'
    },
    {
      id: 'routing',
      termo: 'Roteamento',
      definicao: 'O sistema que permite navegar entre diferentes "páginas" (componentes) sem recarregar o navegador.',
      categoria: 'Arquitetura'
    },
    {
      id: 'lazy-loading',
      termo: 'Lazy Loading',
      definicao: 'Técnica de carregar módulos ou componentes apenas quando o usuário navega até eles, diminuindo o tamanho inicial do download da app.',
      categoria: 'Arquitetura'
    },
    {
      id: 'ssr',
      termo: 'SSR (Server-Side Rendering)',
      definicao: 'Renderização da página no servidor antes de enviá-la ao navegador, melhorando SEO e performance inicial.',
      categoria: 'Arquitetura'
    },
    {
      id: 'hydration',
      termo: 'Hydration (Hidratação)',
      definicao: 'O processo onde o Angular no cliente "assume" o controle do HTML que foi pré-renderizado pelo servidor (SSR).',
      categoria: 'Arquitetura'
    },
    {
      id: 'rxjs',
      termo: 'RxJS',
      definicao: 'Biblioteca para programação reativa usando Observables, muito usada para gerenciar fluxos assíncronos e eventos.',
      categoria: 'Reatividade'
    },
    {
      id: 'observable',
      termo: 'Observable',
      definicao: 'Um fluxo de dados que pode emitir múltiplos valores ao longo do tempo. Você se "inscreve" para receber e reagir a esses valores.',
      categoria: 'Reatividade'
    },
    {
      id: 'immutability',
      termo: 'Imutabilidade',
      definicao: 'Prática de não alterar objetos existentes, mas criar novas cópias com as mudanças. Ajuda o Angular a detectar mudanças rapidamente.',
      categoria: 'Arquitetura'
    },
    {
      id: 'daily',
      termo: 'Daily Scrum',
      definicao: 'Reunião diária rápida (máximo 15 min) para alinhar o que foi feito ontem, o que será feito hoje e se há impedimentos.',
      categoria: 'Mercado'
    },
    {
      id: 'sprint',
      termo: 'Sprint',
      definicao: 'Um ciclo de trabalho (geralmente 2 semanas) onde a equipe se compromete a entregar um conjunto de tarefas.',
      categoria: 'Mercado'
    },
    {
      id: 'pull-request',
      termo: 'Pull Request (PR)',
      definicao: 'Pedido para mesclar seu código no repositório principal, onde outros desenvolvedores fazem o Code Review.',
      categoria: 'Mercado'
    },
    {
      id: 'code-review',
      termo: 'Code Review',
      definicao: 'Processo onde colegas revisam seu código em busca de bugs, melhorias de arquitetura ou legibilidade antes de ser aprovado.',
      categoria: 'Mercado'
    },
    {
      id: 'ci-cd',
      termo: 'CI/CD',
      definicao: 'Continuous Integration / Continuous Deployment. Automatização de testes e deploy da aplicação a cada mudança recomendada.',
      categoria: 'Ferramentas'
    },
    {
      id: 'tech-debt',
      termo: 'Dívida Técnica',
      definicao: 'O custo de escolher uma solução fácil/rápida agora em vez de uma abordagem melhor que levaria mais tempo.',
      categoria: 'Mercado'
    },
    {
      id: 'jwt',
      termo: 'JWT (JSON Web Token)',
      definicao: 'Padrão usado para autenticação segura entre cliente e servidor, geralmente enviado no cabeçalho das requisições.',
      categoria: 'Web'
    },
    {
      id: 'cli',
      termo: 'Angular CLI',
      definicao: 'Interface de linha de comando para criar, desenvolver e fazer o build de aplicações Angular.',
      categoria: 'Ferramentas'
    },
    {
      id: 'jira',
      termo: 'Jira',
      definicao: 'Ferramenta de gestão de projetos usada por grandes equipes para rastrear tarefas (tasks), bugs e o progresso do desenvolvimento.',
      categoria: 'Ferramentas'
    },
    {
      id: 'kanban',
      termo: 'Kanban',
      definicao: 'Método visual de gestão de trabalho (como quadros com colunas "To Do", "Doing", "Done") para evitar sobrecarga na equipe.',
      categoria: 'Mercado'
    },
    {
      id: 'claude-code',
      termo: 'Claude Code',
      definicao: 'Ferramenta de linha de comando (CLI) da Anthropic que permite ao modelo Claude interagir diretamente com seu código no terminal.',
      categoria: 'Ferramentas'
    }
  ]);
}
