#!/usr/bin/env bash
set -ex
echo "DEPLOYING"
npm run build
if [[ -d '/tmp/dist' ]]; then rm -r /tmp/dist; fi
cp -r dist /tmp/dist

git checkout gh-pages
cp -r /tmp/dist/* ./
git add .
git commit -m "UPDATE"
git push origin HEAD
git checkout master
