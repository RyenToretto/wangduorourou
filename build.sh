#!/bin/bash
set -x

AUTH_PATH=kjf

AUTH_NAME=@$AUTH_PATH

APP=first-ng-lib

ng build $AUTH_NAME/$APP --prod --output-hashing=none && cat dist/$AUTH_PATH/$APP/runtime-es5.js dist/$AUTH_PATH/$APP/polyfills-es5.js dist/$AUTH_PATH/$APP/scripts.js dist/$AUTH_PATH/$APP/main-es5.js > dist/$AUTH_PATH/$APP/$APP.js
