FROM node:20-alpine
LABEL maintainer="@Kadxy"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
