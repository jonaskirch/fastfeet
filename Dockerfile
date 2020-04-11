FROM node:alpine as build-frontend
RUN apk --no-cache add yarn
WORKDIR /app

COPY frontend/package.json frontend/yarn.lock ./
COPY frontend/public ./public
COPY frontend/src ./src
COPY frontend/config-overrides.js ./
COPY frontend/.env.* ./

RUN yarn --production
RUN yarn build

FROM node:alpine
RUN apk --no-cache add yarn
RUN apk --no-cache add tzdata
COPY /usr/share/zoneinfo/Brazil/East /etc/localtime

WORKDIR /app

COPY backend/package.json backend/yarn.lock ./
COPY backend/src ./src
COPY backend/.sequelizerc .
COPY --from=build-frontend /app/build ./public

RUN yarn --production

EXPOSE 3333
CMD ["yarn","start"]
