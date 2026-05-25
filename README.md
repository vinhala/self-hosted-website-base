# self-hosted-website-base
Base repo for setting up a self-hosted Nuxt website with Umami analytics and a Ghost blog.

## Required GitHub secrets
- VM_HOST
- VM_USER
- VM_SSH_KEY
- WEBSITE_DOMAIN
- UMAMI_DOMAIN
- GHOST_DOMAIN
- UMAMI_DB_PASSWORD
- UMAMI_APP_SECRET
- GHOST_DB_PASSWORD
- GHOST_MAIL_HOST
- GHOST_MAIL_PORT
- GHOST_MAIL_SECURE
- GHOST_MAIL_USER
- GHOST_MAIL_PASSWORD
- GHOST_MAIL_SENDER

## Required GitHub variables
- STACK_NAME

## Optional GitHub variables
- NUXT_PUBLIC_UMAMI_WEBSITE_ID

## Usage
Use as template for creating new self-hosted website deployments. As a first step run the Setup VM workflow to install dependencies, configure the user and create the caddy network. It will automatically skip steps that are not necessary anymore, so the workflow can be run multiple times.

Run Deploy Stack to sync environment variables to the VM and deploy the Docker Swarm stack. The stack contains:

- website: Nuxt website
- analytics: Umami
- analytics_db: PostgreSQL for Umami
- blog: Ghost
- blog_db: MySQL for Ghost
