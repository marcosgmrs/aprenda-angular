# 🔷 TypeScript na Prática — Guia para Leigos
> Tudo que aprendi sobre TypeScript, explicado em português simples.
> Atualizado para quem vem do JavaScript e quer escrever código mais seguro sem complicação.

---

## O que é TypeScript, afinal?

TypeScript é uma versão do JavaScript com **tipagem**. Isso significa que você pode dizer ao código que uma variável deve ser texto, número, lista, objeto e por aí vai.

Pensa assim: se JavaScript é escrever bilhetes à mão, TypeScript é escrever bilhetes com etiquetas. Fica mais claro o que cada coisa deveria ser, e os erros aparecem antes de rodar o programa.

---

## 🏷️ Tipos Básicos

**O que é:** Os tipos mais comuns do TypeScript, como `string`, `number`, `boolean`.

**Para leigo:** É como colar uma etiqueta em cada caixa dizendo o que pode ficar dentro dela. Caixa de texto guarda texto. Caixa de número guarda número.

**Resultado ao usar:** Menos erros bobos, como tentar somar texto com número sem perceber.

**Exemplo de uso:** Nome de usuário, idade, status de login, preço de produto.

```typescript
let nome: string = 'Marcos'
let idade: number = 31
let ativo: boolean = true
```

---

## 📦 Inferência de Tipos

**O que é:** O TypeScript muitas vezes descobre o tipo sozinho sem você precisar escrever.

**Para leigo:** É como alguém vendo que você colocou arroz numa panela e entendendo sozinho que aquilo é comida, sem você precisar explicar.

**Resultado ao usar:** Código mais limpo, sem repetir informação desnecessária.

**Exemplo de uso:** Variáveis simples criadas no dia a dia.

```typescript
let cidade = 'São Paulo'   // TypeScript entende: string
let total = 150            // TypeScript entende: number
let online = false         // TypeScript entende: boolean
```

---

## 🧮 União de Tipos `|`

**O que é:** Permite que uma variável aceite mais de um tipo.

**Para leigo:** É como dizer "essa gaveta pode guardar camiseta ou bermuda". Não é qualquer coisa, mas também não precisa ser só uma opção.

**Resultado ao usar:** Flexibilidade com segurança.

**Exemplo de uso:** ID que pode vir como número ou texto, status que pode ser `null`.

```typescript
let id: string | number

id = 10
id = 'abc-123'
```

---

## ❓ Tipos Opcionais

**O que é:** Um campo ou parâmetro que pode existir ou não.

**Para leigo:** É como um formulário em que alguns campos são obrigatórios e outros são opcionais.

**Resultado ao usar:** Objetos e funções mais realistas, parecidos com dados do mundo real.

**Exemplo de uso:** Usuário que pode ou não ter foto, telefone ou apelido.

```typescript
type Usuario = {
  nome: string
  email: string
  foto?: string
}
```

---

## 🧱 Objetos Tipados

**O que é:** Definir quais propriedades um objeto deve ter e quais tipos cada uma usa.

**Para leigo:** É como uma ficha de cadastro com campos fixos. Se faltar um campo importante ou entrar informação errada, o TypeScript avisa.

**Resultado ao usar:** Objetos padronizados e previsíveis.

**Exemplo de uso:** Produto, usuário, aula, pedido, configurações.

```typescript
let produto: { nome: string; preco: number; estoque: number } = {
  nome: 'Mouse Gamer',
  preco: 199.90,
  estoque: 12
}
```

---

## 📚 Arrays Tipados

**O que é:** Listas em que todos os itens seguem o mesmo tipo.

**Para leigo:** É como uma caixa que só aceita livros, ou só aceita garrafas. Se alguém tentar colocar uma pedra ali, o TypeScript reclama.

**Resultado ao usar:** Listas mais seguras e fáceis de manipular.

**Exemplo de uso:** Lista de nomes, preços, produtos, usuários.

```typescript
let nomes: string[] = ['Ana', 'Carlos', 'Marcos']
let notas: number[] = [8, 9.5, 10]
```

---

## 🧾 Tuplas

**O que é:** Um array com quantidade e ordem de tipos já definidas.

**Para leigo:** É como um combo pronto: primeiro vem a bebida, depois o lanche. A ordem importa.

**Resultado ao usar:** Estruturas curtas com posição fixa e significado claro.

**Exemplo de uso:** Coordenadas, retorno com status e mensagem, pares de chave e valor.

```typescript
let coordenada: [number, number] = [120, 340]
let resposta: [boolean, string] = [true, 'Salvo com sucesso']
```

---

## 🧠 `type`

**O que é:** Criar um apelido para um tipo.

**Para leigo:** Em vez de repetir a mesma descrição gigante várias vezes, você dá um nome curto para ela.

**Resultado ao usar:** Código mais organizado e mais fácil de entender.

**Exemplo de uso:** Tipos de usuário, produto, payload de API.

```typescript
type Produto = {
  id: number
  nome: string
  preco: number
}

const tenis: Produto = {
  id: 1,
  nome: 'Tênis Nike',
  preco: 299.90
}
```

---

## 🧩 `interface`

**O que é:** Outra forma de descrever a estrutura de um objeto.

**Para leigo:** É como um molde. Tudo que seguir aquele molde precisa ter os campos combinados.

**Resultado ao usar:** Padronização entre objetos e classes.

**Exemplo de uso:** Dados vindos da API, contratos entre partes do sistema.

```typescript
interface Usuario {
  id: number
  nome: string
  email: string
}

const usuario: Usuario = {
  id: 1,
  nome: 'Marcos',
  email: 'marcos@email.com'
}
```

---

## ⚙️ Funções Tipadas

**O que é:** Definir o tipo dos parâmetros e do retorno de uma função.

**Para leigo:** É como uma máquina com entrada e saída bem definidas. Se entrar a peça errada, ela nem liga.

**Resultado ao usar:** Funções mais previsíveis e menos sujeitas a uso errado.

**Exemplo de uso:** Somar valores, formatar nomes, calcular total, validar dados.

```typescript
function somar(a: number, b: number): number {
  return a + b
}

function saudacao(nome: string): string {
  return `Olá, ${nome}!`
}
```

---

## 🚫 `void`

**O que é:** Tipo usado em funções que não retornam nada.

**Para leigo:** A função faz um trabalho, mas não entrega uma caixinha de volta.

**Resultado ao usar:** Fica claro que a função serve para executar uma ação, não para produzir um valor.

**Exemplo de uso:** Logs, alertas, funções de clique, salvar dados.

```typescript
function mostrarMensagem(texto: string): void {
  console.log(texto)
}
```

---

## 🕳️ `any`

**O que é:** Um tipo que aceita qualquer coisa.

**Para leigo:** É a gaveta da bagunça. Cabe tudo, mas depois fica difícil achar e organizar.

**Resultado ao usar:** Dá liberdade, mas perde a principal proteção do TypeScript.

**Exemplo de uso:** Dados temporários ou migração de código antigo.

```typescript
let valor: any = 'oi'
valor = 10
valor = { ativo: true }
```

---

## 🛟 `unknown`

**O que é:** Um tipo para valores desconhecidos, mas com mais segurança que `any`.

**Para leigo:** Você recebeu uma caixa fechada. Sabe que tem algo dentro, mas precisa abrir e conferir antes de usar.

**Resultado ao usar:** Segurança maior ao lidar com dados externos.

**Exemplo de uso:** Respostas de API, dados vindos de `JSON.parse`, erros genéricos.

```typescript
let dado: unknown = 'Marcos'

if (typeof dado === 'string') {
  console.log(dado.toUpperCase())
}
```

---

## 🔍 Narrowing

**O que é:** O TypeScript refinando um tipo depois de uma checagem.

**Para leigo:** Primeiro você sabe que uma sacola tem fruta ou legume. Quando olha dentro e vê uma maçã, passa a saber exatamente o que é.

**Resultado ao usar:** Você consegue usar o valor com segurança depois de validar.

**Exemplo de uso:** Checar se um valor é string, número, array ou objeto.

```typescript
function imprimir(valor: string | number) {
  if (typeof valor === 'string') {
    console.log(valor.toUpperCase())
  } else {
    console.log(valor.toFixed(2))
  }
}
```

---

## 🏃 Enum

**O que é:** Um conjunto fechado de opções nomeadas.

**Para leigo:** É como um botão com poucas posições possíveis: ligado, desligado ou pausa. Não vale inventar uma quarta opção do nada.

**Resultado ao usar:** Valores padronizados e mais legíveis.

**Exemplo de uso:** Status de pedido, nível de acesso, situação de pagamento.

```typescript
enum StatusPedido {
  Pendente = 'PENDENTE',
  Pago = 'PAGO',
  Cancelado = 'CANCELADO'
}

let statusAtual: StatusPedido = StatusPedido.Pago
```

---

## 🧠 Literal Types

**O que é:** Restringir um valor a textos ou números exatos.

**Para leigo:** Em vez de aceitar qualquer cor, você diz: só pode ser vermelho, azul ou verde.

**Resultado ao usar:** Menos chance de erro por digitação e regras mais claras.

**Exemplo de uso:** Tema do app, tamanho de botão, status de requisição.

```typescript
type Tema = 'claro' | 'escuro'

let temaAtual: Tema = 'claro'
```

---

## 🧰 Generics

**O que é:** Criar funções, tipos ou classes reaproveitáveis que funcionam com vários tipos.

**Para leigo:** É como um molde ajustável. Você usa o mesmo molde, mas adapta para bolo, pudim ou torta.

**Resultado ao usar:** Reutilização sem perder segurança de tipos.

**Exemplo de uso:** Funções utilitárias, respostas de API, listas e serviços genéricos.

```typescript
function primeiroItem<T>(lista: T[]): T | undefined {
  return lista[0]
}

const primeiroNome = primeiroItem<string>(['Ana', 'Carlos', 'João'])
const primeiroNumero = primeiroItem<number>([10, 20, 30])
```

---

## 🧪 `readonly`

**O que é:** Impede que uma propriedade seja alterada depois de criada.

**Para leigo:** É como escrever com tinta permanente. Depois que definiu, não dá para apagar.

**Resultado ao usar:** Mais proteção para dados que não deveriam mudar.

**Exemplo de uso:** ID de usuário, data de criação, configurações fixas.

```typescript
type Config = {
  readonly apiUrl: string
}

const config: Config = {
  apiUrl: 'https://api.site.com'
}
```

---

## 🏛️ Classes

**O que é:** Um molde para criar objetos com propriedades e métodos.

**Para leigo:** É como a planta de uma casa. A planta define quartos, portas e janelas. Cada casa construída a partir dela segue esse padrão.

**Resultado ao usar:** Organização melhor para objetos com comportamento próprio.

**Exemplo de uso:** Usuário, carrinho, produto, serviço de domínio.

```typescript
class Produto {
  nome: string
  preco: number

  constructor(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco
  }

  exibirPreco(): string {
    return `R$ ${this.preco}`
  }
}
```

---

## 🔒 `public`, `private` e `protected`

**O que é:** Modificadores de acesso para controlar quem pode usar cada parte da classe.

**Para leigo:** É como uma casa com sala, quarto e cofre. A sala é pública, o quarto é restrito, o cofre é mais protegido ainda.

**Resultado ao usar:** Encapsulamento e menos chance de mexer onde não deveria.

**Exemplo de uso:** Esconder detalhes internos de uma classe.

```typescript
class ContaBancaria {
  public titular: string
  private saldo: number

  constructor(titular: string, saldo: number) {
    this.titular = titular
    this.saldo = saldo
  }

  verSaldo(): number {
    return this.saldo
  }
}
```

---

## 🧬 Herança

**O que é:** Uma classe podendo reaproveitar características de outra.

**Para leigo:** É como um filho herdando traços do pai, mas com características próprias também.

**Resultado ao usar:** Reaproveitamento de código em estruturas parecidas.

**Exemplo de uso:** `Admin` herdando de `Usuario`, `Cachorro` herdando de `Animal`.

```typescript
class Usuario {
  constructor(public nome: string) {}
}

class Admin extends Usuario {
  acessarPainel(): string {
    return `${this.nome} acessou o painel`
  }
}
```

---

## 🤝 Implementando Interface

**O que é:** Fazer uma classe seguir o contrato de uma interface.

**Para leigo:** A interface é a lista de obrigações. A classe assina embaixo dizendo "vou cumprir isso".

**Resultado ao usar:** Classes consistentes e padronizadas.

**Exemplo de uso:** Serviços, repositórios, adaptadores.

```typescript
interface Autenticavel {
  login(email: string, senha: string): boolean
}

class AuthService implements Autenticavel {
  login(email: string, senha: string): boolean {
    return email === 'admin@email.com' && senha === '123456'
  }
}
```

---

## 🗺️ `Record`

**O que é:** Um tipo utilitário para criar objetos com chaves padronizadas.

**Para leigo:** É como uma tabela em que você já sabe quais serão as colunas.

**Resultado ao usar:** Objetos mais organizados quando as chaves seguem uma regra.

**Exemplo de uso:** Dicionários, mapas de status, configuração por categoria.

```typescript
type Perfil = 'admin' | 'editor' | 'visitante'

const permissoes: Record<Perfil, string[]> = {
  admin: ['criar', 'editar', 'apagar'],
  editor: ['criar', 'editar'],
  visitante: ['ler']
}
```

---

## ✂️ `Pick` e `Omit`

**O que é:** Tipos utilitários para pegar só algumas propriedades ou remover algumas propriedades.

**Para leigo:** É como tirar uma cópia de um formulário usando só os campos que interessam.

**Resultado ao usar:** Reaproveitamento de tipos sem duplicar estrutura.

**Exemplo de uso:** Criar payloads menores para tela, formulário ou API.

```typescript
type Usuario = {
  id: number
  nome: string
  email: string
  senha: string
}

type UsuarioPublico = Omit<Usuario, 'senha'>
type UsuarioResumo = Pick<Usuario, 'id' | 'nome'>
```

---

## 🧼 `Partial`

**O que é:** Transformar todas as propriedades de um tipo em opcionais.

**Para leigo:** É como um formulário de edição em que você não precisa preencher tudo de novo, só o que vai mudar.

**Resultado ao usar:** Atualizações parciais com menos repetição.

**Exemplo de uso:** Editar perfil, atualizar configurações, patch de API.

```typescript
type Produto = {
  nome: string
  preco: number
  estoque: number
}

function atualizarProduto(dados: Partial<Produto>) {
  console.log(dados)
}
```

---

## 📥 Tipando retorno de API

**O que é:** Definir o formato esperado de dados que vêm do servidor.

**Para leigo:** Antes de abrir uma encomenda, você já sabe o que deveria vir dentro da caixa.

**Resultado ao usar:** Menos adivinhação ao consumir dados externos.

**Exemplo de uso:** Buscar usuários, produtos, pedidos, módulos de curso.

```typescript
type ApiResponse<T> = {
  data: T
  success: boolean
}

type Produto = {
  id: number
  nome: string
}

const resposta: ApiResponse<Produto[]> = {
  data: [
    { id: 1, nome: 'Teclado' }
  ],
  success: true
}
```

---

## ⚠️ Type Assertion `as`

**O que é:** Dizer ao TypeScript "confia em mim, isso aqui é desse tipo".

**Para leigo:** É como olhar uma embalagem fechada e afirmar o que tem dentro porque você mesmo colocou.

**Resultado ao usar:** Resolve alguns casos específicos, mas exige cuidado.

**Exemplo de uso:** Elementos do DOM, integrações antigas, bibliotecas sem tipagem boa.

```typescript
const input = document.querySelector('#email') as HTMLInputElement
console.log(input.value)
```

---

## 🛑 `null` e `undefined`

**O que é:** Valores que representam ausência de valor.

**Para leigo:** `undefined` é quando ninguém colocou nada. `null` é quando alguém colocou explicitamente "vazio".

**Resultado ao usar:** Você passa a tratar ausência de dados de forma consciente.

**Exemplo de uso:** Usuário não logado, resposta ainda não carregada, campo opcional.

```typescript
let usuarioAtual: string | null = null

usuarioAtual = 'Marcos'
usuarioAtual = null
```

---

## 🧯 Optional Chaining `?.`

**O que é:** Acessar propriedades de forma segura sem quebrar se algo for `null` ou `undefined`.

**Para leigo:** É como subir uma escada verificando se o próximo degrau existe antes de pisar.

**Resultado ao usar:** Menos erros em tempo de execução.

**Exemplo de uso:** Dados de API incompletos, objetos aninhados, usuário opcional.

```typescript
type Usuario = {
  nome: string
  endereco?: {
    cidade: string
  }
}

const usuario: Usuario = { nome: 'Ana' }

console.log(usuario.endereco?.cidade)
```

---

## 🎯 Resumo rápido

| Técnica | Para que serve | Nível |
|---|---|---|
| Tipos básicos | Definir texto, número, boolean etc. | Básico |
| Inferência de tipos | Deixar o TypeScript deduzir o tipo | Básico |
| União de tipos | Permitir mais de um tipo possível | Básico |
| Tipos opcionais | Campos que podem ou não existir | Básico |
| Objetos tipados | Padronizar estrutura de objetos | Básico |
| Arrays tipados | Garantir listas consistentes | Básico |
| Tuplas | Arrays com posição e tipo fixos | Básico |
| type | Criar apelidos para tipos | Básico |
| interface | Definir contratos de objetos | Básico |
| Funções tipadas | Tipar parâmetros e retorno | Básico |
| void | Indicar que a função não retorna valor | Básico |
| any | Aceitar qualquer coisa sem proteção | Básico |
| unknown | Trabalhar com tipo desconhecido com segurança | Intermediário |
| Narrowing | Refinar o tipo após uma checagem | Intermediário |
| Enum | Criar conjunto fechado de opções | Intermediário |
| Literal Types | Restringir a valores exatos | Intermediário |
| Generics | Reaproveitar código com vários tipos | Intermediário |
| readonly | Impedir alteração de propriedades | Intermediário |
| Classes | Criar moldes para objetos | Intermediário |
| public/private/protected | Controlar acesso dentro da classe | Intermediário |
| Herança | Reaproveitar estrutura entre classes | Intermediário |
| Implementar interface | Fazer classe seguir um contrato | Intermediário |
| Record | Tipar objetos por chaves conhecidas | Intermediário |
| Pick / Omit | Aproveitar partes de um tipo | Intermediário |
| Partial | Tornar tudo opcional para edição parcial | Intermediário |
| Tipar retorno de API | Modelar respostas do servidor | Intermediário |
| Type Assertion `as` | Forçar um tipo em casos específicos | Avançado |
| null / undefined | Representar ausência de valor | Avançado |
| Optional Chaining `?.` | Acessar dados sem quebrar | Avançado |
