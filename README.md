
![Logo do projeto](https://camo.githubusercontent.com/5887da4f9e567077128e07607f80780d64c794f82aa1fc57935b10753f45e6d7/68747470733a2f2f617574686a732e6465762f696d672f6c6f676f2f6c6f676f2d736d2e706e67)
# Nextauth

## 🔥 Introdução

Este projeto oferece uma solução de autenticação usando NextAuth.js para permitir logins com diversos provedores de autenticação, como Google, Facebook, GitHub, entre outros. A integração com NextAuth simplifica o processo de autenticação, permitindo uma experiência de login sem complicações para os usuários.

### ⚙️ Pré-requisitos

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


## 🔨 Guia de instalação

- Clone o repositório:

```bash
git clone https://github.com/manassesqueiroz/nextauth.git
```


- Crie um arquivo .env e adicione as variaveis de ambiemte:

variaveis de ambiemte necessárias
```js
// url do seu banco de dados !!!CASO NÃO ESTEJA USANDO POSTGRESQL TERA QUE MODIFICAR O "squema.prisma"
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"

// Execute o comando ```openssl rand -base64 32``` no terminal e cole o resultado no auth_secret 
AUTH_SECRET= *****SUA CHAVE***** 

AUTH_GOOGLE_ID= *****SUA CHAVE***** 
AUTH_GOOGLE_SECRET= *****SUA CHAVE*****

DEBUG=development
```

variaveis de ambiemte apcionais
```js

AUTH_GITHUB_ID= *****SUA CHAVE***** 
AUTH_GITHUB_SECRET= *****SUA CHAVE***** 

AUTH_DISCORD_ID= *****SUA CHAVE***** 
AUTH_DISCORD_SECRET= *****SUA CHAVE***** 

AUTH_FACEBOOK_ID= *****SUA CHAVE***** 
AUTH_FACEBOOK_SECRET= *****SUA CHAVE***** 

```

- Etapas para instalar:

```bash
npm install

npx prisma db push \\ salvar o esquema no seu banco de dados

npm run dev
```

## 📦 Tecnologias usadas:

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
* ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


