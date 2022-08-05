# Exercícios do dia 20.1

## Instruções

Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench, sua missão agora é tentar finalizar os exercícios a seguir!

## Exercícios

1 - Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench. <br />

Resposta: No caminho abaixo, clicar em "actor" com o botão direito e clicar em "Select Rows - Limit 1000", aparecerá a seguinte tela:

![image](https://user-images.githubusercontent.com/99517204/183082980-348bc249-b40a-4cf2-af5a-dde797afcd04.png)

2 - Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench <br />

Resposta: Clicar em "Tables" com o botão direito e depois clicar em "Create Table"

![image](https://user-images.githubusercontent.com/99517204/183083388-c9e317cf-6a8d-4866-a671-4092a9bd3ef4.png)

3 - Feito isso, crie uma tabela com as seguintes restrições: <br />

Nome da tabela: filme <br />

Colunas: <br />
* filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente; <br />
* descricao - não permite nulos, tipo texto (varchar(100)); <br />
* ano_lancamento - não permite nulos, tipo int; <br />
* nota - permite nulos, tipo int; <br />

![image](https://user-images.githubusercontent.com/99517204/183085750-e1d5a25c-3f25-4673-9b6c-ef6674e8b62c.png)


4 - Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência. <br />

Resposta: Conforme verificado no "DDL" da tabela "city", faz referência à tabela "country"

![image](https://user-images.githubusercontent.com/99517204/183085853-42c6b166-d47d-46ba-a807-b3a4d4872d05.png)

5 - Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country? <br />

Resposta: N:1 (muitas cidades para um país)

6 - Qual tipo de relacionamento a tabela country faz com a tabela city? <br />

Resposta: 1:N (um país para muitas cidades)

7 - Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.<br />

Resposta:
* language - film ( 1:N - em uma linguagem pode ter vários filmes)
* store - staff (1:N - em uma loja pode ter várias coisas)
* city - country (N:1 - podem ter várias cidades em um país)
