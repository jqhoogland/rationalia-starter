---
_id: 5f5c37ee1b5cdee568cfb2ca
title: Anvil Problem
href: https://lesswrong.com/tag/anvil-problem
slug: anvil-problem
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:08:26.024Z'
status: todo
---

# Anvil Problem

[[Eliezer Yudkowsky]] has [pointed out](http://lesswrong.com/lw/om/qualitatively_confused/iqd) that "Both [[AIXI]] and AIXItl will at some point drop an anvil on their own heads just to see what happens…, because they are incapable of conceiving that any event whatsoever in the outside universe could change the computational structure of their own operations."

[[AIXI]], the theoretical formalism for the most intelligent possible agent, does not model itself. It is simply a calculation of the best possible action, extrapolating into the future. This calculation at each step chooses the best action, by recursively calculating the next step, and so on to the time horizon.

AIXI is very simple math. AIXI does not consider its own structure in figuring out what actions it will take in the future. Implicit in its definition is the assumption that it will continue, up until its horizon, to choose actions that maximize expected future value. AIXI's definition assumes that the maximizing action will always be chosen, despite the fact that the agent’s implementation was predictably destroyed or changed. This is not accurate for real-world implementations which may malfunction, self-modify, be destroyed, be changed, etc.

AIXI is an abstraction, and any real AI would have a physical embodiment that could be damaged, and an implementation which could be changed or could change its behavior due to bugs. The AIXI formalism completely ignores these possibilities (Yampolskiy & Fox, 2012).

## Relevance to Friendly AI

AIXI is a valuable tool in theoretically considering the nature of super-intelligence, yet it has its limitations. From one perspective, its lack of a a self-model is a mere detail necessarily left out of a formalized abstraction. Nonetheless, for researchers of a future [artificial general intelligence](https://wiki.lesswrong.com/wiki/Friendly_AI), a correct understanding of self-analysis and self-modification is essential.

First, since any Friendly AI must strive to avoid changes in its own goal system, and self-modeling may be valuable for this, the AI must be based on a [[Reflective Decision Theory|reflection]], and today's decision theories mostly lack an understanding of reflectivity.

Second, because human values are not well-understood or formalized, the FAI may need to refine its own goal of maximizing human values. "Refining" one's own goal without changing the goal's essentials is another demanding problem in reflective decision theory.

Third, an artificial general intelligence will likely choose to try to enhance its own intelligence to better achieve its goals. It may do so by altering its own implementation, or by creating a new generation of AI. It may even do so without regard for the destruction of the current implementation, so long as the new system can better achieve the goals. All these forms of self-modification again raise central questions about the self-model of the AI, which, as mentioned, is not a part of AIXI.

## References

[R.V. Yampolskiy, J. Fox (2012)](http://joshuafox.com/media/YampolskiyFox__AGIAndTheHumanModel.pdf) Artificial General Intelligence and the Human Mental Model. In Amnon H. Eden, Johnny Søraker, James H. Moor, Eric Steinhart (Eds.), The Singularity Hypothesis.The Frontiers Collection. London: Springer.

## Blog Comment

[Eliezer Yudkowsky](http://lesswrong.com/lw/om/qualitatively_confused/iqd) on Qualitatively Confused at LessWrong, 15 March 2008.
