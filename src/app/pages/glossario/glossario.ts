import { Component, signal } from '@angular/core';

interface Termo {
  id: string;
  termo: string;
  definicao: string;
  categoria: 'Basico' | 'Arquitetura' | 'Reatividade' | 'Ferramentas';
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
      categoria: 'Ferramentas'
    },
    {
      id: 'trello',
      termo: 'Trello',
      definicao: 'Aplicativo de organização de tarefas baseado em quadros Kanban, muito comum para gestão ágil.',
      categoria: 'Ferramentas'
    },
    {
      id: 'claude-code',
      termo: 'Claude Code',
      definicao: 'Ferramenta de linha de comando (CLI) da Anthropic que permite ao modelo Claude interagir diretamente com seu código no terminal.',
      categoria: 'Ferramentas'
    },
    {
      id: 'play-mode',
      termo: 'Play Mode',
      definicao: 'Modo do Claude Code onde ele sugere mudanças e pede sua aprovação para cada ação, ideal para quem está aprendendo a confiar na IA.',
      categoria: 'Ferramentas'
    }
  ]);
}
