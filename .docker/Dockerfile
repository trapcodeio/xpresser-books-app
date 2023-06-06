# Base stage
FROM node:18-alpine as base

WORKDIR /usr/src/app

# Install xjs-cli globally
RUN yarn global add xjs-cli

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Dev stage
FROM base as dev

# Needed for VS Code Remote Development
RUN apk add musl libgcc libstdc++ git curl wget bash ca-certificates openssh-client

ENV NODE_ENV=development
ARG APP_PORT=9000
ENV APP_PORT=$APP_PORT

EXPOSE $APP_PORT
CMD [ "yarn", "run", "ts-dev" ]

# Prod stage
FROM base as prod

ENV NODE_ENV=production
ARG APP_PORT=9000
ENV APP_PORT=$APP_PORT

# build
RUN yarn build


EXPOSE $APP_PORT
CMD [ "node", "build/main.js" ]
