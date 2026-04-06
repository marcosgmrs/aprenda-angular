import { Injectable } from '@angular/core';

export interface LinkExterno {
  titulo: string;
  url: string;
}

export interface Aula {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string; // Ex: "10 min"
  tempoEstimado?: string; // Ex: "15-20 min de estudo prático"
  conteudo: string;
  codigo?: string;
  dica?: string;
  videoUrl?: string;
  linksExternos?: LinkExterno[];
  tarefa?: string;
  imagemUrl?: string;
}

export interface Modulo {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  nivel: 'iniciante' | 'intermediario' | 'avancado';
  aulas: Aula[];
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private modulos: Modulo[] = [
    {
      id: 'boas-vindas',
      titulo: 'Começando a Jornada',
      descricao: 'Prepare seu computador e sua mente para se tornar um desenvolvedor Angular de elite.',
      icone: '🚀',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'bem-vindo',
          titulo: 'Bem-vindo ao Curso!',
          descricao: 'Uma visão geral do que vamos construir e como aprender melhor.',
          duracao: '5 min',
          tempoEstimado: '10 min de leitura e reflexão',
          conteudo: `Este projeto foi criado por e para desenvolvedores que buscam excelência. Não é apenas mais um tutorial; é um guia de sobrevivência no mundo real.

Aprender Angular pode parecer desafiador no início, mas com a abordagem correta — focando nos fundamentos e usando a IA como aliada — você chegará lá mais rápido do que imagina.

Este projeto é **para seu uso pessoal**, um diário de bordo e material de referência constante. Sinta-se em casa!`,
          dica: 'Não tente decorar tudo. O importante é entender o "porquê". O "como" você sempre pode consultar aqui ou perguntar ao Claude.',
          linksExternos: [
            { titulo: 'Documentação Oficial Angular', url: 'https://angular.dev' }
          ]
        },
        {
          id: 'claude-ai-parceiro',
          titulo: 'Claude: Seu Mentor 24/7',
          descricao: 'Como usar a Inteligência Artificial para acelerar seu aprendizado sem "trapalhar".',
          duracao: '15 min',
          tempoEstimado: '20 min (leitura + primeiro prompt)',
          conteudo: `Em 2026, não usar IA é como tentar cavar um túnel com uma colher. O Claude (da Anthropic) será nosso mentor principal.

Nesta aula, vamos aprender a configurar o **Claude Code CLI**. Ele permite que a IA "veja" seu código diretamente no seu terminal, facilitando muito a correção de erros e a criação de novas funcionalidades.`,
          codigo: `# No Mac ou PowerShell (requer Node.js instalado)
npm install -g @anthropic-ai/claude-code

# Para iniciar no seu projeto
claude`,
          tarefa: 'Instale o Claude Code CLI e digite "claude" na pasta do seu projeto. Tente perguntar: "Claude, o que este projeto faz?"',
          dica: 'O Claude Code tem um "Play Mode". Ele ajuda você a sugerir mudanças e explica cada passo. É a melhor forma de aprender enquanto codifica.'
        },
        {
          id: 'terminal-e-git',
          titulo: 'Terminal e Git: O Básico do Profissional',
          descricao: 'Comandos que você usará todo santo dia no trabalho.',
          duracao: '20 min',
          tempoEstimado: '40 min de prática intensiva',
          conteudo: `O terminal é sua varinha mágica. O Git é sua máquina do tempo.
Sem dominar esses dois, você não é um desenvolvedor, é apenas alguém que digita código.

Vamos cobrir os comandos essenciais e como fazer seus primeiros commits.`,
          codigo: `# Navegação básica
ls          # lista arquivos
cd pasta    # entra na pasta
cd ..       # volta uma pasta
mkdir nome  # cria pasta

# Git 101
git init              # inicia repositório
git add .             # prepara arquivos
git commit -m "msg"    # tira a "foto" (save)
git status            # vê o que mudou`,
          tarefa: 'Crie uma pasta de teste, inicie um git nela, crie um arquivo texto e faça seu primeiro commit.',
          linksExternos: [
            { titulo: 'Guia Visual do Git', url: 'https://git-scm.com/book/pt-br/v2' }
          ]
        }
      ]
    },
    {
      id: 'fundamentos-web',
      titulo: 'Fundamentos da Web (V2026)',
      descricao: 'HTML Semântico e CSS Moderno. O esqueleto e a pele das suas aplicações.',
      icone: '🌐',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'html-semantico',
          titulo: 'HTML Semântico e Acessibilidade',
          descricao: 'Por que usar <div> para tudo é o maior erro de um iniciante.',
          duracao: '15 min',
          tempoEstimado: '30 min de estudo',
          conteudo: `HTML define o significado. <header>, <nav>, <main>, <footer>, <article>. 
Usar as tags corretas ajuda o Google (SEO), ajuda cegos (leitores de tela) e ajuda VOCÊ a ler seu próprio código meses depois.`,
          videoUrl: 'https://www.youtube.com/watch?v=kYJvW9R9t8Q',
          tarefa: 'Identifique 3 sites famosos e tente perceber se eles usam tags semânticas ou apenas divs.',
          dica: 'Pergunte ao Claude Code: "/review meu HTML" e ele te dirá se está semântico ou não.'
        },
        {
          id: 'css-moderno-flex-grid',
          titulo: 'CSS Moderno: Flexbox e Grid',
          descricao: 'Esqueça os "floats" e posicionamentos manuais chatos.',
          duracao: '25 min',
          tempoEstimado: '1 hora de prática (essencial!)',
          conteudo: `Flexbox é para layouts 1D (linhas ou colunas). Grid é para layouts 2D (áreas complexas). 
Em 2026, quase tudo na web é feito combinando esses dois.`,
          codigo: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
          linksExternos: [
            { titulo: 'Guia Flexbox (CSS-Tricks)', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
            { titulo: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/#pt-br' }
          ]
        }
      ]
    },
    {
      id: 'javascript-masterclass',
      titulo: 'JavaScript Masterclass',
      descricao: 'A linguagem que faz tudo acontecer. O que você REALMENTE precisa saber.',
      icone: '🟨',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'es6-e-alem',
          titulo: 'JavaScript Moderno (ES6+)',
          descricao: 'Const, Let, Arrow Functions e Template Literals.',
          duracao: '20 min',
          tempoEstimado: '40 min de prática',
          conteudo: `Angular exige JavaScript moderno. Você não verá "var" aqui. 
Vamos aprender a usar Arrow Functions (funções de seta) que são mais curtas e resolvem problemas de escopo.`,
          codigo: `// Moderno (Arrow Function)
const somar = (a, b) => a + b;

// Template Literals (Crase)
const nome = "Angular";
console.log(\`Olá, \${nome}!\`);`,
          tarefa: 'Converta 3 funções tradicionais que você conhece para Arrow Functions.',
          linksExternos: [
            { titulo: 'Modern JS Cheat Sheet', url: 'https://mbeaudru.github.io/modern-js-cheatsheet/' }
          ]
        },
        {
          id: 'desestruturacao-e-spread',
          titulo: 'Desestruturação e Spread Operator',
          descricao: 'Manipulando Arrays e Objetos como um profissional.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Desestruturação permite "extrair" valores de objetos de forma limpa. O Spread Operator (...) permite copiar ou mesclar coleções.`,
          codigo: `const usuario = { nome: 'Marcos', idade: 30 };
const { nome } = usuario;

const lista = [1, 2];
const novaLista = [...lista, 3]; // [1, 2, 3]`,
          dica: 'Use o Spread Operator para garantir imutabilidade — um conceito que o Angular adora.'
        }
      ]
    },
    {
      id: 'typescript-essencial',
      titulo: 'TypeScript: O Superpoder',
      descricao: 'Adicionando segurança e inteligência ao seu código.',
      icone: '🔷',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'tipagem-basica',
          titulo: 'Tipagem e Interfaces',
          descricao: 'Defina contratos para seu código e evite bugs bobos.',
          duracao: '20 min',
          tempoEstimado: '30 min',
          conteudo: `TypeScript permite que você diga: "esta variável SÓ aceita números". 
Interfaces definem o formato de objetos complexos.`,
          codigo: `interface Usuario {
  id: number;
  nome: string;
}

const me: Usuario = { id: 1, nome: 'Marcos' };`,
          tarefa: 'Crie uma interface para um Produto, contendo nome e preco.',
          linksExternos: [
            { titulo: 'Playground TypeScript', url: 'https://www.typescriptlang.org/play' }
          ]
        }
      ]
    },
    {
      id: 'angular-componentes',
      titulo: 'Componentes: O Coração',
      descricao: 'Criação, reutilização e comunicação entre partes da sua App.',
      icone: '📦',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'anatomia-componente',
          titulo: 'Anatomia de um Componente',
          descricao: 'Entenda o Decorador @Component, o Template e o Estilo.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Um componente no Angular é uma classe TypeScript com o decorador @Component. 
Ele define três coisas principais: Selector, Template e Estilo.`,
          codigo: `@Component({
  selector: 'app-teste',
  standalone: true,
  template: '<h1>Olá!</h1>',
})
export class TesteComponent {}`,
          tarefa: 'Use o comando "ng generate component nome" no terminal.'
        },
        {
          id: 'item-databinding',
          titulo: 'Databinding: Ligando Dados e Tela',
          descricao: 'Como passamos dados da classe para o HTML.',
          duracao: '20 min',
          tempoEstimado: '45 min de prática',
          conteudo: `Interpolation {{ }}, Property Binding [ ] e Event Binding ( ). 
Essa é a base da interatividade no Angular.`,
          codigo: `<p>{{ titulo }}</p>
<button [disabled]="travado" (click)="salvar()">OK</button>`,
          tarefa: 'Crie um contador simples com um botão "+" e "-" que atualiza um valor na tela.'
        }
      ]
    },
    {
      id: 'fluxo-e-diretivas',
      titulo: 'Controle de Fluxo (Novo)',
      descricao: 'O novo padrão Angular 17+ para condicionais e listas.',
      icone: '🔀',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'novo-if-for',
          titulo: 'O Novo @if e @for',
          descricao: 'Sintaxe de blocos moderna para layouts dinâmicos.',
          duracao: '15 min',
          tempoEstimado: '20 min',
          conteudo: `O Angular 17+ introduziu uma sintaxe muito mais limpa para condicionais e loops. 
É mais rápida e fácil de ler que as diretivas antigas.`,
          codigo: `@if (estaLogado) {
  <p>Bem-vindo!</p>
}

@for (item of items; track item.id) {
  <li>{{ item.nome }}</li>
}`,
          dica: 'O "track" no @for é obrigatório e melhora muito a performance de renderização.'
        }
      ]
    },
    {
      id: 'signals-reatividade',
      titulo: 'Signals: Reatividade Moderna',
      descricao: 'O motor ultra-veloz que move o Angular atual.',
      icone: '⚡',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'o-que-sao-signals',
          titulo: 'O que são Signals?',
          descricao: 'Rastreamento de estado granular e melhora de performance.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `Signals são a maior revolução recente no Angular. 
Eles permitem que o framework saiba exatamente o que mudou, evitando verificações desnecessárias.`,
          codigo: `const count = signal(0);
const double = computed(() => count() * 2);

count.set(5);`,
          tarefa: 'Refatore seu contador anterior para usar Signals em vez de variáveis comuns.',
          linksExternos: [
            { titulo: 'Guia de Signals', url: 'https://angular.dev/guide/signals' }
          ]
        }
      ]
    },
    {
      id: 'roteamento-routing',
      titulo: 'Roteamento e Navegação',
      descricao: 'Crie aplicações multi-página com o Router do Angular.',
      icone: '🗺️',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'configurando-rotas',
          titulo: 'Configurando Rotas',
          descricao: 'Mapeando URLs para componentes.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `O Router permite navegar entre componentes sem recarregar a página. 
Você define um array de configurações e usa <router-outlet> para renderizar.`,
          codigo: `const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aula/:id', component: AulaComponent }
];`,
          tarefa: 'Crie uma nova rota no seu projeto e navegue até ela usando routerLink.'
        }
      ]
    },
    {
      id: 'formularios-e-validacao',
      titulo: 'Formulários e Validação',
      descricao: 'Capturando e validando entradas do usuário com segurança.',
      icone: '📝',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'reactive-forms',
          titulo: 'Formulários Reativos',
          descricao: 'Controle total do formulário via TypeScript.',
          duracao: '25 min',
          tempoEstimado: '1 hora de prática',
          conteudo: `Reactive Forms são baseados em objetos no código TS, permitindo validações complexas e testes fáceis.`,
          codigo: `form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
});`,
          tarefa: 'Crie um formulário de login com campos de e-mail e senha, ambos obrigatórios.'
        }
      ]
    },
    {
      id: 'servicos-di-power',
      titulo: 'Serviços e Injeção',
      descricao: 'Organize sua lógica e compartilhe dados entre componentes.',
      icone: '💉',
      nivel: 'avancado',
      aulas: [
        {
          id: 'injecao-moderna',
          titulo: 'Injeção de Dependência Moderna',
          descricao: 'Usando a função inject() e serviços Root.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Serviços devem conter a lógica que não pertence à UI. 
A Injeção de Dependência permite que o Angular forneça as instâncias necessárias automaticamente.`,
          codigo: `@Injectable({ providedIn: 'root' })
export class AuthService {
  usuario = signal<string | null>(null);
}

// No componente
private auth = inject(AuthService);`,
          dica: 'Sempre que possível, use providedIn: "root" para que o serviço seja um Singleton disponível em toda a app.'
        }
      ]
    },
    {
      id: 'ia-e-carreira',
      titulo: 'IA, Carreira e Soft Skills',
      descricao: 'Dicas para entrevistas, vocabulário do mercado e suporte da IA.',
      icone: '👔',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'terminologia-mercado',
          titulo: 'Vocabulário do Mercado',
          descricao: 'Jira, Kanban, Claude e mais.',
          duracao: '15 min',
          tempoEstimado: 'Leitura leve',
          conteudo: `No ambiente de trabalho, você ouvirá termos como:
- **Jira/Trello**: Onde as tarefas nascem.
- **Kanban**: O quadro que mostra o que está sendo feito.
- **Claude Code**: A ferramenta que estamos usando para acelerar o desenvolvimento.

O objetivo deste site é que você se sinta confortável em qualquer reunião técnica.`,
          tarefa: 'Explore o Glossário deste site e tente explicar um termo para um amigo (ou para o Claude!).'
        },
        {
          id: 'papo-com-devs',
          titulo: 'Conversando com outros Devs',
          descricao: 'Como pedir ajuda de forma eficiente.',
          duracao: '15 min',
          tempoEstimado: 'Para toda a carreira',
          conteudo: `Desenvolvedores sêniores adoram ajudar quem demonstra que tentou. 
Antes de perguntar "não funciona", diga: "Tentei fazer X usando a técnica Y, mas recebi o erro Z. Já pesquisei na documentação e vi que...".

Isso economiza tempo de todos e mostra sua evolução.`,
          dica: 'O Claude pode ajudar você a formular essas perguntas. Tente: "Claude, como eu pergunto ao meu chefe sobre este erro de TypeScript sem parecer perdido?"'
        }
      ]
    }
  ]

  getModulos(): Modulo[] {
    return this.modulos
  }

  getModuloPorId(id: string): Modulo | undefined {
    return this.modulos.find(m => m.id === id)
  }

  getAulaPorId(id: string): { aula: Aula, modulo: Modulo } | undefined {
    for (const modulo of this.modulos) {
      const aula = modulo.aulas.find(a => a.id === id)
      if (aula) return { aula, modulo }
    }
    return undefined
  }
}