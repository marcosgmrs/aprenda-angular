import { Component, signal } from '@angular/core';

interface Pergunta {
  pergunta: string;
  resposta: string;
  nivel: 'Junior' | 'Pleno' | 'Senior';
}

@Component({
  selector: 'app-entrevista',
  imports: [],
  templateUrl: './entrevista.html',
  styleUrl: './entrevista.css',
})
export class Entrevista {
  perguntas = signal<Pergunta[]>([
    {
      pergunta: 'O que são Signals e qual a vantagem sobre o Zone.js?',
      resposta: 'Signals são uma forma mais granulada de rastrear mudanças de estado. Diferente do Zone.js, que verifica a aplicação inteira em busca de mudanças, o Signal sabe exatamente onde o dado é usado, permitindo atualizações de tela muito mais eficientes (fine-grained reactivity).',
      nivel: 'Pleno'
    },
    {
      pergunta: 'Qual a diferença entre componentes Standalone e baseados em módulos?',
      resposta: 'Componentes Standalone não precisam ser declarados em um NgModule. Eles gerenciam suas próprias dependências através da propriedade "imports". Isso torna o código mais simples, legível e facilita o tree-shaking.',
      nivel: 'Junior'
    },
    {
      pergunta: 'Como funciona a Injeção de Dependência no Angular?',
      resposta: 'O Angular possui um sistema hierárquico de injetores. Quando um componente pede uma dependência, o Angular procura no injetor local, depois no do pai, e assim por diante até chegar ao Root. Isso permite compartilhar instâncias (singletons) ou criar instâncias isoladas.',
      nivel: 'Junior'
    },
    {
      pergunta: 'O que é Content Projection e quando usá-lo?',
      resposta: 'É uma forma de passar conteúdo HTML de um componente pai para um filho usando a tag <ng-content>. É ideal para criar componentes genéricos como Modais, Cards ou Layouts onde o conteúdo interno varia.',
      nivel: 'Junior'
    },
    {
      pergunta: 'Explique o ciclo de vida do componente (Lifecycle Hooks).',
      resposta: 'São métodos que o Angular chama em momentos específicos: ngOnInit (inicialização), ngOnChanges (mudança de inputs), ngOnDestroy (limpeza), e os novos afterRender/afterNextRender para interagir com o DOM após a renderização.',
      nivel: 'Pleno'
    }
  ]);
}
