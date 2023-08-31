## How to build

The lecture slides and notes should build automatically via a github action with
the output places in the `_site` folder

### Building locally

### Option 1: using Docker

1. Step 1: Build the docker container

```bash
docker build . -t paas23
```

2. Step 2: Run the container

```bash
docker run -it -v `pwd`:/home/dev/paas22 --rm paas23
```

### Option 2: without Docker

1. Step 1: Install the dependencies 

```r
 install.packages("rmarkdown")
 install.packages("here")
 install.packages("remotes")
 install.packages("kableExtra")
 install.packages("readr")
 install.packages("cowplot")
 install.packages("plotly")
 install.packages("tidyverse")
 install.packages("latex2exp")
 install.packages("patchwork")
 install.packages("pipebind")
 remotes::install_github("ljcolling/niceQuiz")
```

2. Step 2: Run the build script

```bash
./build.sh
```
