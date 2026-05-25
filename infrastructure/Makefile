ENV_FILE ?= .env

STACK_NAME ?= stack-name
GITHUB_REPOSITORY_OWNER ?= github-repository-owner

ifneq ("$(wildcard $(ENV_FILE))","")
include $(ENV_FILE)
.EXPORT_ALL_VARIABLES:
endif

# these will speed up builds, for docker-compose >= 1.25
export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

init:
	docker swarm init

# build local images
build-local:
	docker build -t ghcr.io/$(GITHUB_REPOSITORY_OWNER)/website:latest ../website

# deploy services with bundled caddy
deploy-local:
	docker stack deploy -c docker-compose.app.yml -c docker-compose.urls.yml -c docker-compose.network-local.yml ${STACK_NAME} --detach=false --resolve-image=always

# deploy services using an external caddy-network
deploy-prod:
	docker stack deploy -c docker-compose.app.yml -c docker-compose.urls.yml -c docker-compose.network-prod.yml ${STACK_NAME} --detach=false --resolve-image=always

# down all services
down:
	docker stack rm ${STACK_NAME}
