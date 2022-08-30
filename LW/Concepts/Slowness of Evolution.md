---
_id: 5f5c37ee1b5cdee568cfb16c
title: Slowness of Evolution
href: https://lesswrong.com/tag/slowness-of-evolution
slug: slowness-of-evolution
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:06:08.000Z'
---

# Slowness of Evolution

**Evolution is slow**. Suppose a beneficial mutation which conveys a fitness advantage of 3%: on average, bearers of this gene have 1.03 times as many children as non-bearers. Spreading through a population of 100,000, such a gene would require an average of 768 generations to reach universality in the gene pool. A population of 500,000 would require 875 generations. The general formula is:

`   * Generations to fixation = 2 ln(**N**) / **s**`

where **N** is the population size, and (1 + **s**) is the fitness. (If each bearer of the gene has 1.03 times as many children as a non-bearer, **s** = 0.03.)

Thus, if **N** were 1,000,000 - the estimated global population in hunter-gatherer times - it would require 2763 generations for a gene conveying a 1% advantage to spread through the gene pool.

All this assumes that the gene spreads in the first place. Here the equation is simpler and ends up not depending at all on population size:

`   * Probability of fixation = 2**s**`

A mutation conveying a 3% advantage (which is pretty darned large, as mutations go) has a 6% chance of spreading, at least on that occasion. Mutations can happen more than once, but in a population of a million with a copying fidelity of 10^-8 errors per base per generation, you may have to wait a hundred generations for another (6%) chance.

*Complex, interdependent* adaptations take a very long time to evolve. First comes allele A, which is advantageous of itself, and requires a thousand generations to fixate in the gene pool. Only then can another allele B, which depends on A, begin rising to fixation. Suppose B confers a 5% advantage in the presence of A, no advantage otherwise. Then while A is still at 1% frequency in the population, B only confers its advantage 1 out of 100 times, so the average fitness advantage of B is 0.05%, and B's probability of fixation is 0.1%.

Contrast to a human programmer, who can design a new complex mechanism with a hundred interdependent parts over the course of a single afternoon.

The tremendously slow timescale of evolution, especially for creating new complex machinery (as opposed to selecting on *existing* variance), is why the behavior of evolved organisms is often better interpreted [in terms of what did in fact work yesterday, rather than what will work in the future](https://wiki.lesswrong.com/wiki/adaptation_executers).

## Main Article

- [Evolutions Are Stupid (But Work Anyway)](http://lesswrong.com/lw/kt/evolutions_are_stupid_but_work_anyway/)

## See Also

- [[Stupidity of Evolution|Stupidity of evolution]]
- [Adaptation executers](https://wiki.lesswrong.com/wiki/Adaptation_executers)
