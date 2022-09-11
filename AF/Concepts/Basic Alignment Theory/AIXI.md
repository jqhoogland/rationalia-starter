---
_id: TiEFKWDvD3jsKumDx
title: AIXI
href: https://www.lesswrong.com/tag/aixi
slug: aixi
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-09-01T09:42:58.579Z'
status: todo
---

# AIXI

**AIXI** is a mathematical formalism for a hypothetical [[Superintelligence|(super)intelligence]], developed by Marcus Hutter (2005, 2007). AIXI is not computable, and so does not serve as a design for a real-world AI, but is considered a valuable theoretical illustration with both positive and negative aspects (things AIXI would be able to do and things it arguably couldn't do).

*See also:* [[Solomonoff Induction|Solomonoff induction]], [[Decision Theory|Decision theory]], [AI](https://www.lesswrong.com/ai)

The AIXI formalism says roughly to consider all possible computable models of the environment, Bayes-update them on past experiences, and use the resulting updated predictions to model the expected sensory reward of all possible strategies. This is an application of [[Solomonoff Induction]].

AIXI can be viewed as the border between AI problems that would be 'simple' to solve using unlimited computing power and problems which are structurally 'complicated'.

## **How AIXI works**

Hutter ([2007](http://www.hutter1.net/ai/aixigentle.htm)) describes AIXI as a combination of decision theory and algorithmic information theory: "Decision theory formally solves the problem of rational agents in uncertain worlds if the true environmental prior probability distribution is known. Solomonoff’s theory of universal induction formally solves the problem of sequence prediction for unknown prior distribution. We combine both ideas and get a parameterless theory of universal Artificial Intelligence."

AIXI operates within the following agent model: There is an *agent*, and an *environment*, which is a computable function unknown to the agent. Thus the agent will need to have a probability distribution on the range of possible environments.

On each clock tick, the agent receives an *observation* (a bitstring/number) from the environment, as well as a reward (another number).

The agent then outputs an *action* (another number).

To do this, AIXI guesses at a probability distribution for its environment, using [[Solomonoff Induction|Solomonoff induction]], a formalization of [[Occam's Razor|Occam's razor]]: Simpler computations are more likely *a priori* to describe the environment than more complex ones. This probability distribution is then Bayes-updated by how well each model fits the evidence (or more precisely, by throwing out all computations which have not exactly fit the environmental data so far, but for technical reasons this is roughly equivalent as a model). AIXI then calculates the expected reward of each action it might choose--weighting the likelihood of possible environments as mentioned. It chooses the best action by extrapolating its actions into its future time horizon recursively, using the assumption that at each step into the future it will again choose the best possible action using the same procedure.

Then, on each iteration, the environment provides an observation and reward as a function of the full history of the interaction; the agent likewise is choosing its action as a function of the full history.

The agent's intelligence is defined by its expected reward across all environments, weighting their likelihood by their complexity.

AIXI is not a feasible AI, because [[Solomonoff Induction|Solomonoff induction]] is not computable, and because some environments may not interact over finite time horizons (AIXI only works over some finite time horizon, though any finite horizon can be chosen). A somewhat more computable variant is the time-space-bounded AIXItl. Real AI algorithms explicitly inspired by AIXItl, e.g. the Monte Carlo approximation by Veness et al. (2011) have shown interesting results in simple general-intelligence test problems.

For a short (half-page) technical introduction to AIXI, see [Veness et al. 2011](https://web.archive.org/web/20160425092747/http://www.jair.org/media/3125/live-3125-5397-jair.pdf), page 1-2. For a full exposition of AIXI, see [Hutter 2007](http://www.hutter1.net/ai/aixigentle.htm).

## **Relevance To Friendly AI**

Because it abstracts optimization power away from human mental features, AIXI is valuable in considering the possibilities for future artificial general intelligence - a compact and non-anthropomorphic specification that is technically complete and closed; either some feature of AIXI follows from the equations or it does not. In particular, it acts as a constructive demonstration of an AGI which does not have human-like [[Terminal Value|terminal values]] and will act solely to maximize its reward function. (Yampolskiy & Fox 2012).

AIXI has limitations as a model for future AGI, for example, the [[Anvil Problem|Anvil problem]]: AIXI lacks a self-model. It extrapolates its own actions into the future indefinitely, on the assumption that it will keep working in the same way in the future. Though AIXI is an abstraction, any real AI would have a physical embodiment that could be damaged, and an implementation which could change its behavior due to bugs; and the AIXI formalism completely ignores these possibilities.

## **References**

- [R.V. Yampolskiy, J. Fox (2012) Artificial General Intelligence and the Human Mental Model. In Amnon H. Eden, Johnny Søraker, James H. Moor, Eric Steinhart (Eds.), The Singularity Hypothesis.The Frontiers Collection. London: Springer.](https://intelligence.org/files/AGI-HMM.pdf)
- [M. Hutter (2007) Universal Algorithmic Intelligence: A mathematical top->down approach](http://www.hutter1.net/ai/aixigentle.htm). In Goertzel & Pennachin (eds.), Artificial General Intelligence, 227-287. Berlin: Springer.
- M. Hutter, (2005) Universal Artificial Intelligence: Sequential decisions based on algorithmic probability. Berlin: Springer.
- [J. Veness, K.S. Ng, M. Hutter, W. Uther and D. Silver (2011) A Monte-Carlo AIXI Approximation](http://www.jair.org/media/3125/live-3125-5397-jair.pdf), *Journal of Artiﬁcial Intelligence Research* 40, 95-142\]

## **Blog posts**

- [AIXI and Existential Despair](https://www.lesswrong.com/lw/8qy/aixi_and_existential_despair/) by [paulfchristiano](https://www.lesswrong.com/users/paulfchristiano)
- [\[video\] Paul Christiano's impromptu tutorial on AIXI and TDT](https://www.lesswrong.com/r/discussion/lw/az7/video_paul_christianos_impromptu_tutorial_on_aixi/)

## **See also**

- [[Solomonoff Induction|Solomonoff induction]]
- [[Decision Theory|Decision theory]]


%%

% START
Basic (and reversed card)
What is **AIXI**?
Back: {TODO}
Tags: LessWrong
END

%%
	
