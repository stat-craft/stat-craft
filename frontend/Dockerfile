# Base Stage
FROM node:alpine AS base

# Set environment variables
ENV NODE_ENV=development
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Create a non-root user and assign permissions
RUN adduser --disabled-password statcraft && chown -R statcraft /app
USER statcraft

# Development Stage
FROM base AS dev

# Expose the development port
EXPOSE 3000

# Default command for development
CMD ["npm", "run", "dev", "--", "--host"]

# Production Stage
FROM node:alpine AS prod

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy built files from the base stage
COPY --from=base /app .

# Build the static assets
RUN npm run build

# Only keep the necessary files for production
RUN rm -rf /app/src /app/node_modules /app/package*.json /app/public

# Expose the production port (Nginx handles actual serving)
EXPOSE 80

# No command needed for production; handled by Nginx
