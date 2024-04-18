#FROM node:18 AS build

#WORKDIR /src/app

#COPY . .

#RUN npm install

#RUN npm run build
FROM node:18
WORKDIR /app
COPY package.json package-lock.json angular.json tsconfig.app.json tsconfig.json ./
RUN npm ci
COPY ./src ./src
RUN npm install -g @angular/cli@13
RUN ng build 
