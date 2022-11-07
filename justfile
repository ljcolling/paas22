render :
  quarto render && quarto run post-render.r 
  fd . lectures/**/handout -e qmd --exclude=_content.qmd -x quarto render {} --to=html

deploy:
	netlify deploy --dir=_site --prod

copy :
  cp -r ./images/ _site/images/

all : render deploy

quick :
 quarto render index.qmd
 fd . lectures/**/handout -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=html 
 fd . lectures/**/slides -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=sussex-revealjs

week week:
 fd . lectures/{{week}}/handout -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=html 
 fd . lectures/{{week}}/slides -e qmd --exclude=_content.qmd --threads=16 -x quarto render {} --to=sussex-revealjs

  
