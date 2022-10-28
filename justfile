all : render deploy

render :
  quarto render && quarto run post-render.r 
  fd . lectures/**/handout -e qmd --exclude=_content.qmd -x quarto render {} --to=html

deploy:
	netlify deploy --dir=_site --prod

copy :
  cp -r ./images/ _site/images/
