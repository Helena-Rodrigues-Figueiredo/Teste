# Exercícios do dia 11.2

## Instruções

* Crie um novo projeto, utilizando npx create-react-app my-form-2.0
* Caso julgue necessário, crie estilos CSS para seu formulário, de acordo com a sua imaginação.
* Faça tudo utilizando as abstrações do React.

## Exercícios

Vamos criar um formulário de cadastro de currículo com base na especificação seguintes:

1 - Crie um "fieldset" para os dados pessoais a seguir: <br />
* Nome - Texto<br />
✔️ Limite de 40 caracteres<br />
✔️ Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.<br />
✔️ Campo obrigatório<br />

* Email - Texto<br />
✔️ Limite de 50 caracteres<br />
✔️ Campo obrigatório<br />

* CPF - Texto<br />
✔️ Limite de 11 caracteres<br />
✔️ Campo obrigatório<br />

* Endereço - Texto<br />
✔️ Limite de 200 caracteres<br />
✔️ Remover qualquer caracter especial que seja digitado<br />
✔️ Campo obrigatório<br />

* Cidade - Texto<br />
✔️ Limite de 28 caracteres<br />
✔️ Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.<br />
✔️ Campo obrigatório.<br />

* Estado - ComboBox<br />
✔️ Todos os estados do Brasil<br />
✔️ Campo obrigatório.<br />

* Tipo - Radio Button<br />
✔️ Casa, Apartamento<br />
✔️ Campo obrigatório.<br />

2 - Crie outro "fieldset" para dados do seu último emprego:

* Resumo do currículo - TextArea<br />
✔️ Limite de 1000 caracteres<br />
✔️ Campo obrigatório.<br />

* Cargo - TextArea<br />
✔️ Limite de 40 caracteres<br />
✔️ Quando o mouse passar por cima deste campo (evento onMouseEnter), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.<br />
✔️ Campo obrigatório<br />

* Descrição do cargo - Texto<br />
✔️ Limite de 500 caracteres<br />
✔️ Campo obrigatório<br />

3-  Crie um botão que, ao ser clicado, monta uma "div" com o consolidado dos dados que foram inseridos no formulário.

4 - Crie um botão Limpar que limpa todos os campos do formulário e a "div" com seu currículo também.
