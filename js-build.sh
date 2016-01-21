#!/usr/bin/env bash

OUT="$PWD/assets/js/script.js"

FILES=(
  'folder'
  'blog/archive'
)

# --------------------------------------------

echo "Files changed!"
echo "Building JavaScripts..."

touch $OUT
: > $OUT
echo "// =========" >> $OUT
echo "//JavaScript" >> $OUT
echo "// =========" >> $OUT
echo >> $OUT
echo >> $OUT

for FILE in "${FILES[@]}"
do
  cat "$PWD/assets/javascripts/${FILE}.js" >> $OUT
done


echo "Done."
echo

