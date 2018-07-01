##!/bin/bash

set -e

python server/manage.py makemigrations
python server/manage.py migrate
python server/manage.py loaddata fixtures/prod.json
