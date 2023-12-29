# Seletor de imagens

Esse projeto tem como objetivo realizar uma gestão e seleção de imagens.

#* [Primeiros passos](#Primeiros-passos)

  Para conseguir executar o projeto na sua máquina, são necessários os seguintes softwares:

  * [Docker e docker-compose](#https://docs.docker.com/get-docker/)
  * [Npm (Nodejs)](#https://nodejs.org/en/download)
  * Ou *[yarn](https://yarnpkg.com/getting-started/install)

#* [Implantando o projeto](#Implantando-o-projeto)

  * Configurando o backend
  
    -Na pasta `./backend/teste`, o primeiro passo é subir o banco para o Docker:
  
      `docker-compose up -d database`
    
    -Após subir o banco, é necessário fazer o build do projeto:
  
      `docker-compose build`
  
    -Após a build completa, pode subir o projeto completo para o Docker:
  
      `docker-compose up`

  * Configurando o frontend

     -Na pasta `./frontend/teste-imagens-lp`, execute o seguinte comando:

        * Para ambientes com npm, execute `npm i`
        * Para ambientes com yarn, execute `yarn`

#* [Utilização do projeto](#Utilizacao-do-projeto)

  * Para realizar testes via Postman, pode-se importar a * [Collection](#https://github.com/mario-pac/TesteImagens/tree/main/backend/Teste/src/main/resources/collection) aqui disponibilizada.
  * Para testes visuais, pode se utilizar o frontend desenvolvido:
      * Na raiz do projeto,  siga até o caminho `./frontend/teste-imagens-lp`
      * Ao chegar nessa pasta, execute o comando `yarn dev`
   
#* 🛠️ [Construção do projeto](#Construcao-do-projeto)

  Este projeto foi desenvolvido com:

    * *[Spring](#https://spring.io/) - Framework web
    * *[Gradle](https://gradle.org/) - Gerenciador de dependências do backend
    * *[Postgresql](#https://www.postgresql.org/) - Banco de dados do projeto
    * *[Docker](#https://www.docker.com/) - Infraestrutura
    * *[Vite](#https://vitejs.dev/) - Framework para criação do frontend


#* [Autor](#Autor)

  * [José Mário Pacheco](#https://github.com/mario-pac)
