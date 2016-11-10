#!/bin/bash

set -o errexit -o nounset

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
BUILD_DIR="build"

if [ "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Non-$SOURCE_BRANCH branch build; skipping deployment."
    exit 0
fi

SHA=`git rev-parse --short HEAD`

cd $BUILD_DIR
git init
git config user.name "Eli Perelman"
git config user.email "eli@eliperelman.com"

git remote add upstream "https://$GH_TOKEN@github.com/taskcluster/unified-logviewer.git"
git fetch upstream
git reset upstream/$TARGET_BRANCH

touch .

git add -A .
git commit -m "Rebuilding $TARGET_BRANCH from $SHA"
git push -q upstream HEAD:$TARGET_BRANCH
