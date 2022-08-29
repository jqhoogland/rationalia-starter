---
_id: HNJiR8Jzafsv8cHrC
title: Pascal's Mugging
href: https://lesswrong.com/tag/pascal-s-mugging
slug: pascal-s-mugging
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T10:59:51.264Z'
---
# Pascal's Mugging

**Pascal's mugging** refers to a [thought experiment](https://wiki.lesswrong.com/wiki/thought_experiment) in decision theory, a finite analogue of [Pascal's wager](https://en.wikipedia.org/wiki/Pascal's_wager).

> *Suppose someone comes to me and says, "Give me five dollars, or I'll use my magic powers from outside the Matrix to run a Turing machine that simulates and kills 3^^^^3 people.* – [Pascal's Mugging: Tiny Probabilities of Vast Utilities](https://www.lesswrong.com/posts/a5JAiTdytou3Jg749/pascal-s-mugging-tiny-probabilities-of-vast-utilities)

*See also*: [[Decision Theory|Decision theory]], [[Counterfactual Mugging]], [[Shut Up and Multiply|Shut up and multiply]], [[Expected Utility]], [[Utilitarianism]], [[Scope Insensitivity]]

Unpacking the theory behind Pascal's Mugging:

A rational agent chooses those actions with outcomes that, after being weighted by their probabilities, have a greater [[Utility|utility]] \- in other words, those actions with greater [[Expected Utility|expected utility]]. If an agent's utilities over outcomes can potentially grow much faster than the probability of those outcomes diminishes, then it will be dominated by tiny probabilities of hugely important outcomes; speculations about low-probability-high-stakes scenarios will come to dominate its moral decision making.

A common method an agent could use to assign [prior](https://wiki.lesswrong.com/wiki/prior) probabilities to outcomes is [[Solomonoff Induction|Solomonoff induction]], which gives a prior inversely proportional to the length of the outcome's description. Some outcomes can have a very short description but correspond to an event with enormous utility (i.e.: saving [3^^^^3](https://wiki.lesswrong.com/wiki/3%5E%5E%5E%5E3) lives), hence they would have non-negligible prior probabilities but a huge utility. The agent would always have to take those kinds of actions with far-fetched results, that have low but non-negligible probabilities but extremely high returns.

This is seen as an unreasonable result. Intuitively, one is not inclined to acquiesce to the mugger's demands - or even pay all that much attention one way or another - but what kind of prior does this imply?

[[Robin Hanson]] has suggested penalizing the prior probability of hypotheses which argue that we are in a *surprisingly unique* position to affect large numbers of other people who cannot symmetrically affect us. Since only one in 3^^^^3 people can be in a unique position to ordain the existence of at least 3^^^^3 other people who can't have a symmetrical effect on this one person, the prior probability would be penalized by a factor on the same order as the utility.

Peter de Blanc has proven [\[1\]](http://arxiv.org/abs/0712.4318) that if an agent assigns a finite probability to all computable hypotheses and assigns unboundedly large finite utilities over certain environment inputs, then the expected utility of any outcome is undefined. Peter de Blanc's paper, and the Pascal's Mugging argument, are sometimes misinterpreted as showing that any agent with an *unbounded finite utility function* over outcomes is not consistent, but this has yet to be demonstrated. The unreasonable result can also be seen as an argument against the use of Solomonoff induction for weighting prior probabilities.

If an outcome with infinite utility is presented, then it doesn't matter how small its probability is: all actions which lead to that outcome will have to dominate the agent's behavior. This infinite case was stated by 17th century philosopher Blaise Pascal and named [Pascal's wager](https://en.wikipedia.org/wiki/Pascal's_wager). Many other abnormalities arise when dealing with [[Infinities In Ethics|infinities in ethics]].

## Notable Posts

- [Pascal's Mugging: Tiny Probabilities of Vast Utilities](https://www.lesswrong.com/lw/kd/pascals_mugging_tiny_probabilities_of_vast/)
- [Pascal's Muggle: Infinitesimal Priors and Strong Evidence](https://www.lesswrong.com/lw/h8k/pascals_muggle_infinitesimal_priors_and_strong/)

## References

1.  Peter de Blanc (2007). [*Convergence of Expected Utilities with Algorithmic Probability Distributions*](http://arxiv.org/abs/0712.4318).
2.  Nick Bostrom (2009). "Pascal's Mugging". *Analysis* **69** (3): 443-445. ([PDF](http://www.nickbostrom.com/papers/pascal.pdf))