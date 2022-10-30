require(tidyverse)
# require(plotshow)

### generate 10 sample means

set.seed(123)
gen1 <- \(x) rnorm(n = 10, sd = 25, mean = 100) |> mean()
set.seed(123)
gen2 <- \(x) rnorm(n = 4, sd = 25, mean = 100) |> mean()

d1 <- tibble::tibble(
  y = parallel::mclapply(X = seq_len(10), gen1) |> unlist(),
  x = seq_len(10)
)

d2 <- tibble::tibble(
  y = parallel::mclapply(X = seq_len(10), gen2) |> unlist(),
  x = seq_len(10)
)



p1 <- ggplot(d1) +
  geom_point(aes(x = x, y = y)) +
  geom_hline(yintercept = 100, linetype = 2) +
  labs(x = "sample number", y = latex2exp::TeX("\\bar{x}")) +
  scale_x_continuous(breaks = seq(1, 10, 1)) +
  geom_segment(aes(x = x, y = y, yend = 100, xend = x), linetype = 2) +
  cowplot::theme_cowplot() +
  theme_minimal() +
  ylim(130, 70) +
  NULL


p2 <- ggplot(d2) +
  geom_point(aes(x = x, y = y)) +
  geom_hline(yintercept = 100, linetype = 2) +
  labs(x = "sample number", y = latex2exp::TeX("\\bar{x}")) +
  scale_x_continuous(breaks = seq(1, 10, 1)) +
  geom_segment(aes(x = x, y = y, yend = 100, xend = x), linetype = 2) +
  theme_minimal() +
  ylim(130, 70) +
  NULL
