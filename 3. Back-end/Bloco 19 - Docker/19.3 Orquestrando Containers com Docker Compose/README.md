# Exercícios do dia 19.3

## Exercício 1

1 - Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura: <br />
* Tag 'title' com o seguinte texto "Trybe";<br />
* Tag 'H1' com o seguinte texto "Missão da Trybe";<br />
* Tag 'p' com o seguinte texto "Gerar oportunidade para pessoas";<br />
* Salve o arquivo em qualquer lugar da sua máquina com a extensão html<br />

[`missao_trybe.html`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.3%20Orquestrando%20Containers%20com%20Docker%20Compose/missao_trybe.html)

2 - Crie um contêiner para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.<br />

![image](https://user-images.githubusercontent.com/99517204/183089536-5397c5bd-092f-455d-94c2-8d257ae39b14.png)

3 - Após criar o contêiner, acesse a página HTML que está rodando no servidor em seu browser.<br />

![image](https://user-images.githubusercontent.com/99517204/183089580-61e3212f-1726-4288-acbc-28b4c20c7fcb.png)

4 - Acesse o arquivo missao_trybe.html e acrescente a tag "p" com o seguinte texto: "Nosso negócio é GENTE! #VQV";<br />

[`missao_trybe.html`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.3%20Orquestrando%20Containers%20com%20Docker%20Compose/missao_trybe.html)

5 - Obtenha o id do contêiner httpd:2.4;<br />

![image](https://user-images.githubusercontent.com/99517204/183089779-8af58b06-3836-43ac-b23d-8d64c212046c.png)

6 - Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse contêiner no Docker Host;<br />

![image](https://user-images.githubusercontent.com/99517204/183089854-7d473da4-e5ed-475b-ab6d-3b5c7b3214ab.png)
![image](https://user-images.githubusercontent.com/99517204/183089809-a5964f62-f599-44e2-9e1f-4ee0cbd20e7b.png)

7 - Agora pare o contêiner httpd:2.4;<br />

![image](https://user-images.githubusercontent.com/99517204/183089909-60c12ebe-7a1b-4cc3-8fac-fbbf8191e903.png)

8 - Exclua o seu contêiner;<br />

![image](https://user-images.githubusercontent.com/99517204/183089937-614913ca-5fd9-4454-9a07-ea8950a0e642.png)

9 - Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;<br />

![image](https://user-images.githubusercontent.com/99517204/183089958-394f40c0-e0b2-4ffa-9798-3997461bdfb5.png)

10 - Obtenha o IMAGE ID do servidor;<br />

![image](https://user-images.githubusercontent.com/99517204/183089995-48da127b-b503-4cb3-8bc4-a9826ce75e25.png)

11 - Depois de obter o IMAGE ID, exclua a imagem.<br />

![image](https://user-images.githubusercontent.com/99517204/183090018-857e1818-49be-4f92-920a-346c8275d583.png)

## Exercício 2

Crie o arquivo Compose para subir um ghost blog. Essa plataforma é similar ao Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:<br />

* Resolução dos exercícios 2.1, 2.2 e 2.3 no arquivo [`docker-compose.yaml`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.3%20Orquestrando%20Containers%20com%20Docker%20Compose/docker-compose.yaml)

1 - Utilize a versão "3" no arquivo;<br />

2 - Crie um service para subir a plataforma. Para isso, utilize a imagem ghost:1-alpine;<br />

3 - Publique a porta 2368, fazendo bind também para a 2368;<br />

4 - Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.<br />

![image](https://user-images.githubusercontent.com/99517204/183090102-a0869652-90eb-4a4b-a21f-6f6fa4d8a038.png)

## Exercício 3

Por padrão, o ghost utiliza um sqlite interno para salvar as informações, porém vamos alterar esse comportamento para exercitar nossos conhecimentos:<br />

* Resolução de todo exercício 3 no arquivo [`docker-compose.yaml`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.3%20Orquestrando%20Containers%20com%20Docker%20Compose/docker-compose.yaml)

1 - Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um mysql, portanto use a imagem mysql:5.7;<br />

2 - Precisamos definir uma senha root para o nosso bd. Para isso, utilize a variável MYSQL_ROOT_PASSWORD e lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host para a env do container;<br />

3 - Agora precisamos configurar nosso service com o ghost para utilizar o MySQL. Para isso, defina a variável database__client para mysql;<br />

4 - Defina o nome ghost para o nome do database utilizando a variável database__connection__database;<br />

5 - Então, indique a conexão para o nosso MySQL na env database__connection__host;<br />

6 - Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.<br />

7 - Utilize a opção depends_on para criar relações de dependências entre os serviços.<br />

8 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.<br />

## Exercício 4

* Resolução de todo exercício 4 no arquivo [`docker-compose.yaml`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.3%20Orquestrando%20Containers%20com%20Docker%20Compose/docker-compose.yaml)

1 - Configure o nosso serviço mysql para utilizar um volume conforme vimos no conteúdo. Utilize o caminho target /var/lib/mysql.<br />

2 - Em vez de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.<br />

3 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.<br />

![image](https://user-images.githubusercontent.com/99517204/183090102-a0869652-90eb-4a4b-a21f-6f6fa4d8a038.png)
