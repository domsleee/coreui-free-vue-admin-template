#!/usr/bin/env bash

echo "DEPLOYING"
git checkout gh-pages
npm run build
cp -r dist/* ./
git add .
git commit -m "UPDATE"
git push origin HEAD
git checkout master
