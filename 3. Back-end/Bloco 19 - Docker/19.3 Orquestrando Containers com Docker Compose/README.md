# Exercícios

## Exercício 1

1 - Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura: <br />
* Tag 'title' com o seguinte texto "Trybe";<br />
* Tag 'H1' com o seguinte texto "Missão da Trybe";<br />
* Tag 'p' com o seguinte texto "Gerar oportunidade para pessoas";<br />
* Salve o arquivo em qualquer lugar da sua máquina com a extensão html<br />

2 - Crie um contêiner para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.<br />

3 - Após criar o contêiner, acesse a página HTML que está rodando no servidor em seu browser.<br />

4 - Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto: "Nosso negócio é GENTE! #VQV";<br />

5 - Obtenha o id do contêiner httpd:2.4;<br />

6 - Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse contêiner no Docker Host;<br />

7 - Agora pare o contêiner httpd:2.4;<br />

8 - Exclua o seu contêiner;<br />

9 - Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;<br />

10 - Obtenha o IMAGE ID do servidor;<br />

11 - Depois de obter o IMAGE ID, exclua a imagem.<br />

## Exercício 2

Crie o arquivo Compose para subir um ghost blog. Essa plataforma é similar ao Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:<br />

1 - Utilize a versão "3" no arquivo;<br />

2 - Crie um service para subir a plataforma. Para isso, utilize a imagem ghost:1-alpine;<br />

3 - Publique a porta 2368, fazendo bind também para a 2368;<br />

4 - Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.<br />

## Exercício 3

Por padrão, o ghost utiliza um sqlite interno para salvar as informações, porém vamos alterar esse comportamento para exercitar nossos conhecimentos:<br />

1 - Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um mysql, portanto use a imagem mysql:5.7;<br />

2 - Precisamos definir uma senha root para o nosso bd. Para isso, utilize a variável MYSQL_ROOT_PASSWORD e lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host para a env do container;<br />

3 - Agora precisamos configurar nosso service com o ghost para utilizar o MySQL. Para isso, defina a variável database__client para mysql;<br />

4 - Defina o nome ghost para o nome do database utilizando a variável database__connection__database;<br />

5 - Então, indique a conexão para o nosso MySQL na env database__connection__host;<br />

6 - Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.<br />

7 - Utilize a opção depends_on para criar relações de dependências entre os serviços.<br />

8 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.<br />

## Exercício 4

1 - Configure o nosso serviço mysql para utilizar um volume conforme vimos no conteúdo. Utilize o caminho target /var/lib/mysql.<br />

2 - Em vez de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.<br />

3 - Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.<br />

## Exercício 5

1 - Inicie um novo projeto ReactJS utilizando o create-react-app;<br />

2 - Crie o Dockerfile, conforme vimos na aula passada;<br />

3 - Crie um novo arquivo Compose utilizando a versão 3;<br />

4 - Defina um serviço no arquivo para nosso app. Para isso, utilize a opção build para apontar para o Dockerfile;<br />

5 - Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost;<br />

## Exercício 6

Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react. Então, execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.
