#!/usr/bin/env rscript
# ls w*/*.json

lectures <- list.files(
  path = ".", pattern = "info.json",
  recursive = TRUE,
  full.names = TRUE
)

get_details <- function(file) {
  json_data <- jsonlite::read_json(file)
  tibble::tibble(Week = json_data$week,
    Topic = json_data$title)
}

purrr::map_df(lectures,  ~get_details(.x)) |>
  dplyr::arrange(Week) |>
  readr::write_csv("../data/outline.csv")
