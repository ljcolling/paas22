

run_sim <- function(x) {
  d <- sample(seq(1, 6), replace = TRUE)
  m <- mean(d)
  ss <- sum((d - m)^2)
  ss2 <- sum((d - 4)^2)
  pop_var <- ss / length(d)
  sample_var <- ss / (length(d) - 1)
  true_var <- ((length(d)^2) - 1) / 12
  pop_with <- ss2 / length(d)
  var = mean(d) - 3.5
  list(pop_var, sample_var, true_var, pop_with, var)
}

d <- lapply(X = seq_len(100000), FUN = run_sim)

list_vec_to_dataframe <- function(x, col_names) {
  n_cols <- length(x)
  x |>
    unlist() |>
    matrix(ncol = n_cols) |>
    t() |>
    as.data.frame() |>
    setNames(col_names)
}

df <- list_vec_to_dataframe(d, c("pop", "samp", "true", "w_true_mean", "var"))

df$pop |> mean()
df$samp |> mean()
df$true |> mean()
df$w_true_mean |> mean()

dice <- seq(1,6, 1)

mean((dice - mean(dice))^2)

(df$pop |> mean()) - df$true[1]
df$true[1]/6
