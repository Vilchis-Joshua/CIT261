#!/bin/bash

git add .
read answer
git commit -m "${answer}"
git push github master
sleep 2 
git push heroku master
