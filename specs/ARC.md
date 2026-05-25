# Architecture for the self-hosted-website-base
The system serves as a base for a website implemented with Nuxt.js, which can communicate with a self-hosted umami instance for analytics and a self-hosted ghost instance for blog support. Deployment is done through docker swarm stack.

## Components
There are three main components: The website, the umami analytics and the ghost blog-hosting.

### Website
The website is responsible for serving a responsive web app based on Vue.js and Nuxt.js.

#### Technologies
- Nuxt.js
- Vue.js
- Typescript

### Analytics
Self-hosted analytics service for monitoring website visits and usage.

#### Technologies
- Umami
- Postgresql

## Deployment
Deployment is done through docker swarm stack with four services and an optional caddy proxy if no external one is provided.

### Services
- website: Nuxt.js website
- analytics: Umami analytics
- analytics_db: Postgresql database used by the analytics service for storage
- blog: Ghost blog hosting
- blog_db: MySQL database used by the blog service

### Configuration
- VM_HOST: Host of the vm where the stack will run
- VM_USER: User space which owns the file directory of the stack
- VM_SSH_KEY: SSH key for connecting to the vm
- STACK_NAME: Name of the docker swarm stack 
- UMAMI_DB_PASSWORD: Password for the umami database
- GHOST_DB_PASSWORD: Password fot the ghost database
- GHOST_DOMAIN: Domain for the Ghost blog service
- GHOST_MAIL_HOST: Host for sending Ghost admin mail
- GHOST_MAIL_PORT: Port for the Ghost admin mail account
- GHOST_MAIL_SECURE: "true" or "false" for using tls or not
- GHOST_MAIL_USER: User of the admin mail account
- GHOST_MAIL_PASSWORD: Password for the admin mail account
- GHOST_MAIL_SENDER: Sender to use for sending mail, e.g. "Website Blog" <blog@website.com>"