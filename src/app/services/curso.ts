import { Injectable } from '@angular/core';

export interface LinkExterno {
  titulo: string;
  url: string;
}

export interface Aula {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string;
  tempoEstimado?: string;
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
    // =====================================================================
    // MÓDULO 1: COMEÇANDO A JORNADA
    // =====================================================================
    {
      id: 'boas-vindas',
      titulo: 'Começando a Jornada',
      descricao: 'Prepare seu computador e sua mente para se tornar um desenvolvedor Angular.',
      icone: '🚀',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'bem-vindo',
          titulo: 'Bem-vindo ao Curso!',
          descricao: 'Uma visão geral do que vamos construir e como aprender melhor.',
          duracao: '5 min',
          tempoEstimado: '10 min de leitura e reflexão',
          conteudo: `Este projeto foi criado por e para desenvolvedores que buscam entrar no mercado. Não é apenas mais um tutorial — é um guia de sobrevivência no mundo real.

Aprender Angular pode parecer desafiador no início, mas com a abordagem correta — focando nos fundamentos e usando a IA como aliada — você chegará lá mais rápido do que imagina.

**O que você vai aprender:**
- Terminal e Git (ferramentas do dia a dia)
- HTML semântico e CSS moderno
- JavaScript essencial para o Angular
- TypeScript: segurança e inteligência no código
- Angular: componentes, signals, rotas, formulários e HTTP
- Deploy na Vercel e soft skills para entrevistas

**A filosofia deste curso:**
Aqui, cada conceito vem acompanhado de um "por que isso importa". Você não vai decorar sintaxe; vai entender o raciocínio por trás de cada decisão.`,
          dica: 'Não tente decorar tudo. O importante é entender o "porquê". O "como" você sempre pode consultar aqui ou perguntar ao Claude.',
          linksExternos: [
            { titulo: 'Documentação Oficial Angular', url: 'https://angular.dev' }
          ]
        },
        {
          id: 'ambiente-vscode',
          titulo: 'Configurando o VS Code',
          descricao: 'Extensions essenciais e atalhos que todo dev Angular usa.',
          duracao: '15 min',
          tempoEstimado: '30 min (instalação + configuração)',
          conteudo: `O VS Code é o editor mais usado no mercado front-end. Configurá-lo bem é investimento que você recupera em horas.

**Extensions essenciais para Angular:**
- **Angular Language Service**: autocomplete e erros em tempo real no HTML
- **ESLint**: encontra problemas no código antes de você
- **Prettier - Code Formatter**: formata o código automaticamente ao salvar
- **GitLens**: mostra quem mudou cada linha e quando
- **Material Icon Theme**: ícones bonitos para arquivos

**Configurações recomendadas (settings.json):**`,
          codigo: `// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.bracketPairColorization.enabled": true,
  "typescript.preferences.importModuleSpecifier": "relative"
}`,
          tarefa: 'Instale as 5 extensions listadas e configure o settings.json. Abra um arquivo .ts e veja o autocomplete funcionando.',
          dica: 'Use Ctrl+Shift+P (ou Cmd+Shift+P no Mac) para abrir a paleta de comandos. É o atalho mais poderoso do VS Code.'
        },
        {
          id: 'nodejs-npm',
          titulo: 'Node.js, NVM e NPM',
          descricao: 'A fundação técnica: por que precisamos deles e como gerenciá-los.',
          duracao: '15 min',
          tempoEstimado: '25 min',
          conteudo: `Angular roda em cima do Node.js. Você não escreve código Node, mas precisa dele instalado para usar as ferramentas de desenvolvimento.

**O que é cada um:**
- **Node.js**: ambiente que executa JavaScript fora do navegador
- **NPM** (Node Package Manager): instala e gerencia pacotes (bibliotecas)
- **NVM** (Node Version Manager): permite ter várias versões do Node no mesmo computador — muito útil no trabalho real, onde projetos diferentes usam versões diferentes

**Comandos básicos do NPM que você vai usar todo dia:**`,
          codigo: `# Verificar versões instaladas
node --version
npm --version

# Instalar pacotes de um projeto existente
npm install

# Instalar um pacote e salvar no package.json
npm install nome-do-pacote

# Instalar globalmente (disponível em qualquer pasta)
npm install -g @angular/cli

# Remover um pacote
npm uninstall nome-do-pacote

# Ver o que está desatualizado
npm outdated`,
          tarefa: 'Verifique a versão do Node com "node --version". Se for menor que 20, instale o NVM e atualize.',
          dica: 'O arquivo package.json é o "cardápio" do seu projeto — lista todas as dependências. Nunca edite a pasta node_modules manualmente.',
          linksExternos: [
            { titulo: 'Instalar NVM (Mac/Linux)', url: 'https://github.com/nvm-sh/nvm' },
            { titulo: 'Instalar NVM (Windows)', url: 'https://github.com/coreybutler/nvm-windows' }
          ]
        },
        {
          id: 'claude-ai-parceiro',
          titulo: 'Claude: Seu Mentor 24/7',
          descricao: 'Como usar a IA para acelerar o aprendizado sem depender dela.',
          duracao: '15 min',
          tempoEstimado: '20 min (leitura + primeiro prompt)',
          conteudo: `Em 2026, não usar IA é como tentar cavar um túnel com uma colher. Mas usar a IA do jeito errado é ainda pior: você para de pensar.

**A regra de ouro:** Use a IA para entender, não para copiar.

Antes de pedir ao Claude para escrever código, tente você mesmo. Depois, compare. Pergunte "por que você fez assim?". Aprenda o raciocínio.

**Claude Code CLI** — a ferramenta que usamos para desenvolver este próprio site — permite que a IA "veja" seu código diretamente no terminal:`,
          codigo: `# Instalar o Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Iniciar na pasta do seu projeto
cd meu-projeto-angular
claude

# Exemplos de prompts úteis
# "Explica o que esta função faz"
# "Tem algum bug neste código?"
# "Como eu escreveria este trecho de forma mais Angular?"`,
          tarefa: 'Instale o Claude Code CLI e inicie na pasta do seu projeto. Pergunte: "Quais são os arquivos mais importantes neste projeto Angular e o que cada um faz?"',
          dica: 'O Claude tem memória dentro de uma sessão. Diga "estou aprendendo Angular do zero" logo no início para ele calibrar as explicações.'
        },
        {
          id: 'terminal-e-git',
          titulo: 'Terminal e Git: O Básico do Profissional',
          descricao: 'Comandos que você usará todo santo dia no trabalho.',
          duracao: '20 min',
          tempoEstimado: '40 min de prática intensiva',
          conteudo: `O terminal é sua varinha mágica. O Git é sua máquina do tempo. Sem dominar esses dois, você não é um desenvolvedor completo.

**Terminal — Comandos do dia a dia:**`,
          codigo: `# Navegação
ls          # lista arquivos e pastas
cd pasta    # entra na pasta
cd ..       # volta uma pasta
pwd         # mostra onde você está

# Arquivos e pastas
mkdir nome  # cria pasta
touch arquivo.txt  # cria arquivo vazio
rm arquivo  # remove arquivo (cuidado!)

# Git — O fluxo básico
git init                    # inicia repositório na pasta atual
git status                  # vê o que mudou
git add .                   # prepara todos os arquivos para commit
git add src/arquivo.ts      # prepara um arquivo específico
git commit -m "mensagem"    # salva o estado atual
git log --oneline           # vê o histórico de commits
git push origin main        # envia para o GitHub

# GitHub — primeiro push
git remote add origin https://github.com/seu-usuario/repo.git
git push -u origin main`,
          tarefa: 'Crie uma pasta "prática-git", inicie um repositório, crie um arquivo, faça o primeiro commit. Depois, altere o arquivo e faça um segundo commit. Use "git log" para ver os dois.',
          dica: 'Commits frequentes e com mensagens claras são sinal de bom profissional. "fix bug" é ruim. "fix: corrige validação de email no formulário de login" é ótimo.',
          linksExternos: [
            { titulo: 'Git Book em Português', url: 'https://git-scm.com/book/pt-br/v2' }
          ]
        }
      ]
    },

    // =====================================================================
    // MÓDULO 2: FUNDAMENTOS DA WEB
    // =====================================================================
    {
      id: 'fundamentos-web',
      titulo: 'Fundamentos da Web',
      descricao: 'HTML Semântico, CSS Moderno e Responsividade. A base de tudo.',
      icone: '🌐',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'html-semantico',
          titulo: 'HTML Semântico e Acessibilidade',
          descricao: 'Por que usar <div> para tudo é o maior erro de um iniciante.',
          duracao: '15 min',
          tempoEstimado: '30 min de estudo',
          conteudo: `HTML define o **significado** do conteúdo. Não é só sobre aparência — é sobre comunicar a estrutura para o navegador, para o Google (SEO) e para tecnologias assistivas (leitores de tela).

**Tags semânticas essenciais:**`,
          codigo: `<!-- ❌ Sem semântica (evite isso) -->
<div class="topo">
  <div class="menu">...</div>
</div>
<div class="conteudo">
  <div class="artigo">...</div>
</div>

<!-- ✅ Com semântica (use assim) -->
<header>
  <nav>
    <ul>
      <li><a href="/home">Início</a></li>
      <li><a href="/sobre">Sobre</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Título principal da página</h1>
    <p>Conteúdo do artigo...</p>
  </article>

  <aside>
    <p>Conteúdo relacionado, mas secundário</p>
  </aside>
</main>

<footer>
  <p>&copy; 2026 Meu Site</p>
</footer>`,
          tarefa: 'Abra o devtools de um site famoso (F12) e inspecione o HTML. Eles usam tags semânticas ou só divs?',
          dica: 'ARIA attributes (aria-label, role) são o próximo nível de acessibilidade. O Angular tem suporte nativo — use-os nos seus componentes.',
          linksExternos: [
            { titulo: 'MDN: Elementos HTML Semânticos', url: 'https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics' }
          ]
        },
        {
          id: 'css-moderno-flex-grid',
          titulo: 'CSS Moderno: Flexbox e Grid',
          descricao: 'Esqueça os "floats". Layouts modernos com Flex e Grid.',
          duracao: '25 min',
          tempoEstimado: '1 hora de prática (essencial!)',
          conteudo: `**Flexbox** é para layouts unidimensionais (linha OU coluna). **Grid** é para layouts bidimensionais (linhas E colunas ao mesmo tempo).

Em 2026, quase todo layout de aplicação usa a combinação dos dois.

**Flexbox — os conceitos que importam:**`,
          codigo: `/* Flexbox — ideal para barras de navegação, cards em linha */
.navbar {
  display: flex;
  justify-content: space-between;  /* espaço entre os itens */
  align-items: center;             /* alinha verticalmente ao centro */
  gap: 16px;                       /* espaço entre os filhos */
}

/* Grid — ideal para layouts de página inteira */
.pagina {
  display: grid;
  grid-template-columns: 250px 1fr;   /* sidebar fixa + conteúdo flexível */
  grid-template-rows: 60px 1fr 40px;  /* header + main + footer */
  min-height: 100vh;
}

/* Combinando os dois */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}`,
          tarefa: 'Crie uma página com: um header fixo no topo, um sidebar de 200px na esquerda, conteúdo principal à direita, e um footer. Use CSS Grid para o layout geral.',
          linksExternos: [
            { titulo: 'Flexbox Froggy (jogo)', url: 'https://flexboxfroggy.com/#pt-br' },
            { titulo: 'CSS Grid Garden (jogo)', url: 'https://cssgridgarden.com/#pt-br' }
          ]
        },
        {
          id: 'css-variables-temas',
          titulo: 'CSS Variables e Design Tokens',
          descricao: 'Como este próprio site foi construído — temas via variáveis CSS.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `CSS Custom Properties (variáveis) são a fundação de qualquer sistema de design. Elas permitem criar temas, modo escuro, e garantem consistência visual em toda a aplicação.

**Este próprio site usa CSS variables.** Veja como:`,
          codigo: `/* Definindo variáveis no :root (escopo global) */
:root {
  --cor-primaria: #2f81f7;
  --cor-fundo: #0d1117;
  --cor-texto: #e6edf3;
  --fonte: 'Inter', system-ui, sans-serif;
  --radius: 8px;
  --sombra: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Usando as variáveis */
.botao {
  background: var(--cor-primaria);
  color: var(--cor-texto);
  border-radius: var(--radius);
  box-shadow: var(--sombra);
}

/* Modo escuro com uma classe */
.tema-escuro {
  --cor-primaria: #58a6ff;
  --cor-fundo: #0d1117;
}

/* Modo escuro via preferência do sistema */
@media (prefers-color-scheme: dark) {
  :root {
    --cor-fundo: #0d1117;
    --cor-texto: #e6edf3;
  }
}`,
          tarefa: 'Crie um arquivo styles.css com pelo menos 5 variáveis de design (cor, fonte, espaçamento). Use-as em pelo menos 3 componentes diferentes.',
          dica: 'No Angular, as variáveis CSS definidas no styles.css global ficam disponíveis em todos os componentes, mesmo com encapsulamento ativo.'
        },
        {
          id: 'responsividade-media-queries',
          titulo: 'Responsividade e Media Queries',
          descricao: 'Faça seu site funcionar em qualquer tela — do celular ao monitor ultrawide.',
          duracao: '20 min',
          tempoEstimado: '45 min',
          conteudo: `Mobile-first é a abordagem certa: comece desenhando para telas pequenas e depois expanda para telas maiores. Isso porque é mais fácil adicionar complexidade do que remover.

**Breakpoints mais usados no mercado:**`,
          codigo: `/* Mobile first: estilos base são para mobile */
.container {
  padding: 16px;
  grid-template-columns: 1fr;  /* 1 coluna no mobile */
}

/* Tablet (≥ 768px) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    grid-template-columns: repeat(2, 1fr);  /* 2 colunas */
  }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    grid-template-columns: repeat(3, 1fr);  /* 3 colunas */
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Ocultar em mobile, mostrar em desktop */
.apenas-desktop {
  display: none;
}

@media (min-width: 1024px) {
  .apenas-desktop {
    display: block;
  }
}`,
          tarefa: 'Pegue o layout que você criou na aula anterior e torne-o responsivo: em mobile, o sidebar deve desaparecer e o conteúdo deve ocupar 100%.',
          dica: 'Use as ferramentas de desenvolvedor do Chrome (F12) e o modo de responsividade para testar diferentes tamanhos de tela sem precisar de um celular.'
        },
        {
          id: 'css-transitions-animacoes',
          titulo: 'Transições e Animações CSS',
          descricao: 'UI polida com CSS puro — sem JavaScript.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Animações bem feitas melhoram a experiência do usuário — ele sente que a interface está "viva". Animações mal feitas distraem e irritam.

**A regra de ouro:** Anime propriedades que o browser pode otimizar — prefira transform e opacity. Nunca anime width, height ou posição com top/left.`,
          codigo: `/* Transição suave em hover */
.botao {
  background: var(--cor-primaria);
  transform: translateY(0);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.botao:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(47, 129, 247, 0.3);
}

/* Animação de entrada com @keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 300ms ease forwards;
}

/* Respeitar preferência de movimento reduzido (acessibilidade!) */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`,
          tarefa: 'Adicione uma animação de fadeIn aos seus cards e um efeito hover nos botões. Não se esqueça do prefers-reduced-motion.',
          dica: 'No Angular, você pode usar a API de Animações do framework para coordenar animações com mudanças de estado. Mas para animações simples, CSS puro é sempre a melhor escolha.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 3: JAVASCRIPT MASTERCLASS
    // =====================================================================
    {
      id: 'javascript-masterclass',
      titulo: 'JavaScript Masterclass',
      descricao: 'A linguagem por trás de tudo. O que você realmente precisa saber para o Angular.',
      icone: '🟨',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'es6-e-alem',
          titulo: 'JavaScript Moderno (ES6+)',
          descricao: 'const, let, arrow functions, template literals e muito mais.',
          duracao: '20 min',
          tempoEstimado: '40 min de prática',
          conteudo: `O Angular exige JavaScript moderno. Você não verá "var" aqui. Cada feature que vamos ver foi criada para resolver um problema real — entenda o "porquê" de cada uma.`,
          codigo: `// var tem problemas de escopo — NUNCA use
var x = 1;

// const e let são block-scoped (mais previsíveis)
const nome = 'Angular';   // não pode ser reatribuído
let contador = 0;          // pode ser reatribuído

// Arrow Functions — mais curtas e sem problema de "this"
// Forma tradicional:
function somar(a, b) { return a + b; }

// Arrow Function equivalente:
const somar = (a, b) => a + b;

// Com um único retorno, pode omitir as chaves:
const dobrar = n => n * 2;

// Template Literals — interpolação de strings com crase
const versao = '17';
console.log(\`Angular versão \${versao} foi lançado!\`);

// Multi-linha fica limpo:
const html = \`
  <div>
    <h1>\${nome}</h1>
  </div>
\`;`,
          tarefa: 'Converta 3 funções tradicionais que você conhece para Arrow Functions. Reescreva 2 concatenações de string com Template Literals.'
        },
        {
          id: 'desestruturacao-e-spread',
          titulo: 'Desestruturação e Spread Operator',
          descricao: 'Manipulando Arrays e Objetos como um profissional.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Desestruturação permite "extrair" valores de objetos e arrays de forma limpa. O Spread Operator (...) copia ou mescla coleções sem mutação.

Você vai ver esses dois operadores em TODO projeto Angular.`,
          codigo: `// Desestruturação de Objeto
const usuario = { nome: 'Marcos', idade: 30, cidade: 'SP' };
const { nome, cidade } = usuario;
console.log(nome);   // 'Marcos'
console.log(cidade); // 'SP'

// Desestruturação com renomeação
const { nome: nomeDoUsuario } = usuario;

// Desestruturação de Array
const coordenadas = [10, 20, 30];
const [x, y] = coordenadas;  // z é ignorado

// Spread em Arrays — cria uma NOVA array (imutabilidade!)
const lista = [1, 2, 3];
const novaLista = [...lista, 4];     // [1, 2, 3, 4]
const listaCombinada = [...lista, ...novaLista];

// Spread em Objetos — "clonar e atualizar"
const config = { tema: 'escuro', idioma: 'pt' };
const novaConfig = { ...config, idioma: 'en' };
// novaConfig = { tema: 'escuro', idioma: 'en' }

// Rest parameters — o inverso do spread
function somaTudo(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}`,
          dica: 'Use Spread para garantir imutabilidade — um conceito que o Angular adora. Signals funcionam muito bem com objetos imutáveis.'
        },
        {
          id: 'array-methods',
          titulo: 'Array Methods: map, filter e reduce',
          descricao: 'A santíssima trindade da manipulação de dados.',
          duracao: '20 min',
          tempoEstimado: '45 min de prática intensiva',
          conteudo: `Esses três métodos são a base de qualquer transformação de dados no Angular — das listas de produtos às estatísticas de progresso.

**Map** transforma. **Filter** seleciona. **Reduce** acumula.`,
          codigo: `const produtos = [
  { id: 1, nome: 'Notebook', preco: 3000, emEstoque: true },
  { id: 2, nome: 'Mouse', preco: 150, emEstoque: false },
  { id: 3, nome: 'Teclado', preco: 400, emEstoque: true },
];

// MAP — transforma cada item em outra coisa
const nomes = produtos.map(p => p.nome);
// ['Notebook', 'Mouse', 'Teclado']

const comDesconto = produtos.map(p => ({
  ...p,
  preco: p.preco * 0.9   // 10% de desconto
}));

// FILTER — retorna apenas os que passam no teste
const disponiveis = produtos.filter(p => p.emEstoque);
// [Notebook, Teclado]

// REDUCE — acumula um valor único
const totalEstoque = produtos
  .filter(p => p.emEstoque)
  .reduce((total, p) => total + p.preco, 0);
// 3400

// FIND — retorna o primeiro que passa no teste
const notebook = produtos.find(p => p.id === 1);

// SOME e EVERY — testes lógicos
const temProdutoBarato = produtos.some(p => p.preco < 200);
const todosCom = produtos.every(p => p.emEstoque);`,
          tarefa: 'Dado um array de usuários com nome e idade, use filter para pegar os maiores de 18, map para criar um array só com os nomes, e reduce para contar quantos têm mais de 25.',
          dica: 'Encadeie os métodos: filter().map().reduce() — cada um retorna um novo array, então você pode continuar a cadeia sem criar variáveis intermediárias.'
        },
        {
          id: 'promises-async-await',
          titulo: 'Promises e Async/Await',
          descricao: 'Como lidar com operações que levam tempo — chamadas de API, por exemplo.',
          duracao: '25 min',
          tempoEstimado: '50 min',
          conteudo: `JavaScript é single-threaded — ele executa uma coisa por vez. Para não "travar" a interface enquanto busca dados de uma API, usamos código assíncrono.

**Promise** representa um valor que ainda não chegou. **async/await** é a sintaxe moderna para trabalhar com Promises de forma legível.`,
          codigo: `// Uma Promise básica
const promessa = new Promise((resolve, reject) => {
  const sucesso = true;
  if (sucesso) {
    resolve('Dados carregados!');
  } else {
    reject(new Error('Algo deu errado'));
  }
});

// Consumindo com .then()/.catch() (estilo antigo)
promessa
  .then(dados => console.log(dados))
  .catch(erro => console.error(erro));

// Consumindo com async/await (estilo moderno e legível)
async function carregarDados() {
  try {
    const resposta = await fetch('https://api.exemplo.com/usuarios');
    const dados = await resposta.json();  // também é assíncrono!
    return dados;
  } catch (erro) {
    console.error('Erro na requisição:', erro);
    throw erro;  // re-lança para quem chamou tratar
  }
}

// Promise.all — executa várias Promises em paralelo
async function carregarTudo() {
  const [usuarios, produtos] = await Promise.all([
    fetch('/api/usuarios').then(r => r.json()),
    fetch('/api/produtos').then(r => r.json()),
  ]);
  return { usuarios, produtos };
}`,
          tarefa: 'Faça uma chamada fetch() à API pública https://jsonplaceholder.typicode.com/users usando async/await. Exiba os primeiros 3 nomes no console.',
          dica: 'No Angular, usamos principalmente Observables (RxJS) em vez de Promises, mas async/await é fundamental para entender o modelo assíncrono.',
          linksExternos: [
            { titulo: 'JSONPlaceholder — API de teste gratuita', url: 'https://jsonplaceholder.typicode.com' }
          ]
        },
        {
          id: 'classes-oop',
          titulo: 'Classes e Orientação a Objetos',
          descricao: 'A base para entender serviços, componentes e todo o Angular.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `O Angular é construído inteiramente com classes. Cada componente, serviço e diretiva é uma classe TypeScript. Entender classes é entender Angular.`,
          codigo: `// Classe básica
class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  falar() {
    return \`\${this.nome} fez um som.\`;
  }
}

// Herança
class Cachorro extends Animal {
  raca: string;

  constructor(nome: string, raca: string) {
    super(nome);  // chama o constructor do pai
    this.raca = raca;
  }

  // Override do método pai
  falar() {
    return \`\${this.nome} latiu!\`;
  }
}

// Encapsulamento com private/public
class ContaBancaria {
  private saldo: number = 0;

  depositar(valor: number) {
    if (valor > 0) this.saldo += valor;
  }

  get saldoAtual() {
    return this.saldo;  // leitura permitida, escrita direta não
  }
}

// Exemplo que parece um serviço Angular
class UsuarioService {
  private usuarios: string[] = [];

  adicionar(nome: string) {
    this.usuarios.push(nome);
  }

  listar() {
    return [...this.usuarios];  // retorna cópia para evitar mutação
  }
}`,
          tarefa: 'Crie uma classe Carrinho com métodos: adicionarItem(produto), removerItem(id), calcularTotal() e limpar(). Use encapsulamento para proteger a lista interna.'
        },
        {
          id: 'modulos-import-export',
          titulo: 'Módulos ES: import e export',
          descricao: 'Como o JavaScript organiza código em arquivos separados.',
          duracao: '10 min',
          tempoEstimado: '20 min',
          conteudo: `Módulos ES permitem dividir código em arquivos e importar apenas o que você precisa. Esse é o sistema que o Angular usa em todo lugar.`,
          codigo: `// === matematica.ts ===
// Named export — pode ter vários por arquivo
export const PI = 3.14159;
export function somar(a: number, b: number) { return a + b; }
export function multiplicar(a: number, b: number) { return a * b; }

// Default export — apenas um por arquivo
export default class Calculadora {
  historico: string[] = [];
  calcular(expr: string) { /* ... */ }
}

// === app.ts ===
// Importando named exports — use chaves
import { PI, somar, multiplicar } from './matematica';

// Importando default export — sem chaves, qualquer nome
import Calc from './matematica';

// Importando tudo com alias
import * as Math from './matematica';

// Re-exportando (padrão de "barrel file" — index.ts)
export { somar, multiplicar } from './matematica';`,
          dica: 'No Angular, cada componente e serviço é um módulo. Você verá muito "import { Component } from @angular/core" — agora você sabe exatamente o que isso significa.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 4: TYPESCRIPT ESSENCIAL
    // =====================================================================
    {
      id: 'typescript-essencial',
      titulo: 'TypeScript: O Superpoder',
      descricao: 'Adicionando segurança e inteligência ao JavaScript.',
      icone: '🔷',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'tipagem-basica',
          titulo: 'Tipos Básicos e Interfaces',
          descricao: 'Defina contratos para seu código e elimine bugs bobos.',
          duracao: '20 min',
          tempoEstimado: '30 min',
          conteudo: `TypeScript é JavaScript com um sistema de tipos. O compilador avisa sobre erros **antes** do código rodar — imagine descobrir um typo num nome de propriedade na sua máquina em vez de em produção.

**Tipos primitivos e como usá-los:**`,
          codigo: `// Tipos básicos
let nome: string = 'Marcos';
let idade: number = 30;
let ativo: boolean = true;
let qualquerCoisa: unknown = 'pode ser qualquer tipo, mas precisa verificar';

// Arrays e tuplas
let numeros: number[] = [1, 2, 3];
let par: [string, number] = ['Marcos', 30]; // tupla: posição importa

// Interface — define a "forma" de um objeto
interface Usuario {
  id: number;
  nome: string;
  email: string;
  perfil?: string;  // ? = opcional
}

// TypeScript avisa se faltar campo obrigatório
const user: Usuario = { id: 1, nome: 'Marcos', email: 'x@y.com' };

// Diferença de Type vs Interface
// Interface: pode ser extendida com "extends"
interface Admin extends Usuario {
  nivel: 'super' | 'normal';
}

// Type: mais flexível, permite unions e intersections
type StatusAula = 'pendente' | 'em-andamento' | 'concluida';
type AdminOuUser = Admin | Usuario;`,
          tarefa: 'Crie interfaces para Produto (id, nome, preco, categoria), e Pedido (id, produtos, total, status). Use o tipo adequado para status.',
          linksExternos: [
            { titulo: 'TypeScript Playground', url: 'https://www.typescriptlang.org/play' }
          ]
        },
        {
          id: 'generics',
          titulo: 'Generics: Código Reutilizável e Tipado',
          descricao: 'Funções e classes que funcionam com qualquer tipo sem perder a segurança.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `Generics são como "variáveis de tipo". Você escreve uma função uma vez e ela funciona com diferentes tipos, mantendo a segurança.

No Angular, você verá Generics em todo lugar: signal<string>(), EventEmitter<MeuTipo>, Observable<HttpResponse<Dados>>.`,
          codigo: `// Sem generics — repetição de código
function primeiroDaListaString(lista: string[]): string {
  return lista[0];
}
function primeiroDaListaNumber(lista: number[]): number {
  return lista[0];
}

// Com generics — uma única função para tudo
function primeiroDaLista<T>(lista: T[]): T {
  return lista[0];
}

// O TypeScript infere o tipo automaticamente
const primeiroNome = primeiroDaLista(['Marcos', 'Ana']);  // T = string
const primeiroNum = primeiroDaLista([10, 20, 30]);        // T = number

// Interface genérica — muito usada para respostas de API
interface RespostaApi<T> {
  dados: T;
  total: number;
  pagina: number;
  erro?: string;
}

// Usando:
type RespostaUsuarios = RespostaApi<Usuario[]>;
type RespostaProduto = RespostaApi<Produto>;

// Exemplo parecido com Signals do Angular
function criarEstado<T>(valorInicial: T) {
  let valor = valorInicial;
  return {
    get: () => valor,
    set: (novoValor: T) => { valor = novoValor; }
  };
}`,
          dica: 'Quando você escreve signal<Produto | null>(null) no Angular, você está usando Generics. O <Produto | null> diz ao TypeScript o que esse signal pode conter.'
        },
        {
          id: 'union-types-narrowing',
          titulo: 'Union Types e Type Narrowing',
          descricao: 'Trabalhe com valores que podem ser de tipos diferentes com segurança.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Union Types permitem que uma variável seja de um tipo OU outro. Type Narrowing é como você "afunila" o tipo dentro de um bloco de código.`,
          codigo: `// Union Type: string | number
function formatarId(id: string | number): string {
  // TypeScript sabe que id pode ser os dois tipos aqui
  return \`ID: \${id}\`;
}

// Type Narrowing com typeof
function processar(valor: string | number) {
  if (typeof valor === 'string') {
    // Aqui, TypeScript sabe que é string
    return valor.toUpperCase();
  }
  // Aqui, TypeScript sabe que é number
  return valor * 2;
}

// Discriminated Union — padrão muito usado no Angular
interface AulaCarregando {
  status: 'carregando';
}
interface AulaSucesso {
  status: 'sucesso';
  dados: Aula;
}
interface AulaErro {
  status: 'erro';
  mensagem: string;
}

type EstadoAula = AulaCarregando | AulaSucesso | AulaErro;

function renderizarEstado(estado: EstadoAula) {
  switch (estado.status) {
    case 'carregando': return 'Carregando...';
    case 'sucesso': return estado.dados.titulo;  // TS sabe que .dados existe aqui
    case 'erro': return estado.mensagem;           // TS sabe que .mensagem existe aqui
  }
}`,
          dica: 'O padrão Discriminated Union é perfeito para gerenciar estados de requisições HTTP no Angular: loading, success, error.'
        },
        {
          id: 'utility-types',
          titulo: 'Utility Types: Partial, Pick, Omit',
          descricao: 'Ferramentas TypeScript para transformar tipos sem repetir código.',
          duracao: '15 min',
          tempoEstimado: '25 min',
          conteudo: `TypeScript vem com um conjunto de "tipos utilitários" que transformam outros tipos. São atalhos poderosos para situações comuns.`,
          codigo: `interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  categoria: string;
  emEstoque: boolean;
}

// Partial<T> — torna todos os campos opcionais
// Útil para formulários de edição parcial
function atualizarProduto(id: number, dados: Partial<Produto>) {
  // dados.nome pode ou não estar presente
}

// Pick<T, Keys> — pega apenas os campos especificados
type CardProduto = Pick<Produto, 'id' | 'nome' | 'preco'>;

// Omit<T, Keys> — remove os campos especificados
type NovoProduto = Omit<Produto, 'id'>;  // sem o id (ainda não existe)

// Readonly<T> — torna todos os campos imutáveis
const config: Readonly<{ versao: string }> = { versao: '1.0' };
// config.versao = '2.0'; // ERRO em tempo de compilação!

// Required<T> — torna todos os campos obrigatórios
type ProdutoCompleto = Required<Produto>;

// Record<Keys, Type> — cria um objeto com chaves específicas
type StatusTraduzido = Record<'pendente' | 'ativo' | 'inativo', string>;
const traducoes: StatusTraduzido = {
  pendente: 'Aguardando',
  ativo: 'Ativo',
  inativo: 'Desativado'
};`,
          dica: 'Partial<T> é extremamente comum em Angular para tipar formulários de edição, onde o usuário pode alterar apenas alguns campos de um objeto.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 5: COMPONENTES ANGULAR
    // =====================================================================
    {
      id: 'angular-componentes',
      titulo: 'Componentes: O Coração',
      descricao: 'Criação, composição e comunicação entre componentes Angular.',
      icone: '📦',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'anatomia-componente',
          titulo: 'Anatomia de um Componente',
          descricao: 'Entenda o decorador @Component, o template e o estilo.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Um componente Angular é uma classe TypeScript decorada com @Component. Ele define três coisas principais: o selector (nome da tag HTML), o template (o HTML) e os estilos.

No Angular 20+, componentes são standalone por padrão — sem necessidade de NgModules.`,
          codigo: `import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-saudacao',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<h1>Olá, Angular!</h1>',
  styles: \`
    h1 { color: var(--cor-primaria); }
  \`
})
export class Saudacao {}

// Para arquivos externos (preferível para componentes maiores)
@Component({
  selector: 'app-perfil',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {}`,
          tarefa: 'Crie um componente "app-cartao-usuario" com template inline, mostrando um nome hardcoded. Depois adicione estilo CSS inline.',
          dica: 'Sempre adicione changeDetection: ChangeDetectionStrategy.OnPush. Isso melhora a performance e é a melhor prática do Angular moderno.'
        },
        {
          id: 'item-databinding',
          titulo: 'Databinding: Ligando Dados e Tela',
          descricao: 'Interpolação, property binding e event binding.',
          duracao: '20 min',
          tempoEstimado: '45 min de prática',
          conteudo: `Databinding é a "cola" entre a lógica TypeScript e o HTML. Existem 3 tipos principais:

1. **Interpolação** {{ }} — exibe valores no HTML
2. **Property Binding** [propriedade] — define valores de propriedades HTML
3. **Event Binding** (evento) — reage a ações do usuário`,
          codigo: `@Component({
  selector: 'app-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <!-- Interpolação: exibe valor da propriedade -->
    <h1>{{ titulo }}</h1>
    <p>Contagem: {{ contador }}</p>

    <!-- Property Binding: define propriedades dinâmicas -->
    <input [value]="nome" [placeholder]="dica">
    <button [disabled]="contador >= 10">Botão</button>
    <img [src]="urlImagem" [alt]="descricaoImagem">

    <!-- Event Binding: reagindo a eventos -->
    <button (click)="incrementar()">+</button>
    <button (click)="decrementar()">-</button>
    <input (input)="atualizarNome($event)">

    <!-- Two-way binding com NgModel (precisa FormsModule) -->
    <input [(ngModel)]="pesquisa">
  \`
})
export class Demo {
  titulo = 'Meu App';
  contador = 0;
  nome = '';

  incrementar() { this.contador++; }
  decrementar() { if (this.contador > 0) this.contador--; }

  atualizarNome(evento: Event) {
    this.nome = (evento.target as HTMLInputElement).value;
  }
}`,
          tarefa: 'Crie um componente de "semáforo digital" com 3 cores. Cada botão muda a cor exibida e o texto abaixo atualiza automaticamente.'
        },
        {
          id: 'input-output-modernos',
          titulo: 'Comunicação: input() e output()',
          descricao: 'Como componentes pai e filho trocam informações.',
          duracao: '25 min',
          tempoEstimado: '50 min',
          conteudo: `No Angular moderno, usamos as funções input() e output() em vez dos decoradores @Input() e @Output(). Essa nova API é mais type-safe e integra melhor com Signals.

**Fluxo de dados:**
- **input()** → Pai passa dados para Filho
- **output()** → Filho notifica o Pai de eventos`,
          codigo: `// === card-produto.ts (Componente Filho) ===
import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <div class="card">
      <h3>{{ produto().nome }}</h3>
      <p>R$ {{ produto().preco }}</p>
      <button (click)="adicionarAoCarrinho()">
        Adicionar ao carrinho
      </button>
    </div>
  \`
})
export class CardProduto {
  // Input: recebe dados do componente pai
  produto = input.required<{ nome: string; preco: number }>();

  // Output: emite eventos para o componente pai
  adicionado = output<{ nome: string; preco: number }>();

  adicionarAoCarrinho() {
    this.adicionado.emit(this.produto());
  }
}

// === lista-produtos.ts (Componente Pai) ===
@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    @for (p of produtos; track p.id) {
      <app-card-produto
        [produto]="p"
        (adicionado)="onAdicionado($event)">
      </app-card-produto>
    }
  \`
})
export class ListaProdutos {
  produtos = [
    { id: 1, nome: 'Notebook', preco: 3000 },
    { id: 2, nome: 'Mouse', preco: 150 },
  ];

  onAdicionado(produto: { nome: string; preco: number }) {
    console.log('Adicionado:', produto.nome);
  }
}`,
          dica: 'Use input.required() quando o dado é obrigatório. O Angular vai alertar em tempo de compilação se o pai não passar o valor.',
          tarefa: 'Crie um componente "app-avaliacao" que recebe um número (1-5) via input() e exibe estrelas ★. O pai deve definir a nota via binding.'
        },
        {
          id: 'lifecycle-hooks',
          titulo: 'Lifecycle Hooks',
          descricao: 'Momentos-chave na vida de um componente: nascimento, mudança e destruição.',
          duracao: '20 min',
          tempoEstimado: '35 min',
          conteudo: `Componentes Angular têm um ciclo de vida. Hooks são métodos que você pode implementar para "entrar" em momentos específicos desse ciclo.

**Os mais importantes na prática:**`,
          codigo: `import { Component, OnInit, OnDestroy, input, effect, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dados',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<p>{{ titulo() }}</p>\`
})
export class Dados implements OnInit, OnDestroy {
  titulo = input<string>('');

  private intervalo?: ReturnType<typeof setInterval>;

  constructor() {
    // effect() reage a mudanças de signals automaticamente
    effect(() => {
      console.log('Título mudou para:', this.titulo());
    });
  }

  // ngOnInit: chamado APÓS o Angular inicializar os inputs
  // Use para: buscar dados da API, configurar subscriptions
  ngOnInit() {
    this.intervalo = setInterval(() => {
      console.log('tick');
    }, 1000);
  }

  // ngOnDestroy: chamado ANTES do componente ser removido
  // Use para: cancelar subscriptions, limpar intervalos
  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}`,
          dica: 'Sempre limpe recursos em ngOnDestroy — intervalos, subscriptions, event listeners. Esquecer isso causa "memory leaks" que deixam a app lenta ao longo do tempo.'
        },
        {
          id: 'pipes-built-in',
          titulo: 'Pipes: Transformando Dados no Template',
          descricao: 'Formate datas, moedas e textos direto no HTML.',
          duracao: '15 min',
          tempoEstimado: '25 min',
          conteudo: `Pipes são funções que transformam valores na exibição. Não alteram o dado original — só mudam como ele aparece.

Angular tem vários pipes built-in prontos para usar.`,
          codigo: `import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe, CurrencyPipe, UpperCasePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-demo-pipes',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <!-- DatePipe -->
    <p>{{ dataCompra | date:'dd/MM/yyyy' }}</p>
    <p>{{ dataCompra | date:'long' : '' : 'pt-BR' }}</p>

    <!-- CurrencyPipe -->
    <p>{{ preco | currency:'BRL':'symbol':'1.2-2' }}</p>
    <!-- Resultado: R$ 1.234,56 -->

    <!-- UpperCasePipe / LowerCasePipe -->
    <p>{{ titulo | uppercase }}</p>
    <p>{{ titulo | lowercase }}</p>

    <!-- DecimalPipe -->
    <p>{{ numero | number:'1.2-2' }}</p>
    <!-- Mínimo 1 dígito inteiro, 2-2 casas decimais -->

    <!-- Encadeando pipes -->
    <p>{{ nome | uppercase | slice:0:5 }}</p>
  \`
})
export class DemoPipes {
  dataCompra = new Date();
  preco = 1234.56;
  titulo = 'Aprendendo Angular';
  numero = 3.14159;
  nome = 'Marcos Guimarães';
}`,
          dica: 'Para formatos brasileiros (moeda, data), passe o locale "pt-BR" ou configure-o globalmente no app.config.ts com LOCALE_ID.',
          linksExternos: [
            { titulo: 'Documentação de Pipes', url: 'https://angular.dev/guide/pipes' }
          ]
        }
      ]
    },

    // =====================================================================
    // MÓDULO 6: CONTROLE DE FLUXO
    // =====================================================================
    {
      id: 'fluxo-e-diretivas',
      titulo: 'Controle de Fluxo',
      descricao: 'O novo padrão Angular para condicionais, listas e carregamento sob demanda.',
      icone: '🔀',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'novo-if-for',
          titulo: '@if e @for: Condicionais e Listas',
          descricao: 'Sintaxe de blocos moderna — mais rápida e legível.',
          duracao: '15 min',
          tempoEstimado: '20 min',
          conteudo: `O Angular 17+ introduziu uma nova sintaxe de controle de fluxo com @ (blocks). É mais performática e muito mais legível que as diretivas antigas (*ngIf, *ngFor).`,
          codigo: `<!-- @if com else e else if -->
@if (usuario.logado) {
  <p>Bem-vindo, {{ usuario.nome }}!</p>
} @else if (usuario.carregando) {
  <p>Carregando...</p>
} @else {
  <a routerLink="/login">Faça login</a>
}

<!-- @for com track (obrigatório) -->
@for (produto of produtos; track produto.id) {
  <app-card-produto [produto]="produto" />
} @empty {
  <p>Nenhum produto encontrado.</p>
}

<!-- Usando $index, $first, $last do @for -->
@for (item of lista; track item.id; let i = $index, primeiro = $first) {
  <div [class.destaque]="primeiro">
    {{ i + 1 }}. {{ item.nome }}
  </div>
}`,
          dica: 'O "track" é como uma chave de identificação — diga ao Angular o que torna cada item único. Usar "track $index" é um último recurso; prefira track por id.'
        },
        {
          id: 'switch-template',
          titulo: '@switch: Múltiplas Condições',
          descricao: 'Alternativa limpa para múltiplos @if encadeados.',
          duracao: '10 min',
          tempoEstimado: '15 min',
          conteudo: `Quando você tem 3 ou mais condições baseadas no mesmo valor, o @switch é muito mais legível do que múltiplos @if encadeados.`,
          codigo: `<!-- Status de pedido com @switch -->
@switch (pedido.status) {
  @case ('pendente') {
    <span class="badge amarelo">⏳ Pendente</span>
  }
  @case ('processando') {
    <span class="badge azul">🔄 Processando</span>
  }
  @case ('enviado') {
    <span class="badge verde">📦 Enviado</span>
  }
  @case ('entregue') {
    <span class="badge cinza">✅ Entregue</span>
  }
  @default {
    <span class="badge vermelho">❌ Status desconhecido</span>
  }
}

<!-- Equivalente com @if — muito mais verboso -->
@if (pedido.status === 'pendente') {
  <!-- ... -->
} @else if (pedido.status === 'processando') {
  <!-- ... -->
} @else if (pedido.status === 'enviado') {
  <!-- ... -->
}`,
          tarefa: 'Crie um componente de "badge de nível" que recebe "iniciante", "intermediario" ou "avancado" e renderiza com cores diferentes usando @switch.'
        },
        {
          id: 'defer-lazy-templates',
          titulo: '@defer: Carregamento Sob Demanda',
          descricao: 'Carregue partes pesadas da UI apenas quando necessário.',
          duracao: '20 min',
          tempoEstimado: '35 min',
          conteudo: `@defer é uma das features mais poderosas do Angular 17+. Ele adia o carregamento de componentes pesados para depois que a parte crítica da página já estiver visível, melhorando drasticamente o tempo de carregamento inicial.`,
          codigo: `<!-- Carrega o componente pesado só quando o usuário chegar nele -->
@defer (on viewport) {
  <app-grafico-complexo [dados]="dados" />
} @placeholder {
  <!-- Mostrado antes de carregar -->
  <div class="skeleton" style="height: 300px"></div>
} @loading {
  <!-- Mostrado durante o download do componente -->
  <p>Carregando gráfico...</p>
} @error {
  <p>Falha ao carregar o gráfico.</p>
}

<!-- Outros gatilhos disponíveis -->

<!-- Carrega após X milissegundos de idle -->
@defer (on idle) { ... }

<!-- Carrega após uma interação do usuário -->
@defer (on interaction) { ... }

<!-- Carrega imediatamente (próximo tick) -->
@defer (on immediate) { ... }

<!-- Carrega baseado em condição lógica -->
@defer (when condicaoVerdadeira) { ... }`,
          dica: '@defer com "on viewport" é perfeito para seções abaixo da dobra — seções que o usuário só vê depois de rolar a página. Isso melhora o Largest Contentful Paint (LCP).',
          linksExternos: [
            { titulo: 'Documentação @defer', url: 'https://angular.dev/guide/defer' }
          ]
        }
      ]
    },

    // =====================================================================
    // MÓDULO 7: SIGNALS
    // =====================================================================
    {
      id: 'signals-reatividade',
      titulo: 'Signals: Reatividade Moderna',
      descricao: 'O motor ultra-eficiente que move o Angular atual.',
      icone: '⚡',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'o-que-sao-signals',
          titulo: 'signal() e computed()',
          descricao: 'Estado e valores derivados — a base do sistema reativo.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `Signals são a maior revolução recente no Angular. Um Signal é um wrapper em torno de um valor que notifica consumidores quando muda.

**Por que isso é melhor que Zone.js?**
Com Zone.js (o sistema antigo), qualquer evento trigava uma verificação de toda a árvore de componentes. Com Signals, apenas o que usa aquele Signal é atualizado.`,
          codigo: `import { signal, computed } from '@angular/core';

// Criando um Signal
const contador = signal(0);

// Lendo o valor — sempre chame como função ()
console.log(contador()); // 0

// Modificando
contador.set(5);           // define diretamente
contador.update(v => v + 1); // atualiza baseado no valor atual

// computed() — valor derivado, atualiza automaticamente
const dobro = computed(() => contador() * 2);
const texto = computed(() => \`Contagem: \${contador()}\`);

// Exemplo prático: carrinho de compras
const itens = signal<Produto[]>([]);
const totalItens = computed(() => itens().length);
const valorTotal = computed(() =>
  itens().reduce((sum, item) => sum + item.preco, 0)
);

// Adicionar item — importante: não mutar o array original!
function adicionarItem(produto: Produto) {
  itens.update(lista => [...lista, produto]);
}`,
          tarefa: 'Crie um contador com signal(). Adicione um computed() que exibe "par" ou "ímpar" baseado no valor. Adicione botões +1 e -1.',
          linksExternos: [
            { titulo: 'Guia de Signals — angular.dev', url: 'https://angular.dev/guide/signals' }
          ]
        },
        {
          id: 'effect-reativo',
          titulo: 'effect(): Reagindo a Mudanças',
          descricao: 'Execute código automaticamente quando um signal muda.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `effect() cria um "efeito colateral" reativo — um bloco de código que roda automaticamente sempre que algum Signal que ele lê for alterado.

Use com moderação. Se você puder usar computed() em vez de effect(), use computed().`,
          codigo: `import { signal, computed, effect } from '@angular/core';

const pesquisa = signal('');
const resultados = signal<string[]>([]);

// effect() roda imediatamente e depois a cada mudança
// dos signals que ele "lê" internamente
effect(() => {
  const termo = pesquisa();
  if (termo.length < 2) {
    resultados.set([]);
    return;
  }

  // Simula busca na API
  console.log('Buscando por:', termo);
  // Em produção: chamar serviço HTTP aqui
});

// Exemplo de uso para persistência no localStorage
const tema = signal(localStorage.getItem('tema') ?? 'escuro');

effect(() => {
  // Salva automaticamente quando tema muda
  localStorage.setItem('tema', tema());
  document.body.dataset['tema'] = tema();
});

// Para cancelar o effect se necessário:
const cancelar = effect(() => { /* ... */ });
cancelar.destroy();`,
          dica: 'Não use effect() para derivar estado — isso é trabalho do computed(). Use effect() apenas para "efeitos colaterais" reais: salvar no localStorage, chamar APIs, manipular o DOM.'
        },
        {
          id: 'tosignal-observables',
          titulo: 'toSignal(): Conectando RxJS e Signals',
          descricao: 'Converta Observables em Signals para usar no template.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `Angular tem um rico histórico com RxJS e Observables. Signals são o futuro, mas o ecossistema existente (HTTP, Router, Forms) ainda usa Observables. A função toSignal() faz a ponte.`,
          codigo: `import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    @if (usuarios()) {
      @for (user of usuarios(); track user.id) {
        <p>{{ user.nome }}</p>
      }
    } @else {
      <p>Carregando...</p>
    }
  \`
})
export class ListaUsuarios {
  private http = inject(HttpClient);

  // Converte Observable em Signal — gerencia a subscription automaticamente
  usuarios = toSignal(
    this.http.get<Usuario[]>('/api/usuarios')
  );
}

// Também funciona com o Router
import { ActivatedRoute } from '@angular/router';

class MeuComponente {
  private route = inject(ActivatedRoute);

  // Signal com o parâmetro de rota
  idDaRota = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    )
  );
}`,
          dica: 'toSignal() gerencia a subscription automaticamente usando o injection context — você não precisa chamar unsubscribe(). É muito mais seguro que subscriptions manuais.'
        },
        {
          id: 'linked-signal',
          titulo: 'linkedSignal(): Sinais Dependentes',
          descricao: 'Um Signal que se reseta quando outro Signal muda.',
          duracao: '15 min',
          tempoEstimado: '25 min',
          conteudo: `linkedSignal() resolve um problema comum: você tem um estado que depende de outro, mas também pode ser modificado pelo usuário. Quando o estado "pai" muda, o dependente deve se resetar.

**Exemplo clássico:** Uma lista de produtos e o produto selecionado. Quando a lista muda (usuário muda a categoria), a seleção deve ser resetada.`,
          codigo: `import { signal, linkedSignal } from '@angular/core';

const categoria = signal('Angular');
const produtos = signal<Produto[]>([]);

// O produto selecionado RESETA quando a lista de produtos muda
const produtoSelecionado = linkedSignal({
  source: produtos,  // "depende" deste signal
  computation: () => null as Produto | null  // valor padrão quando source muda
});

// Uso:
categoria.set('TypeScript');  // carrega novos produtos
// produtoSelecionado() é null automaticamente

// Selecionando um produto:
produtoSelecionado.set(produtos()[0]);

// Exemplo com índice:
const indiceAtivo = linkedSignal({
  source: produtos,
  computation: () => 0  // volta para o primeiro quando lista muda
});`,
          dica: 'linkedSignal() é mais recente (Angular 19+). Para versões anteriores, use effect() para resetar o signal dependente manualmente — o resultado é equivalente.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 8: ROTEAMENTO
    // =====================================================================
    {
      id: 'roteamento-routing',
      titulo: 'Roteamento e Navegação',
      descricao: 'Crie aplicações multi-página com o Router do Angular.',
      icone: '🗺️',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'configurando-rotas',
          titulo: 'Configurando e Navegando',
          descricao: 'Mapeando URLs para componentes e usando RouterLink.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `O Router do Angular permite navegar entre componentes sem recarregar a página (SPA — Single Page Application). Cada "página" é um componente, e o Router decide qual mostrar baseado na URL.`,
          codigo: `// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/produtos/produtos').then(m => m.Produtos)
  },
  {
    path: 'produto/:id',   // :id é um parâmetro dinâmico
    loadComponent: () => import('./pages/produto/produto').then(m => m.Produto)
  },
  {
    path: '**',   // wildcard — captura qualquer rota não mapeada
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];

// No template — usando RouterLink
@Component({
  imports: [RouterLink, RouterLinkActive],
  template: \`
    <nav>
      <a routerLink="/" routerLinkActive="ativo" [routerLinkActiveOptions]="{exact: true}">
        Início
      </a>
      <a routerLink="/produtos" routerLinkActive="ativo">Produtos</a>
    </nav>

    <!-- Onde os componentes são renderizados -->
    <router-outlet />
  \`
})
export class App {}`,
          tarefa: 'Crie 3 rotas no seu projeto: home, sobre, contato. Adicione um navbar com RouterLink entre elas e verifique que o link ativo fica destacado.'
        },
        {
          id: 'parametros-rota',
          titulo: 'Parâmetros e Query Params',
          descricao: 'Lendo dados da URL — IDs, filtros e paginação.',
          duracao: '20 min',
          tempoEstimado: '35 min',
          conteudo: `URLs podem carregar dados. "/produto/42" tem um parâmetro de rota. "/produtos?categoria=angular&pagina=2" tem query parameters. Ambos são formas de comunicação via URL.`,
          codigo: `import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <h1>{{ produto()?.nome }}</h1>
  \`
})
export class Produto implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  produto = signal<any>(null);

  ngOnInit() {
    // Lendo parâmetro de rota (/produto/:id)
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID do produto:', id);

    // Lendo query params (?categoria=angular)
    const categoria = this.route.snapshot.queryParamMap.get('categoria');

    // Se a rota muda sem recarregar o componente, use o Observable:
    this.route.paramMap.subscribe(params => {
      const novoId = params.get('id');
      // carregarProduto(novoId)
    });
  }

  // Navegação programática
  irParaLista() {
    this.router.navigate(['/produtos']);
  }

  irParaProduto(id: number) {
    // Com query params: /produtos/42?origem=home
    this.router.navigate(['/produto', id], {
      queryParams: { origem: 'home' }
    });
  }
}`,
          dica: 'Use route.snapshot para leituras únicas (componente não reutiliza a rota). Use route.paramMap como Observable para rotas que podem mudar sem recriar o componente.'
        },
        {
          id: 'lazy-loading-rotas',
          titulo: 'Lazy Loading de Rotas',
          descricao: 'Carregue módulos apenas quando o usuário navegar para eles.',
          duracao: '15 min',
          tempoEstimado: '25 min',
          conteudo: `Lazy Loading divide o bundle da aplicação em pedaços menores. Em vez de baixar todo o código de uma vez, o usuário baixa apenas o que precisa, quando precisa.

Este próprio site usa lazy loading em todas as rotas — veja o arquivo app.routes.ts.`,
          codigo: `// app.routes.ts — Lazy Loading com loadComponent
export const routes: Routes = [
  {
    path: 'admin',
    // O código do Admin só é baixado quando o usuário navegar para /admin
    loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin)
  },
  {
    // Rota pai com filhas lazy-loaded
    path: 'loja',
    loadChildren: () =>
      import('./pages/loja/loja.routes').then(m => m.lojaRoutes)
  }
];

// loja.routes.ts — rotas filhas
export const lojaRoutes: Routes = [
  { path: '', component: ListaProdutos },
  { path: ':id', component: DetalheProduto },
  { path: 'carrinho', component: Carrinho },
];`,
          dica: 'O Angular CLI já gera componentes com loadComponent por padrão. Use "ng generate component nome --lazy" para confirmar a geração correta.',
          linksExternos: [
            { titulo: 'Lazy Loading — angular.dev', url: 'https://angular.dev/guide/routing/lazy-loading' }
          ]
        },
        {
          id: 'route-guards',
          titulo: 'Route Guards: Protegendo Rotas',
          descricao: 'Permita ou bloqueie acesso a rotas baseado em regras.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `Guards são funções que decidem se o Router pode ativar uma rota. Você as usa para proteger páginas que exigem autenticação, confirmar saída de formulários, ou verificar permissões.`,
          codigo: `// auth.guard.ts
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth';

// Guard moderno — uma simples função
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLogado()) {
    return true;  // acesso permitido
  }

  // Redireciona para login, preservando a URL destino
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};

// app.routes.ts — aplicando o guard
export const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuard],  // aplica o guard
    loadComponent: () => import('./pages/admin/admin').then(m => m.Admin)
  }
];

// Guard de saída — confirma antes de sair de formulários
export const formularioGuard: CanDeactivateFn<any> = (component) => {
  if (component.formulario?.dirty) {
    return confirm('Tem certeza? Há alterações não salvas.');
  }
  return true;
};`,
          dica: 'Guards modernos são funções simples (CanActivateFn), não classes. Isso torna o código muito mais limpo e testável do que a abordagem antiga com classes implements CanActivate.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 9: FORMULÁRIOS
    // =====================================================================
    {
      id: 'formularios-e-validacao',
      titulo: 'Formulários e Validação',
      descricao: 'Capturando, validando e submetendo dados de formulários.',
      icone: '📝',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'reactive-forms',
          titulo: 'Formulários Reativos',
          descricao: 'Controle total do formulário via TypeScript.',
          duracao: '25 min',
          tempoEstimado: '1 hora de prática',
          conteudo: `Reactive Forms são controlados por TypeScript — não pelo template. Isso facilita testes, validações complexas e transformações de dados.

O Angular recomenda Reactive Forms para formulários que precisam de mais controle.`,
          codigo: `import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <input formControlName="email" type="email" placeholder="E-mail">
      @if (form.get('email')?.invalid && form.get('email')?.touched) {
        <span class="erro">E-mail inválido</span>
      }

      <input formControlName="senha" type="password" placeholder="Senha">
      @if (form.get('senha')?.errors?.['minlength'] && form.get('senha')?.touched) {
        <span class="erro">Mínimo 6 caracteres</span>
      }

      <button type="submit" [disabled]="form.invalid">Entrar</button>
    </form>
  \`
})
export class FormularioLogin {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // { email: '...', senha: '...' }
    }
  }
}`,
          tarefa: 'Crie um formulário de cadastro com: nome (obrigatório), email (obrigatório, email válido), senha (min 8 chars), confirmação de senha. Mostre erros em tempo real.'
        },
        {
          id: 'validadores-customizados',
          titulo: 'Validadores Customizados',
          descricao: 'Crie suas próprias regras de validação.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `Os validadores built-in (required, email, minLength...) não cobrem tudo. Você vai precisar criar validações específicas do seu negócio — CPF válido, senha que contém número, campos que devem ser iguais.`,
          codigo: `import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validador de função (síncrono)
export function senhaForte(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value as string;
    if (!valor) return null;  // deixa o "required" tratar o vazio

    const temNumero = /[0-9]/.test(valor);
    const temMaiuscula = /[A-Z]/.test(valor);
    const temEspecial = /[!@#$%]/.test(valor);

    if (!temNumero || !temMaiuscula || !temEspecial) {
      return {
        senhaFraca: {
          temNumero,
          temMaiuscula,
          temEspecial
        }
      };
    }
    return null;  // null = válido
  };
}

// Validador que compara dois campos (cross-field)
export function senhasIguais(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const senha = group.get('senha')?.value;
    const confirmacao = group.get('confirmacaoSenha')?.value;
    return senha === confirmacao ? null : { senhasDiferentes: true };
  };
}

// Uso no FormGroup
form = new FormGroup({
  senha: new FormControl('', [Validators.required, senhaForte()]),
  confirmacaoSenha: new FormControl('', Validators.required),
}, { validators: senhasIguais() });`,
          tarefa: 'Crie um validador customizado que verifica se um CEP tem o formato correto (XXXXX-XXX). Aplique-o a um campo de formulário.'
        },
        {
          id: 'form-array',
          titulo: 'FormArray: Listas Dinâmicas',
          descricao: 'Formulários com número variável de campos.',
          duracao: '20 min',
          tempoEstimado: '45 min',
          conteudo: `FormArray representa uma lista de controles — ideal para formulários onde o usuário pode adicionar ou remover itens: lista de telefones, endereços, ingredientes de receita, participantes de evento.`,
          codigo: `import { FormArray, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-ingredientes',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <h3>Ingredientes</h3>

      <div formArrayName="ingredientes">
        @for (ctrl of ingredientes.controls; track $index; let i = $index) {
          <div>
            <input [formControlName]="i" placeholder="Ingrediente \${i+1}">
            <button type="button" (click)="remover(i)">✕</button>
          </div>
        }
      </div>

      <button type="button" (click)="adicionar()">+ Adicionar ingrediente</button>
      <button type="submit" [disabled]="form.invalid">Salvar receita</button>
    </form>
  \`
})
export class FormIngredientes {
  form = new FormGroup({
    nomeReceita: new FormControl('', Validators.required),
    ingredientes: new FormArray([
      new FormControl('', Validators.required)
    ])
  });

  get ingredientes(): FormArray {
    return this.form.get('ingredientes') as FormArray;
  }

  adicionar() {
    this.ingredientes.push(new FormControl('', Validators.required));
  }

  remover(index: number) {
    if (this.ingredientes.length > 1) {
      this.ingredientes.removeAt(index);
    }
  }

  onSubmit() {
    console.log(this.form.value);
  }
}`,
          dica: 'FormArray.push(), removeAt() e clear() são os métodos principais. Para acessar um controle específico, use .at(index) ou cast para FormControl.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 10: SERVIÇOS E HTTP
    // =====================================================================
    {
      id: 'servicos-di-power',
      titulo: 'Serviços, HTTP e DI',
      descricao: 'Organizando lógica, consumindo APIs e gerenciando o fluxo de dados.',
      icone: '💉',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'injecao-moderna',
          titulo: 'Injeção de Dependência Moderna',
          descricao: 'Usando inject() e serviços root para código limpo.',
          duracao: '15 min',
          tempoEstimado: '30 min',
          conteudo: `Serviços contêm a lógica que não pertence à UI. A Injeção de Dependência é o mecanismo que o Angular usa para fornecer instâncias desses serviços aos componentes automaticamente.

No Angular moderno, usamos a função inject() em vez do constructor.`,
          codigo: `import { Injectable, signal, inject } from '@angular/core';

// Serviço de autenticação
@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuarioLogado = signal<string | null>(null);

  isLogado() {
    return this.usuarioLogado() !== null;
  }

  login(nome: string) {
    this.usuarioLogado.set(nome);
  }

  logout() {
    this.usuarioLogado.set(null);
  }

  get nomeUsuario() {
    return this.usuarioLogado;  // expõe o signal (readonly implicitamente)
  }
}

// Componente usando o serviço com inject()
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    @if (auth.isLogado()) {
      <span>Olá, {{ auth.nomeUsuario()() }}!</span>
      <button (click)="auth.logout()">Sair</button>
    } @else {
      <button (click)="auth.login('Marcos')">Entrar</button>
    }
  \`
})
export class Header {
  protected auth = inject(AuthService);  // inject() em vez de constructor
}`,
          dica: 'providedIn: "root" cria um Singleton — uma única instância para toda a aplicação. Todos os componentes compartilham o mesmo estado.'
        },
        {
          id: 'httpclient',
          titulo: 'HttpClient: Consumindo APIs',
          descricao: 'GET, POST, PUT e DELETE — a base de qualquer aplicação real.',
          duracao: '30 min',
          tempoEstimado: '1h 30min de prática',
          conteudo: `Quase toda aplicação Angular consome uma API. O HttpClient é o serviço do Angular para isso — ele retorna Observables que você pode transformar e assinar.

**Configuração necessária — no app.config.ts:**`,
          codigo: `// app.config.ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient()
  ]
};

// produtos.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private http = inject(HttpClient);
  private readonly API = 'https://api.exemplo.com';

  // GET — buscar todos
  getProdutos() {
    return this.http.get<Produto[]>(\`\${this.API}/produtos\`);
  }

  // GET — buscar um por ID
  getProduto(id: number) {
    return this.http.get<Produto>(\`\${this.API}/produtos/\${id}\`);
  }

  // POST — criar
  criarProduto(produto: Omit<Produto, 'id'>) {
    return this.http.post<Produto>(\`\${this.API}/produtos\`, produto);
  }

  // PUT — atualizar completo
  atualizarProduto(id: number, produto: Produto) {
    return this.http.put<Produto>(\`\${this.API}/produtos/\${id}\`, produto);
  }

  // DELETE — remover
  deletarProduto(id: number) {
    return this.http.delete<void>(\`\${this.API}/produtos/\${id}\`);
  }
}

// Usando no componente com toSignal()
import { toSignal } from '@angular/core/rxjs-interop';

@Component({ /* ... */ })
export class ListaProdutos {
  private service = inject(ProdutosService);

  produtos = toSignal(this.service.getProdutos(), { initialValue: [] });
}`,
          tarefa: 'Crie um serviço que busca usuários da API https://jsonplaceholder.typicode.com/users. Use toSignal() no componente para exibir a lista.',
          linksExternos: [
            { titulo: 'JSONPlaceholder — API para praticar', url: 'https://jsonplaceholder.typicode.com' }
          ]
        },
        {
          id: 'interceptores-http',
          titulo: 'Interceptores: Middleware do HTTP',
          descricao: 'Adicione tokens, logs e retry automático a todas as requisições.',
          duracao: '25 min',
          tempoEstimado: '50 min',
          conteudo: `Interceptores são middleware que interceptam toda requisição HTTP antes de ir e toda resposta ao chegar. São perfeitos para: adicionar token de autenticação, mostrar loading global, logar erros, fazer retry automático.`,
          codigo: `// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

// Interceptor moderno — uma simples função
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  if (token) {
    // Clona a requisição e adiciona o header
    const reqComToken = req.clone({
      headers: req.headers.set('Authorization', \`Bearer \${token}\`)
    });
    return next(reqComToken);
  }

  return next(req);
};

// loading.interceptor.ts
import { tap, finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loading = inject(LoadingService);

  loading.iniciar();
  return next(req).pipe(
    finalize(() => loading.parar())
  );
};

// app.config.ts — registrando os interceptores
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loadingInterceptor])
    )
  ]
};`,
          dica: 'A ordem dos interceptores importa. withInterceptors([A, B]) significa que A processa primeiro na ida, e B processa primeiro na volta (como um sanduíche).'
        },
        {
          id: 'tratamento-erros-http',
          titulo: 'Tratamento de Erros HTTP',
          descricao: 'Lidando com falhas de rede, erros 4xx e 5xx de forma elegante.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `APIs falham. Rede cai. Servidor dá timeout. Uma aplicação profissional trata erros de forma elegante, mostrando feedback útil ao usuário — não apenas "erro desconhecido".`,
          codigo: `import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, retry, timeout } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private http = inject(HttpClient);

  private tratarErro(erro: HttpErrorResponse) {
    if (erro.status === 0) {
      // Erro de rede/cliente
      console.error('Sem conexão:', erro.error);
      return throwError(() => new Error('Sem conexão com a internet.'));
    }

    // Erro do servidor (4xx, 5xx)
    switch (erro.status) {
      case 401: return throwError(() => new Error('Sessão expirada. Faça login novamente.'));
      case 403: return throwError(() => new Error('Você não tem permissão para isso.'));
      case 404: return throwError(() => new Error('Recurso não encontrado.'));
      case 500: return throwError(() => new Error('Erro interno do servidor.'));
      default:  return throwError(() => new Error(\`Erro \${erro.status}: \${erro.message}\`));
    }
  }

  getProdutos() {
    return this.http.get<Produto[]>('/api/produtos').pipe(
      timeout(10000),           // cancela se demorar mais de 10 segundos
      retry(2),                 // tenta até 2 vezes antes de falhar
      catchError(this.tratarErro)
    );
  }
}

// Componente tratando o estado de erro
@Component({ /* ... */ })
export class ListaProdutos {
  private service = inject(ProdutosService);
  erro = signal<string | null>(null);
  produtos = signal<Produto[]>([]);

  carregarProdutos() {
    this.service.getProdutos().subscribe({
      next: (dados) => this.produtos.set(dados),
      error: (err: Error) => this.erro.set(err.message)
    });
  }
}`,
          dica: 'Para erros globais, use um interceptor que escuta todos os erros e mostra um toast/notificação. Assim você não precisa tratar o erro em cada componente individualmente.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 11: DEPLOY E PRODUÇÃO
    // =====================================================================
    {
      id: 'deploy-producao',
      titulo: 'Deploy e Produção',
      descricao: 'Coloque sua aplicação no ar e entregue uma experiência rápida.',
      icone: '🌍',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'ng-build-otimizacoes',
          titulo: 'ng build: Preparando para Produção',
          descricao: 'O que acontece quando você compila e como otimizar o bundle.',
          duracao: '15 min',
          tempoEstimado: '25 min',
          conteudo: `O comando ng build em modo produção transforma seu código TypeScript em arquivos JavaScript otimizados que o navegador entende e executa o mais rápido possível.

**O que o build de produção faz:**
- **Minificação**: remove espaços, comentários, encurta nomes de variáveis
- **Tree-shaking**: remove código que não é usado
- **Code-splitting**: divide o bundle em pedaços (lazy loading)
- **Hashing**: adiciona hash ao nome dos arquivos para cache inteligente`,
          codigo: `# Build de produção (configuração padrão)
ng build

# Analisar o tamanho do bundle
npm install -g @angular/cli source-map-explorer
ng build --source-map
npx source-map-explorer dist/meu-app/browser/*.js

# Saída típica do ng build:
# Initial chunk files:
# main-ABC123.js     ~ 200kB (código da aplicação)
# chunk-DEF456.js    ~ 100kB (Angular core)
# styles-GHI789.css  ~ 15kB

# Lazy chunks (carregados quando necessário):
# admin-JKL012.js    ~ 50kB
# perfil-MNO345.js   ~ 30kB`,
          dica: 'Mantenha o bundle inicial abaixo de 500kB (gzipado). Mais do que isso começa a impactar o carregamento em conexões móveis. Lazy loading é seu melhor amigo aqui.',
          linksExternos: [
            { titulo: 'Angular Build Guide', url: 'https://angular.dev/tools/cli/build' }
          ]
        },
        {
          id: 'deploy-vercel',
          titulo: 'Deploy na Vercel',
          descricao: 'Coloque sua aplicação Angular online em menos de 5 minutos.',
          duracao: '20 min',
          tempoEstimado: '30 min',
          conteudo: `A Vercel é a plataforma mais fácil para fazer deploy de aplicações Angular. Ela integra com o GitHub e faz deploy automático a cada push.

**Este próprio site foi feito deploy aqui.**

**Passos para deploy:**
1. Faça push do projeto para o GitHub
2. Acesse vercel.com e conecte com GitHub
3. Importe o repositório
4. A Vercel detecta Angular automaticamente
5. Clique em Deploy`,
          codigo: `# vercel.json — configuração para SPA Angular
# Crie este arquivo na raiz do projeto
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

# Isso é ESSENCIAL para Angular Router funcionar na Vercel.
# Sem isso, ao acessar /produtos diretamente, retorna 404.

# Variáveis de ambiente na Vercel:
# 1. Acesse Settings > Environment Variables no painel
# 2. Adicione suas variáveis (API_URL, etc.)
# 3. Acesse no Angular via environment.ts

# Para forçar um redeploy:
git commit --allow-empty -m "chore: trigger deploy"
git push`,
          tarefa: 'Crie um arquivo vercel.json na raiz do projeto com o rewrite configurado. Faça push e verifique se a navegação direta para /modulos funciona.',
          dica: 'Cada PR no GitHub cria um preview de deploy automático na Vercel. Isso é ótimo para revisar mudanças antes de mesclar na main.',
          linksExternos: [
            { titulo: 'Vercel para Angular', url: 'https://vercel.com/guides/deploying-angular-with-vercel' }
          ]
        },
        {
          id: 'environment-variables',
          titulo: 'Variáveis de Ambiente',
          descricao: 'Separando configurações de desenvolvimento e produção.',
          duracao: '15 min',
          tempoEstimado: '25 min',
          conteudo: `Nunca coloque URLs de API, chaves e senhas hardcoded no código. Use variáveis de ambiente para separar configurações por ambiente.`,
          codigo: `// src/environments/environment.ts (desenvolvimento)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Meu App (Dev)',
};

// src/environments/environment.prod.ts (produção)
export const environment = {
  production: true,
  apiUrl: 'https://api.meuapp.com',
  appName: 'Meu App',
};

// angular.json — a mágica acontece aqui
// O CLI substitui o arquivo automaticamente no build de produção
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ]
  }
}

// Usando no serviço
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;  // automaticamente correto por ambiente
}`,
          dica: 'Adicione src/environments/environment.prod.ts ao .gitignore se ele contiver dados sensíveis. Na Vercel/CI, injete essas variáveis via painel de configuração.'
        }
      ]
    },

    // =====================================================================
    // MÓDULO 12: IA, CARREIRA E SOFT SKILLS
    // =====================================================================
    {
      id: 'ia-e-carreira',
      titulo: 'IA, Carreira e Soft Skills',
      descricao: 'Usando IA como aliada, construindo portfólio e se preparando para entrevistas.',
      icone: '👔',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'terminologia-mercado',
          titulo: 'Vocabulário do Mercado de Tech',
          descricao: 'Jira, Kanban, PR, Sprint — os termos que você ouvirá todo dia.',
          duracao: '15 min',
          tempoEstimado: 'Leitura leve',
          conteudo: `No ambiente de trabalho, você ouvirá termos que parecem intimidadores mas são simples. Conhecê-los evita que você fique perdido nas primeiras reuniões.

**Gestão de Projetos:**
- **Jira / Trello**: onde as tarefas nascem e morrem
- **Sprint**: ciclo de trabalho (geralmente 2 semanas)
- **Daily**: reunião diária de 15 min — ontem/hoje/bloqueios
- **Kanban**: quadro visual To Do → Doing → Done
- **Story Points**: estimativa de esforço (não tempo!)
- **Backlog**: lista priorizada de tudo que precisa ser feito

**Git e Código:**
- **PR (Pull Request)**: pedido para mesclar seu código no repositório
- **Code Review**: colegas revisam seu código antes de aprovar
- **CI/CD**: automação de testes e deploy a cada push
- **Branch**: ramificação do código para trabalhar isolado
- **Merge / Rebase**: formas de unir branches

**Soft Skills que impressionam:**
- Comunicar impedimentos cedo (não deixar pra última hora)
- Documentar decisões técnicas (o porquê, não só o como)
- Pedir revisão com contexto ("tentei X, erro Y, vi Z na doc")`,
          tarefa: 'Explore o Glossário deste site. Para cada termo, tente explicar em voz alta como se estivesse num interview ou numa reunião.'
        },
        {
          id: 'portfolio-dev',
          titulo: 'Construindo seu Portfólio como Dev',
          descricao: 'O que realmente importa no seu GitHub e README.',
          duracao: '20 min',
          tempoEstimado: '1h a 2h de trabalho prático',
          conteudo: `O portfólio é o seu cartão de visita no mercado tech. Não precisa ser perfeito; precisa mostrar que você **construiu coisas reais** e sabe **comunicar** o que fez.

**O que recrutadores procuram no GitHub:**
1. Commits regulares (mostra consistência)
2. READMEs bem escritos (mostra comunicação)
3. Projetos com propósito claro
4. Código limpo e organizado

**Estrutura de um bom README:**`,
          codigo: `# Nome do Projeto

Descrição curta e direta: o que é e por que você construiu.

## Tecnologias
- Angular 20, TypeScript 5, CSS custom properties

## Funcionalidades
- [x] Autenticação com JWT
- [x] CRUD de produtos
- [ ] Pagamento (em desenvolvimento)

## Como rodar localmente
\`\`\`bash
git clone https://github.com/seu-usuario/projeto
npm install
ng serve
\`\`\`

## Aprendizados
O que você aprendeu construindo este projeto.
(Isso diferencia iniciantes que pensam dos que copiam)

## Deploy
Link: https://meu-projeto.vercel.app`,
          dica: 'Qualidade > Quantidade. Três projetos bem documentados com READMEs claros valem mais que dez repositórios sem descrição. Pense no recrutador: ele tem 30 segundos.'
        },
        {
          id: 'papo-com-devs',
          titulo: 'Conversando com outros Devs',
          descricao: 'Como pedir ajuda de forma eficiente.',
          duracao: '10 min',
          tempoEstimado: 'Para toda a carreira',
          conteudo: `Desenvolvedores sêniores adoram ajudar quem demonstra que tentou. Antes de perguntar "não funciona", diga: "Tentei fazer X usando a técnica Y, mas recebi o erro Z. Já pesquisei na documentação e vi que...".

**Fórmula para pedir ajuda tecnicamente:**
1. O que você está tentando fazer
2. O que você tentou
3. O que aconteceu (erro, resultado inesperado)
4. O que você pesquisou/leu

**Quando perguntar ao Claude:**
Mesma fórmula. "Claude, estou tentando [objetivo] em Angular. Tentei [abordagem], mas recebo [erro]. O código está assim: [cole o trecho]. O que pode estar errado?"

**Quando perguntar a colegas:**
Mesma fórmula, mas pesquise no mínimo 10 minutos antes. Usar Google, Stack Overflow e a documentação oficial é esperado de qualquer desenvolvedor.`,
          dica: 'O Claude pode ajudar você a formular essas perguntas. Tente: "Claude, como eu explico este problema técnico para o meu tech lead de forma clara e profissional?"'
        },
        {
          id: 'ia-no-fluxo',
          titulo: 'IA no Fluxo de Trabalho Real',
          descricao: 'Como usar Claude, Copilot e outras IAs sem criar dependência.',
          duracao: '20 min',
          tempoEstimado: '30 min de reflexão prática',
          conteudo: `IA é uma ferramenta, não uma muleta. Desenvolvedores que a usam bem se tornam mais produtivos. Os que se tornam dependentes param de crescer.

**Onde a IA brilha:**
- Gerar boilerplate repetitivo (estrutura de componente, CRUD básico)
- Explicar conceitos que você leu mas não entendeu
- Revisar código em busca de bugs e melhorias
- Traduzir mensagens de erro técnicas
- Sugerir nome de variáveis e funções

**Onde a IA falha (e você deve pensar sozinho):**
- Arquitetura da aplicação (ela não conhece seu contexto de negócio)
- Decisões de tecnologia (pode sugerir algo desatualizado)
- Debugging de problemas sutis de estado
- Código de segurança (sempre revise)

**Claude Code CLI — comandos úteis no terminal:**`,
          codigo: `# Iniciar sessão na pasta do projeto
cd meu-projeto
claude

# Pedir revisão de arquivo específico
# "Revise o arquivo src/app/services/auth.ts em busca de problemas"

# Pedir explicação de erro
# "Estou recebendo 'NG0100: ExpressionChangedAfterItHasBeenCheckedError'.
#  Aqui está o componente: [código]. Por que isso acontece?"

# Pedir geração de teste
# "Crie testes unitários para o serviço ProdutosService"

# Claude Code tem "Play Mode" que sugere mudanças
# e você aprova ou rejeita cada uma — excelente para aprender`,
          tarefa: 'Pegue um componente que você escreveu. Peça ao Claude Code para revisar e explicar cada sugestão. Não aceite mudanças que você não entendeu.',
          dica: 'Desenvolvedores sêniores não têm vergonha de usar IA. O que os diferencia é saber **avaliar** o que a IA retorna — não aceitar cegamente.'
        },
      ]
    },
    // =====================================================================
    // MÓDULO 13: O FUTURO DO ANGULAR E IA
    // =====================================================================
    {
      id: 'futuro-angular-ia',
      titulo: 'O Futuro do Angular e IA',
      descricao: 'Zoneless, Signals avançados e como dominar a IA para construir aplicações impossíveis.',
      icone: '🔮',
      nivel: 'avancado',
      aulas: [
        {
          id: 'zoneless-performance',
          titulo: 'Angular Zoneless: Performance Extrema',
          descricao: 'Removendo o Zone.js para uma aplicação mais leve e rápida.',
          duracao: '20 min',
          tempoEstimado: '40 min',
          conteudo: `O Zone.js foi a alma do Angular por anos, mas ele tem um custo: interceptar todos os eventos assíncronos. No Angular moderno, podemos ser "Zoneless".
          
**Vantagens do Zoneless:**
- Bundle menor (menos ~30kb)
- Rendering mais rápido
- Depuração de stack traces muito mais clara
          
**Como habilitar no app.config.ts:**`,
          codigo: `export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding())
  ]
};`,
          dica: 'Zoneless exige que você use Signals ou ChangeDetectorRef.markForCheck() para notificar o Angular sobre mudanças. Signals são a forma recomendada.'
        },
        {
          id: 'signals-avancados',
          titulo: 'Signals Avançados: LinkedSignal e Resource',
          descricao: 'Novas APIs do Angular 19 para gestão de estado e dados assíncronos.',
          duracao: '25 min',
          tempoEstimado: '1 hora',
          conteudo: `Signals evoluíram. Agora temos ferramentas para lidar com sincronização manual de estados e buscas assíncronas nativas.
          
**LinkedSignal:** Resolve o problema de resetar um estado quando sua fonte muda.
          
**Resource:** A nova forma oficial de buscar dados assíncronos (substituindo padrões complexos de HttpClient + toSignal em muitos casos).`,
          codigo: `// Exemplo de Resource (Angular 19+)
const userResource = resource({
  request: () => ({ id: userId() }),
  loader: ({ request }) => fetch(\`/api/users/\${request.id}\`).then(r => r.json())
});

// No template
@if (userResource.isLoading()) { <p>Carregando...</p> }
@else { <h1>{{ userResource.value()?.name }}</h1> }`,
          dica: 'O Resource simplifica drasticamente o tratamento de estados de carregamento e erro sem precisar de Signal intermediário.'
        },
        {
          id: 'prompt-engineering-devs',
          titulo: 'Prompt Engineering para Devs',
          descricao: 'Como falar com a IA para obter arquiteturas sólidas, não apenas snippets.',
          duracao: '30 min',
          tempoEstimado: '1 hora de prática',
          conteudo: `Prompt engineering não é sobre "palavras mágicas", é sobre **contexto** e **restrições**.
          
**A Técnica do Contexto Completo:**
Não peça apenas "crie um componente". Peça: "Crie um componente de login em Angular 19, usando Signals, CSS Vanilla, seguindo o padrão BEM e com validação reativa. O componente será usado em um fluxo de checkout."
          
**Iteração Assistida:**
Use a IA para refatorar. "Este código funciona, mas como posso torná-lo mais performático usando as novas APIs de Signals?"`,
          tarefa: 'Use o Claude para planejar uma funcionalidade complexa (ex: sistema de chat) definindo primeiro as interfaces e a arquitetura de serviços antes de pedir qualquer código de componente.',
          dica: 'Sempre peça para a IA explicar o "porquê" de uma decisão arquitetural. Isso treina seu senso crítico.'
        }
      ]
    }
  ];

  getModulos(): Modulo[] {
    return this.modulos;
  }

  getModuloPorId(id: string): Modulo | undefined {
    return this.modulos.find(m => m.id === id);
  }

  getAulaPorId(id: string): { aula: Aula; modulo: Modulo } | undefined {
    for (const modulo of this.modulos) {
      const aula = modulo.aulas.find(a => a.id === id);
      if (aula) return { aula, modulo };
    }
    return undefined;
  }
}
