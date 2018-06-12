#!/bin/bash
set -e
set -o pipefail # if any code doesn't return 0, exit the script


function setup_server() {
	python manage.py makemigrations
	python manage.py migrate
}

function start_server() {
  python manage.py runserver 0.0.0.0:8000
}
setup_server
start_server

exit 0
