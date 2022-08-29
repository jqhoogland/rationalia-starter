---
_id: 5f5c37ee1b5cdee568cfb2e4
title: Induction
href: https://lesswrong.com/tag/induction
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:05:43.486Z'
---
# Induction

**Induction** usually refers to a form of reasoning that has specific examples as premises and general propositions as conclusions. For example, arguments such as "Swans 1,2,3, …,_n_ are white, hence all swans are white", take the specific observations of a finite number (_n_) of swans been white to a general conclusion that all swan are whites.

Modern views of induction state that any form of reasoning where the conclusion isn't necessarily entailed in the premises is a form of inductive reasoning. Therefore, even inferences which proceed from general premises to specific conclusions can be inductive, for example "The sun has always risen, so it will also rise tomorrow". In contrast, in deductive reasoning the conclusions are logically entailed by the premises. Contrary to deduction, induction can be wrong since the conclusions depend on the way the world actually is, not merely on the logical structure of the argument.

The Problem of Induction
------------------------

There has historically been a problem with the justification of the validity of induction. Hume argued that the justification for induction could either be a deduction or an induction. Since deductive reasoning only results in necessary conclusions and inductions can fail, the justification for inductive reasoning could not be deductive. But any inductive justification would be circular[1](http://plato.stanford.edu/entries/induction-problem/#CanIndJus).

Probabilistic Induction
-----------------------

It’s possible to engage in probabilistic inductive reasoning, such as "95% of humans who ever lived have died; hence I’m going to die". This kind of reasoning employs [[Bayesian Probability|Bayesian probability]], in which case the conclusion is also a probability and induction is taken to be a way of updating your beliefs given evidence (finding out that most humans who have ever lived have died increases your probability that you will die).

[[Solomonoff Induction|Solomonoff induction]] is a formalization of the problem of induction which has been claimed to solve the problem of induction. It starts with all possible hypotheses (sequences) as represented by computer programs (that generate those sequences), weighted by their simplicity. It then proceeds to discard any hypotheses which are inconsistent with the data, and to update the probabilities of the remaining hypotheses.

Mathematical Induction
----------------------

[Mathematical induction](https://en.wikipedia.org/wiki/Mathematical_induction) is method of mathematical proof where one proves a statement holds for all possible n by showing it holds for the lowest _n_ and then that this statement if preserved by any operation which increases the value of _n_. For sets with finite members - or infinities members than can be indexed in the natural numbers -, it suffices to show the statement is preserved by the successor operation (If it is true for _n_, then it is true for'' n+1''). Because the conclusion is necessary given the premises, mathematical induction is taken to be a form of deductive reasoning and it isn't affected by the problem of induction.

See Also
--------

*   [Stanford Encyclopedia entry on the Problem of Induction](http://plato.stanford.edu/entries/induction-problem/)
*   [[Solomonoff Induction|Solomonoff induction]]
*   [[Rationality]]