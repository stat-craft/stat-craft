#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to check database connectivity
check_postgres_connection() {
    echo "Checking PostgreSQL connection..."

    while ! nc -z db 5432; do
        echo "PostgreSQL is unavailable - sleeping"
        sleep 2
    done

    echo "PostgreSQL is up and running!"
}

# Call the database check function
check_postgres_connection

# Collect static files without user input
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate --noinput

# Start the Gunicorn server
echo "Starting Gunicorn server..."
gunicorn statCraft.wsgi:application --bind 0.0.0.0:8000 --workers 5