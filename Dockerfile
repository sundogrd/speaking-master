FROM node:10.11.0-alpine

ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 3093

RUN apk add --no-cache git make bash

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --no-package-lock
RUN npm run build
CMD ["npm", "start"]
