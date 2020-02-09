#!/bin/bash
#  ___           _        _ _ 
# |_ _|_ __  ___| |_ __ _| | |
#  | || '_ \/ __| __/ _` | | |
#  | || | | \__ \ || (_| | | |
# |___|_| |_|___/\__\__,_|_|_| 

source .env

./start.sh
#backend build 
sleep 5

docker-compose exec backend bash -c "composer install -o"
docker-compose exec backend bash -c "vendor/bin/drush site-install --db-url=mysql://root:${MYSQL_ROOT_PASSWORD}@db:3306/${MYSQL_DEFAULT_DATABASE} -y"
docker-compose exec backend bash -c "vendor/bin/drush config-set 'system.site' uuid '${DRUPAL_UUID}' -y"
docker-compose exec backend bash -c "vendor/bin/drush cim --partial -y"

#frontend build
cd frontend
npm install
npm run build