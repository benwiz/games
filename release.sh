#!/bin/bash

yarn release
filename=$(jq '.[0]["output-name"]' docs/js/compiled/manifest.json)
filename="${filename%\"}" # strip first quote
filename="${filename#\"}" # strip last quote
echo "new filename is: $filename"
sed -i .bak "s/main\..*\.js/$filename/" docs/index.html
cat docs/index.html
