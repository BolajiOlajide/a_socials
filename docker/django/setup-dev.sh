#!/bin/bash
set -e
set -o pipefail # if any code doesn't return 0, exit the script

sleep 10

function setup_server() {
	python manage.py makemigrations
	python manage.py migrate
}
#function setup_client() {
#	yarn -v
#	export status=$?
#	echo $status
#
#	if (($status!=0)); then
#		echo 'I will be installing yarn for you now'
#		npm install -g yarn
#	fi
#	yarn install
#}

#function start_server() {
#  yarn start:dev & python manage.py runserver 0.0.0.0:8000
#}
setup_server
python manage.py runserver 0.0.0.0:8000
setup_client
start_server

exit 0
