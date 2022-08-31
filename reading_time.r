words <- system("pandoc --lua-filter wordcount.lua _content.qmd --from=markdown", intern = TRUE) |> as.numeric()
minutes <- words %/% 200
seconds <- ceiling(((words / 200) - minutes) * 60)
reading_time <- paste0(minutes, " minutes and ", seconds, " seconds")
reading_time
