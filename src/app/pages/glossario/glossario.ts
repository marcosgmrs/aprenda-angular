import { ChangeDetectionStrategy, Component, signal, computed, OnInit } from '@angular/core';

interface Termo {
  id: string;
  termo: string;
  definicao: string;
  categoria: 'Basico' | 'Arquitetura' | 'Reatividade' | 'Ferramentas' | 'Mercado' | 'Web';
  tecnologia: 'Angular' | 'TypeScript' | 'Geral';
}

@Component({
  selector: 'app-glossario',
  imports: [],
  templateUrl: './glossario.html',
  styleUrl: './glossario.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Glossario implements OnInit {
  carregando = signal(true);
  categoriaSelecionada = signal<string>('Todos');

  categorias = ['Todos', 'Basico', 'Arquitetura', 'Reatividade', 'Ferramentas', 'Mercado', 'Web'];

  termosFiltrados = computed(() => {
    const cat = this.categoriaSelecionada();
    if (cat === 'Todos') return this.termos();
    return this.termos().filter((t: Termo) => t.categoria === cat);
  });

  setFilter(cat: string) { this.categoriaSelecionada.set(cat); }

  ngOnInit() {
    // Simula o tempo de carregamento para o efeito skeleton
    setTimeout(() => {
      this.carregando.set(false);
    }, 1500);
  }

  termos = signal<Termo[]>([
    {
      id: 'componente',
      termo: 'Componente',
      definicao: 'O bloco de construção básico de uma interface Angular. Combina um template HTML, estilos CSS e lógica TypeScript.',
      categoria: 'Basico',
      tecnologia: 'Angular'
    },
    {
      id: 'signal',
      termo: 'Signal',
      definicao: 'Um sistema de rastreamento de estado que permite ao Angular saber exatamente quais partes da interface precisam ser atualizadas quando um valor muda.',
      categoria: 'Reatividade',
      tecnologia: 'Angular'
    },
    {
      id: 'diretiva',
      termo: 'Diretiva',
      definicao: 'Classes que adicionam comportamento extra a elementos no DOM. Podem ser estruturais (@if, @for) ou de atributo ([ngClass]).',
      categoria: 'Basico',
      tecnologia: 'Angular'
    },
    {
      id: 'servico',
      termo: 'Serviço',
      definicao: 'Classes usadas para organizar lógica de negócio, compartilhar dados ou fazer chamadas de API, separadas da interface.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'di',
      termo: 'Injeção de Dependência (DI)',
      definicao: 'Um padrão de design onde o Angular fornece instâncias de classes (como serviços) para componentes automaticamente.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'pipe',
      termo: 'Pipe',
      definicao: 'Funções simples usadas em templates para transformar a exibição de dados (ex: formatar datas ou moedas).',
      categoria: 'Basico',
      tecnologia: 'Angular'
    },
    {
      id: 'routing',
      termo: 'Roteamento',
      definicao: 'O sistema que permite navegar entre diferentes "páginas" (componentes) sem recarregar o navegador.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'lazy-loading',
      termo: 'Lazy Loading',
      definicao: 'Técnica de carregar módulos ou componentes apenas quando o usuário navega até eles, diminuindo o tamanho inicial do download da app.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'ssr',
      termo: 'SSR (Server-Side Rendering)',
      definicao: 'Renderização da página no servidor antes de enviá-la ao navegador, melhorando SEO e performance inicial.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'hydration',
      termo: 'Hydration (Hidratação)',
      definicao: 'O processo onde o Angular no cliente "assume" o controle do HTML que foi pré-renderizado pelo servidor (SSR).',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'rxjs',
      termo: 'RxJS',
      definicao: 'Biblioteca para programação reativa usando Observables, muito usada para gerenciar fluxos assíncronos e eventos.',
      categoria: 'Reatividade',
      tecnologia: 'Geral'
    },
    {
      id: 'observable',
      termo: 'Observable',
      definicao: 'Um fluxo de dados que pode emitir múltiplos valores ao longo do tempo. Você se "inscreve" para receber e reagir a esses valores.',
      categoria: 'Reatividade',
      tecnologia: 'Geral'
    },
    {
      id: 'immutability',
      termo: 'Imutabilidade',
      definicao: 'Prática de não alterar objetos existentes, mas criar novas cópias com as mudanças. Ajuda o Angular a detectar mudanças rapidamente.',
      categoria: 'Arquitetura',
      tecnologia: 'Geral'
    },
    {
      id: 'daily',
      termo: 'Daily Scrum',
      definicao: 'Reunião diária rápida (máximo 15 min) para alinhar o que foi feito ontem, o que será feito hoje e se há impedimentos.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'sprint',
      termo: 'Sprint',
      definicao: 'Um ciclo de trabalho (geralmente 2 semanas) onde a equipe se compromete a entregar um conjunto de tarefas.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'pull-request',
      termo: 'Pull Request (PR)',
      definicao: 'Pedido para mesclar seu código no repositório principal, onde outros desenvolvedores fazem o Code Review.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'code-review',
      termo: 'Code Review',
      definicao: 'Processo onde colegas revisam seu código em busca de bugs, melhorias de arquitetura ou legibilidade antes de ser aprovado.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'ci-cd',
      termo: 'CI/CD',
      definicao: 'Continuous Integration / Continuous Deployment. Automatização de testes e deploy da aplicação a cada mudança recomendada.',
      categoria: 'Ferramentas',
      tecnologia: 'Geral'
    },
    {
      id: 'tech-debt',
      termo: 'Dívida Técnica',
      definicao: 'O custo de escolher uma solução fácil/rápida agora em vez de uma abordagem melhor que levaria mais tempo.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'jwt',
      termo: 'JWT (JSON Web Token)',
      definicao: 'Padrão usado para autenticação segura entre cliente e servidor, geralmente enviado no cabeçalho das requisições.',
      categoria: 'Web',
      tecnologia: 'Geral'
    },
    {
      id: 'cli',
      termo: 'Angular CLI',
      definicao: 'Interface de linha de comando para criar, desenvolver e fazer o build de aplicações Angular.',
      categoria: 'Ferramentas',
      tecnologia: 'Angular'
    },
    {
      id: 'jira',
      termo: 'Jira',
      definicao: 'Ferramenta de gestão de projetos usada por grandes equipes para rastrear tarefas (tasks), bugs e o progresso do desenvolvimento.',
      categoria: 'Ferramentas',
      tecnologia: 'Geral'
    },
    {
      id: 'kanban',
      termo: 'Kanban',
      definicao: 'Método visual de gestão de trabalho (como quadros com colunas "To Do", "Doing", "Done") para evitar sobrecarga na equipe.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'claude-code',
      termo: 'Claude Code',
      definicao: 'Ferramenta de linha de comando (CLI) da Anthropic que permite ao modelo Claude interagir diretamente com seu código no terminal.',
      categoria: 'Ferramentas',
      tecnologia: 'Geral'
    },
    // Novos termos — Angular e TypeScript
    {
      id: 'standalone',
      termo: 'Standalone Component',
      definicao: 'Componente que gerencia suas próprias dependências sem precisar de NgModule. É o padrão a partir do Angular 17 e elimina boa parte da verbosidade do Angular antigo.',
      categoria: 'Basico',
      tecnologia: 'Angular'
    },
    {
      id: 'decorator',
      termo: 'Decorator',
      definicao: 'Uma função TypeScript prefixada com @ que adiciona metadados a classes (@Component, @Injectable) ou propriedades (@Input). É como um "rótulo" que diz ao Angular o que fazer com a classe.',
      categoria: 'Basico',
      tecnologia: 'TypeScript'
    },
    {
      id: 'onpush',
      termo: 'ChangeDetection OnPush',
      definicao: 'Estratégia que diz ao Angular para verificar mudanças em um componente apenas quando um input muda de referência ou quando um evento interno ocorre. Melhora performance significativamente.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'computed',
      termo: 'computed()',
      definicao: 'Função do Angular que cria um valor derivado de um ou mais Signals. O valor é recalculado automaticamente e com cache — só atualiza quando os Signals que ele lê mudam.',
      categoria: 'Reatividade',
      tecnologia: 'Angular'
    },
    {
      id: 'effect',
      termo: 'effect()',
      definicao: 'Função do Angular que executa código automaticamente quando Signals que ela lê são alterados. Usada para efeitos colaterais como salvar no localStorage ou chamar APIs.',
      categoria: 'Reatividade',
      tecnologia: 'Angular'
    },
    {
      id: 'inject-fn',
      termo: 'inject()',
      definicao: 'Função moderna do Angular para obter instâncias de serviços injetados. Substitui o constructor injection, tornando o código mais limpo e compatível com Signals.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'httpclient',
      termo: 'HttpClient',
      definicao: 'Serviço do Angular para fazer requisições HTTP (GET, POST, PUT, DELETE). Retorna Observables que você pode transformar com operadores RxJS ou converter para Signals com toSignal().',
      categoria: 'Web',
      tecnologia: 'Angular'
    },
    {
      id: 'interceptor',
      termo: 'HTTP Interceptor',
      definicao: 'Middleware que processa todas as requisições HTTP saindo ou respostas chegando. Usado para adicionar tokens de autenticação, mostrar loading global ou tratar erros centralizadamente.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'reactive-forms',
      termo: 'Reactive Forms',
      definicao: 'Abordagem de formulários Angular controlada pelo TypeScript via FormGroup, FormControl e FormArray. Oferece mais controle, validações complexas e facilidade de teste.',
      categoria: 'Basico',
      tecnologia: 'Angular'
    },
    {
      id: 'route-guard',
      termo: 'Route Guard',
      definicao: 'Função que decide se o Router pode ativar (CanActivateFn) ou desativar (CanDeactivateFn) uma rota. Usado para proteger páginas que requerem autenticação.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    {
      id: 'defer-block',
      termo: '@defer',
      definicao: 'Bloco de template Angular 17+ que adia o carregamento de componentes para quando necessário (on viewport, on idle, on interaction). Melhora o tempo de carregamento inicial.',
      categoria: 'Basico',
      tecnologia: 'Angular'
    },
    // TypeScript
    {
      id: 'generics',
      termo: 'Generics (TypeScript)',
      definicao: 'Recurso TypeScript que permite escrever funções e classes que funcionam com qualquer tipo, mantendo a segurança de tipos. Você vê isso em signal<string>() ou Array<Produto>.',
      categoria: 'Basico',
      tecnologia: 'TypeScript'
    },
    {
      id: 'union-type',
      termo: 'Union Type',
      definicao: 'Tipo TypeScript que permite que uma variável seja de um tipo OU outro. Exemplo: string | number | null. Muito usado para representar estados opcionais ou múltiplos formatos.',
      categoria: 'Basico',
      tecnologia: 'TypeScript'
    },
    {
      id: 'interface-ts',
      termo: 'Interface (TypeScript)',
      definicao: 'Define o "contrato" de um objeto — quais propriedades ele deve ter e de que tipo. Diferente de Type, pode ser extendida com "extends" e mergeada com declarações adicionais.',
      categoria: 'Basico',
      tecnologia: 'TypeScript'
    },
    // Infraestrutura e DevOps
    {
      id: 'vercel',
      termo: 'Vercel',
      definicao: 'Plataforma de deploy focada em front-end. Integra com GitHub e faz deploy automático a cada push. Cada PR gera um preview de deploy independente.',
      categoria: 'Ferramentas',
      tecnologia: 'Geral'
    },
    {
      id: 'git-flow',
      termo: 'Git Flow',
      definicao: 'Estratégia de branches onde você desenvolve em branches separados (feature, bugfix), abre PRs e só mescla na main após revisão. É o fluxo padrão em equipes profissionais.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'bundle',
      termo: 'Bundle',
      definicao: 'O arquivo(s) JavaScript final gerado pelo compilador (ng build) a partir do seu código TypeScript. Um bundle menor = app que carrega mais rápido.',
      categoria: 'Ferramentas',
      tecnologia: 'Geral'
    },
    {
      id: 'tree-shaking',
      termo: 'Tree Shaking',
      definicao: 'Processo automático do compilador Angular que remove código JavaScript não utilizado do bundle final. Por isso, importar só o que você usa é uma boa prática.',
      categoria: 'Arquitetura',
      tecnologia: 'Angular'
    },
    // Mercado
    {
      id: 'mvp',
      termo: 'MVP (Minimum Viable Product)',
      definicao: 'A versão mais simples de um produto que ainda entrega valor. No dia a dia dev, "fazer um MVP" significa implementar o caminho principal primeiro e deixar casos de borda para depois.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'refactoring',
      termo: 'Refatoração',
      definicao: 'Reestruturar código existente sem mudar seu comportamento externo. Melhora legibilidade e manutenibilidade. A regra: só refatore com testes cobrindo o código.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'standup',
      termo: 'Stand-up / Daily',
      definicao: 'Reunião diária de 15 min (ficando de pé para durar menos). Cada pessoa responde: 1) O que fiz ontem? 2) O que farei hoje? 3) Há algum impedimento?',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    {
      id: 'pair-programming',
      termo: 'Pair Programming',
      definicao: 'Dois desenvolvedores trabalhando juntos num mesmo código: um "piloto" escreve, o "co-piloto" revisa em tempo real. Excelente para transferência de conhecimento.',
      categoria: 'Mercado',
      tecnologia: 'Geral'
    },
    // Web
    {
      id: 'spa',
      termo: 'SPA (Single Page Application)',
      definicao: 'Aplicação web que carrega uma única página HTML e atualiza o conteúdo dinamicamente via JavaScript, sem recarregar a página inteira. Angular é um framework SPA.',
      categoria: 'Web',
      tecnologia: 'Geral'
    },
    {
      id: 'rest-api',
      termo: 'REST API',
      definicao: 'Padrão arquitetural para APIs web usando verbos HTTP (GET, POST, PUT, DELETE) para operações em recursos. A maioria das APIs que você vai consumir no Angular segue REST.',
      categoria: 'Web',
      tecnologia: 'Geral'
    },
    {
      id: 'cors',
      termo: 'CORS',
      definicao: 'Cross-Origin Resource Sharing. Política de segurança do browser que bloqueia requisições de um domínio para outro. Configurado no servidor — se você ver erro de CORS, o back-end precisa liberar.',
      categoria: 'Web',
      tecnologia: 'Geral'
    },
    {
      id: 'localStorage',
      termo: 'localStorage',
      definicao: 'API do browser para armazenar dados em texto no dispositivo do usuário, sem expiração. Útil para preferências, tema escuro, token de sessão. Limite de ~5MB por origem.',
      categoria: 'Web',
      tecnologia: 'Geral'
    }
  ]);
}
