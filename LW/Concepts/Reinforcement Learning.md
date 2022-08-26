---
title: Reinforcement Learning
href: https://lesswrong.com/tag/reinforcement-learning
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
---

Within the field of Machine Learning, **reinforcement learning** refers to the study of how an agent should choose its actions within an environment in order to maximize some kind of reward. Strongly inspired by the work developed in behavioral psychology it is essentially a trial and error approach to find the best strategy.

Related: [Inverse Reinforcement Learning](/tag/inverse-reinforcement-learning), [[Machine Learning  (ML)|Machine learning]], [Friendly AI](https://wiki.lesswrong.com/wiki/Friendly_AI), [[Game Theory]], [[Forecasting & Prediction|Prediction]]

Consider an agent that receives an input informing the agent of the environment's state. Based only on that information, the agent has to make a decision regarding which action to take, from a set, which will influence the state of the environment. This action will in itself change the state of the environment, which will result in a new input, and so on, each time also presenting the agent with the reward relative to its actions in the environment. The agent's goal is then to find the ideal strategy which will give the highest reward expectations over time, based on previous experience.

Exploration and Optimization
----------------------------

Knowing that randomly selecting the actions will result in poor performances, one of the biggest problems in reinforcement learning is *exploring* the avaliable set of responses to avoid getting stuck in sub-optimal choices and proceed to better ones.

This is the problem of exploration, which is best described in the most studied reinforcement learning problem - [the k-armed bandit](http://en.wikipedia.org/wiki/Multi-armed_bandit). In it, an agent has to decide which sequence of levers to pull in a gambling room, not having any information about the probabilities of winning in each machine besides the reward it receives each time. The problem revolves about deciding which is the optimal lever and what criteria defines the lever as such.

Parallel with an exploration implementation, it is still necessary to chose the criteria which makes a certain action optimal when compared to another. This study of this property has led to several methods, from brute forcing to taking into account temporal differences in the received reward. Despite this and the great results obtained by reinforcement methods in solving small problems, it suffers from a lack of scalability, having difficulties solving larger, close-to-human scenarios.

Further Reading & References
----------------------------

*   Sutton, Richard S.; Barto, Andrew G. (1998). [Reinforcement Learning: An Introduction](http://129.2.53.113/~poeppel/dp_papers/ivry_rev.pdf). MIT Press. ISBN 0-262-19398-1.
*   Kaelbling, L. P. , Littman, M. L. , Moore, A. W. (1996). [Reinforcement Learning: A Survey](http://arxiv.org/pdf/cs/9605103v1.pdf). Journal of Artificial Intelligence Research, Vol 4, (1996), 237-285

See Also
--------

*   [Machine learning](machine-learning)
*   [Friendly AI](https://wiki.lesswrong.com/wiki/Friendly_AI)
*   [Game theory](game-theory)
*   [Prediction](https://wiki.lesswrong.com/wiki/Prediction)