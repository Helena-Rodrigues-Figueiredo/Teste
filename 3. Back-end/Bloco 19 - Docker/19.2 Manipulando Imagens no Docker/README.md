# Exercícios do Dia 19.2

## Instruções

Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (uma vaca falante no terminal 🐮)!
A ideia é deixarmos a mensagem para o cowsay parametrizável. Dessa forma, conseguiremos executar o seguinte comando:

`docker container run cowsay Muuuuuuhhh`

E teremos a seguinte saída no terminal:

____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||

## Exercícios

1 -Crie um Dockerfile utilizando a imagem chuanwen/cowsay. <br />

[`Dockerfile`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.2%20Manipulando%20Imagens%20no%20Docker/Dockerfile)

2 - Defina um ENTRYPOINT para a execução do comando. <br />
* Observe que o executável cowsay está no diretório /usr/games/ <br />
* Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem. <br />

[`Dockerfile`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.2%20Manipulando%20Imagens%20no%20Docker/Dockerfile)

3 - Utilize o CMD para definir uma mensagem padrão. <br />

[`Dockerfile`](https://github.com/Helena-Rodrigues-Figueiredo/trybe-exercises/blob/master/3.%20Back-end/Bloco%2019%20-%20Docker/19.2%20Manipulando%20Imagens%20no%20Docker/Dockerfile)

4 - Gere uma build e execute um contêiner baseado em sua imagem sem passar nenhum comando. <br />

![image](https://user-images.githubusercontent.com/99517204/183089182-a188243c-5cdf-4aaf-ba68-6619d226346d.png)

5 - Execute um novo contêiner passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQV TRYBE", para exibir um dragão junto com a vaquinha. <br />

![image](https://user-images.githubusercontent.com/99517204/183089216-4deeb810-6896-4e2e-88f0-6da16c094d5c.png)

