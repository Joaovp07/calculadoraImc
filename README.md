# Calculadora de IMC (Terminal + Web)

## Objetivo
Este projeto calcula o **IMC (Índice de Massa Corporal)** de duas formas:
- via terminal (Node.js);
- via navegador (frontend com HTML, CSS e JavaScript).

## O que foi implementado

### 1) Versão Terminal (`script.js`)
O arquivo `script.js` foi refatorado para sair de um modelo com dados fixos para um fluxo interativo.

### Antes
- Nome, peso e altura eram valores fixos no código.
- O script apenas imprimia mensagens no console.
- Não havia validação de entrada.

### Depois
- Captura de dados em tempo real com `readline`:
  - nome
  - peso (kg)
  - altura (m)
- Conversão de entrada textual para número.
- Suporte para vírgula decimal (`1,75`) via substituição para ponto (`1.75`).
- Validação dos dados:
  - peso e altura devem ser números válidos;
  - peso e altura devem ser maiores que zero.
- Cálculo do IMC com fórmula padrão:

```text
IMC = peso / (altura * altura)
```

- Exibição do IMC com 2 casas decimais.
- Classificação automática por faixa:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade grau I
  - Obesidade grau II
  - Obesidade grau III

### Fluxo do programa no terminal
1. Exibe o título da calculadora.
2. Pergunta o nome do usuário.
3. Pergunta o peso em kg.
4. Pergunta a altura em metros.
5. Valida os dados informados.
6. Calcula IMC.
7. Mostra resultado e classificação.
8. Encerra a interface de leitura (`rl.close()`).

### Como executar no terminal
No terminal, dentro da pasta do projeto:

```bash
node script.js
```

Depois, digite os valores solicitados.

### Exemplo de uso (terminal)
Entrada:

```text
Nome: João
Peso: 90
Altura: 1.75
```

Saída esperada (aproximada):

```text
Seu IMC é 29.39 (Sobrepeso)
```

### Observação sobre acentuação no terminal
Em alguns terminais do Windows, caracteres acentuados podem aparecer incorretamente (ex.: `João` como `Jo?o`).
Isso é comportamento de codificação do terminal e não afeta o cálculo do IMC.

### 2) Versão Web (frontend)
Foi criada a versão web da calculadora com formulário e resultado em tela.

#### Arquivos da versão web
- `index.html`: estrutura da interface (campos de nome, peso e altura + botão + área de resultado).
- `style.css`: estilos básicos para layout, formulário e mensagens.
- `app.js`: lógica da calculadora no navegador.

#### Regras implementadas no frontend
- Captura dos campos digitados pelo usuário.
- Conversão de valores com suporte a vírgula decimal.
- Validação de nome, peso e altura.
- Cálculo do IMC com a mesma fórmula da versão terminal.
- Exibição da classificação por faixa.
- Mensagens de erro e sucesso na tela.

### Como executar a versão web
1. Abra o arquivo `index.html` no navegador.
2. Preencha nome, peso e altura.
3. Clique em **Calcular IMC**.
4. Veja o resultado exibido abaixo do formulário.

### Exemplo de uso (web)
Entrada:

```text
Nome: João
Peso: 90
Altura: 1.75
```

Saída esperada (aproximada):

```text
João, seu IMC é 29.39 (Sobrepeso).
```

## Estrutura do projeto
- `script.js`: versão terminal da calculadora (Node.js).
- `index.html`: interface web da calculadora.
- `style.css`: estilos da versão web.
- `app.js`: lógica JavaScript da versão web.
