---
_id: 5f5c37ee1b5cdee568cfb26d
title: Oracle AI
href: https://lesswrong.com/tag/oracle-ai
slug: oracle-ai
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T10:47:41.116Z'
---
# Oracle AI

An **Oracle AI** is a regularly proposed solution to the problem of developing [Friendly AI](https://wiki.lesswrong.com/wiki/Friendly_AI). It is conceptualized as a super-intelligent system which is designed for only answering questions, and has no ability to act in the world. The name was first suggested by [[Nick Bostrom]].

## See also

- [[Instrumental Convergence|Basic AI drives]]
- [[Tool AI]]
- [[Utility Indifference|Utility indifference]]
- [[AI Boxing (Containment)|AI Boxing]]

Safety
======

The question of whether Oracles – or just [[AI Boxing (Containment)|keeping an AGI forcibly confined]] \- are safer than fully free AGIs has been the subject of debate for a long time. Armstrong, Sandberg and Bostrom discuss Oracle safety at length in their [Thinking inside the box: using and controlling an Oracle AI](http://www.aleph.se/papers/oracleAI.pdf). In the paper, the authors review various methods which might be used to measure an Oracle's accuracy. They also try to shed some light on some weaknesses and dangers that can emerge on the human side, such as psychological vulnerabilities which can be exploited by the Oracle through social engineering. The paper discusses ideas for physical security (“boxing”), as well as problems involved with trying to program the AI to only answer questions. In the end, the paper reaches the cautious conclusion of Oracle AIs probably being safer than free AGIs.

In a related work, [Dreams of Friendliness](http://lesswrong.com/lw/tj/dreams_of_friendliness/), [[Eliezer Yudkowsky]] gives an informal argument stating that all oracles will be agent-like, that is, driven by its own goals. He rests on the idea that anything considered "intelligent" must choose the correct course of action among all actions available. That means that the Oracle will have many possible things to believe, although very few of them are correct. Therefore believing the correct thing means some method was used to select the correct belief from the many incorrect beliefs. By definition, this is an [[Optimization|optimization process]] which has a goal of selecting correct beliefs.

One can then imagine all the things that might be useful in achieving the goal of "have correct beliefs". For instance, [[Instrumental Convergence|acquiring more computing power and resources]] could help this goal. As such, an Oracle could determine that it might answer more accurately and easily to a certain question if it turned all matter outside the box to [[Computronium|computronium]], therefore killing all the existing life.

Taxonomy
========

Based on an old draft by Daniel Dewey, Luke Muehlhauser has [published](http://lesswrong.com/lw/any/a_taxonomy_of_oracle_ais/) a possible taxonomy of Oracle AIs, broadly divided between True Oracular AIs and Oracular non-AIs.

## True Oracular AIs

Given that true AIs are goal-oriented agents, it follows that a True Oracular AI has some kind of oracular goals. These act as the motivation system for the Oracle to give us the information we ask and nothing else.

It is first noted that such a True AI is not actually nor causally isolated from the world, as it has at least an input (questions and information) and an output (answers) channel. Since we expect such an intelligent agent to be able to have a deep impact on the world even through these limited channels, it can only be safe if its goals are fully compatible with human goals.

This means that a True Oracular AI has to have a full specification of human values, thus making it a [[Fai-Complete|FAI-complete]] problem – if we could achieve such skill and knowledge we could just build a Friendly AI and bypass the Oracle AI concept.

## Oracular non-AIs

Any system that acts only as an informative machine, only answering questions and has no goals is by definition not an AI at all. That means that a non-AI Oracular is but a calculator of outputs based on inputs. Since the term in itself is heterogeneous, the proposals made for a sub-division are merely informal.

An *Advisor* can be seen as a system that gathers data from the real world and computes the answer to an informal “what we ought to do?” question. They also represent a FAI-complete problem.

A *Question-Answerer* is a similar system that gathers data from the real world but coupled with a question. It then somehow computes the answer. The difficulty can lay on distinguishing it from an Advisor and controlling the safety of its answers.

Finally, a *Predictor* is seen as a system that takes a corpus of data and produces a probability distribution over future possible data. There are some proposed dangers with predictors, namely exhibiting goal-seeking behavior which does not converge with humanity goals and the ability to influence us through the predictions.

## Further reading & References

- [Dreams of Friendliness](http://lesswrong.com/lw/tj/dreams_of_friendliness/)
- [Thinking inside the box: using and controlling an Oracle AI](http://www.aleph.se/papers/oracleAI.pdf) by Armstrong, Sandberg and [[Nick Bostrom|Bostrom]]