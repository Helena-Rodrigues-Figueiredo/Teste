# Exercícios do dia 20.1

## Instruções

Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench, sua missão agora é tentar finalizar os exercícios a seguir!

## Exercícios

1 - Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench. <br />

2 - Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench <br />

3 - Feito isso, crie uma tabela com as seguintes restrições: <br />

Nome da tabela: filme <br />

Colunas: <br />
* filme_id - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente; <br />
* descricao - não permite nulos, tipo texto (varchar(100)); <br />
* ano_lancamento - não permite nulos, tipo int; <br />
* nota - permite nulos, tipo int; <br />

4 - Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência. <br />

5 - Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country? <br />

6 - Qual tipo de relacionamento a tabela country faz com a tabela city? <br />

7 - Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.<br />
