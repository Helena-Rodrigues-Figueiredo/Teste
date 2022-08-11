# Exercícios do dia 21.1

Para realizar os exercícios propostos para o dia, faremos uso da tabela employees do banco de dados hr. O banco de dados pode ser gerado e restaurado usando o seguinte arquivo: <br />

[Banco de dados](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2021%20-%20Fun%C3%A7%C3%B5es%20SQL%2C%20JOINs%20e%20Normaliza%C3%A7%C3%A3o/21.1%20Fun%C3%A7%C3%B5es%20mais%20usadas%20no%20SQL/exercicio21.1.sql)

## Exercícios

1 -  Escreva uma query que exiba o maior salário da tabela.<br />

`SELECT MAX(salary)` <br />
`FROM hr.employees;`

2 -  Escreva uma query que exiba a diferença entre o maior e o menor salário.<br />

`SELECT  MAX(salary) - MIN(salary)` <br />
`FROM hr.employees;`
  
3 - Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.<br />

`SELECT job_id, AVG(salary) AS media_salarial` <br />
`FROM hr.employees` <br />
`GROUP BY job_id` <br />
`ORDER BY media_salarial DESC;`

4 - Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias. <br />

`SELECT SUM(salary) FROM hr.employees;`

5 - Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais. <br />

`SELECT ROUND(MAX(salary), 2),` <br />
`ROUND(MIN(salary), 2),` <br />
`ROUND(SUM(salary), 2),` <br />
`ROUND(AVG(salary), 2)` <br />
`FROM hr.employees;`

6 - Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog). <br />

`SELECT job_id, COUNT(*) AS quantity` <br />
`FROM hr.employees` <br />
`WHERE job_id = 'it_prog';`

7 -  Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).<br />

`SELECT job_id, SUM(salary) AS total` <br />
`FROM hr.employees` <br />
`GROUP BY job_id;`

8 - Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).<br />

`SELECT job_id, SUM(salary) AS total` <br />
`FROM hr.employees` <br />
`GROUP BY job_id` <br />
`HAVING job_id = 'it_prog';`

9 - Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).<br />

`SELECT job_id, AVG(salary) AS total` <br />
`FROM hr.employees` <br />
`GROUP BY job_id` <br />
`HAVING job_id <> 'it_prog'` <br />
`ORDER BY total DESC;`

10 - Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.<br />

`SELECT department_id, AVG(salary) AS total, COUNT(*) AS number_of_employees` <br />
`FROM hr.employees` <br />
`GROUP BY department_id` <br />
`HAVING number_of_employees > 10;`

11 - Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.<br />

`UPDATE hr.employees` <br />
`SET phone_number = REPLACE(phone_number, '515', '777')` <br />
`WHERE phone_number LIKE '515%';`

12 - Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.<br />

`SELECT * FROM hr.employees` <br />
`WHERE char_length(first_name) >= 8;`

13 - Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).<br />

`SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;`

14 - Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).<br />

`SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;`

15 - Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).<br />

`SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;`

16 - Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.<br />

`SELECT UCASE(CONCAT(first_name, " ", last_name)) FROM hr.employees;`

17 - Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.<br />

`SELECT last_name, hire_date FROM hr.employees` <br />
`WHERE hire_date BETWEEN '1987-07-01'  AND '1987-07-31';`

18 - Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).<br />

`SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , hire_date)` <br />
`FROM hr.employees;`
