
PROJECT_NAME ?= andela-socials
ORG_NAME ?= bench-projects
REPO_NAME ?= andela-socials


DOCKER_TEST_COMPOSE_FILE := docker/test/docker-compose.yml

DOCKER_TEST_PROJECT = $(PROJECT_NAME)test

TARGET_MAX_CHAR_NUM=10

DOCKER_REGISTRY ?= gcr.io


ifeq ($(DOCKER_REGISTRY), docker.io)
	REPO_FILTER := $(ORG_NAME)/$(REPO_NAME)
else
	REPO_FILTER := $(DOCKER_REGISTRY)/$(ORG_NAME)/$(REPO_NAME)[^[:space:]|\$$]*
endif

.PHONY: help

## Show help
help:
	@echo ''
	@echo 'Usage:'
	@echo '${YELLOW} make ${RESET} ${GREEN}<target> [options]${RESET}'
	@echo ''
	@echo 'Targets:'
	@echo ''
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		message = match(lastLine, /^## (.*)/); \
		if (message) { \
			command = substr($$1, 0, index($$1, ":")-1); \
			message = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} %s\n", command, message; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	@echo ''
	@echo ''

## Run project test cases
test:
	${INFO} "Building required docker images for testing"
	@ echo " "
	@ docker volume create --name=cache > /dev/null
	@ echo " "
	@ docker-compose -p $(DOCKER_TEST_PROJECT) -f $(DOCKER_TEST_COMPOSE_FILE) build --pull test
	${SUCCESS} "Build Completed successfully"
	@ echo " "
	${INFO} "Running tests in docker container"
	@ docker-compose -p $(DOCKER_TEST_PROJECT) -f $(DOCKER_TEST_COMPOSE_FILE) up test
	${INFO} "Test results: exits if status code !=0"
	${CHECK} $(DOCKER_TEST_PROJECT) $(DOCKER_TEST_COMPOSE_FILE) test
	${INFO} "Copy coverage reports..."
	@ docker cp $$(docker-compose -p $(DOCKER_TEST_PROJECT) -f $(DOCKER_TEST_COMPOSE_FILE) ps -q test):/application/coverage .
	@ echo ""
	@ ${INFO} "Cleaning workspace after test"
	@ docker-compose -p $(DOCKER_TEST_PROJECT) -f $(DOCKER_TEST_COMPOSE_FILE) down -v
	${INFO} "Removing dangling images..."
	@ docker images -q -f dangling=true | xargs -I ARGS docker rmi -f ARGS
	@ docker images -q -f dangling=true -f label=application=$(PROJECT_NAME) | xargs -I ARGS docker rmi -f ARGS
	${SUCCESS} "Clean complete"


## Delete local development server containers
clean:
	${INFO} "Cleaning your local environment, note all ephemeral volumes will be destroyed"
	@ docker-compose -f $(DOCKER_DEV_COMPOSE_FILE) down -v
	${INFO} "Remove dangling images"
	@ docker images -q -f dangling=true -f label=application=$(PROJECT_NAME) | xargs -I ARGS docker rmi -f ARGS
	${SUCCESS} "Clean completed successfully"


## [ service ] Ssh into service container
ssh:
	@ docker-compose  -f $(DOCKER_DEV_COMPOSE_FILE) exec $(SSH_ARGS) bash

# extract ssh arguments
ifeq (ssh,$(firstword $(MAKECMDGOALS)))
  SSH_ARGS := $(word 2, $(MAKECMDGOALS))
  ifeq ($(SSH_ARGS),)
    $(error You must specify a service)
  endif
  $(eval $(SSH_ARGS):;@:)
endif

# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
NC := "\e[0m"
RESET  := $(shell tput -Txterm sgr0)
# Shell Functions
INFO := @bash -c 'printf $(YELLOW); echo "===> $$1"; printf $(NC)' SOME_VALUE
SUCCESS := @bash -c 'printf $(GREEN); echo "===> $$1"; printf $(NC)' SOME_VALUE
# Shell Functions
INFO := @bash -c ' printf $(YELLOW); echo "===> $$1";  printf $(NC)' SOME_VALUE

# check and inspect Logic

INSPECT := $$(docker-compose -p $$1 -f $$2 ps -q $$3 | xargs -I ARGS docker inspect -f "{{ .State.ExitCode }}" ARGS)

CHECK := @bash -c 'if [[ $(INSPECT) -ne 0 ]]; then exit $(INSPECT); fi' VALUE

IMAGE_ID = $$(docker images $(REPO_NAME)rel  -q)

ifeq (tag,$(firstword $(MAKECMDGOALS)))
  TAG_ARGS := $(word 2, $(MAKECMDGOALS))
  ifeq ($(TAG_ARGS),)
    $(error You must specify a tag)
  endif
  $(eval $(TAG_ARGS):;@:)
endif

REPO_EXPR := $$(docker inspect -f '{{range .RepoTags}}{{.}} {{end}}' $(IMAGE_ID) | grep -oh "$(REPO_FILTER)" | xargs)

