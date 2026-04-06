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
    }
  ]);
}
