##!/bin/bash

set -e

python manage.py makemigrations
python manage.py migrate
webpack --config=webpack.config.prod.js
