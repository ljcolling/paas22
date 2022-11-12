rnorm(1000) |> Filter(f = \(x) x > -0.1 & x < 0.1) |> prod()
