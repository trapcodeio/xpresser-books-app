# Base stage
FROM node:18-alpine as base

WORKDIR /app

# Install xjs-cli globally
RUN yarn global add xjs-cli

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Dev stage
FROM base as dev

ENV APP_PORT=9000

EXPOSE $APP_PORT
CMD [ "yarn", "run", "ts-dev" ]

# Prod stage
FROM base as build

ENV APP_PORT=9000

RUN yarn build && yarn install --production

EXPOSE $APP_PORT
CMD [ "node", "build/main.js" ]
