##!/bin/bash

set -e

python manage.py makemigrations
python manage.py migrate
npm install yarn
yarn install
webpack --config=webpack.config.prod.js
python manage.py collectstatic