---
_id: 5f5c37ee1b5cdee568cfb1db
title: Timeless Decision Theory
href: https://lesswrong.com/tag/timeless-decision-theory
slug: timeless-decision-theory
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T10:47:48.497Z'
---
# Timeless Decision Theory

**Timeless decision theory** (TDT) is a [[Decision Theory|decision theory]], [developed by Eliezer Yudkowsky](http://intelligence.org/files/TDT.pdf) which, in slogan form, says that agents should decide as if they are determining the output of the abstract computation that they implement. This theory was developed in response to the view that rationality should be about winning (that is, about agents achieving their desired ends) rather than about behaving in a manner that we would intuitively label as rational. Prominent existing decision theories (including [[Causal Decision Theory|causal decision theory]], or CDT) fail to choose the winning decision in some scenarios and so there is a need to develop a more successful theory.

## Timeless Decision Theory has been replaced by [[Functional Decision Theory]]

<more needed>

## TDT and Newcomb's problem

A better sense of the motivations behind, and form of, TDT can be gained by considering a particular decision scenario: [Newcomb's problem](http://lesswrong.com/lw/nc/newcombs_problem_and_regret_of_rationality/). In Newcomb's problem, a superintelligent artificial intelligence, Omega, presents you with a transparent box and an opaque box. The transparent box contains $1000 while the opaque box contains either $1,000,000 or nothing. You are given the choice to either take both boxes (called two-boxing) or just the opaque box (one-boxing). However, things are complicated by the fact that Omega is an almost perfect predictor of human behavior and has filled the opaque box as follows: if Omega predicted that you would one-box, it filled the box with $1,000,000 whereas if Omega predicted that you would two-box it filled it with nothing.

Many people find it intuitive that it is rational to two-box in this case. As the opaque box is already filled, you cannot influence its contents with your decision so you may as well take both boxes and gain the extra $1000 from the transparent box. CDT formalizes this style of reasoning. However, one-boxers win in this scenario. After all, if you one-box then Omega (almost certainly) predicted that you would do so and hence filled the opaque box with $1,000,000. So you will almost certainly end up with $1,000,000 if you one-box. On the other hand, if you two-box, Omega (almost certainly) predicted this and so left the opaque box empty . So you will almost certainly end up with $1000 (from the transparent box) if you two-box. Consequently, if rationality is about winning then it's rational to one-box in Newcomb's problem (and hence CDT fails to be an adequate decision theory).

TDT will endorse one-boxing in this scenario and hence endorses the winning decision. When Omega predicts your behavior, it carries out the same abstract computation as you do when you decide whether to one-box or two-box. To make this point clear, we can imagine that Omega makes this prediction by creating a simulation of you and observing its behavior in Newcomb's problem. This simulation will clearly decide according to the same abstract computation as you do as both you and it decide in the same manner. Now given that TDT says to act as if deciding the output of this computation, it tells you to act as if your decision to one-box can determine the behavior of the simulation (or, more generally, Omega's prediction) and hence the filling of the boxes. So TDT correctly endorses one-boxing in Newcomb's problem as it tells the agent to act as if doing so will lead them to get $1,000,000 instead of $1,000.

## TDT and other decision scenarios

TDT also wins in a range of other cases including [[LW/Concepts/Smoking Lesion|medical Newcomb's problems]], [Parfit's hitchhiker](http://lesswrong.com/lw/135/timeless_decision_theory_problems_i_cant_solve/), and [[Prisoner's Dilemma|the one-shot prisoners' dilemma]]. However, there are [other scenarios](http://lesswrong.com/lw/135/timeless_decision_theory_problems_i_cant_solve/) where TDT does not win, including [counterfactual mugging](http://lesswrong.com/lw/3l/counterfactual_mugging/). This suggests that TDT still requires further development if it is to become a fully adequate decision theory. Given this, there is some motivation to also consider alternative decision theories alongside TDT, like [updateless decision theory](http://lesswrong.com/lw/15m/towards_a_new_decision_theory/) (UDT), which also wins in a range of scenarios but has its own problem cases. It seems likely that both of these theories draw on insights which are crucial to progressing our understanding of decision theory. So while TDT requires further development to be entirely adequate, it nevertheless represents a substantial step toward developing a decision theory that always endorses the winning decision

## Formalization of TDT

Coming to fully grasp TDT requires an understanding of how the theory is formalized. Very briefly, TDT is formalized by supplementing causal Bayesian networks, which can be thought of as graphs representing causal relations, in two ways. First, these graphs should be supplemented with nodes representing abstract computations and an agent's uncertainty about the result of these computations. Such a node might represent an agent's uncertainty about the result of a mathematical sum. Second, TDT treats decisions as the abstract computation that underlies the agent's decision process. These two features transform causal Bayesian networks into timeless decision diagrams. Using these supplemented diagrams, TDT is able to determine the winning decision in a whole range of a decision scenarios. For a more detailed description of the formalization of TDT, see Eliezer Yudkowsky's [timeless decision theory paper](http://intelligence.org/files/TDT.pdf).

## Further Reading

- [A Comparison of Decision Algorithms on Newcomblike Problems](https://intelligence.org/files/Comparison.pdf), by Alex Altair
- [Problem Class Dominance in Predictive Dilemmas](https://intelligence.org/wp-content/uploads/2014/10/Hintze-Problem-Class-Dominance-In-Predictive-Dilemmas.pdf), by Danny Hintze

## Notable Posts

- [Ingredients of Timeless Decision Theory](http://lesswrong.com/lw/15z/ingredients_of_timeless_decision_theory/)
- [Timeless Decision Theory: Problems I Can't Solve](http://lesswrong.com/lw/135/timeless_decision_theory_problems_i_cant_solve/)
- [Timeless Decision Theory and Meta-Circular Decision Theory](http://lesswrong.com/lw/164/timeless_decision_theory_and_metacircular/)
- [Decision theory: Why Pearl helps reduce "could" and "would", but still leaves us with at least three alternatives](http://lesswrong.com/lw/17b/decision_theory_why_pearl_helps_reduce_could_and/) by [[Anna Salamon]]

## External Links

- [Timeless Decision Theory](http://intelligence.org/files/TDT.pdf) (2010) by [[Eliezer Yudkowsky]]
- [An Introduction to Timeless Decision Theory](http://formalisedthinking.wordpress.com/2010/08/19/an-introduction-to-timeless-decision-theory/) at Formalised Thinking

## See Also

- [[Decision Theory|Decision theory]]
- [[Newcomb's Problem|Newcomb's problem]]
- [[Causality]]
- [[Updateless Decision Theory|Updateless decision theory]]
- [[Rationality Is Systematized Winning|Rationality is systematized winning]]