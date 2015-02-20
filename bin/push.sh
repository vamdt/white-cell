#!/usr/bin/env bash

cd $(dirname $0)
cd ..

current_branch=$(git rev-parse --abbrev-ref HEAD)

echo "Current branch is $current_branch"

git checkout master
git push origin master
git push upstream master

git checkout -b gh-pages
git push origin gh-pages

git checkout -b gitcafe-pages
git push upstream gitcafe-pages

git checkout "$current_branch"

git branch -D gh-pages
git branch -D gitcafe-pages

git branch -va
