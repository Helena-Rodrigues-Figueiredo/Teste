# Exercícios

## 3 - Crie um novo projeto utilizando npx create-react-app.

- Na pasta src, crie um novo arquivo chamado Header.jsx, que representará o componente Header;
- No arquivo Header.jsx, crie uma classe React, chamada Header. Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
- No arquivo App.js, importe o componente Header criado anteriormente;
- Renderize o componente Header no App.js;
- Na pasta src, crie um novo arquivo chamado Content.jsx, que representará o componente Content;
- Dentro do arquivo Content.jsx, crie uma classe React chamada Content;
- Ainda no arquivo Content.jsx, adicione o seguinte array:

const conteudos = [<br />
  {<br />
    conteudo: 'High Order Functions',<br />
    bloco: 8,<br />
    status: 'Aprendido'<br />
  },<br />
  {<br />
    conteudo: 'Composicao de Componentes',<br />
    bloco: 11,<br />
    status: 'Aprendendo',<br />
  },<br />
  {<br />
    conteudo: 'Composicao de Estados',<br />
    bloco: 12,<br />
    status: 'Aprenderei'<br />
  },<br />
  {<br />
    conteudo: 'Redux',<br />
    bloco: 16,<br />
    status: 'Aprenderei'<br />
  },<br />
];

- A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato:

O conteúdo é: Nome do Conteúdo<br />
Status: Status do Conteúdo<br />
Bloco: Bloco do Conteúdo<br />

## 4 - **Bônus** Estilize a aplicação do exercicio 3. Para isso, adicione classes para estilização dos seus componentes de forma que cada conteúdo listado seja um Card.
