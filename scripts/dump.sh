##!/bin/bash

set -e

python server/manage.py dumpdata > fixtures/prod.json
