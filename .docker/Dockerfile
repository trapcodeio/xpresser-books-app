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

EXPOSE 9000
CMD [ "yarn", "run", "ts-dev" ]

# Prod stage
FROM base as prod

ENV NODE_ENV=production

# build
RUN yarn build


EXPOSE 9000
CMD [ "node", "build/main.js" ]
