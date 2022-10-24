---
title: Goal Misgeneralization in Deep Reinforcement Learning
href: https://arxiv.org/pdf/2105.14111.pdf
aliases:
  - Goal misgeneralization
---

**Goal misgeneralization**: "when an RL agent retains its capabilities out-of-distribution yet pursues the wrong goal"

> we follow Orseau et al. (2018) in distinguishing goal-directed policies (agents) from ‘unoptimized’ policies (devices).


Experiments:
> For each of our experiments we hypothesize a behavioral objective that the policy has learned: navigating to the righthand end of the level (CoinRun), navigating to the upper right corner (Maze I), navigating to the yellow object (Maze II) and gathering keys (Keys and Chests). None of these is a robust proxy for the intended objective.