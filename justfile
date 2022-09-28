all : render deploy

render :
	quarto render && quarto run post-render.r 

deploy:
	netlify deploy --dir=_site --prod
