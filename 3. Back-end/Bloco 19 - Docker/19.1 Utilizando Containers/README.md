# Exercícios do Dia 19.1

1 - No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian. <br />

![image](https://user-images.githubusercontent.com/99517204/183087757-1ec72088-d317-4ce2-8300-7ba0ecc0c411.png)

2 - Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso. <br />

![image](https://user-images.githubusercontent.com/99517204/183087799-c9f46e7e-2fb0-44b7-8e13-a53972c7feea.png)

3 -  Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.<br />

![image](https://user-images.githubusercontent.com/99517204/183087831-d8c62e30-1e44-4160-aca3-94ca358c05a4.png)

4 - Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag).<br />


5 - No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.<br />

6 - Encerre o terminal.<br />

Resposta da questões 4, 5 e 6<br />
![image](https://user-images.githubusercontent.com/99517204/183087913-3482d838-1ca5-410e-92d8-72c5b4a2d87d.png)

7 - Verifique na sua lista de containers qual container se refere ao exercício que acabou de praticar.<br />

![image](https://user-images.githubusercontent.com/99517204/183087959-82093fff-e403-4121-84f6-6cde3baacd49.png)

8 - Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.<br />

![image](https://user-images.githubusercontent.com/99517204/183087994-43cad25b-d8fb-4fad-9b21-dd5e8bd89a96.png)

9 - Retome o container que foi criado anteriormente neste exercício.<br />

10 - Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.<br />

11 - Encerre o terminal.<br />

Resposta das questões 9, 10 e 11
![image](https://user-images.githubusercontent.com/99517204/183088090-f96c6c91-a873-417a-8eaf-60864dac4f08.png)

12 - Remova somente o container criado para esse exercício.<br />

![image](https://user-images.githubusercontent.com/99517204/183088132-64a07662-5359-415f-813f-81a6b29fa6ff.png)

13 - [BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.<br />

![image](https://user-images.githubusercontent.com/99517204/183088169-4645a0e6-3572-4661-bdfb-a0683ce74cc6.png)

14 - [BÔNUS] **Encerre o container utilizando os botões [ctrl] + [c].
