---
_id: yTuPAtcPHSpc9r3kA
title: Impact Measures
href: https://lesswrong.com/tag/impact-measures
slug: impact-measures
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:04:00.441Z'
---
# Impact Measures

**Impact measures** penalize an AI for affecting us too much.  To reduce the risk posed by a powerful AI, you might want to make it try accomplish its goals with as little impact on the world as possible. You reward the AI for crossing a room; to maximize time-discounted total reward, the optimal policy makes a huge mess as it sprints to the other side.  
  
How do you rigorously define "low impact" in a way that a computer can understand – how do you measure impact? These questions are important for both prosaic and future AI systems: objective specification [is](https://www.lesswrong.com/posts/EbFABnst8LsidYs5Y/goodhart-taxonomy) [hard](https://www.lesswrong.com/posts/7b2RJJQ76hjZwarnj/specification-gaming-the-flip-side-of-ai-ingenuity); we don't want AI systems to rampantly disrupt their environment. In the limit of goal-directed intelligence, [theorems suggest that seeking power tends to be optimal](https://www.lesswrong.com/posts/6DuJxY8X45Sco4bS2/seeking-power-is-often-provably-instrumentally-convergent-in); we don't want highly capable AI systems to permanently wrench control of the future from us. 

Currently, impact measurement research focuses on two approaches:

- [Relative reachability](https://arxiv.org/pdf/1806.01186.pdf): the AI preserves its ability to reach many kinds of world-states. The hope is that by staying able to reach many goal states, the AI stays able to reach the correct goal state.
- [Attainable](https://arxiv.org/abs/2006.06547) [utility](https://arxiv.org/abs/1902.09725) [preservation](https://www.lesswrong.com/posts/75oMAADr4265AGK3L/attainable-utility-preservation-concepts): the AI preserves its ability to achieve one or more auxiliary goals. The hope is that by penalizing gaining or losing control over the future, the AI doesn't take control away from us.

For a review of earlier work, see [A Survey of Early Impact Measures](https://www.lesswrong.com/s/nMGrhBYXWjPhZoyNL/p/TPy4RJvzogqqupDKk). 

Sequences on impact measurement:

- [Reframing Impact](https://www.lesswrong.com/s/7CdoznhJaLEKHwvJW): we're impacted when we become more or less able to achieve our goals. Seemingly, goal-directed AI systems are only incentivized to catastrophically impact us in order to gain power to achieve their own goals. To avoid catastrophic impact, what if we penalize the AI for gaining power?
- [Subagents and Impact Measures](https://www.lesswrong.com/s/iRwYCpcAXuFD24tHh) explores how subagents can circumvent current impact measure formalizations.

Related tags: [[Instrumental Convergence]], [[Corrigibility]], [[Mild Optimization]].