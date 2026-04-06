import { Injectable } from '@angular/core';

export interface Aula {
  id: string
  titulo: string
  descricao: string
  duracao: string
  conteudo: string
  codigo?: string
  dica?: string
}

export interface Modulo {
  id: string
  titulo: string
  descricao: string
  icone: string
  nivel: 'iniciante' | 'intermediario' | 'avancado'
  aulas: Aula[]
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private modulos: Modulo[] = [
    {
      id: 'fundamentos-web',
      titulo: 'Fundamentos da Web',
      descricao: 'Entenda como a internet funciona, o papel do navegador e os blocos de construção de qualquer página web.',
      icone: '🌐',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'como-web-funciona',
          titulo: 'Como a web funciona',
          descricao: 'O que acontece quando você digita um endereço no navegador.',
          duracao: '10 min',
          conteudo: `Quando você digita "google.com" no navegador e aperta Enter, uma série de eventos acontece em milissegundos.

Primeiro, seu computador pergunta a um servidor DNS: "qual é o endereço IP de google.com?" — como uma lista telefônica da internet.

Depois, seu navegador faz uma requisição HTTP para esse endereço: "me dá o conteúdo dessa página."

O servidor responde com HTML, CSS e JavaScript — os três pilares de qualquer página web.

Seu navegador lê esses arquivos e monta a página que você vê.

Esse ciclo — requisição e resposta — é a base de tudo na web.`,
          dica: 'Abra o DevTools (F12) e clique na aba Network para ver todas as requisições que seu navegador faz ao carregar uma página.'
        },
        {
          id: 'html-moderno',
          titulo: 'HTML moderno em 2026',
          descricao: 'As tags essenciais e as boas práticas do HTML atual.',
          duracao: '20 min',
          conteudo: `HTML é a estrutura de toda página web. Pensa nele como o esqueleto — define o que existe na página, não como ela parece.

Em 2026, HTML semântico é fundamental. Isso significa usar tags que descrevem o significado do conteúdo, não apenas sua aparência.

Em vez de usar div para tudo, use as tags corretas:
- header para o cabeçalho
- nav para navegação  
- main para o conteúdo principal
- section para seções
- article para conteúdo independente
- footer para o rodapé

HTML semântico melhora a acessibilidade, o SEO e a legibilidade do código.`,
          codigo: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Página</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Início</a>
      <a href="/sobre">Sobre</a>
    </nav>
  </header>

  <main>
    <section>
      <h1>Título Principal</h1>
      <p>Conteúdo da página.</p>
    </section>
  </main>

  <footer>
    <p>© 2026 Meu Site</p>
  </footer>
</body>
</html>`,
          dica: 'O atributo lang="pt-BR" no html é importante — diz ao navegador e leitores de tela que o conteúdo está em português brasileiro.'
        }
      ]
    },
    {
      id: 'terminal-git',
      titulo: 'Terminal e Git',
      descricao: 'Domine a linha de comando e o controle de versão — ferramentas indispensáveis para qualquer dev.',
      icone: '⌨️',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'terminal-mac',
          titulo: 'Terminal no Mac',
          descricao: 'Navegue pelo sistema de arquivos usando apenas texto.',
          duracao: '15 min',
          conteudo: `O Terminal é a forma mais direta de dar ordens ao computador. Em vez de clicar em ícones, você digita comandos.

Devs usam o Terminal porque muitas ferramentas simplesmente não têm interface gráfica — o Angular CLI, o Git, o Node.js. Sem Terminal, você não consegue usar essas ferramentas.

Para abrir o Terminal no Mac: Command + Espaço, digita "Terminal", Enter.

Os cinco comandos que você vai usar todo dia:
- pwd — mostra em qual pasta você está
- ls — lista o conteúdo da pasta atual
- cd nome-da-pasta — entra em uma pasta
- cd .. — volta uma pasta acima
- mkdir nome — cria uma nova pasta`,
          codigo: `# Navegação básica
pwd                    # /Users/seunome
ls                     # Desktop Documents Downloads...
cd Desktop             # entra na pasta Desktop
cd meus-projetos       # entra em meus-projetos
cd ..                  # volta para Desktop
mkdir novo-projeto     # cria a pasta novo-projeto
code .                 # abre o VS Code na pasta atual`,
          dica: 'Quando um comando funciona, o Terminal não fala nada — só volta o prompt. Silêncio é sucesso.'
        },
        {
          id: 'git-fundamentos',
          titulo: 'Git — controle de versão',
          descricao: 'Fotografe seu projeto ao longo do tempo e nunca perca trabalho.',
          duracao: '25 min',
          conteudo: `Git é um sistema que fotografa seu projeto ao longo do tempo. Cada fotografia é chamada de commit. Você decide quando tirar cada foto e escreve uma legenda descrevendo o que mudou.

Se algo der errado, você volta para qualquer foto anterior. É como ter um histórico infinito de "desfazer".

O fluxo do dia a dia tem três etapas:
1. git add . — seleciona o que vai na foto
2. git commit -m "o que você fez" — tira a foto com legenda
3. git push — envia a foto para a nuvem (GitHub)

Três comandos. Toda vez. Todo dia.`,
          codigo: `# Configuração inicial (uma vez só)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Iniciando um repositório
git init
git add .
git commit -m "primeiro commit"

# Conectando ao GitHub
git remote add origin https://github.com/usuario/repo.git
git push -u origin main

# Fluxo do dia a dia
git add .
git commit -m "adiciona pagina de contato"
git push`,
          dica: 'Escreva mensagens de commit no imperativo e em português: "adiciona", "corrige", "atualiza" — não "adicionado" ou "adicionando".'
        }
      ]
    },
    {
      id: 'javascript',
      titulo: 'JavaScript',
      descricao: 'A linguagem que dá vida às páginas web — do básico ao que você precisa para o Angular.',
      icone: '☕',
      nivel: 'iniciante',
      aulas: [
        {
          id: 'variaveis-tipos',
          titulo: 'Variáveis e tipos de dados',
          descricao: 'Como guardar e manipular informações no JavaScript.',
          duracao: '20 min',
          conteudo: `Variável é uma caixa com um nome onde você guarda um valor. Em JavaScript moderno, usamos const e let.

const — para valores que não mudam. Use sempre que possível.
let — para valores que podem mudar.
var — forma antiga, evite. Você vai ver em código legado mas não precisa usar.

JavaScript tem alguns tipos básicos de dados:
- String: texto entre aspas — "Olá mundo"
- Number: número — 42 ou 3.14
- Boolean: verdadeiro ou falso — true ou false
- Array: lista de valores — [1, 2, 3]
- Object: conjunto de propriedades — { nome: "Marcos", idade: 30 }`,
          codigo: `// Variáveis
const nome = "Marcos"        // nunca muda
let idade = 30               // pode mudar
idade = 31                   // ok

// Tipos de dados
const texto = "Olá mundo"
const numero = 42
const ativo = true
const lista = ["HTML", "CSS", "JavaScript"]
const pessoa = {
  nome: "Marcos",
  cidade: "São Gonçalo",
  aprendendo: "Angular"
}

// Acessando propriedades do objeto
console.log(pessoa.nome)      // Marcos
console.log(pessoa.cidade)    // São Gonçalo`,
          dica: 'Use const por padrão. Só troque para let quando souber que o valor vai mudar. Isso torna o código mais previsível.'
        }
      ]
    },
    {
      id: 'typescript',
      titulo: 'TypeScript',
      descricao: 'JavaScript com superpoderes — tipos que previnem erros antes do código rodar.',
      icone: '🔷',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'por-que-typescript',
          titulo: 'Por que TypeScript existe',
          descricao: 'O problema que o TypeScript resolve e por que o Angular o usa.',
          duracao: '15 min',
          conteudo: `JavaScript foi criado em 10 dias, em 1995, para fazer coisas simples em páginas web. Hoje ele roda sistemas bancários, redes sociais, ferramentas como o VS Code.

O problema: JavaScript não tem tipos. Isso significa que você pode passar um texto onde deveria ser um número — e o JavaScript não reclama.

Exemplo clássico: somar("2", 3) retorna "23" em vez de 5. O JavaScript simplesmente colou os dois valores como texto. Silenciosamente. Sem aviso.

TypeScript resolve isso adicionando tipos ao JavaScript. Se você tentar passar um texto onde deveria ser um número, o TypeScript avisa antes mesmo de você rodar o código — diretamente no VS Code, com sublinhado vermelho.

Angular é escrito em TypeScript. Para entender Angular de verdade, você precisa entender TypeScript.`,
          codigo: `// JavaScript — sem proteção
function somar(a, b) {
  return a + b
}
console.log(somar("2", 3))   // "23" — errado!

// TypeScript — com proteção
function somar(a: number, b: number): number {
  return a + b
}
console.log(somar("2", 3))   // ERRO antes de rodar!
// Argument of type 'string' is not assignable to type 'number'`,
          dica: 'O TypeScript não roda no navegador — ele é compilado para JavaScript. O Angular cuida dessa compilação automaticamente.'
        }
      ]
    },
    {
      id: 'angular',
      titulo: 'Angular',
      descricao: 'O framework do Google para construir aplicações web modernas, escaláveis e organizadas.',
      icone: '🅰️',
      nivel: 'intermediario',
      aulas: [
        {
          id: 'o-que-e-angular',
          titulo: 'O que é Angular',
          descricao: 'Framework vs biblioteca, componentes e a árvore de componentes.',
          duracao: '20 min',
          conteudo: `Angular é um framework criado pelo Google para construir aplicações web grandes e organizadas. Foi lançado em 2016 e é escrito em TypeScript.

A diferença entre framework e biblioteca é importante:
- Biblioteca: você chama quando precisa. É uma ferramenta.
- Framework: ele chama você. Define a estrutura, as regras, como as peças se encaixam.

O conceito central do Angular é o componente. Uma aplicação Angular é uma árvore de componentes encaixados uns dentro dos outros.

Cada componente tem três partes:
- Template (.html) — o que o usuário vê
- Classe (.ts) — a lógica por trás da tela
- Estilo (.css) — a aparência

Você já sabe HTML, TypeScript e CSS. O Angular organiza essas três coisas que você já conhece numa estrutura padronizada.`,
          codigo: `// Criando um projeto Angular
ng new meu-projeto

// Criando um componente
ng generate component pages/home

// Rodando o servidor de desenvolvimento
ng serve

// Build para produção
ng build`,
          dica: 'ng é o comando do Angular CLI — uma ferramenta de linha de comando que automatiza tarefas repetitivas como criar componentes, serviços e builds.'
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