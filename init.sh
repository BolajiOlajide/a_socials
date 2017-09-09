##!/bin/bash

set -e

python manage.py makemigrations
python manage.py migrate
yarn install
webpack --config=webpack.config.prod.js