#!/bin/bash
ng build --prod
cp ./docs/index.html ./docs/404.html
echo kryson.sunderapps.com > ./docs/CNAME