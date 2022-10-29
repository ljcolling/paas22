#!/bin/sh

# Update the headers based on the .json files

files=$(find . -maxdepth 1 -type d -iname "week*")

for f in $files; do
	(
		cd "$f" || exit
		teach -f
	)
done
