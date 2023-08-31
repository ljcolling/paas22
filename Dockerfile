FROM eddelbuettel/r2u:20.04

# Install pandoc for building vignettes
RUN apt-get update && apt-get install -y --no-install-recommends \
    pandoc \
    pandoc-citeproc \
    curl \
    gdebi-core \
    && rm -rf /var/lib/apt/lists/*

RUN curl -LO https://quarto.org/download/latest/quarto-linux-amd64.deb
RUN gdebi --non-interactive quarto-linux-amd64.deb


RUN install.r rmarkdown \
  here \
  dplyr \
  purrr \
  ggplot2 \
  tibble \
  remotes \
  kableExtra \
  readr \
  cowplot \
  plotly \
  tidyverse \
  latex2exp \
  patchwork \
  pipebind
 

RUN R -e 'remotes::install_github("ljcolling/niceQuiz")'

WORKDIR /home/dev/paas22

CMD  ["./build.sh"]
