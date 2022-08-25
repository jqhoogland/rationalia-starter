---
tags: ['LessWrong', 'Concept']
href: https://www.lesswrong.com/tag/goal-directedness
aliases: [Goal directed behavior]
---

# Goal-Directedness
The property of some system to be aiming at some goal. In need of formalization, but might prove important in deciding which kind of AI to try to align.

A goal may be defined as a world-state that an agent tries to achieve. Goal-directed agents may generate internal representations of desired end states, compare them against their internal representation of the current state of the world, and formulate plans for navigating from the latter to the former.

The goal-generating function may be derived from a pre-programmed lookup table (for simple worlds), from directly inverting the agent's utility function (for simple utility functions), or it may be learned through experience mapping states to rewards and predicting which states will produce the largest rewards. The plan-generating algorithm could range from shortest-path algorithms like A* or Dijkstra's algorithm (for fully-representable world graphs), to policy functions that learn through RL which actions bring the current state closer to the goal state (for simple AI), to some combination or extrapolation (for more advanced AI)....[(Read More)]()

