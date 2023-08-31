#!/bin/bash

quarto render index.qmd

cp -r ./images/ _site/images/

for i in {1..11}; do
	fmted_num="$(printf "%02d" "$i")"
	filename="./lectures/week$fmted_num/handout/index.qmd"
	quarto render $filename --to=html
done


for i in {1..11}; do
	fmted_num="$(printf "%02d" "$i")"
	filename="./lectures/week$fmted_num/slides/index.qmd"
	quarto render $filename --to=sussex-revealjs
done


for i in {1..11}; do
	fmted_num="$(printf "%02d" "$i")"
	filename="./lectures/week$fmted_num/slides/landing.qmd"
	quarto render $filename --to=html
done
