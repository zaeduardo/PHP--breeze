#!/bin/bash
composer install --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
