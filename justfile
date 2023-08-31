deploy:
	netlify deploy --dir=_site --prod

copy :
  cp -r ./images/ _site/images/

home :
 quarto render index.qmd

handouts :
 fd . lectures/**/handout -e qmd --exclude=_content.qmd -x quarto render {} --to=html 

slides: 
 fd . lectures/**/slides -e qmd --exclude=_content.qmd --exclude=landing.qmd -x quarto render {} --to=sussex-revealjs

landing :
 fd . lectures/**/slides -e qmd --exclude=_content.qmd --exclude=index.qmd -x quarto render {}

quick : home slides landing


speaker :
  fd index -e html -x echo {} |  awk '{printf "mv " $1 " _site/"} {gsub("\\.\/","")gsub("\/","_")}1' | xargs -I {} sh -c {}
  quarto render speaker.qmd


