# syntax=docker/dockerfile:1
ARG PYTHON_VERSION=3.11
FROM python:${PYTHON_VERSION}-slim as base

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip

RUN --mount=type=cache,target=/root/.cache/pip \
    --mount=type=bind,source=requirements.txt,target=requirements.txt \
    python -m pip install -r requirements.txt

COPY . .

RUN adduser --disabled-password statcraft && chown -R statcraft /app
RUN mkdir -p /app/static && chown -R statcraft:statcraft /app/static
RUN mkdir -p /app/media && chown -R statcraft:statcraft /app/media

USER statcraft

EXPOSE 8000

RUN chmod +x /app/entrypoint.prod.sh

ENTRYPOINT ["/app/entrypoint.prod.sh"]
