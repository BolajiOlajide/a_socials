#!/bin/bash

set -e
set -o pipefail # if any code doesn't return 0, exit the script
set -x # print each step of your code to the terminal

sudo apt-get -y update && sudo apt-get -y install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

