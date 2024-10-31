FROM node:alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN adduser --disabled-password statcraft && chown -R statcraft /app
USER statcraft

EXPOSE 3000