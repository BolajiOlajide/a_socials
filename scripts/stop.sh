#!/bin/bash

set -e
set -o pipefail # if any code doesn't return 0, exit the script

echo -e '\n\n\033[31mDo you want to continue?\033[0m\n'
echo -e '\n\n\033[31mEnter y or n\033[0m\n'

read response

if [[ "$response" == "n" ]]; then
    echo -e "\n\n\033[32mNo stop command was executed!\033[0m\n"
else
    # force shutdown of any process running on port 9000 and 8000!
    # use only when process is running... 
    kill -9 $(lsof -i:8000 | cut -d" " -f2)
    # stop all node process
    pkill -f node

    echo -e "\n\n\033[32mDone!\033[0m\n"
fi
