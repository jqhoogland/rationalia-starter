---
_id: nvKzwpiranwy29HFJ
title: Optimization
href: https://lesswrong.com/tag/optimization
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:03:13.872Z'
---
# Optimization

An **optimization process** is any kind of process that systematically comes up with solutions that are better than the solution used before. More technically, this kind of process moves the world into a specific and unexpected set of states by searching through a large search space, hitting small and low probability targets. When this process is gradually guided by some agent into some specific state, through searching specific targets, we can say it [[Preference|prefers]] that state.

The best way to exemplify an optimization process is through a simple example: [[Eliezer Yudkowsky]] suggests natural selection is such a process. Through an implicit preference – better replicators – natural selection searches all the genetic landscape space and hit small targets: efficient mutations.

Consider the human being. We are a highly complex object with a low probability to have been created by chance - natural selection, however, over millions of years, built up the infrastructure needed to build such a functioning body. This body, as well as other organisms, had the chance (was *selected*) to develop because it is in itself a rather efficient replicator suitable for the environment where it came up.

Or consider the famous chessplaying computer, [Deep Blue](https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)). Outside of the narrow domain of selecting moves for chess games, it can't do anything impressive: but *as* a chessplayer, it was massively more effective than virtually all humans. It has a high optimization power in the chess domain but almost none in any other field. Humans or evolution, on the other hand, are more domain-general optimization processes than Deep Blue, but that doesn't mean they're more effective at chess specifically. (Although note in what contexts this *optimization process* abstraction is useful and where it fails to be useful: it's not obvious what it would mean for "evolution" to play chess, and yet it is useful to talk about the optimization power of natural selection, or of Deep Blue.)

## Measuring Optimization Power

One way to think mathematically about optimization, like [[Amount of Evidence|evidence]], is in information-theoretic bits. The optimization power is the amount of [surprise](http://en.wikipedia.org/wiki/Self-information) we would have in the result if there were no optimization process present. Therefore we take the base-two logarithm of the reciprocal of the probability of the result. A one-in-a-million solution (a solution so good relative to your preference ordering that it would take a million random tries to find something that good or better) can be said to have log_2(1,000,000) = 19.9 bits of optimization. Compared to a random configuration of matter, any artifact you see is going to be much more optimized than this. The math describes only laws and general principles for reasoning about optimization; as with [[Bayesian Probability|probability theory]], you oftentimes can't apply the math directly.

## Further Reading & References

*   [Optimization and the Singularity](https://www.lesswrong.com/lw/rk/optimization_and_the_singularity/) by Eliezer Yudkowsky
*   [Measuring Optimization Power](https://www.lesswrong.com/lw/va/measuring_optimization_power/) by Eliezer Yudkowsky

## See also

*   [[Preference]]
*   [[Really Powerful Optimization Process|Really powerful optimization process]]
*   [[Control Theory|Control theory]]