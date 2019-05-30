#!/usr/bin/env bash

echo "DEPLOYING"
npm run build

git checkout gh-pages
cp -r dist/* ./
git add .
git commit -m "UPDATE"
git push origin HEAD
git checkout master
