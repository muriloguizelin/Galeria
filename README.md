
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[JAVA_BADGE]:https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[SPRING_BADGE]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white

<h1 align="center" style="font-weight: bold;">Galeria 💻</h1>

![typescript][TYPESCRIPT__BADGE]
![spring][SPRING_BADGE]
![java][JAVA_BADGE]

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

<h3> Environment Variables</h2>

Use the `application.properties.example` as reference to create your configuration file `application.properties` with your AWS Credentials

```yaml
aws.region=us-east-1
aws.accessKeyId={YOUR_AWS_KEY_ID}
aws.secretKey={YOUR_AWS_SECRET}
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm some-command-to-run
``````


<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /authenticate</kbd>     | retrieves user info see [response details](#get-auth-detail)
| <kbd>POST /authenticate</kbd>     | authenticate user into the api see [request details](#post-auth-detail)

<h3 id="get-auth-detail">GET /authenticate</h3>

**RESPONSE**
```json
{
  "name": "Fernanda Kipper",
  "age": 20,
  "email": "her-email@gmail.com"
}
```

<h3 id="post-auth-detail">POST /authenticate</h3>

**REQUEST**
```json
{
  "username": "fernandakipper",
  "password": "4444444"
}
```

**RESPONSE**
```json
{
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```


