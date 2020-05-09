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
