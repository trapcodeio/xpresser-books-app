# Xpresser Books App (Typescript)

![Alt text](https://cdn.jsdelivr.net/npm/xpresser/xpresser-logo-black.png "Xpresser Logo")

A simple Books App API using **Xpresser** and **MongoDB**.

# Stack

## Backend
- [Node.js](https://nodejs.org/en/)
- [Xpresser](https://xpresserjs.com)
- [MongoDB](https://www.mongodb.com/)

## Frontend
- [vue-books-app](https://github.com/trapcodeio/vue-books-app)


# Setup
By default, this should work without an `env` file. If you want to change the default values, create a `.env` file in the root of the project.

```bash
# Create .env file
cp .env.example .env
```

Then start the app.

```bash
# Development
npm run ts-dev

# Debug
npm run ts-dev-debug

# Production
npm run start
```

# Docker
You can also run the app using Docker.
The docker-compose file exists in `.docker` folder.

```bash
cd .docker

# Build the app (only needed once)
docker compose up --build -d

# Run the app
docker compose up -d
```