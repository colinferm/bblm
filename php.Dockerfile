FROM php:7.4.3-apache

USER root

RUN apt-get update --allow-releaseinfo-change -qq \
  && apt-get install -y default-mysql-client --no-install-recommends \
  && apt-get install -y vim-tiny \
  && apt-get install -y sudo \
  && apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev libxml2-dev libzip-dev

RUN apt-get install -y ruby-full \
  && gem install sass

RUN docker-php-ext-install mysqli pdo pdo_mysql soap zip \
  && docker-php-ext-configure gd --with-freetype --with-jpeg \
  && docker-php-ext-install -j$(nproc) gd

WORKDIR /etc/apache2/mods-enabled
RUN ln -s ../mods-available/rewrite.load rewrite.load
RUN ln -sf /bin/bash /bin/sh

WORKDIR /var/www/html/api
RUN /usr/local/bin/php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
  && /usr/local/bin/php composer-setup.php \
  && /usr/local/bin/php -r "unlink('composer-setup.php');" \
  && mv composer.phar /usr/local/bin/composer

RUN chown -R www-data:www-data /var/www/html

#RUN sudo --user=www-data composer update
#RUN su - www-data -c 'composer update'

ENV NODE_VERSION 12.18.4
RUN curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" \
  && tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 --no-same-owner \
  && ln -s -f /usr/local/bin/node /usr/local/bin/nodejs \
  # smoke tests
  && node --version \
  && npm --version

RUN touch /root/.vimrc && echo 'set nocompatible' >> /root/.vimrc

RUN mkdir -p /usr/src/bblm
COPY package.json /usr/src/bblm
COPY Gruntfile.js /usr/src/bblm
WORKDIR /usr/src/bblm

RUN npm install grunt
RUN npm install grunt-contrib-concat grunt-contrib-copy grunt-contrib-jshint grunt-contrib-qunit \
  grunt-contrib-sass grunt-contrib-uglify  grunt-contrib-watch grunt-newer grunt-replace \
  grunt-contrib-clean
RUN npm install -g grunt-cli

RUN grunt refresh
ENTRYPOINT ["/bin/bash", "-c", "cd /usr/src/bblm && eval 'grunt watch >> /dev/stdout &'; apachectl stop; apachectl -D FOREGROUND"]
