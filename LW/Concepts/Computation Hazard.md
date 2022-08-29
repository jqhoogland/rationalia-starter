---
_id: 5f5c37ee1b5cdee568cfb2de
title: Computation Hazard
href: https://lesswrong.com/tag/computation-hazard
slug: computation-hazard
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:13:32.037Z'
---
# Computation Hazard

A **Computation Hazard** is a large possible negative consequence arising from vast amounts of complex computation [1](http://lesswrong.com/lw/d2f/computation_hazards/). It is a risk inherently more likely in any kind of vast amount of complex computation, since when a large number of computations and algorithms are run, more likely that some of these algorithms are a serious hazard. They aren't specific to a particular computation such as an example of a [unfriendly AI](https://wiki.lesswrong.com/wiki/unfriendly_AI).

Fewer and less complex computations are less probable to be a hazard, as a very short and simple program will most likely not be a computation hazard on a normal computer. Some computations will certainly be a hazard because (1) they will run almost all possible computations, hence almost all possible computational hazards (e.g.: a [[Solomonoff Induction|Solomonoff induction]] algorithm or any [Turing complete](https://en.wikipedia.org/wiki/Turing_complete) game simulation) or (2) they are particularly likely to run algorithms that are computation hazards (e.g.: agents, predictors and oracles). The first case doesn't have any kind of specificity, they are only a hazard since they will include the computations in the second case. The examples for the second case are analyzed in more detail bellow.

_Agents_ can be a hazard since they are defined by having the intention of maximizing a goal, and this goal may be detrimental to humanity, the most classical example been the [[Paperclip Maximizer|paperclip maximizer]] – an AGI with the solely goal of maximizing the total number of paper clips. [[Recursive Self-Improvement|Recursive self-improving]] agents are especially dangerous since their powers can grow rapidly and unpredictably. They also will probably need to simulate other agents (i.e.: humans) behavior, hence they would also present the hazard of simulating a lot of consciousness suffering. For example, imagine an agent that has to predict the behavior of humans while in pain. In other to do so, it may need to accurately simulate a large group of humans feeling pain, and it may do so in great detail to the point of instantiating actual conscious human suffering.

A _predictor_ is a computation which takes data as input, and predicts what data will come next. _Oracles_ are computations designed to answer questions, which can be predictions or questions about predictions. Ar first glance they may seem unharmful since they can't, in principle, have structured goals and a direct influence in the world. However, they can also be a hazard. A predictor may influence the world by trying to be more accurate, emitting predictions that are more likely to be true if they are emitted - self-fulfilling prophecies. Oracles or predictors might end up containing agents for several reasons: they might have to simulate agents whose behavior they are asked to predict; they may also simulate the minds of its creators in order to better answer their questions. While those agents inside a larger oracle/predictor could't directly influence the world for achieving their goal, they might be instantiating consciousnesses suffering. In addition, these agents may eventually start to self-improve and dominate the predictor/oracle behavior, thus having a direct impact on the world.

There are two main strategies one could follow to avoid these kinds of risk. First, to keep the computations small and simple until some clear reassurance of their safety is known. Second, to use some kind of agent detectors - similar to a [non-person predicates](http://lesswrong.com/lw/x4/nonperson_predicates/) -, which would ensure that a computation doesn't contain agents or persons.

## References

- [Alex Altair’s post defining and summarizing the material on Computation Hazards](http://lesswrong.com/lw/d2f/computation_hazards/)
- Armstrong S., Sandberg A., Bostrom N. (2012). “Thinking inside the box: using and controlling an Oracle AI”. Minds and Machines, forthcoming. Available at: [http://www.aleph.se/papers/oracleAI.pdf](http://www.aleph.se/papers/oracleAI.pdf)