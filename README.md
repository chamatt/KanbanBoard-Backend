<h1 align="center">
  KanbanBoard-Backend
</h1>

<h3 align="center">
  A Project Management REST API, built with Express + Prisma 2 ORM.
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/chamatt/tasks-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/matheus-vicente-d-190001b2/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-chamatt-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/chamatt/tasks-api?color=%23FF9000">

  <a href="https://github.com/chamatt/tasks-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/chamatt/tasks-api?color=%23FF9000">
  </a>

  <a href="https://github.com/chamatt/tasks-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/chamatt/tasks-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/chamatt/tasks-api?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 📔 About the project

This REST API provides all the functionality to manage a complete Kaban Board application. 

Features project management and task management, with full user authentication.

To see the **front-end client**, built with React, click here: [KanbanBoard](https://github.com/chamatt/tasks-kaban-board)<br />

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/) [Runtime Environment]
- [TypeScript](https://www.typescriptlang.org/) [Typesafe Language]
- [Express](https://expressjs.com/pt-br/) [Web Server]
- [Prisma](https://prisma.io) [ORM]
- [JWT-token](https://jwt.io/) [Authentication]
- [PostgreSQL](https://www.postgresql.org/) [Database]
- [Date-fns](https://date-fns.org/) [Handling Date]
- [Eslint](https://eslint.org/) [Code Linting]
- [Prettier](https://prettier.io/) [Code Formatting]

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- An instance of [PostgreSQL](https://www.postgresql.org/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/chamatt/tasks-api.git && cd tasks-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Make a copy of 'prisma/.env.example' to 'prisma/.env'
# and set DATABASE_URL to your postgres configs.
# it should look somewhat like this:
# DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database>?schema=public"
$ cp prisma/.env.example prisma/.env

# Once the services are running, run the migrations
$ yarn prisma migrate up --experimental

# It will ask if you want to create a new database, say *yes*.

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
