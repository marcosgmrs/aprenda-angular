import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Pergunta {
  pergunta: string;
  resposta: string;
  nivel: 'Junior' | 'Pleno' | 'Senior' | 'Comportamental';
}

interface ConversaSimulada {
  titulo: string;
  contexto: string;
  dialogo: { autor: string; fala: string; }[];
  conselho: string;
}

@Component({
  selector: 'app-entrevista',
  imports: [],
  templateUrl: './entrevista.html',
  styleUrl: './entrevista.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Entrevista {
  perguntas = signal<Pergunta[]>([
    {
      pergunta: 'O que são Signals e qual a vantagem sobre o Zone.js?',
      resposta: 'Signals são uma forma mais granulada de rastrear mudanças de estado. Diferente do Zone.js, que verifica a aplicação inteira em busca de mudanças, o Signal sabe exatamente onde o dado é usado, permitindo atualizações de tela muito mais eficientes (fine-grained reactivity).',
      nivel: 'Pleno'
    },
    {
      pergunta: 'Explique a estratégia de detecção de mudanças OnPush.',
      resposta: 'A estratégia OnPush faz com que o Angular só verifique mudanças no componente se um @Input() mudar de referência (imutabilidade) ou se um evento interno for disparado. Isso economiza processamento em aplicações grandes.',
      nivel: 'Pleno'
    },
    {
      pergunta: 'Como você lida com componentes pesados que degradam a performance?',
      resposta: 'Uso técnicas como: 1. Lazy Loading de rotas. 2. Estratégia OnPush. 3. Diferenciando lógica pesada para Web Workers. 4. Uso do novo Controle de Fluxo (@if/@for) que é mais performático. 5. Signals para evitar Change Detection desnecessária.',
      nivel: 'Senior'
    },
    {
      pergunta: 'Qual a diferença entre componentes Standalone e baseados em módulos?',
      resposta: 'Componentes Standalone não precisam de NgModules. Eles gerenciam suas próprias dependências (imports). Isso simplifica a arquitetura, melhora o tree-shaking e é o padrão recomendado a partir do Angular 17.',
      nivel: 'Junior'
    },
    {
      pergunta: 'Como você lida com um erro em produção que não consegue reproduzir localmente?',
      resposta: 'Primeiro, analiso os logs da ferramenta de monitoramento (como Sentry ou LogRocket). Verifico se há diferenças entre o ambiente de Proc e Stage. Tento isolar as variáveis (browser, versão do OS, dados específicos do usuário) e, se necessário, adiciono telemetria específica para capturar o erro.',
      nivel: 'Senior'
    },
    {
      pergunta: 'Como você reage quando um prazo é impossível de cumprir?',
      resposta: 'Comunico o quanto antes. Apresento os dados: o que foi feito, o que falta e os riscos. Proponho alternativas: reduzir o escopo (MVP), focar apenas no fluxo principal ou adiar a entrega com uma nova data realista. O importante é a transparência com o gestor.',
      nivel: 'Comportamental'
    },
    {
      pergunta: 'Qual a diferença entre input() e @Input() no Angular moderno?',
      resposta: 'A função input() é a API moderna (Angular 17.1+). Ela retorna um Signal, integrando naturalmente com o sistema reativo. @Input() é o decorador antigo que usa uma propriedade comum. A principal vantagem do input() é que você pode usar input.required() para inputs obrigatórios (verificado em tempo de compilação) e input() com valor padrão. O TypeScript infere o tipo automaticamente.',
      nivel: 'Junior'
    },
    {
      pergunta: 'O que é o inject() e por que preferir ao constructor injection?',
      resposta: 'inject() é uma função que permite obter instâncias de serviços fora do constructor, em qualquer lugar do injection context (como inicializadores de propriedades). Isso permite escrever: private service = inject(MeuService) em vez de constructor(private service: MeuService). A vantagem é código mais limpo, compatibilidade com Signals e facilidade para criar funções de injeção reutilizáveis.',
      nivel: 'Junior'
    },
    {
      pergunta: 'Como funciona a estratégia OnPush e quando você a usaria?',
      resposta: 'Com OnPush, o Angular só verifica mudanças no componente quando: 1) uma referência de input() muda, 2) um evento DOM ocorre no componente ou filho, 3) um Observable assina via async pipe emite valor, 4) markForCheck() é chamado manualmente. Eu usaria em TODOS os componentes como regra — é a melhor prática do Angular moderno. Junto com Signals, você praticamente elimina verificações desnecessárias.',
      nivel: 'Pleno'
    },
    {
      pergunta: 'Explique o que são Signals e como computed() e effect() funcionam.',
      resposta: 'Signal é um wrapper reativo em torno de um valor. Ao lê-lo (chamando como função), você cria uma dependência. computed() cria um valor derivado com cache — só recalcula quando os signals que lê mudam. effect() executa código quando signals que ele lê mudam — usado para efeitos colaterais como localStorage ou APIs. A grande vantagem sobre Zone.js é granularidade: Angular sabe exatamente o que atualizar.',
      nivel: 'Pleno'
    },
    {
      pergunta: 'Como você trataria erros HTTP de forma centralizada no Angular?',
      resposta: 'Criaria um HTTP Interceptor (HttpInterceptorFn) que usa catchError no pipe do Observable. Nele, trato erros por código de status: 401 redireciona para login, 403 mostra mensagem de permissão, 500 mostra notificação genérica. Para retry automático, adiciono retry(2) antes do catchError. A vantagem é não precisar tratar erros em cada serviço — tudo fica centralizado.',
      nivel: 'Pleno'
    },
    {
      pergunta: 'O que é lazy loading no contexto de rotas Angular e por que usar?',
      resposta: 'Lazy loading significa que o código de um componente só é baixado quando o usuário navega para aquela rota. Implementamos com loadComponent no app.routes.ts. A vantagem é que o bundle inicial da aplicação fica menor — o usuário baixa rapidamente o que precisa para a primeira tela e o resto vem quando necessário. É especialmente importante em apps grandes onde a página admin, por exemplo, não precisa ser baixada por usuários comuns.',
      nivel: 'Junior'
    },
    {
      pergunta: 'Qual a diferença entre Promises e Observables? Quando usar cada um?',
      resposta: 'Promise resolve uma vez e não pode ser cancelada. Observable pode emitir múltiplos valores ao longo do tempo, pode ser cancelado (unsubscribe), e tem operadores poderosos (map, filter, switchMap, etc.). No Angular, HttpClient retorna Observables — você pode cancelar uma requisição se o usuário sair da tela. Para operações únicas e simples, Promises com async/await são mais legíveis. Para streams de eventos (WebSocket, form valueChanges, router events), Observables são superiores.',
      nivel: 'Pleno'
    },
    {
      pergunta: 'O que é @defer e quando você o usaria?',
      resposta: '@defer é um bloco de template Angular 17+ que adia o carregamento de componentes pesados. Com "on viewport", o componente só é baixado quando o usuário rola até ele. Com "on idle", carrega durante tempo ocioso do browser. Usaria para: gráficos complexos, editores de texto, seções abaixo da dobra, qualquer componente que não é crítico para a primeira interação. Isso melhora o LCP (Largest Contentful Paint) e a nota no PageSpeed.',
      nivel: 'Pleno'
    },
    {
      pergunta: 'Como você estruturaria os testes de um componente Angular?',
      resposta: 'Separaria em três tipos: 1) Testes unitários do componente com TestBed — testo a lógica (métodos, signals, computed), mocando os serviços. 2) Testes de template — verifico que o HTML renderiza corretamente baseado nos inputs. 3) Testes de integração — verifico que o componente e o serviço funcionam juntos. Para serviços HTTP, uso HttpClientTestingModule. A regra é: um teste por comportamento esperado, não por linha de código.',
      nivel: 'Senior'
    },
    {
      pergunta: 'Você recebeu uma tarefa muito grande no backlog. Como você a aborda?',
      resposta: 'Primeiro, quebro em tarefas menores com critérios de aceite claros. Verifico dependências: tem alguma coisa que bloqueia outra? Identifico o caminho crítico — qual parte entrega o maior valor primeiro? Alinho com o tech lead ou PM se há ambiguidades antes de começar (não durante). Entrego em incrementos: uma parte funcionando na primeira entrega é melhor que tudo pela metade no prazo final.',
      nivel: 'Comportamental'
    },
    {
      pergunta: 'O que você faz quando discorda da decisão técnica da equipe?',
      resposta: 'Apresento meu ponto de vista com dados e argumentos técnicos em lugar de apenas opinião. Escuto ativamente as razões da equipe — talvez eles tenham contexto que eu não tenho. Se ainda discordar, aceito a decisão do grupo e executo com qualidade. Registro o ponto no documento técnico para revisão futura. Discordar e se comprometer (disagree and commit) é maturidade profissional.',
      nivel: 'Comportamental'
    }
  ]);

  conversas = signal<ConversaSimulada[]>([
    {
      titulo: 'Explicando Atraso Técnico',
      contexto: 'Você percebeu que uma tarefa de 2 dias vai levar 4 devido a uma dívida técnica descoberta.',
      dialogo: [
        { autor: 'Gestor', fala: 'Oi Marcos, tudo certo para a entrega de amanhã?' },
        { autor: 'Você', fala: 'Oi! Sendo transparente, encontrei um problema estrutural no código antigo que impede a implementação limpa hoje.' },
        { autor: 'Gestor', fala: 'Putz, mas o cliente espera isso. Não dá pra fazer um "gato" agora e arrumar depois?' },
        { autor: 'Você', fala: 'Podemos fazer isso, mas o risco de quebrar outras partes é alto e vamos gastar o dobro de tempo depois. Minha sugestão é focar no funcional básico e entregar o resto na segunda com qualidade.' }
      ],
      conselho: 'Sempre ofereça uma solução ou alternativa junto com o problema. Gestores odeiam surpresas, mas respeitam profissionalismo.'
    },
    {
      titulo: 'Defendendo uma Refatoração',
      contexto: 'O código está ficando difícil de manter e você quer tempo para melhorar.',
      dialogo: [
        { autor: 'Colega', fala: 'Pra que mudar isso? Está funcionando!' },
        { autor: 'Você', fala: 'Funciona, mas qualquer mudança nova leva o dobro do tempo porque o arquivo tem 2000 linhas.' },
        { autor: 'Colega', fala: 'O chefe não vai dar tempo pra "limpeza".' },
        { autor: 'Você', fala: 'Vou mostrar pra ele que essa refatoração vai reduzir o tempo das próximas 5 tasks que temos no roadmap. É investimento, não gasto.' }
      ],
      conselho: 'Fale a língua do negócio. "Limpeza" soa como luxo. "Velocidade de entrega" e "Redução de bugs" soam como lucro.'
    },
    {
      titulo: 'Primeira Semana como Dev Júnior',
      contexto: 'Você entrou numa empresa nova e está com dúvidas sobre a tarefa que recebeu.',
      dialogo: [
        { autor: 'Tech Lead', fala: 'Olá! Sua primeira task é ajustar a paginação da listagem de pedidos. Fica na pasta orders/components.' },
        { autor: 'Você', fala: 'Obrigado! Vou dar uma olhada. Só pra confirmar: a mudança é apenas no front-end ou precisa alterar a chamada de API também?' },
        { autor: 'Tech Lead', fala: 'Só no front por enquanto. A API já retorna os dados de paginação.' },
        { autor: 'Você', fala: 'Entendido. Passei 1 hora lendo o código e tenho uma dúvida: o componente usa um serviço chamado OrdersService, mas não encontrei o arquivo. Está em outra pasta ou preciso criar?' },
        { autor: 'Tech Lead', fala: 'Boa pergunta! Está em shared/services. No README tem o mapa de pastas. Mas parabéns por perguntar com contexto — fica mais fácil de ajudar.' }
      ],
      conselho: 'Perguntar é sinal de inteligência, não de fraqueza. Mas pergunte com contexto: "Tentei X, vi Y, minha dúvida é Z". Nunca "não funciona, o que fazer?".'
    }
  ]);
}
