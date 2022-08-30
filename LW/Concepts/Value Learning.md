---
_id: NLwTnsH9RSotqXYLw
title: Value Learning
href: https://lesswrong.com/tag/value-learning
slug: value-learning
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:05:16.097Z'
---

# Value Learning

**Value learning** is a proposed method for incorporating human values in an [AGI](https://wiki.lesswrong.com/wiki/AGI). It involves the creation of an artificial learner whose actions consider many possible set of values and preferences, weighed by their likelihood. Value learning could prevent an AGI of having goals detrimental to human values, hence helping in the creation of [Friendly AI](https://wiki.lesswrong.com/wiki/Friendly_AI).

Although there are many ways to incorporate human values in an AGI (e.g.: [Coherent Extrapolated Volition](https://lessestwrong.com/tag/coherent-extrapolated-volition), [Coherent Aggregated Volition](https://lessestwrong.com/tag/coherent-aggregated-volition) and [Coherent Blended Volition](https://lessestwrong.com/tag/coherent-blended-volition)), this method is directly mentioned and developed in [Daniel Dewey’s](http://www.futuretech.ox.ac.uk/daniel-dewey) paper [‘Learning What to Value’](http://www.danieldewey.net/learning-what-to-value.pdf). Like most authors, he assumes that human’s goals would not naturally occur in an artificial agent and should be enforced in it. First, Dewey argues against the use of a simple use of [reinforcement learning](https://lessestwrong.com/tag/reinforcement-learning) to solve this problem, on the basis that this lead to the maximization of specific rewards that can diverge from value maximization. For example, even if we forcefully engineer the agent to maximize those rewards that also maximize human values, the agent could alter its environment to more easily produce those same rewards without the trouble of also maximizing human values (i.e.: if the reward was human happiness it could alter the human mind so it became happy with anything).

To solve all these problems, Dewey proposes a [utility function](https://lessestwrong.com/tag/utility-functions) maximizer, who considers all possible utility functions weighted by their probabilities: "\[W\]e propose uncertainty over utility functions. Instead of providing an agent one utility function up front, we provide an agent with a pool of possible utility functions and a probability distribution P such that each utility function can be assigned probability P(Ujyxm) given a particular interaction history \[yxm\]. An agent can then calculate an expected value over possible utility functions given a particular interaction history" He concludes saying that although it solves many of the mentioned problems, this method still leaves many open questions. However it should provide a direction for future work.

## References

- [Dewey’s paper](http://www.danieldewey.net/learning-what-to-value.pdf)

## See Also

- [Friendly AI](https://wiki.lesswrong.com/wiki/Friendly_AI)
- [Reinforcement learning](https://lessestwrong.com/tag/reinforcement-learning)
- [Value extrapolation](https://lessestwrong.com/tag/value-extrapolation)
- [Complexity of value](https://lessestwrong.com/tag/complexity-of-value)
- [Coherent Extrapolated Volition](https://lessestwrong.com/tag/coherent-extrapolated-volition)
- [Coherent Aggregated Volition](https://lessestwrong.com/tag/coherent-aggregated-volition)
- [Coherent Blended Volition](https://lessestwrong.com/tag/coherent-blended-volition)
