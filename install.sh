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

docker-compose exec -u 1000 backend bash -c "composer install -o"
docker-compose exec -u 1000 backend bash -c "vendor/bin/drush site-install --db-url=mysql://root:${MYSQL_ROOT_PASSWORD}@db:3306/${MYSQL_DEFAULT_DATABASE} -y"
docker-compose exec -u 1000 backend bash -c "vendor/bin/drush config-set 'system.site' uuid '${DRUPAL_UUID}' -y"
docker-compose exec -u 1000 backend bash -c "vendor/bin/drush cim --partial -y"
docker-compose exec -u 1000 backend bash -c "cp web/sites/default/default.services.yml web/sites/default/services.yml"

#frontend build
cd frontend
npm install
npm run build