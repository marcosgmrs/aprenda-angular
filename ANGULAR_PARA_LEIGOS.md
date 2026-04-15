# 🅰️ Angular na Prática — Guia para Leigos
> Tudo que aprendi sobre Angular, explicado em português simples.
> Atualizado com técnicas do estudos-angular, mineralogia, aprenda-angular e vibecoding.

---

## O que é Angular, afinal?

Angular é um **framework** — uma estrutura completa para construir aplicações web. Em vez de uma página HTML simples, você constrói um app organizado em peças chamadas **componentes**, cada uma responsável por uma parte da tela.

Pensa assim: se um site fosse uma casa, o Angular seria a planta arquitetônica, as regras de construção e as ferramentas — tudo junto.

---

## 🧱 Componentes

**O que é:** A peça fundamental do Angular. Cada parte da tela — navbar, card, formulário, página inteira — é um componente.

**Para leigo:** É como um bloco de LEGO. Você cria o bloco uma vez e usa onde quiser, quantas vezes quiser.

**Resultado ao usar:** A tela fica dividida em partes independentes. Mudar um componente não quebra os outros.

**Exemplo de uso:** Um card de produto usado 50 vezes numa listagem — você escreve o código uma vez e reutiliza.

```typescript
@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  nome = 'Tênis Nike'
  preco = 299.90
}
```

```html
<!-- Usando o componente em qualquer lugar -->
<app-card-produto />
```

---

## 🔗 Interpolação `{{ }}`

**O que é:** Exibir valores do TypeScript dentro do HTML.

**Para leigo:** É como uma janelinha no HTML que mostra o que está guardado no código. Se o valor mudar, a janela atualiza sozinha.

**Resultado ao usar:** A tela mostra dados dinâmicos sem precisar manipular o HTML manualmente.

**Exemplo de uso:** Mostrar o nome do usuário logado, o preço de um produto, o total de itens no carrinho.

```typescript
export class Perfil {
  nome = 'Marcos'
  cidade = 'São Gonçalo'
}
```

```html
<h1>Olá, {{ nome }}!</h1>
<p>Você é de {{ cidade }}.</p>
```

---

## 📥 Property Binding `[propriedade]`

**O que é:** Passar um valor dinâmico para uma propriedade HTML ou de um componente.

**Para leigo:** Em vez de escrever um valor fixo no HTML, você conecta uma variável do código. O HTML fica "vivo".

**Resultado ao usar:** A propriedade HTML atualiza automaticamente quando o valor no código muda.

**Exemplo de uso:** Mudar a cor de um elemento, desabilitar um botão, definir o src de uma imagem.

```typescript
export class Produto {
  imagemUrl = 'https://site.com/foto.jpg'
  esgotado = true
}
```

```html
<img [src]="imagemUrl" alt="Produto">
<button [disabled]="esgotado">Comprar</button>
```

---

## 🖱️ Event Binding `(evento)`

**O que é:** Reagir a ações do usuário — cliques, digitação, envio de formulário.

**Para leigo:** É o Angular "ouvindo" o que o usuário faz. Quando o usuário clica, o código reage.

**Resultado ao usar:** A página responde às ações do usuário sem recarregar.

**Exemplo de uso:** Botão de curtir, contador de cliques, envio de formulário.

```typescript
export class Contador {
  total = 0

  incrementar(): void {
    this.total++
  }
}
```

```html
<p>Cliques: {{ total }}</p>
<button (click)="incrementar()">Clique aqui</button>
```

---

## 🔄 Two-way Binding `[(ngModel)]`

**O que é:** Sincronização nos dois sentidos — o código atualiza o HTML e o HTML atualiza o código ao mesmo tempo.

**Para leigo:** É como um espelho duplo. O que você digita no campo aparece instantaneamente em outro lugar da tela, e o código também sabe o que foi digitado.

**Resultado ao usar:** Campos de formulário sincronizados com variáveis em tempo real.

**Exemplo de uso:** Campo de busca que filtra uma lista enquanto o usuário digita.

```typescript
export class Busca {
  termoBusca = ''
}
```

```html
<input [(ngModel)]="termoBusca" placeholder="Buscar...">
<p>Você digitou: {{ termoBusca }}</p>
```

---

## 📤 @Input

**O que é:** Passar dados de um componente pai para um componente filho.

**Para leigo:** É como passar um ingrediente para uma receita. O componente filho recebe o dado de fora e usa internamente.

**Resultado ao usar:** Componentes reutilizáveis que funcionam com dados diferentes a cada uso.

**Exemplo de uso:** Um card de usuário que recebe nome, foto e cargo como parâmetros.

```typescript
export class CardUsuario {
  @Input() nome = ''
  @Input() cargo = ''
}
```

```html
<!-- Pai passando dados para o filho -->
<app-card-usuario nome="Marcos" cargo="Dev Angular" />
```

---

## 📥 `input()` — Signal Input (Angular 17+)

**O que é:** A versão moderna e reativa do `@Input()`, usando Signals.

**Para leigo:** Mesma ideia do `@Input()`, mas o Angular detecta mudanças muito mais eficientemente. É o upgrade do `@Input()`.

**Resultado ao usar:** Melhor performance e código mais limpo em componentes que recebem dados.

**Exemplo de uso:** Qualquer componente reutilizável — cards, listas, formulários.

```typescript
import { input } from '@angular/core'

export class AulaCard {
  aula = input.required<{ titulo: string, duracao: string }>()
}
```

```html
<h3>{{ aula().titulo }}</h3>
<span>{{ aula().duracao }}</span>
```

---

## 🔁 @for

**O que é:** Repetir um elemento HTML para cada item de uma lista.

**Para leigo:** Em vez de copiar e colar o mesmo bloco HTML 10 vezes, você diz "repita isso para cada item da lista" e o Angular faz o trabalho.

**Resultado ao usar:** Listas dinâmicas que se atualizam automaticamente quando os dados mudam.

**Exemplo de uso:** Lista de produtos, cards de usuários, itens de um menu.

```typescript
export class Catalogo {
  produtos = ['Tênis', 'Camiseta', 'Boné', 'Mochila']
}
```

```html
@for (produto of produtos; track produto) {
  <div class="card">{{ produto }}</div>
}
```

---

## ❓ @if / @else

**O que é:** Mostrar ou esconder partes da tela baseado em uma condição.

**Para leigo:** É como um semáforo no HTML. Se a condição for verdadeira, mostra. Se for falsa, esconde (ou mostra outra coisa).

**Resultado ao usar:** A interface se adapta ao estado da aplicação — usuário logado vê uma coisa, deslogado vê outra.

**Exemplo de uso:** Mostrar botão de "Sair" apenas para usuários logados, mensagem de erro quando algo falha.

```html
@if (usuarioLogado) {
  <button (click)="sair()">Sair</button>
} @else {
  <a routerLink="/login">Entrar</a>
}
```

---

## ⚡ Signals — `signal()`

**O que é:** Uma forma reativa de guardar valores. Quando o valor muda, tudo que depende dele atualiza automaticamente.

**Para leigo:** É como uma variável que "avisa" o Angular quando muda. O Angular atualiza a tela automaticamente, sem precisar fazer nada manual.

**Resultado ao usar:** Performance melhor e código mais simples do que usar Observables para estado local.

**Exemplo de uso:** Contador, lista de itens, estado de carregamento, usuário atual.

```typescript
import { signal } from '@angular/core'

export class App {
  contador = signal(0)
  nome = signal('Marcos')

  incrementar(): void {
    this.contador.set(this.contador() + 1)
    // Ou: this.contador.update(v => v + 1)
  }
}
```

```html
<p>{{ contador() }}</p>  <!-- parênteses porque signal é uma função -->
<button (click)="incrementar()">+1</button>
```

---

## 🧮 `computed()` — Valores Calculados

**O que é:** Um Signal que é calculado automaticamente a partir de outros Signals. Recalcula sozinho quando as dependências mudam.

**Para leigo:** É uma conta que se refaz sozinha. Se os números que ela usa mudarem, o resultado atualiza sem você fazer nada.

**Resultado ao usar:** Dados derivados sempre consistentes, sem necessidade de atualizar manualmente.

**Exemplo de uso:** Total de um carrinho, próxima aula de um curso, nome completo a partir de nome e sobrenome.

```typescript
import { signal, computed } from '@angular/core'

export class Carrinho {
  itens = signal([
    { nome: 'Tênis', preco: 200 },
    { nome: 'Mochila', preco: 150 }
  ])

  total = computed(() =>
    this.itens().reduce((soma, item) => soma + item.preco, 0)
  )
}
```

```html
<p>Total: R$ {{ total() }}</p>
<!-- Atualiza automaticamente quando itens() muda -->
```

---

## 🛣️ Rotas

**O que é:** O sistema de navegação do Angular. Define qual componente aparece para cada endereço (URL).

**Para leigo:** É como um mapa do site. Quando o usuário vai para `/sobre`, o Angular sabe que deve mostrar o componente Sobre.

**Resultado ao usar:** Aplicação de página única (SPA) com múltiplas "telas" sem recarregar o navegador.

**Exemplo de uso:** Qualquer app com mais de uma página.

```typescript
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'produto/:id', component: ProdutoDetalhe }
]
```

```html
<!-- No template -->
<a routerLink="/sobre">Sobre nós</a>
<router-outlet />  <!-- aqui o componente da rota aparece -->
```

---

## ⚡ Lazy Loading

**O que é:** Carregar componentes de uma rota apenas quando o usuário navegar até ela, não no carregamento inicial.

**Para leigo:** Em vez de carregar o cardápio inteiro quando você entra no restaurante, você só pede o que quer comer. O app fica mais rápido no início.

**Resultado ao usar:** Carregamento inicial do app muito mais rápido, especialmente em apps grandes.

**Exemplo de uso:** Páginas de admin, áreas de perfil, seções de relatórios.

```typescript
export const routes: Routes = [
  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil').then(m => m.Perfil)
  }
]
```

---

## 🔗 `withComponentInputBinding()`

**O que é:** Configuração do roteador que permite injetar parâmetros da URL diretamente como `input()` no componente, sem precisar do `ActivatedRoute`.

**Para leigo:** Em vez de "buscar" o ID da URL com código extra, o Angular entrega direto como um dado do componente. Menos trabalho, mesmo resultado.

**Resultado ao usar:** Código mais limpo e simples para componentes que precisam do ID da rota.

**Exemplo de uso:** Página de detalhe de produto, aula de um curso, perfil de usuário.

```typescript
// Em app.config.ts
provideRouter(routes, withComponentInputBinding())

// No componente — o id vem direto da URL /aula/:id
export class Aula {
  id = input.required<string>()
}
```

---

## 🔍 Resolvers

**O que é:** Busca dados antes da rota abrir. O Angular espera os dados chegarem antes de mostrar a página.

**Para leigo:** É como um garçom que traz o prato antes de você sentar. A página abre já com os dados prontos, sem tela de "Carregando...".

**Resultado ao usar:** Melhor experiência — sem tela vazia ou spinner na abertura da página.

**Exemplo de uso:** Página de perfil que precisa dos dados do usuário, detalhe de produto.

```typescript
export const usuarioResolver: ResolveFn<Usuario> = (route) => {
  return inject(UsuarioService).buscarPorId(route.params['id'])
}

// Na rota:
{ path: 'perfil/:id', component: Perfil, resolve: { usuario: usuarioResolver } }

// No componente:
export class Perfil {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const usuario = this.route.snapshot.data['usuario']
  }
}
```

---

## 🛡️ Guards

**O que é:** Uma verificação que acontece antes de entrar em uma rota. Se a condição não for satisfeita, o Angular bloqueia o acesso.

**Para leigo:** É como um segurança na porta. Antes de deixar entrar, ele verifica se você tem permissão. Sem permissão, você é redirecionado.

**Resultado ao usar:** Páginas protegidas que só usuários autorizados conseguem acessar.

**Exemplo de uso:** Área de admin, página de perfil, checkout de compra.

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const logado = localStorage.getItem('logado') === 'true'

  if (logado) return true

  router.navigate(['/login'])
  return false
}
```

---

## 🚦 Interceptors

**O que é:** Um "intermediário" que intercepta todas as requisições HTTP antes de enviá-las, podendo modificá-las.

**Para leigo:** É como um assistente que verifica e carimba todas as cartas antes de serem enviadas. Você configura uma vez e ele age em todas as requisições automaticamente.

**Resultado ao usar:** Token de autenticação adicionado em todas as requisições sem precisar fazer isso manualmente em cada chamada.

**Exemplo de uso:** Adicionar token de login, tratar erros 401 globalmente, logar todas as requisições.

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token')

  if (token) {
    const reqComToken = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    })
    return next(reqComToken)
  }

  return next(req)
}
```

---

## 📡 HttpClient

**O que é:** O serviço do Angular para fazer requisições HTTP — buscar dados de APIs externas.

**Para leigo:** É o Angular ligando para um servidor na internet e pedindo informações. Funciona como o `fetch` do JavaScript, mas integrado ao sistema do Angular.

**Resultado ao usar:** Dados reais vindos de servidores, APIs e bancos de dados aparecem na tela.

**Exemplo de uso:** Buscar lista de produtos, dados do usuário, clima da cidade.

```typescript
export class ProdutoService {
  constructor(private http: HttpClient) {}

  getProdutos() {
    return this.http.get<Produto[]>('https://api.loja.com/produtos')
  }
}

// No componente:
this.produtoService.getProdutos().subscribe(produtos => {
  this.produtos = produtos
})
```

---

## 🌊 RxJS — Observables

**O que é:** Uma biblioteca de programação reativa. Observable é um fluxo de dados que pode emitir valores ao longo do tempo.

**Para leigo:** Pensa numa torneira. O Observable é a torneira — ela pode ficar aberta jogando água (dados) continuamente. O `subscribe` é você colocando um copo embaixo para coletar.

**Resultado ao usar:** Dados assíncronos (vindos da internet, de eventos) tratados de forma elegante.

**Exemplo de uso:** Busca em tempo real, notificações, atualização automática de dados.

```typescript
// pipe() encadeia transformações no fluxo
this.http.get<Produto[]>(url).pipe(
  map(produtos => produtos.filter(p => p.disponivel)),
  catchError(erro => {
    console.error(erro)
    return of([])  // retorna lista vazia se der erro
  })
).subscribe(produtos => {
  this.produtos = produtos
})
```

---

## 📝 Reactive Forms

**O que é:** Sistema do Angular para gerenciar formulários complexos com validação via código TypeScript.

**Para leigo:** Em vez de controlar o formulário pelo HTML, você cria uma "estrutura" no TypeScript que define cada campo, o valor inicial e as regras de validação. O Angular cuida do resto.

**Resultado ao usar:** Formulários com validação automática, mensagens de erro e controle de estado (válido/inválido).

**Exemplo de uso:** Login, cadastro, formulário de contato, checkout.

```typescript
export class Login {
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  enviar() {
    if (this.formulario.valid) {
      console.log(this.formulario.value)
    }
  }
}
```

```html
<form [formGroup]="formulario" (ngSubmit)="enviar()">
  <input formControlName="email" type="email">
  <input formControlName="senha" type="password">
  <button type="submit" [disabled]="formulario.invalid">Entrar</button>
</form>
```

---

## 🧹 Serviços e Injeção de Dependência

**O que é:** Serviço é uma classe que centraliza lógica e dados. Injeção de dependência é o Angular entregando o serviço automaticamente para quem precisar.

**Para leigo:** O serviço é como um depósito central. Em vez de cada componente guardar seus próprios dados, todos buscam no mesmo lugar. O Angular entrega o depósito para quem pedir, sem você precisar criar manualmente.

**Resultado ao usar:** Dados compartilhados entre componentes, código organizado e sem repetição.

**Exemplo de uso:** Dados do usuário logado, lista de produtos, configurações do app.

```typescript
@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private usuario = signal<Usuario | null>(null)

  getUsuario() { return this.usuario.asReadonly() }
  setUsuario(u: Usuario) { this.usuario.set(u) }
}

// Em qualquer componente:
export class Navbar {
  private usuarioService = inject(UsuarioService)
  usuario = this.usuarioService.getUsuario()
}
```

---

## 🧪 Testes Unitários

**O que é:** Código que testa outro código. Garante que cada peça do app funciona como esperado.

**Para leigo:** É como testar o freio do carro antes de entregar para o cliente. Você escreve um teste que verifica se a função faz o que deveria — se passar, ótimo; se falhar, você sabe antes de chegar ao usuário.

**Resultado ao usar:** Confiança para refatorar código sem medo de quebrar algo, e bugs detectados antes de ir para produção.

**Exemplo de uso:** Testar se um serviço retorna os dados corretos, se um componente é criado sem erros.

```typescript
describe('ProdutoService', () => {
  let service: ProdutoService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ProdutoService)
  })

  it('deve ser criado', () => {
    expect(service).toBeTruthy()
  })

  it('deve retornar lista de produtos', () => {
    const produtos = service.getProdutos()
    expect(produtos.length).toBeGreaterThan(0)
  })
})
```

---

## 🔒 DomSanitizer + `[innerHTML]`

**O que é:** `[innerHTML]` permite renderizar HTML dinâmico no template. O `DomSanitizer` garante que esse HTML não contenha código malicioso.

**Para leigo:** Às vezes você precisa mostrar texto formatado com tags HTML (negrito, código, links). O Angular bloqueia por segurança. O `DomSanitizer` é a forma de dizer "confio nesse conteúdo, pode mostrar".

**Resultado ao usar:** Conteúdo rico (artigos, aulas, documentação) renderizado com formatação correta.

**Exemplo de uso:** Sites de conteúdo, blogs, documentação técnica, sistemas de CMS.

```typescript
import { DomSanitizer } from '@angular/platform-browser'

export class Aula {
  private sanitizer = inject(DomSanitizer)

  get conteudoSeguro() {
    return this.sanitizer.bypassSecurityTrustHtml(this.aula.conteudo)
  }
}
```

```html
<div [innerHTML]="conteudoSeguro"></div>
```

---

## 🎨 `::ng-deep`

**O que é:** Seletor CSS especial que "perfura" o encapsulamento de estilos do Angular para estilizar elementos internos.

**Para leigo:** Normalmente o CSS de um componente só afeta aquele componente. Com `::ng-deep`, você alcança elementos dentro de componentes filhos ou dentro de HTML gerado dinamicamente.

**Resultado ao usar:** Estilos aplicados em conteúdo HTML dinâmico (como o gerado pelo `innerHTML`).

**Exemplo de uso:** Estilizar conteúdo de aulas, customizar componentes de bibliotecas externas.

```css
/* Estiliza tags <code> dentro do conteúdo dinâmico */
::ng-deep .conteudo-aula code {
  background: #1e1e1e;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  color: #79c0ff;
}

::ng-deep .conteudo-aula h3 {
  font-size: 20px;
  margin: 24px 0 12px;
}
```

---

## 🍞 Breadcrumbs Reativos

**O que é:** Trilha de navegação (ex: Home > Módulos > Aula) que atualiza automaticamente conforme o usuário navega.

**Para leigo:** É aquele caminho que aparece no topo de lojas online mostrando onde você está: "Início > Roupas > Camisetas". No Angular, ele se atualiza sozinho quando você muda de página.

**Resultado ao usar:** Usuário sempre sabe onde está dentro do app e pode navegar facilmente de volta.

**Exemplo de uso:** Sites de conteúdo, e-commerces, painéis administrativos, cursos online.

```typescript
export class App {
  breadcrumbs = signal<{label: string, url: string}[]>([])

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs.set(this.construirBreadcrumbs())
    })
  }
}
```

```html
@for (crumb of breadcrumbs(); track crumb.url; let last = $last) {
  @if (!last) {
    <a [routerLink]="crumb.url">{{ crumb.label }}</a>
    <span> > </span>
  } @else {
    <span>{{ crumb.label }}</span>
  }
}
```

---

## 📦 Assets dinâmicos via `/public`

**O que é:** Servir arquivos estáticos (JSON, imagens) diretamente da pasta `/public`, carregados via `HttpClient` sem precisar recompilar o app.

**Para leigo:** É como uma prateleira de arquivos que o app pode pegar a qualquer momento. Você atualiza o arquivo na prateleira e o app usa a versão nova sem precisar reiniciar.

**Resultado ao usar:** Conteúdo dinâmico (glossários, configurações, dados) que pode ser atualizado sem novo deploy.

**Exemplo de uso:** Glossário de termos, configurações de features, lista de perguntas frequentes.

```typescript
// O arquivo fica em: public/assets/glossario.json
export class GlossarioService {
  constructor(private http: HttpClient) {}

  getTermos() {
    return this.http.get<Termo[]>('/assets/glossario.json')
  }
}
```

---

## 📊 Resumo rápido

| Técnica | Para que serve | Nível |
|---|---|---|
| Componentes | Dividir a UI em peças reutilizáveis | Básico |
| Interpolação `{{ }}` | Mostrar dados na tela | Básico |
| Property Binding `[]` | Conectar variáveis a propriedades HTML | Básico |
| Event Binding `()` | Reagir a ações do usuário | Básico |
| Two-way Binding `[()]` | Sincronizar campo com variável | Básico |
| @Input / input() | Passar dados entre componentes | Básico |
| @for | Repetir elementos de uma lista | Básico |
| @if / @else | Mostrar/esconder condicionalmente | Básico |
| Signals signal() | Estado reativo local | Intermediário |
| computed() | Valores calculados automaticamente | Intermediário |
| Rotas | Navegação entre páginas | Intermediário |
| Lazy Loading | Carregar páginas sob demanda | Intermediário |
| withComponentInputBinding | Parâmetros de rota como input() | Intermediário |
| Resolvers | Dados prontos antes da página abrir | Intermediário |
| Guards | Proteger rotas por permissão | Intermediário |
| Interceptors | Modificar todas as requisições HTTP | Intermediário |
| HttpClient | Buscar dados de APIs | Intermediário |
| RxJS | Fluxos de dados assíncronos | Intermediário |
| Reactive Forms | Formulários com validação | Intermediário |
| Serviços | Centralizar lógica e dados | Intermediário |
| Testes unitários | Garantir que o código funciona | Intermediário |
| DomSanitizer + innerHTML | Renderizar HTML dinâmico com segurança | Avançado |
| ::ng-deep | Estilizar conteúdo interno | Avançado |
| Breadcrumbs reativos | Trilha de navegação automática | Avançado |
| Assets via /public | Conteúdo dinâmico sem recompilação | Avançado |
