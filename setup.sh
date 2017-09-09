#!/bin/bash

set -e

function setup_server() {
	pip install -r requirements.txt
	python manage.py makemigrations
	python manage.py migrate
}

function setup_client() {
	yarn install
	webpack --config=webpack.config.dev
}

setup_server
setup_client

./start.sh $1


