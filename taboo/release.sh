#!/bin/bash

yarn release
filename=$(jq '.[0]["output-name"]' docs/js/compiled/manifest.json)
filename="${filename%\"}" # strip first quote
filename="${filename#\"}" # strip last quote
echo "new filename is: $filename"
sed -i "s/main\..*\.js/$filename/" docs/index.html # for mac inset `.bak` after the `-i`
cat docs/index.html
git add "docs/js/compiled/$filename"
git add "docs/index.html"
git commit -m "release $filename"
