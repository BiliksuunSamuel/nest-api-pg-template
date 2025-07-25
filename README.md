# 🚀 NestJS TypeOrm x PG Boilerplate

This is a **NestJS API Boilerplate** that provides a scalable and modular architecture with **TypeOrm x Postgres DB, JWT authentication, Swagger documentation, Docker support**, and **auto-loading modules**.

It’s designed to help developers **kickstart a new NestJS project** with best practices built-in.

---

## ⚡ Features

✅ **TypeOrm with PG** – Auto-loads entities from `entities/`  
✅ **Authentication** – Supports **JWT-based authentication**  
✅ **Swagger API Documentation** – Auto-generates OpenAPI docs  
✅ **Auto-load Modules** – Dynamically loads controllers, services, repositories, and schemas  
✅ **Environment Variables** – Uses `.env` for configuration  
✅ **Clean Project Structure** – Easy to scale and maintain

---

## ⚡ Requirements

- Nodejs

- Postgres server, you can setup your local postgres server by following:
  <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
  Download Postgres Server
  </a>

---

## 🌍 Environment Variables (.env.example)

Create a .env file at the root of your project and add your environment variables:

```code

PORT=2025
JWT_SECRET=mysecretkey
DATABASE=mydatabase
HOST=localhost
USERNAME=postgres
PASSWORD=postgres

```

## 🚀 How to Use This Template

### 1️⃣ Create a New Project from This Template

Run the following command:

```sh
npx degit BiliksuunSamuel/nest-api-pg-template my-new-app
cd my-new-app
npm install
```
