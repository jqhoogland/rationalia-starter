---
type: post
_id: zthDPAjh9w6Ytbeks
title: Deceptive Alignment
slug: deceptive-alignment
href: https://www.lesswrong.com/posts/zthDPAjh9w6Ytbeks/deceptive-alignment
synchedAt: '2022-09-04T18:59:59.688Z'
tags:
  - LessWrong
  - Post
  - Mesa-Optimization
  - AI
  - AI_Risk
  - Deceptive_Alignment
sequence: Risks from Learned Optimization
author: evhub
status: todo
---

# Deceptive Alignment

A form of [[misalignment]] in which models try to fool the training process into thinking that they’re doing the right thing.

Conditions (verbatim):
1.  The mesa-optimizer must have an **objective that extends across parameter updates**.\[[6](https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment#fn-xsRHpadWKiBheq9EK-6)\]
2.  The mesa-optimizer must be able to **model the fact that it is being selected to achieve a particular base objective and must have some model of what that objective i**s.\[[7](https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment#fn-xsRHpadWKiBheq9EK-7)\]
3.  The mesa-optimizer must **expect the threat of modification \[[8](https://www.alignmentforum.org/posts/zthDPAjh9w6Ytbeks/deceptive-alignment#fn-xsRHpadWKiBheq9EK-8)\] to eventually go away**, either due to training ending or because of actions taken by the mesa-optimizer.

Assuming that the long-term limit of training leads to the mesa-objective converging to the base objective. How would this happen?
- **"Internally aligned" - Robust alignment through internalization**. The objectives are actually the same.
- **Crystallization of deceptive alignment**. %% "Hume's Mugging" - the problem of induction but on the other side is a superintelligent adversarial agent. %%
- **"Corrigibly aligned" - Robust alignment through corrigibility**. Internal pointer to the base objective.

**Modeling might happen faster than internalization.**



# Related

- [[Mesa-Optimization]]
- [[AI]]
- [[AI Risk]]
- [[Deceptive Alignment]]
- [[Risks from Learned Optimization]]
- "[Risks from Learned Optimization in Advanced Machine Learning Systems](https://arxiv.org/abs/1906.01820)"
- "[(22)](https://intelligence.org/learned-optimization#bibliography)"
- "[(23)](https://intelligence.org/learned-optimization#bibliography)"
- "[(24)](https://intelligence.org/learned-optimization#bibliography)"
- "[(25)](https://intelligence.org/learned-optimization#bibliography)"
- "[the third post](https://www.alignmentforum.org/posts/pL56xPoniLvtMDQ4J/the-inner-alignment-problem)"
- "[(26)](https://intelligence.org/learned-optimization#bibliography)"
- "[(27)](https://intelligence.org/learned-optimization#bibliography)"
- "[here](https://www.alignmentforum.org/posts/4XPa3xa44jAWiCkmy/risks-from-learned-optimization-conclusion-and-related-work)"
- "[Glossary](https://intelligence.org/learned-optimization/#glossary)"
- "[Bibliography](https://intelligence.org/learned-optimization/#bibliography)"
