# A enviroment of JAM Stack with Drupal and NextJS on Docker

What is this?
========
  - Is a project with Drupal headless and NextJS (Based on React). That project uses Drupal because his really good aministration panel for users and NextJS because with it we can render all the information in HTML pages.

Why?
========
  - Nothing is fastest than static HTML. For simple websites or sites with multiple landings that doesn't need a constant refresh static HTML is a really good option, but NextJS not only can do static HTML. NextJS also can do SSR (Server Side Rendering) for the sites that don't complain this conditions. These characteristics provide us the posibility of get a fast pages without the lag of a PHP rendering and at the same time the features of a administration panel as Drupal.

Configuration
========
  - Copy .env.example to .env and modify it. 

Install
========
  - Execute install.sh

Start
========  
  - Execute start.sh
  - Then we can administrate Drupal in the web browser on BACKEND_PORT configured on .env (by default 80)
  - Website is showed in the FRONTEND_PORT configured on .env (by default 8080)

Remember
========
  That project works with generation of HTML files, because of that we should generate the files every time that we want to publish a new version of content (I'm working on automatize that). For generate the files run that command on website directory:
  ```
  npm run build
  ```

ENV Explanation
========
  -MYSQL_ROOT_PASSWORD: Password will set on MYSQL
  -MYSQL_DEFAULT_DATABASE: Name of database that will be set
  -BACKEND_PORT: Port that will be used for backend dashboard 
  -FRONTEND_PORT: Port that will be used for website
  -MYSQL_PORT: Port that will be used for MYSQL
  -DRUPAL_UUID: Drupal UUID static for maintain the config
  -DRUPAL_USER: Drupal username will be created
  -DRUPAL_PASSWD: Drupal user password will be created
  -SERVER_NAME: Server name for backend
