DOCKER_TEST_COMPOSE_FILE := docker/test/docker-compose.yml
DOCKER_TEST_PROJECT = $(PROJECT_NAME)test


# Select docker-compose file based on environment
ifeq ($(env),production)
	DOCKER_COMPOSE_FILE=./docker/prod/docker-compose.yml
else
	DOCKER_COMPOSE_FILE=./docker/dev/docker-compose.yml
endif

# Build the required images
build:
	${INFO} "Building the required docker images"
	@ docker-compose -f $(DOCKER_COMPOSE_FILE) build
	${INFO} "Build Completed successfully"

# Start all the containers
start:
	@ echo "Starting andela_socials docker containers"
	@ echo " "
	@ docker-compose -f $(DOCKER_COMPOSE_FILE) up

# stop all the containers
stop:
	@ echo "Stopping docker containers"
	@ echo " "
	@ docker-compose -f $(DOCKER_COMPOSE_FILE) down -v
	@ echo "All containers stopped successfully"

test:
	${INFO} "Building required docker images for testing"
	@ echo " "
	@ docker volume create --name=cache > /dev/null
	@ echo  " "
	@ docker-compose -p $(DOCKER_TEST_PROJECT) -f $(DOCKER_TEST_COMPOSE_FILE) build --pull test
	${SUCCESS} "Build completed successfully"

# colors
GREEN 	:= $(shell tput -Txterm setaf 2)
YELLOW 	:= $(shell tput -Txterm setaf 3)
WHITE	:= $(shell tput -Txterm setaf 7)
NC 	:= "\e[0m"
RESET 	:= $(shell tput -Txterm sgr0)

# shell functions
INFO 	:= @bash -c 'printf $(YELLOW); echo "===> $$1"; printf $(NC)' SOME_VALUE
SUCCESS := @bash -c 'printf $(GREEN); echo "===> $$1"; printf $(NC)' SOME_VALUE
