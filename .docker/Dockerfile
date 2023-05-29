# Base stage
FROM node:18-alpine as base

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ARG BUILD_ENV

RUN if [ "$BUILD_ENV" = "prod" ] ; then yarn build ; fi

# Dev stage
FROM base as dev

EXPOSE 9000
CMD [ "yarn", "run", "ts-dev" ]

# Prod stage
FROM base as build

RUN yarn install --production

EXPOSE 9000
CMD [ "node", "build/main.js" ]
