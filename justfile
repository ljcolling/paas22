render :
  quarto render && quarto run post-render.r 
  fd . lectures/**/handout -e qmd --exclude=_content.qmd -x quarto render {} --to=html

deploy:
	netlify deploy --dir=_site --prod

copy :
  cp -r ./images/ _site/images/

all : slow speaker deploy
  

quick :
 quarto render index.qmd
 fd . lectures/**/handout -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=html 
 fd . lectures/**/slides -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=sussex-revealjs

week week:
 fd . lectures/{{week}}/handout -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=html 
 fd . lectures/{{week}}/slides -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=sussex-revealjs

slow : 
  fd . lectures/**/handout -e qmd --exclude=_content.qmd -X quarto render {} --to=html 
  fd . lectures/**/slides -e qmd --exclude=_content.qmd -X quarto render {} --to=sussex-revealjs

speaker :
  fd index -e html -x echo {} |  awk '{printf "mv " $1 " _site/"} {gsub("\\.\/","")gsub("\/","_")}1' | xargs -I {} sh -c {}
  quarto render speaker.qmd


