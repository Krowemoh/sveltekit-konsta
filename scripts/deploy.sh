#!/usr/bin/env bash

npm run build

rsync -avu \
    --exclude "db"\
    --exclude ".env"\
    --exclude ".git"\
    --exclude "node_modules"\
    -e 'ssh -i ~/.ssh/id_rsa_server' \
    /home/username/svelte-konsta/ \
    example.com:/home/username/svelte-konsta/

