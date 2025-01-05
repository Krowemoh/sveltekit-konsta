#!/usr/bin/env bash

npm run build

rsync -avu \
    --exclude "db"\
    --exclude ".env"\
    --exclude ".git"\
    --exclude ".svelte-kit" \
    --exclude "node_modules"\
    -e 'ssh -i ~/.ssh/id_rsa_server' \
    /home/username/svelte-konsta/ \
    example.com:/home/username/svelte-konsta/

ssh \
    -o "IdentitiesOnly=yes" \
    -i ~/.ssh/id_rsa_server \
    user@example.com \
    -t "pm2 restart app_name" 
