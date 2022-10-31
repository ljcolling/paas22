
We saw that whenever we look at the distribution of values where the values are
produced by **adding up numbers** we get something that looks like a normal
distribution. And we saw that when we worked out the **mean of a sample of
data** we did this by **adding up all the values** and then _dividing that
number by the number of values_.

Let's say that we want to measure some phenomenon---for example, scores on some
standardised reading tests. We collect a sample of data from 50 children, and
then we work out the **mean of this sample**, by **adding up the 50 scores** and
then dividing this value by 50. Now let's say that instead of only collecting
one sample, we collect 100,000 samples. We work out the **mean** for _each
sample_. And we then draw a histogram of the means for our 100,000 samples. What
will this distribution look like? In our games, any time we added up numbers, as
long as we added enough numbers, and we had a large enough set of
players, then we'd get a normal distribution.

The same goes for our sample. As long as we add up enough numbers (our sample
size) and we have enough samples (think, number of players) then the
distribution of the means (the distribution of the players scores) will be
**normally distribution**. This simple observation is fairly **central** in
statistics. So much so that it's called **the central limit theorem**.

### A distribution of our samples

The **distribution** of some statistic---for example, the **mean**---that we see
when repeatedly sample from the population is called **the sampling
distribution**. That's a bit of a mouthful, so we'll try to unpack it a bit.

Let us go back to example where we were working out the mean of a series of
dice rolls. In that example, we saw how the mean of our samples moved around
from sample to sample, so sometimes it was closer to the true mean, and
sometimes it was further away. We can see this in the box below.

 TODO: Add box

Now instead of looking at our sample means wiggle about from sample to sample,
we're just going to collect a lot of samples and then plot the distribution. We
can see that here:

TODO: Add box

TODO: Need to emphasise sample size where it starts to look normal

As we can see, the shape of the **sampling distribution of the mean** is
unsurprisingly a **normal distribution**. Other statistics have sampling
distributions too. For example, we could calculate the **variance** for each
sample, and we could plot the **sampling distribution of the variance**. The
sampling distribution of variance **won't** be normally distributed. Why?
Remember that whenever we add stuff up we get a normal distribution, and working
out a mean is just a special way of adding up numbers. When we work out a
**variance** we're not adding numbers up. If you look at the formula, you'll
notice that there's a $^2$ in there. That means we're doing some multiplying.
And we saw that when we were multiplying numbers instead of adding them, we got
a distribution that wasn't normally distributed.

 NOTE: Maybe pull the variance stuff out


 FIXME: Link to above somewhere
Because the sampling distribution of **the mean** is **normally distributed**
(assuming the sample size is large enough, see) it's centre and spread can be
described the same way as any other normal distribution. It will have a centre,
or **mean** that is _equal to the population mean_. And it will have a spread,
or **standard deviation** that is _proportional_ to the _sample size_ and the
_population standard deviation_.

### Standard error of the mean

The _standard deviation of the sampling distribution_ of the mean has a special
name. It is called the **standard error** of the mean. 
TODO: As we saw above, how spread out the individuals samples were was
determined by two things. First, how spread out the population was and,
two, the sample size of the samples.
The spread of these individual samples **is the standard error**.
Therefore, just as we saw above, we know that the **standard error**
will get smaller as the sample size goes up. And we know that the
**standard error** will go down as the **population standard deviation**
goes down. We can see how these two factors works together when we look
at the formula for the **standard error of the mean (SEM)** in @eq-sem.

$$\mathrm{SEM}=\frac{\sigma}{\sqrt{N}}$${#eq-sem}

<!-- TODO: Add explorer box -->

<!-- NOTE: Maybe something in here about the sampling distribution is useful -->

<!-- NOTE: --> 

<!-- next lecture (lecture 9) of Z score, and comparisons -->
