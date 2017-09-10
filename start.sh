#!/bin/bash

set -e

if [ "$1" == "wrap" ]; then
	echo "Virtualenv Wrapper in use!"
else
	source env/bin/activate
fi

yarn start:dev & python manage.py runserver 0.0.0.0:8000
