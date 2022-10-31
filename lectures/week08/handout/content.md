In the previous lecture, we started talking about something called the
**standard error**. We said that the **standard error** told us something about
how spread out the **sample means** would be if we took multiple samples from
the same population. The _standard error_ will be important for understanding
the concept of the **sampling distribution**. But before we can talk about the
**sampling distribution**, we need to talk about **distributions** more
generally, where they come from, and why they look the way that they do. That
means that for now, we'll put the **standard error** aside, but we will return
to it later.

Up until now, we've skirted around the idea of distributions. We've
looked at histograms of data, but we haven't really talked much about their
shape. It turns out that there are some shapes that we'll come across very
often, and some of these shapes have properties that will make them very useful
for statistics. But before we can get to that, we need to first understand where
these shapes come from---that is, why distributions have the shape they do---and
some language for describing these shapes. We'll start off with the simplest
distribution, the **binomial distribution**, before moving on to the **normal
distribution**.

## The binomial distribution


To understand what the **binomial distribution** is, and where it comes from
we'll do a little _thought experiment_. In our thought experiment, we'll take a
coin, and we'll flip it. When we flip a coin, one of two outcomes is possible.
Either the coin will land showing heads, or it will land showing tails. We can
say that there are two possible events or two possible sequences of events
(_sequences_ will make more sense when we add more coins) that can happen when
we flip a coin.

But now let's make it a little more complicated. Let's flip two coins. Now
there's a greater number of possible sequences. We can list them:

1. The first coin shows heads, and so does the second (HH),
2. The first coin shows heads and the second shows tails (HT)
3. The first coin shows tails and the second shows heads (TH)
4. and the first coins shows tails and the second shows tails (TT)


Now there are four possible sequences. Let's count up the **number of
sequences** that lead to 0 heads, one head, two heads, etc. If we do this, we'll
see that one sequence leads to 0 heads (TT). Two sequences lead to 1 head (HT,
and TH). And one sequence leads to 2 heads (HH).

Let's now add more coins. Things will get trickier from here, because the number
of sequences rapidly goes up. With three coins there will be `r 2^3` possible
sequence. With four coins there will be `r 2^4` sequences. And with five coins
there will be `r 2^5` possible sequences. To make things easier, we'll draw a
plot. First, we'll draw out a plot to trace the sequences. We'll use different
coloured dots to indicate heads and tails. We can do this in the form of a
branching tree diagram shown in @fig-sequences.

Once we've visualised the sequences, it's easy to count up how many sequences
result in 0 heads, one head, two heads etc. For this, we'll make a frequency
plot, or histogram, just like we've seen before. On the x-axis, we'll have the
number of heads. And on the y-axis, we'll have the number of sequences that
result in that number of heads. This frequency plot is shown in @fig-binomdist.


```{ojs}
//| echo: false
import {viewof sequences} from "@ljcolling/simple-binomial"
import {viewof coin_flip_dist} from "@ljcolling/simple-binomial"
import {viewof coins} from "@ljcolling/simple-binomial"
import {coins_label} from "@ljcolling/simple-binomial"
```

```{ojs}
//| echo: false
//| label: fig-sequences
//| fig-cap: Possible sequences after ${coins - 1} coin flips
//| panel: fill
viewof sequences
```


```{ojs}
//| echo: false
//| panel: fill
//| label: fig-binomdist
//| fig-cap: Distribution of number of heads after ${coins - 1} coin flips
viewof coin_flip_dist
```

```{ojs}
//| echo: false
//| width: 100%
//| panel: input
coins_label
viewof coins
```


Neither @fig-sequences nor @fig-binomdist look very interesting at the moment.
But that's because we haven't started flipping any coins. Move the slider above
so that you can see what happens after we've flipped one coin, two coins, three
coins etc. 

Increasing the number of coin flips increases the number of possible
sequences. And it changes the number of ways of getting one head, two heads,
three heads and so on. Notice that as you adjust the slider and add
more and more coin flips, the frequency plot takes on a characteristic shape. You
can mathematically model the shape of this plot using a **binomial
distribution**.

The binomial distribution is just an **idealised representation** of the
**process** that **generates** sequences of heads and tails when we flip a coin.
It tells us that if we flip a coin a certain number of times, and that coin
lands head 50% of the time, then there is a particular number of sequences that
will produce 0 heads, 1 head, 2 heads etc. And the shape of the distribution
tells us how many sequences will produce each of those outcomes. We'll encounter
the binomial distribution again when we talk about probability, but for now
hopefully the intuition make sense.

I said it's an **idealised** representation, but we can also see that
stereotypical shape being produced by natural processes. One natural process
that gives rise to this shape is the "bean machine". In a bean machine, small
steel balls fall from the top of the device to the bottom of the device. On
their way down, they bump into pegs. When one of the balls hits a peg, it has a
roughly equal chance of bouncing off to the left or the right. At the bottom of
the device are equally-spaced bins for collecting the balls. If enough balls are
dropped into the device, then the **distribution** of balls across the bins will
start to take on the shape of the **binomial distribution**. Very few balls will
be at the far edges, because this would require the balls to bounce left or
right every time. Instead, most of the balls will tend to be clumped somewhere
near the middle. You can see an example of a "bean machine" in @fig-bean.

```{r}
#| echo: false
#| message: false
#| fig.cap: Example of the bean machine
#| label: fig-bean
require(htmltools)
vid <- tags$video(width = "100%", controls = NA)
# source <- tags$source(src = here::here("images","bean_machine.webm"), type = "video/webm")
source <- tags$source(src = "../../../images/bean_machine.webm", type = "video/webm")
vid$children = source
vid
```

Flipping coins might seem a long way off from anything you might want to study in
psychology. However, the **shape** of the binomial distribution, might be
something you're more familiar with. This characteristic **bell shape** is also
something we see in the **normal distribution**. And it's the **normal
distribution** which we'll turn our attention to next.

## The normal distribution

The **normal distribution** has a similar shape to the **binomial
distribution**; however, there are a few key differences. First, the binomial
distribution is **bounded**. One end represents 0 heads. And the other end
represents all heads. That is, the distribution can only range from 0 to n
(where n is the number of coins). The **normal distribution**, however, is
unbounded. It can range from **positive infinity** to **negative infinity**. The
second difference is that for the binomial distribution, the steps along the
x-axis are **discrete**. You can have 0 heads, 1 head, 2 heads etc. But you
can't get 1.5 heads. But for the **normal distribution**, the steps are
**continuous**.

The **normal distribution** is a mathematical abstraction, but we can use it as
a **model** of real-life frequency distributions. That is, we can use it as a
model of **populations** that are produced by certain kinds of natural
processes. Because normal distributions are unbounded and continuous, nothing,
in reality, is normally distributed. For example, it's impossible to have
infinity or negative infinity of anything. This is what is meant by an
**abstraction**. But natural processes can give rise to frequency distributions
that look a lot like normal distributions, which means that normal
distributions can be used as a model of these processes. Before 
we talk more about the shape of the normal distribution, let us first 
examine some processes that give rise to normal distributions.


### Processes that produce normal distributions 

To see how a natural process can give rise to a normal distribution, let us
play a board game! We won't play it for real, but we'll *simulate* it. 

In this game, each player rolls the dice a certain number of times, and they
move the number of spaces indicated by the dice. Not that dissimilar to what
you'd do in a game of monopoly, or a similar board game! For example, if a
player rolled the die three times, and they got 1, 4, 3, then they would move
`r 1 + 4 + 3` (1 + 4 + 3 = `r 1 + 4 - 4`) spaces along the board. At the end of
one round of rolls we can take a look at how far from the start each player is.
And we can draw a histogram of this data. You can explore the simulation in
@exm-dice-plus.



::::{.callout-tip icon="false" appearance="simple"}

:::{#exm-dice-plus}
#### Dice game simulation (adding)
:::

In the simulation, you can set the number of players and the number of rounds
they play. We'll start off by just having 10 players, and each player will roll
the 1 dice/play 1 round. Next try setting the _Number of rounds_ to **2** and
then increasing the _Number of players_. What do you notice? You can also try
increasing the _Number of rounds_ so that it's more than **2**. What do you
notice?


```{ojs}
//| echo: false
import {simple_dice_plot} from "@ljcolling/simple-normal"
import {viewof n_dice} from "@ljcolling/simple-normal"
import {viewof n_players} from "@ljcolling/simple-normal"
```

```{ojs}
//| echo: false
simple_dice_plot
```

```{ojs}
//| echo: false
//| panel: input
//| layout-ncol: 2
viewof n_dice
viewof n_players
```

::::


What is it about the dice game that gives rise to the normal distribution
shape? In the dice game each players position is determined by **adding up**
the value of each roll. This **adding up** is the key feature that determines
the shape of the distribution of the players' scores. Notice that this is also
what we did with coin flips. We **added up** the number of heads. It doesn't
matter whether we're adding up the number of heads or the outcomes of dice
rolls. It's simply the fact that each final value (number of heads or places
from start) is determined by adding up numbers that matters.

We can imagine other processes that might work similarly to the dice game. For
example, a **developmental process** might work similarly. Let's say that we
have a developmental process like height. At each **point in time** some
**value** (growth) can be **added** on to a person's current height. That is,
at each time point a person can **grow** by some amount just like each players'
score can increase by some amount with each dice roll. In you have enough
people, and some time for growth to happen, then the **distribution** of
**height** will start to look like a normal distribution.


#### Processes that don't produce normal distributions

I've said that the key factor that gives rise to the normal distribution
is that outcomes are determined by **adding** together numbers^[Or **subtracting**,
because **subtracting** is just adding negative numbers]. We can test out this 
idea by changing the rules of the dice game so that instead of **adding** together
numbers we'll **multiply** them,


In @exm-dice-mult we've changed the rules so that each players' score is
determined by multiplying together the values of their rolls. For example,
under the new rules, if a player rolled 1, 4, 3 then their score would be 12 (1
× 4 × 3 = `r 1 * 4 * 3`). Explore what happens to the shape of the distribution
under these new rules.



::::{.callout-tip icon="false" appearance="simple"}

:::{#exm-dice-mult}
#### Dice game simulation (multiplying)
:::

As with the previous simulation you can set the number of players and the
number of rounds they play. Notice how the shape of the distribution differs
from the shape of the normal distribution.

```{ojs}
//| echo: false
import {dice_plot_mult} from "@ljcolling/simple-normal"
import {viewof n_dice_mult} from "@ljcolling/simple-normal"
import {viewof n_players_mult} from "@ljcolling/simple-normal"
```


```{ojs}
//| echo: false
dice_plot_mult
```

```{ojs}
//| echo: false
//| panel: input
//| layout-ncol: 2
viewof n_dice_mult
viewof n_players_mult
```



::::


```{r}
#| echo: false
GBP <- scales::dollar_format(prefix = "£")
```

In the new version of the dice game the distribution of scores doesn't look
like a normal distribution. After only a few rounds you start seeing a few
players with very hight scores, but most of the players are clumped around near
the start. You might notice that this plot looks a little bit like the plot we
saw in Lecture 6 of the Average Annual Salary across a set of 79 countries.
This is maybe not a total coincidence. Can you think of a process that might
operate with similar rules as this game? How about interest, or returns on
investments?

When you get a 10% annual return on an investment, and you start with £10, then 
after 1 year you'll have 10 × 1.10 or `r GBP(10 * 1.10)`. After two years, you'll 
have (10 × 1.10) × 1.10 or `r GBP((10 * 1.10) * 1.10)`. 

Given this, it's not surprising to see wealth distributions (whether across
countries in the form of national salaries or within countries) to be heavily
skewed in a manner resembling the outcomes of the dice game in @exm-dice-mult.
It's simply a consequence of the rules of the game where wealth accumulated
more wealth by multiplication! And in our dice game, this skewed distribution
happens even though each players in rolling the same set of dice. A lucky few
rolls at the start of the game and they show players get so far ahead that
they'll never get caught by the remaining players stuck down near the bottom.


In psychology, we won't study many processes that grow like this, 
but it is an interesting exercise thinking about these processes. 


### Describing normal distributions

The normal distribution has a characteristic bell shape, but not all normal
distributions are identical. They can vary in terms of where they're centered
and how spread out they are. We're already talked about measures of central
tendency and measures of spread. In particular, we've talked about the mean and
standard deviation, and these are what we use to describe the shape of the
normal distribution.

The mean ($\mu$) determines where the centre is, and the standard deviation
($\sigma$) determines how spread out it is. Use @exm-norm to explore the
**normal distribution**.

::::{.callout-tip icon="false" appearance="simple"}

:::{#exm-norm}
#### Explore the normal distribution
:::

Use the sliders to make adjustments to the $\mu$ and $\sigma$ and see how the
plot of the normal distribution changes.

```{ojs}
//| echo: false
import {normal_plot_output} from "@ljcolling/distribution-shapes"
import {normal_sliders} from "@ljcolling/distribution-shapes"
import {normal_description} from "@ljcolling/distribution-shapes"
normal_plot_output
```

\
```{ojs}
//| echo: false
//| panel: input
normal_sliders
```

```{ojs}
//| echo: false
normal_description
```

::::

<!-- FIXME: Finish stuff on this, and include visualisation -->

<!-- TODO: 
And include stuff here about how we can change the mean and the sd, but the
overall shape remains the same. Also talk about how if something is normally
distributed then we know a certain "amount" of the distribution will lie within
the x deviations from the mean
-->

### Describing departures from the normal distribution.

When we looked at the example of the game where a players score was based on
**multiplying** together the dice rolls, it produced a distribution that was
**skewed**.

**Skew** is a technical term that describes one way in which
a distribution can _deviate_ from a _normal distribution_. The _normal
distribution_ is **symmetrical**, but a **skew** distribution is not. A
left-skewed distribution has a longer _left tail_, and a **right-skewed**
distribution has a longer _right tail_. Use @exm-skew to explore
**skewness**.

::::{.callout-tip icon="false" appearance="simple"}

:::{#exm-skew}
#### Explore Skewness
:::

Use the slider to make adjustments to the skewness of the distribution. Slide it
to the *left* to add **left-skew** and slide it to the *right* to add
**right-skew**. See how the distribution changes.

```{ojs}
//| echo: false
import {skew_normal_plot_output} from "@ljcolling/distribution-shapes"
import {viewof skew} from "@ljcolling/distribution-shapes"
skew_normal_plot_output
```

\
```{ojs}
//| echo: false
//| panel: input
viewof skew
```

```{ojs}
//| echo: false
import {skew_desc} from "@ljcolling/distribution-shapes"
skew_desc
```

::::


<!-- FIXME: Add visualisation -->

Apart from **skew**, deviations from the **normal** distribution can occur when
a distribution either has fatter or skinnier **tails** than the normal
distribution. The _tailedness_ of a distribution is given by its **kurtosis**.
The kurtosis of a distribution is often specified with reference to the **normal
distribution**. In this case, what is being reported is **excess** kurtosis. A
distribution with **positive excess kurtosis** has a higher kurtosis value than
the normal distribution, and a distribution with **negative excess kurtosis**
has a lower kurtosis value than the normal distribution.

 Distributions with no excess kurtosis are called **mesokurtic**. Distributions
 with negative excess kurtosis are called **platykurtic**. And distributions
 with positive excess kurtosis are called **leptokurtic**.

 In your research methods courses, you probably won't come across many
 distributions that have negative excess kurtosis. However, the distribution
 that describes dice rolls is one such distribution, and this will be discussed
 briefly later in this course. You will encounter distributions with positive
 excess kurtosis more often. In particular, the _t_-distributions, a
 distribution with positive excess kurtosis, will be used in several of the
 statistical procedures that you will learn about next year. Use @exm-kurt to
 explore excess kurtosis.

::::{.callout-tip icon="false" appearance="simple"}

:::{#exm-kurt}
#### Explore kurtosis
:::

Use the slider to adjust the excess kurtosis. A standard normal distribution
with an excess kurtosis of 0 is shown for reference.

```{ojs}
//| echo: false
import {kurtosis_plot} from "@ljcolling/distribution-shapes"
import {viewof kurtosis_value} from "@ljcolling/distribution-shapes"
import {kurtosis_desc} from "@ljcolling/distribution-shapes"
kurtosis_plot
```

\
```{ojs}
//|echo: false
//| panel: input
viewof kurtosis_value
```

```{ojs}
//|echo: false
kurtosis_desc
```
::::


## Distributions and samples 

Now that we've talked a little bit about samples and populations (in Lecture 6
and Lecture 7) and we've also covered distributions, we're going to start putting these
ideas together. We saw that whenever we looked at the distribution of values
where the values were produced by **adding up numbers** we got something that
looked like a normal distribution.

When we covered the **sample mean** in Lecture 6, the formula was as shown
in @eq-mean, below:

$$\bar{x}=\frac{\displaystyle\sum^{N}_{i=1}{x_i}}{N}$$ {#eq-mean}

This formula can be re-written as shown in @eq-mean-sum, below:

$$\bar{x}={\displaystyle\sum^{N}_{i=1}{\frac{x_i}{N}}}$$ {#eq-mean-sum}

What @eq-mean-sum makes clear is that calculating a mean is just **adding up
numbers**. Now let's thing about taking lots of samples from a population. And
for each sample, we calculate the sample mean. If we had to plot these sample
means, then what would the distribution look like? That's right, the
**distribution** of **sample means** should be shaped like a normal
distribution!

We can try this out. Let's say that we want to measure some phenomenon---for
example, score on some standardised reading test. We collect a sample of data
from sample of children and we work out the **mean of this sample**. But instead
of collecting 

TODO: Note that the sampling distribution isn't the **distribution of the
sample**. The **sampling distribution** is a distribution of many individual
sample means. Some samples might look roughly normally distribution, and some 
samples won't.

<!-- show a single sample -->
<!-- TODO: Location of animations -->
<!-- https://observablehq.com/@ljcolling/central-limit -->

As long as the sample size is sufficiently large then the **sampling
distribution (of the mean)** will have a normal distribution. 

Note also that the **sampling distribution of the mean** isn't the same as the
distribution of the **population**. The population distribution can have any
shape, as long as the samples are sufficiently large then the **sampling
distribution of the mean** will have a normal distribution.


The words **sufficiently large** appear to be doing a lot of work in what I've
just said. So what exactly does **sufficiently large** mean? Like a lot of
things in statistics, it depends! Specifically, it depends on the population
distribution. In the population is perfectly normally distributed then a sample
size of 1 is sufficient. But if it's not, then you'll need bigger samples.
You'll often hear people suggest heuristics or rules of thumb for how big the
samples need to be. But I won't. I won't because I think people often end up
mistaking rules of thumb or actually hard and fast rules when they're not. So
you'll have to make do with the ambiguity of **sufficiently large**!

<!-- TODO: Generate different populations?  -->