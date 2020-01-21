FROM php:7.4-fpm

# Install zip
RUN apt-get update && \
     apt-get install -y \
         libzip-dev \
         libpq-dev

# Install process
RUN apt-get update && apt-get install -y procps

# Install Required PHP Extensions
RUN pecl install redis \
    && pecl install zip \
    && docker-php-ext-install pdo \
    && docker-php-ext-install pdo_pgsql \
    && docker-php-ext-install bcmath \
    && docker-php-ext-enable redis \
    && docker-php-ext-enable zip

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Change working directory
WORKDIR /var/www/html/public

EXPOSE 9000
