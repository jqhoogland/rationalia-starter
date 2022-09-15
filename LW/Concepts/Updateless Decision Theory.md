---
_id: 5f5c37ee1b5cdee568cfb1dc
title: Updateless Decision Theory
href: https://www.lesswrong.com/tag/updateless-decision-theory
slug: updateless-decision-theory
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:19.624Z'
status: todo
---

# Updateless Decision Theory

## Motivation

**Updateless Decision Theory** (UDT) is a decision theory meant to deal with a fundamental problem in the existing decision theories: the need to treat the agent as a part of the world in which it makes its decisions. In contrast, in the most common decision theory today, [[Causal Decision Theory]] (CDT), the deciding agent is not part of the world model--its decision is the output of the CDT, but the agent's decision in the world context is "magic": in the moment of deciding, no causal links feed into its chosen action. It acts as though its decision was causeless, as in some dualist free-will theories.

Getting this issue right is critical in building a self-improving artificial general intelligence, as such an AI must analyze its own behavior and that of a next generation that it may build.

Updateless Decision Theory was invented by [Wei Dai](https://www.lesswrong.com/users/wei_dai) and first described in [Towards a New Decision Theory](https://www.lesswrong.com/posts/de3xjFaACCAk6imzv/towards-a-new-decision-theory).

## See Also

- [[Timeless Decision Theory|Timeless decision theory]]
- [[Ambient Decision Theory|Ambient decision theory]]
- [[Counterfactual Mugging|Counterfactual mugging]]
- [[Decision Theory|Decision theory]]
- [Functional Decision Theory](https://www.lesswrong.com/posts/AGAGgoWymRhJ5Rqyv/functional-decision-theory-a-new-theory-of-instrumental)
- [[Embedded Agency]]

## Content

UDT specifies that the optimal agent is the one with the best algorithm--the best mapping from observations to actions--across a probability distribution of all world-histories. ("Best" here, as in other decision theories, means one that maximizes a utility/reward function.)

This definition may seem trivial, but in contrast, CDT says that an agent should choose the best \*option\* at any given moment, based on the effects of that action. As in [Judea Pearl's definition of causality](http://lesswrong.com/lw/emc/causality_a_chapter_by_chapter_review/), CDT ignores any causal links inbound to the decider, treating this agent as an uncaused cause. The agent is unconcerned about what evidence its decision may provide about the agent's own mental makeup--evidence which may suggest that the agent will make suboptimal decisions in other cases.

Evidential Decision Theory is the other leading decision theory today. It says that the agent should make the choice for which the expected utility, as calculated with Bayes' Rule, is the highest. EDT avoids CDT's pitfalls, but has its own flaw: It ignores the distinction between causation and correlation. In CDT, the agent is an uncaused cause, and in EDT, the converse: It is caused, but not a cause.

One valuable insight from EDT is reflected in "UDT 1.1" (see article by McAllister in references), a variant of UDT in which the agent takes into account that some of its algorithm (mapping from observations to actions) may be prespecified and not entirely in its control, so that it has to gather evidence and draw conclusions about part of its own mental makeup. The difference between UDT 1.0 and 1.1 is that UDT 1.1 iterates over policies, whereas UDT 1.0 iterates over actions. 

Both UDT and [[Timeless Decision Theory]] (TDT) make decisions on the basis of what you would have pre-committed to. The difference is that UDT asks what you would have pre-committed to without the benefit of any observations you have made about the universe, while TDT asks what you would have pre-committed to give all information you've observed so far. This means that UDT pays in [[Counterfactual Mugging]], while TDT does not.

UDT is very similar to Functional Decision Theory (FDT), but there are differences. FDT doesn't include the UDT1.1 fix and Nate Soares [states](https://www.lesswrong.com/posts/2THFt7BChfCgwYDeA/let-s-discuss-functional-decision-theory?commentId=LzPH8utKGSf97NihW): "Wei Dai doesn't endorse FDT's focus on causal-graph-style counterpossible reasoning; IIRC he's holding out for an approach to counterpossible reasoning that falls out of evidential-style conditioning on a logically uncertain distribution". Rob Bensinger says that he's heard UDT described as "FDT + a theory of anthropics".

Since it is formalised using input-output maps instead of in terms of situations, it allows us to make predictions about what an agent would do given [input representing an inconsistent situation](https://www.lesswrong.com/posts/EXtzy3v4soZcoZjuH/a-short-note-on-udt), which can be important when dealing with perfect predictors.

## Logical Uncertainty

A robust theory of [[Logical Uncertainty|logical uncertainty]] is essential to a full formalization of UDT.  A UDT agent must calculate probabilities and expected values on the outcome of its possible actions in all possible worlds--sequences of observations and its own actions. However, it does not know its own actions in all possible worlds. (The whole point is to derive its actions.) On the other hand, it does have some knowledge about its actions, just as you know that you are unlikely to walk straight into a wall the next chance you get. So, the UDT agent models itself as an algorithm, and its probability distribution about what it itself will do is an important input into its maximization calculation.

Logical uncertainty is an area which has not yet been properly formalized, and much UDT research is focused on this area.

## Blog Posts

- [Indexical uncertainty and the Axiom of Independence](http://lesswrong.com/lw/102/indexical_uncertainty_and_the_axiom_of/) by Wei Dai
- [Towards a New Decision Theory](http://lesswrong.com/lw/15m/towards_a_new_decision_theory/) by [Wei Dai](http://weidai.com/)
- [Anthropic Reasoning in UDT](http://lesswrong.com/lw/175/torture_vs_dust_vs_the_presumptuous_philosopher/) by Wei Dai
- [The Absent-Minded Driver](http://lesswrong.com/lw/182/the_absentminded_driver/) by Wei Dai
- [Why (and why not) Bayesian Updating?](http://lesswrong.com/lw/1fu/why_and_why_not_bayesian_updating/) by Wei Dai
- [What Are Probabilities, Anyway?](http://lesswrong.com/lw/1iy/what_are_probabilities_anyway/) by Wei Dai
- [Explicit Optimization of Global Strategy (Fixing a Bug in UDT1)](http://lesswrong.com/lw/1s5/explicit_optimization_of_global_strategy_fixing_a/) by Wei Dai
- [List of Problems That Motivated UDT](http://lesswrong.com/lw/cs9/list_of_problems_that_motivated_udt/) by Wei Dai
- [Another attempt to explain UDT](http://lesswrong.com/lw/334/another_attempt_to_explain_udt/) by cousin_it
- [What is Wei Dai's Updateless Decision Theory?](http://lesswrong.com/lw/294/what_is_wei_dais_updateless_decision_theory/) by AlephNeil
- [Comparison of decision theories (with a focus on logical-counterfactual decision theories)](https://www.lesswrong.com/posts/QPhY8Nb7gtT5wvoPH/comparison-of-decision-theories-with-a-focus-on-logical), by riceissa. (Gives a good description of UDT 1.0 vs 1.1)
- [All posts tagged "UDT"](http://lesswrong.com/tag/udt/)

## Relevant Comments

In addition to whole posts on UDT, there are also a number of comments which contain important information, often on less relevant posts.

- [A comment about UDT2](http://lesswrong.com/lw/jhj/functional_side_effects/adhy)

## External Links

- [Formal description of UDT](https://drive.google.com/file/d/0BzUiCL-Kpxc1NGxab3ZfZGZkVUE/view?usp=sharing&resourcekey=0-EuvTP8RRdpKivUtHwfqgSQ) by Tyrrell McAllister
- [UDT with known search order](http://intelligence.org/2014/10/30/new-report-udt-known-search-order/) by Tsvi Benson-Tilsen
- [Problem Class Dominance in Predictive Dilemmas](http://intelligence.org/files/ProblemClassDominance.pdf), section 3.4. (The best summary to date.)
- [An introduction to decision theory](https://formalisedthinking.wordpress.com/2010/08/18/an-introduction-to-decision-theory/) (series of posts)
- [Arbital page on updateless decision theories](https://arbital.com/p/updateless_dt/) by Eliezer Yudkowsky


%%

% START
Basic (and reversed card)
What is **Updateless Decision Theory**?
Back: {TODO}
Tags: LessWrong
END
<!--ID: 1663156960558-->


%%
	
