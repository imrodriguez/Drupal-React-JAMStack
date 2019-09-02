# A enviroment of JAM Stack with Drupal and ReactJS on Docker

Technologies
========
  - Drupal
  - Apache
  - PHP
  - ReactJS
  - Docker

Before all
========
  - Execute 'npm install' and 'npm run build' on frontend folder

Install
========
  - Start containers
  - In backend container execute 'composer install'
  - In backend container execute 'drush site-install --db-url=mysql://{username}:{password}@localhost/{database}'
  - In backend container execute 'vendor/bin/drush cim'

Cheat sheet
========
  - Build containers with docker-compose build
  - Start containers with docker-compose up
  - Stop containers with docker-compose down
  - Enter to bash of container with docker-compose exec --user=1000:1000 <NAME OF CONTAINER> bash
