
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[JAVA_BADGE]:https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[SPRING_BADGE]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
[REACT_BADGE]: https://img.shields.io/badge/react-black?logo=react&style=for-the-badge
[POSTGRE_BADGE]:https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white

<h1 align="center" style="font-weight: bold;">Galeria 💻</h1>

![typescript][TYPESCRIPT__BADGE]
![spring][SPRING_BADGE]
![java][JAVA_BADGE]
![react][REACT_BADGE]
![postgre][POSTGRE_BADGE]


<p align="center">
 <a href="#started">Resumo</a> • 
  <a href="#routes">API Endpoints</a> 
</p>

<p align="center">
  <b>Descrição resumida do projeto.</b>
</p>

<h2 id="started">🚀 Começo</h2>

Um projeto simples de uma biblioteca de fotos online, com um procesos de autenticação, em Spring/React/Next, usando PostgreSQL como banco de dados e um deploy no Docker.

<h3>Pré-requisitos</h3>

- [JDK 17](https://github.com/)
- [Maven 3.8.5](https://github.com)
- [NodeJS](https://github.com)
- [PostgreSQL](https://github.com)

<h3>variáveis de ambiente</h2>

Modifique o arquivo `application.yml` de acordo com as suas necessidades:

```yaml
      url: jdbc:postgresql://localhost:5432/postgres
      username: postgres
      password: 123
```

<h3>Funcionamento</h3>

Como iniciar o projeto ->

```bash
cd imagelite
yarn dev
``````
```bash
cd imageliteapi
mvn run
``````


<h2 id="routes">📍 API Endpoints</h2>

​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /v1/users/auth</kbd>     | Autentica um usuário e retorna um token JWT
| <kbd>GET /v1/images</kbd>     | Retorna uma lista com todas as imagens do sistema
| <kbd>POST /v1/images</kbd>     | Adiciona uma nova imagem
| <kbd>GET /v1/images/id</kbd>     | Retorna uma imagem apenas


<h3 id="post-auth-detail">POST /v1/users/auth</h3>

**REQUEST**
```json
{
  "email": "admin@admin.com",
  "password": "4444444"
}
```

**RESPONSE**
```json
{
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```


