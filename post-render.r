# get a list of all the slides

slide_files <- list.files(
  path = "_site/lectures",
  recursive = TRUE,
  pattern = "index.html",
  full.names = TRUE
)



make_slides <- function(x) {
  path_parts <- stringr::str_split(x, "/")[[1]]
  if (("slides" %in% path_parts) == FALSE) {
    return(NA)
  }
  week_label <- path_parts[3] # nolint
  renderthis::to_pdf(
    from = x,
    to = glue::glue("_site/pdfs/{week_label}_slides.pdf"),
  )
}

# make pdfs folder
dir.create("_site/pdfs/", showWarnings = FALSE)

# make the slides
lapply(X = slide_files, FUN = make_slides)


handout_files <- list.files(
  path = "lectures",
  recursive = TRUE,
  pattern = "index.qmd",
  full.names = TRUE
)

make_handouts <- function(x) {
  path_parts <- stringr::str_split(x, "/")[[1]]
  if (("handout" %in% path_parts) == FALSE) {
    return(NA)
  }
  week_label <- path_parts[2] # nolint
  quarto::quarto_render(
    input = x,
    output_format = "pdf",
  )

  from_file <- file.path(
    "_site",
    path_parts[1],
    path_parts[2],
    path_parts[3],
    "index.pdf"
  )

  to_file <- glue::glue("_site/pdfs/{week_label}_handout.pdf")

  file.rename(from = from_file, to = to_file)
}

lapply(X = handout_files, FUN = make_handouts)
