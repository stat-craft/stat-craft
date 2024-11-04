# Stage 1: Build the app
FROM node:alpine AS base

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN adduser --disabled-password statcraft && chown -R statcraft /app
USER statcraft

EXPOSE 3000

FROM node:alpine AS prod

WORKDIR /app

COPY --from=base /app ./

EXPOSE 3000
CMD ["npm", "run", "start"]