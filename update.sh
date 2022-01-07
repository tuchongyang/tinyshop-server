#!/bin/bash

git checkout .
git pull origin dev
npm run tsc
npm run stop
npm start