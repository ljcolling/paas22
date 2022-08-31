eq_text <- "x_{i} - \bar{x}"
colors <- list("x" = "#7200ac", "i" = "#2e8b56", "\bar{x}" = "#0000ce")

paste0("\\definecolor{v1}{RGB}{",paste0(col2rgb(colors[1]), collapse = ", "),"}")

stringr::str_replace_all(pattern = names(colors)[1], 
  string  = eq_text,
  replacement = paste0("\\\\color{v1} ", names(colors)[1]))
  
