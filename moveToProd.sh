#!/bin/bash

yarn build

cp -r ./build "/mnt/3318D4B05B42C7BF/git/serene-retreat-50059/"
rm -R ./build

cd "/mnt/3318D4B05B42C7BF/git/serene-retreat-50059/"

git add .
git commit -am "Deploy to Production"
git push heroku master