# Boas vindas ao exercício Exception Handling

_Nem tudo são 🌸flores🌺 no reino da programação!_

Muitas vezes pensamos que o funcionamento do sistema é algo "óbvio", que não tem como errar. Mas precisamos prever até mesmo os comportamentos inesperados.

Neste exercício você vai trabalhar com um sistema já escrito, que já funciona, mas que não prevê algumas situações incomuns. Seu trabalho será se colocar um pouco no papel de uma pessoa usuária e depois deixar o sistema mais amigável.

Bora tratar as exceções?

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu exercício você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Seu exercício será realizado a partir do código que estão nos arquivos `index.html` e `script.js`, tire um tempo para entender os códigos e o que eles fazem.

- A aplicação pede à pessoa usuária que informe dois números para realizar uma soma. Esses números são inseridos através dos `inputs`;

- Ao clicar o botão, a função `sum` é chamada, capturando o valor escrito nos `inputs` e realizando a operação. Antes, é necessária a conversão do valor usando o [Number()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number), pois ele chega à função em forma de `string`. Há também outras formas de se converter uma `string` em um número, como o [parseInt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt) e o [parseFloat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat);

- Ao final, a função `sum` imprime o valor em um parágrafo e limpa os `inputs` para que a pessoa usuária possa inserir novos valores.

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

</details>

<details>
  <summary><strong>📝 Habilidades</strong></summary><br />

Nesse Exercício, você será capaz de:

- Utilizar a tag `<script>` para inserir código JavaScript na sua página HTML;
- Utilizar _throw_ para lançar um erro, na sintaxe `throw new Error()`;
- Utilizar _try_ e _catch_ para tentar executar um bloco de código e capturar um erro;
- Utilizar _finally_ para executar um comando após o retorno do _try_ ou _catch_.

</details>

# Orientações

<details>
  <summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório:

- `git clone git@github.com:tryber/sd-032-a-exercise-exception-handling.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-032-a-exercise-exception-handling`

2. Instale as dependências e inicialize o exercício:

   - Para isso, use o seguinte comando: `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique se você está na branch `main`:
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora, crie uma branch onde você vai guardar os `commits` do seu exercício:
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-exercicio`
  - Exemplo: `git checkout -b joao-silva-exception-handling`

4. Crie na raiz do exercício os arquivos que você precisará desenvolver:

- Verifique se você está na raiz do exercício

  - Exemplo: `pwd` -> o retorno vai ser algo como _/Users/joao/code/**sd-0x-trybe-tech-gallery**_

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão em _stage_

  - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)

- Adicione o novo arquivo ao _stage_ do Git

  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (devem aparecer listados os arquivos em verde)

- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem como _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joao-silva-exception-handling`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-032-a-exercise-exception-handling/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ no seguinte formato: `[Joao Silva] exception-handling`, e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-032-a-exercise-exception-handling/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente;

- Lembre-se de sempre atualizar o repositório remoto após um (ou alguns) `commits`;

- Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento(opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _“Code Review”_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _“code-review”_ e marque seus colegas:

  - No menu à direita, clique no _link_ **“Labels”** e escolha a _label_ **code-review**;
  - No menu à direita, clique no _link_ **“Assignees”** e escolha **o seu usuário**;
  - No menu à direita, clique no _link_ **“Reviewers”** e digite `students`, selecione o time `tryber/students-sd-032-a`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠️ **Lembre-se que garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!** ⚠️

</details>

<details>
 <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `Stylelint`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

Para poder rodar o `ESLint` certifique-se de ter executado o comando `npm install` dentro do exercício.

Para rodá-los localmente no exercício, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

Em caso de dúvidas, confira o material na plataforma sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />
  
Todos os requisitos do exercício serão testados **automaticamente** por meio do `Cypress`.

## Cypress

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web.

Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do exercício.

Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para testar o exercício utilizando apenas o terminal, execute o comando abaixo:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

ou

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js).

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

</details>

## Observações técnicas

<details>
  <summary><strong>🏗 Estrutura do exercício</strong></summary> <br />

O seu Pull Request deverá conter, obrigatoriamente, os arquivos `index.html` e `script.js`, que conterão seu código HTML e JavaScript, respectivamente.

⚠️ É importante que seus arquivos tenham exatamente estes nomes!

Caso sinta a necessidade de adicionar outro arquivos além destes, sinta-se à vontade, mas execute todas os requisitos solicitados dentro do arquivo `script.js`

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

Você deve criar erros personalizados para cada exercício, as mudanças devem ser feitas no arquivo `script.js`!

> **Observação:** Adicione o texto dos erros no parágrafo com id `result`, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

## Requisito 1 - Lance um erro em caso de input vazio

<details>

<summary> Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo? Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.</summary><br/>

**O que será testado:**

- Se um erro é lançado quando os dois campos estão em branco;
- Se um erro é lançado quando só um campo está preenchido;
- Se a mensagem de erro para os dois casos é `Preencha os campos para realizar a soma`;

> **De olho na dica 👀:** Utilize o `throw new Error` e o bloco `try/catch`.

</details>

## Requisito 2 - Lance um erro em caso de valores não numéricos

<details>

<summary> Caso os valores inseridos nos `inputs` pela pessoa usuária não sejam números, lance um erro.</summary><br/>

**O que será testado:**

- Se um erro é lançado quando os dois campos não são preenchidos com valores numéricos;
- Se a mensagem de erro é `Informe dois números para realizar a soma`;
- Não retorna erro quando os dois campos estão com valores numéricos.

> **De olho na dica 👀:** Você pode fazer essa verificação utilizando um combo da função [Number(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), que retorna o número convertido para string ou `NaN` caso não consiga fazer a conversão. Em conjunto com a função [Number.isNaN()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), que você pode utilizar para verificar se a conversão feita pela função `Number(value)` foi bem sucedida.

> **De olho na dica 👀:** Lembre-se de que, em JavaScript, para separar a parte inteira da decimal de um número, você deve utilizar o `.`. Exemplo: **1.5**, com ponto, ao invés de **1,5**, com vírgula.

</details>

## Exercício 3 - Apague os inputs ao clicar no botão de realizar a soma

<summary> Ao clicar no botão para realizar a soma os inputs devem ser apagados.</summary><br/>

**O que será testado:**

- Os valores são apagados após o clique;

> Caso queira, utilize o [finally](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause) para apagar os valores dos `inputs` ao final do bloco `try/catch`.

</details>
