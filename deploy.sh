#!/usr/bin/env bash

echo "DEPLOYING"
npm run build
cp -r dist /tmp/dist

git checkout gh-pages
cp -r /tmp/dist/* ./
git add .
git commit -m "UPDATE"
git push origin HEAD
git checkout master
