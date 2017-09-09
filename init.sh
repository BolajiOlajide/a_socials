##!/bin/bash

set -e

python manage.py makemigrations
python manage.py migrate
yarn install
webpack --config=webpack.config.prod.js
python manage.py collectstatic --no-input
