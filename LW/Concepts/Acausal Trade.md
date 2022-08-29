---
_id: tgJoX7PGDDh2vJNqT
title: Acausal Trade
href: https://lesswrong.com/tag/acausal-trade
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T10:48:15.539Z'
---
# Acausal Trade

In **acausal trade**, two agents each benefit by predicting what the other wants and doing it, even though they might have no way of communicating or affecting each other, nor even any direct evidence that the other exists.

## Background: Superrationality and the one-shot Prisoner's Dilemma

This concept emerged out of the much-debated question of how to achieve cooperation on a one-shot [[Prisoner's Dilemma]], where, by design, the two players are not allowed to communicate. On the one hand, a player who is considering the causal consequences of a decision ("[[Causal Decision Theory]]") finds that defection always produces a better result. On the other hand, if the other player symmetrically reasons this way, the result is a Defect/Defect equilibrium, which is bad for both agents. If they could somehow converge on Cooperate, they would each individually do better. The question is what variation on decision theory would allow this beneficial equilibrium.

Douglas Hofstadter (see references) coined the term "[[Superrationality|superrationality]]" to express this state of convergence. He illustrated it with a game in which twenty players, who do not know each other's identities, each get an offer. If exactly one player asks for the prize of a billion dollars, they get it, but if none or multiple players ask, no one gets it. Players cannot communicate, but each might reason that the others are reasoning similarly. The "correct" decision--the decision which maximizes expected utility for each player, *if* all players symmetrically make the same decision--is to randomize a one-in-20 chance of asking for the prize.

Gary Drescher (see references) developed the concept further, introducing an ethical system called "acausal subjunctive morality." Drescher's approach relies on the agents being identical or at least similar, so that each agent can reasonably guess what the other will do based on facts about its own behavior, or even its own "source code." If it cooperates, it can use this correlation to infer that the other will probably also cooperate.

Acausal trade goes one step beyond this. The agents do not need to be identical, nor similar, nor have the same utility function. Moreover, they do not need to know what the other agents are like, nor even if they exist. In acausal trade, an agent may have to surmise the probability that other agents, with their utility function and proclivities, exist.

## Description

We have two agents, separated so that no interaction is possible. The separation can be simply because each is not aware of the location of the other; or else each may be prevented from communicating with or affecting the other.

In an asymmetrical example, one agent may be in the other's future.

Other less prosaic thought experiments can be used to emphasize that interaction may be absolutely impossible. For example, agents that are outside each other's light cones, or in separate parts of an Everett multiverse. And abstracting away from those scenarios, we can talk of counterfactual "impossible possible worlds" as a model for probability distributions.

In truly *acausal* trade, the agents cannot count on reputation, retaliation, or outside enforcement to ensure cooperation. The agents cooperate because each knows that the other can somehow predict its behavior very well. (Compare Omega in [[Newcomb's Problem|Newcomb's problem]].) Each knows that if it defects or cooperates, the other will (probabilistically) know this, and defect or cooperate, respectively.

Acausal trade can also be described in terms of [[Pre-Commitment|(pre)commitment]]: Both agents commit to cooperate, and each has reason to think that the other is also committing.

## Prediction mechanisms

For acausal trade to occur, each agent must infer there is some probability that an agent, of the sort that will acausally trade with it, exists.

The agent might be told, exogenously (as part of the scenario), that the other exists. But more interesting is the case in which the agent surmises the probability that the other exists.

A [[Superintelligence|superintelligence]] might conclude that other superintelligences would tend to exist because increased intelligence [[Instrumental Convergence|is a convergent instrumental goal]] for agents. Given the existence of a superintelligence, acausal trade is one of the tricks it would tend to use.

To take a more prosaic example, we humans realize that humans tend to be alike: Even without knowing about specific trading partners, we know that there exist other people with similar situations, goals, desires, challenges, resource constraints, and mental architectures.

Once an agent realizes that another agent might exist, there are different ways that might predict the other agent's behavior, and specifically that the other agent can be an acausal trading partner.

1.  They might know or surmise each other's mental architectures (source code).
2.  In particular, they might know that they have identical or similar mental architecture, so that each one knows that its own mental processes approximately simulate the other's.
3.  They might be able to simulate each other (perhaps probabalistically), or to predict the other's behavior analytically. (Even we humans simulate each other's thoughts to guess what the other would do.)
4.  More broadly, it is enough to know (probabilistically) that the other is a powerful optimizer, that it has a certain utility function, and that it can derive utility from resources. Seen mathematically, this is just an optimization problem: What is the best possible algorithm for an agent's utility function? Cooperate/Cooperate is optimal under certain assumptions, for if one agent could achieve optimal utility by defecting, then, symmetrically, so could the other, resulting in Defect/Defect which generates inferior utility.

## Decision Theories

Acausal trade is a special case of [[Updateless Decision Theory|Updateless decision theory]] (or a variant like [[Functional Decision Theory|Functional Decision Theory,]] see references). Unlike better-known variations of [[Decision Theory|Decision theory]], such as [[Causal Decision Theory|Causal decision theory]], acausal trade and UDT take into account the agent's own algorithm as cause and caused.

In Causal Decision Theory, the agent's algorithm (implementation) is treated as uncaused by the rest of the universe, so that though the agent's *decision* and subsequent action can make a difference, its internal make-up cannot (except through that decision). In contrast, in UDT, the agents' own algorithms are treated as causal nodes, influenced by other factors, such as the logical requirement of optimality in a utility-function maximizer. In UDT, as in acausal trade, the agent cannot escape the fact that its decision to defect or cooperate constitutes strong Bayesian evidence as to what the other agent will do, and so it is better off cooperating.

## Limitations and Objections

Acausal trade only works if the agents are smart enough to predict each other's behavior, and then smart enough to acausally trade. If one agent is stupid enough to defect, and the second is smart enough to predict the first, then neither will cooperate.

Also, as in regular trade, acausal trade only works if the two sides are close enough in power that the weaker side can do something worthwhile enough for the stronger.

A common objection to this idea: Why shouldn't an agent "cheat" and choose to defect? Can't it "at the last moment" back out after the other agent has committed? However, this approach takes into account only the direct effect of the decision, while a sufficiently intelligent trading partner could predict the agent's choice, including that one, rendering the "cheating" approach suboptimal.

Another objection: Can an agent care about (have a utility function that takes into account) entities with which it can never interact, and about whose existence it is not certain? However, this is quite common even for humans today. We care about the suffering of other people in faraway lands about whom we know next to nothing. We are even disturbed by the suffering of long-dead historical people, and wish that, counterfactually, the suffering had not happened. We even care about entities that we are not sure exist. For example:  We might be concerned by news report that a valuable archaeological artifact was destroyed in a distant country, yet at the same time read other news reports stating that the entire story is a fabrication and the artifact never existed. People even get emotionally attached to the fate of a fictional character.

## An example of acausal trade with simple resource requirements

At its most abstract, the agents are simply optimization algorithms. As a toy example, let T be a utility function for which time is most valuable as a resource; while for utility function S, space is most valuable, and assume that these are the only two resources.

We will now choose the best algorithms for optimizing T. To avoid anthropomorphizing, we simply ask which algorithm--which string of LISP, for example--would give the highest expected utility for a given utility function. Thus, the choice of source code is "timeless": We treat it as an optimization problem across all possible strings of LISP. We assume that computing power is unlimited. Mathematically, we are asking about argmax T.

We specify that there is a probability that either agent will be run in an environment where time is in abundance, and if not, some probability that it will be run in a space-rich universe.

If the algorithm for T is instantiated in a space-rich environment, it will only be able to gain a small amount of utility for itself, but S would be able to gain a lot of utility; and vice versa.

The question is: What algorithm for T provides the most optimization power, the highest expected value of utility function T?

If it turns out that the environment is space-rich, the agent for T may run the agent (the algorithm) for S, increasing the utility for S, and symmetrically the reverse. This will happen if each concludes, that the optimum occurs when the other agent has the "trading" feature. Given that this is the optimal case, the acausal trade will occur.

## Acausal trade with complex resource requirements

In the toy example above, resource requirements are very simple. In general, given that agents can have complex and arbitrary goals requiring a complex mix of resources, an agent might not be able to conclude that a specific trading partner has a meaningful chance of existing and trading.

However, an agent can analyze the distribution of probabilities for the existence of other agents, and weight its actions accordingly. It will do acausal "favors" for one or more trading partners, weighting its effort according to its subjective probability that the trading partner exists. The expectation on utility given and received will come into a good enough balance to benefit the traders, in the limiting case of increasing super-intelligence.

## Ordinary trade

Even ordinary trade can be analyzed acausally, using a perspective similar to that of [[Updateless Decision Theory|Updateless decision theory]]. We ask: Which algorithm should an agent have to get the best expected value, summing across all possible environments weighted by their probability? The possible environments include those in which threats and promises have been made.

## See also

*   ["AI deterrence"](http://aibeliefs.blogspot.com/2007/11/non-technical-introduction-to-ai.html?a=1)
*   ["The AI in a box boxes you"](https://www.lesswrong.com/lw/1pz/the_ai_in_a_box_boxes_you)
*   [A story](https://slatestarcodex.com/2017/03/21/repost-the-demiurges-older-brother/) that shows acausal trade in action.
*   [Scott Alexander](http://slatestarcodex.com/2018/04/01/the-hour-i-first-believed/) explains Acausal Trade. (Most of that article is tongue-in-cheek, however.)
*   "[Hail Mary, Value Porosity, and Utility Diversification](http://www.nickbostrom.com/papers/porosity.pdf)," Nick Bostrom, the first paper from academia to rely on the concept of acausal trade.
*   [Towards an idealized decision theory](http://intelligence.org/files/TowardIdealizedDecisionTheory.pdf), by Nate Soares and Benja Fallenstein discusses acausal interaction scenarios that shed light on new directions in decision theory.
*   [Program Equilibrium](https://ie.technion.ac.il/~moshet/progeqnote4.pdf), by Moshe Tennenholtz. In: Games and Economic Behavior.
*   [Robust Cooperation in the Prisoner's Dilemma: Program Equilibrium via Provability Logic](https://arxiv.org/abs/1401.5577), by Mihaly Barasz, Paul Christiano, Benja Fallenstein, Marcello Herreshoff, Patrick LaVictoire and Eliezer Yudkowsky
*   [Parametric Bounded Löb's Theorem and Robust Cooperation of Bounded Agents](https://arxiv.org/abs/1602.04184), by Andrew Critch
*   [Robust Program Equilibrium](https://link.springer.com/article/10.1007/s11238-018-9679-3), by Caspar Oesterheld. In: Theory and Decision.
*   [Multiverse-wide Cooperation via Correlated Decision Making](https://foundational-research.org/multiverse-wide-cooperation-via-correlated-decision-making/), by Caspar Oesterheld

## References

*   [Hofstadter's Superrationality essays, published in *Metamagical Themas*](http://www.gwern.net/docs/1985-hofstadter) ([LW discussion](https://www.lesswrong.com/lw/bxi/hofstadters_superrationality/))
*   Jaan Tallinn, [Why Now? A Quest in Metaphysics](https://www.youtube.com/watch?v=29AgSo6KOtI).
*   [Gary Drescher](https://wiki.lesswrong.com/wiki/Gary_Drescher), *Good and Real*, MIT Press, 1996.
*   [Functional Decision Theory](https://arxiv.org/abs/1710.05060)