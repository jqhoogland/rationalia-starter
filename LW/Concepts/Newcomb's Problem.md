---
_id: fihKHQuS5WZBJgkRm
title: Newcomb's Problem
href: https://lesswrong.com/tag/newcomb-s-problem
slug: newcomb-s-problem
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:05:13.427Z'
---

# Newcomb's Problem

**Newcomb's Problem** is a thought experiment in decision theory exploring problems posed by having other agents in the environment who can predict your actions.

## The Problem

From [[Newcomb's Problem and Regret of Rationality]]:

> A superintelligence from another galaxy, whom we shall call Omega, comes to Earth and sets about playing a strange little game. In this game, Omega selects a human being, sets down two boxes in front of them, and flies away.

> Box A is transparent and contains a thousand dollars.
> Box B is opaque, and contains either a million dollars, or nothing.

> You can take both boxes, or take only box B.

> And the twist is that Omega has put a million dollars in box B iff Omega has predicted that you will take only box B.

> Omega has been correct on each of 100 observed occasions so far - everyone who took both boxes has found box B empty and received only a thousand dollars; everyone who took only box B has found B containing a million dollars. (We assume that box A vanishes in a puff of smoke if you take only box B; no one else can take box A afterward.)

> Before you make your choice, Omega has flown off and moved on to its next game. Box B is already empty or already full.

> Omega drops two boxes on the ground in front of you and flies off.

> Do you take both boxes, or only box B?

One line of reasoning about the problem says that because Omega has already left, the boxes are set and you can't change them. And if you look at the payoff matrix, you'll see that whatever decision Omega has already made, you get $1000 more for taking both boxes. This makes taking two boxes ("two-boxing") a dominant strategy and therefore the correct choice. Agents who reason this way do not make very much money playing this game. This is because this line of reasoning ignores the connection between the agent and Omega's prediction: two-boxing only makes $1000 more than one-boxing if Omega's prediction is the same in both cases, while the problem states Omega is extremely accurate in its predictions. Switching from one-boxing to two-boxing doesn't give the agent a $1000 more, it results in a loss of $999,000.

Because the agent's decision in this problem can't causally affect Omega's prediction (which happened in the past), [[Causal Decision Theory]] two-boxes. One-boxing is correlated with getting a million dollars, whereas two-boxing is correlated with getting only $1000; therefore, [[Evidential Decision Theory]] one-boxes. [[Functional Decision Theory]] (FDT) also one-boxes, but for a completely different reason: FDT reasons that Omega must have had a model of the agent's decision procedure in order to make the prediction. Therefore, your decision procedure is run not only by you, but also (in the past) by Omega; whatever you decide, Omega's model must have decided the same. Either both you and Omega's model two-box, or both you and Omega's model one-box; of these two options, the latter is preferable, so FDT one-boxes.

The general class of decision problems that involve other agents predicting your actions are called Newcomblike Problems.

## Irrelevance of Omega's Physical Impossibility

Sometimes people dismiss Newcomb's problem because of the physical impossibility of a being like Omega. However, Newcomb's problem does not actually depend on the possibility of Omega in order to be relevant. Similar issues arise if we imagine a skilled human psychologist who can predict other people's actions with 65% accuracy.

## Notable Posts

- [Newcomb's Problem and Regret of Rationality](https://lessestwrong.com/lw/nc/newcombs_problem_and_regret_of_rationality/)
- [Formalizing Newcomb's](https://lessestwrong.com/lw/7v/formalizing_newcombs/)
- [Newcomb's Problem standard positions](https://lessestwrong.com/lw/90/newcombs_problem_standard_positions/)
- [Newcomb's Problem vs. One-Shot Prisoner's Dilemma](https://lessestwrong.com/lw/6r/newcombs_problem_vs_oneshot_prisoners_dilemma/)
- [Decision theory: Why Pearl helps reduce “could” and “would”, but still leaves us with at least three alternatives](https://lessestwrong.com/lw/17b/decision_theory_why_pearl_helps_reduce_could_and/)

## See Also

- [Decision theory](https://lessestwrong.com/tag/decision-theory)
- [Counterfactual mugging](https://lessestwrong.com/tag/counterfactual-mugging)
- [Parfit's hitchhiker](https://wiki.lesswrong.com/wiki/Parfit's_hitchhiker)
- [Smoker's lesion](https://wiki.lesswrong.com/wiki/Smoker's_lesion)
- [Absentminded driver](https://wiki.lesswrong.com/wiki/Absentminded_driver)
- [Sleeping Beauty problem](https://lessestwrong.com/tag/sleeping-beauty-paradox)
- [Prisoner's dilemma](https://lessestwrong.com/tag/prisoner-s-dilemma)
