# Boas-vindas ao repositório Tests in Practice!

Para realizar este exercício, atente-se a cada passo descrito a seguir e se tiver qualquer dúvida, nos envie no Slack da turma!! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ (PR) para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2b2edce7-9c49-4907-92a2-aa571f823b79) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Aqui vamos colocar a mão no código!
Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.

Atente-se, todos os arquivos utilizados neste exercício `já estão criados` .
<br />
</details>

<details>
  <summary><strong>📝 Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Escrever testes unitários para verificar o correto funcionamento das funções;
- Escrever testes utilizando uma abordagem de desenvolvimento orientado a testes.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-032-a-exercise-tests-in-practice`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-032-a-exercise-tests-in-practice`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique se você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
  - Exemplo: `git checkout -b joaozinho-exercise-tests-in-practice`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-exercise-tests-in-practice`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/betrybe/sd-032-a-exercise-tests-in-practice/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/betrybe/sd-032-a-exercise-tests-in-practice/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você produzir no código, regularmente

- Lembre-se de sempre, após um (ou alguns) `commits`, atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary>
<strong>🏗 Como estruturar seu projeto</strong>
  </summary> <br />

O seu Pull Request deverá conter obrigatoriamente os arquivos nativos deste repositório, com sua devida lógica implementada.

- Não é necessário criar novos arquivos.  **Durante a resolução dos requisitos, crie o costume de adicionar IDs em elementos únicos e classes em elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora.**


</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-032-a`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).

:warning: **NESTE EXERCÍCIO O ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** :warning:

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

⚠️**AVISO**: Muito cuidado com os nomes dos arquivos. Estes **não devem ser alterados.** 

Todos os requisitos do projeto serão testados **automaticamente** por meio do `Jest`.

  - Os comandos que você utilizará com mais frequência são:

    - `npm test` (executa todos os testes presentes na aplicação)
    - `npm test caminho/para/arquivo` (executa apenas os testes presentes no arquivo especificado)
     - Exemplo: `npm test tests/sum.spec.js`

</details>


<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

## 1. Crie os casos de teste da funcão `Sum`

<details>
  <summary>A função sum(a, b) retorna a soma do parâmetro <code>a</code> com o <code>b</code>. No arquivo já criado <code>sum.spec.js</code>, adicione os testes a seguir: </summary><br>

  - Teste se o retorno de `sum(4, 5)` é `9`;
  - Teste se o retorno de `sum(0, 0)` é `0`.
  - Teste se a função `sum` lança um erro quando os parâmetros são **number** `4` e **string** `'5'`;
  - Teste se a mensagem de erro é `'parameters must be numbers'` quando realizar a chamada `sum(4, '5')`;

</details>
<details>
  <summary><strong>O que será testado: </strong></summary><br>

- Será validado se, ao receber `4` e `5` como parâmetro, o retorno é 9;
- Será validado se, ao receber `0` e `0` como parâmetro, o retorno é 0.
- Dispara um erro ao receber `4` e `'5'` como parâmetro;
- Verifica se ao receber `4` e `'5'`, a memsagem de erro é `parameters must be numbers`.

</details>

---

## 2. Implemente o caso de teste para a função `printMessage`
<details>
  <summary> Use como base a função <code>printMessage</code> que imprime no terminal uma mensagem de boas-vindas de acordo com as informações de personagem passada. </summary><br>

- Crie um teste para garantir que o objeto passado como parâmetro possui a propriedade personagem.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Verifica se, o objeto passado como parâmetro possui a propriedade `personagem`.

</details>

---

## 3. Ainda sobre a função `printMessage`, adicione os casos de teste a seguir
<details>
<summary> Complementando o teste da função acima que valida a entrada de parâmetro, você pode utilizar o matcher <code>toMatch()</code> para validar a resposta da função. </summary><br>

  - Verifique se a resposta contém a informação Boas vindas, antes de chamar o nome da personagem;
  - Verifique se a resposta contém o nome correto da personagem.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Será validado se, o retorno da função contém a `mensagem de boas vindas`;
- Será validado se, o retorno da função contém o `nome correto da personagem`.

</details>

---

## 4. Crie um fluxo de exceção para a função `printMessage`

<details>
<summary> Para finalizar o teste da função <code>printMessage</code>, você pode ainda criar um fluxo de exceção para possíveis erros.</summary><br>

  - Dentro da função `printMessage` crie um  um fluxo de exceção para criar um erro caso seja enviado um parâmetro que não seja um objeto, ou que não tenha a propriedade personagem;
  - Agora que a função possui um fluxo de exceção, crie um teste para validar se a mensagem de erro é lançada caso a função seja chamada com um objeto inválido.

  > **De olho na dica 👀:**  Aqui você pode relembrar o [toThrow.](https://jestjs.io/pt-BR/docs/expect#tothrowerror).

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

- Será validado se, no teste da função printMessage, ao receber um objeto inválido
retorna a mensagem: `objeto inválido`.

</details>

---

 # Bônus

 ## 5. Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função

 <details> 
  <summary><strong>Sua função deverá se chamar <code>searchEmployee</code>, ela retorna os resultados da busca pelo id para aquele funcionário e a informação consultada.</strong></summary><br>

  Considere os dados do aquivo <code>searchEmployee</code> localizando dentro da pasta src.
  
  - Crie uma função `searchEmployee` que receba dois parâmetros: o `id` do funcionário e a informação disponível sobre ele (`firstName`, `lastName`, `specialities`);
  - Caso o `id` não conste no quadro de funcionários, sua função deve retornar o erro `"ID não identificado"`;
  - Se a informação que se quer acessar não existir, a função deve retornar o erro `"Informação indisponível"`;
  - Crie um teste para checar se, a função `searchEmployee` existe;
  - Crie um teste para checar se, a função `searchEmployee(id, "firstName")` retorna o primeiro nome do usuário da id consultada;
  - Crie um teste para checar se, a função `searchEmployee(id, "lastName")` retorna o segundo nome do usuário da id consultada;
  - Crie um teste para checar se, a função `searchEmployee(id, "specialities")` retorna um array com todas as habilidades do id pesquisado;
  - Crie um teste para checar se, a mensagem `"ID não identificada"` é retornado quando a ID não existir;
  - Crie um teste que verifica o erro quando a informação e o ID são inexistentes;
  - Teste a mensagem do erro para informação inexistente.

</details>

<details>
  <summary><strong>O que será testado</strong></summary><br>

  - Verifica se função `searchEmployee` existe;
  - Verifica se a função `searchEmployee` ao receber como parâmetro `(id, "firstName")` retorna o primeiro nome do usuário da id consultada;
  - Verifica se a função `searchEmployee` ao receber como parâmetro `(id, "lastName")` retorna o segundo nome do usuário da id consultada;
  - Verifica se a função `searchEmployee` ao receber como parâmetro `(id, "specialities")` retorna um array com todas as habilidades do id pesquisado;
  - Verifica se, a mensagem `"ID não identificada"` é retornado quando o ID não existir;
  - Verifica se a função lança um erro, quando a informação e o ID são inexistentes;
  - Verifica a mensagem de erro para informação inexistente.


</details>
