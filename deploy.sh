#!/usr/bin/env bash

echo "DEPLOYING"
git checkout gh-pages
npm run build
cp -r dist/* ./
git add .
gc -m "UPDATE"
git push origin HEAD
git checkout master
