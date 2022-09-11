---
type: post
_id: bz5GdmCWj8o48726N
title: 'AGI safety from first principles: Goals and Agency'
slug: agi-safety-from-first-principles-goals-and-agency
href: >-
  https://www.lesswrong.com/posts/bz5GdmCWj8o48726N/agi-safety-from-first-principles-goals-and-agency
synchedAt: '2022-09-04T07:50:07.085Z'
tags:
  - LessWrong
  - Post
  - AI
sequence: AGI safety from first principles
author: Richard_Ngo
status: done
---

# AGI safety from first principles: Goals and Agency

==Why might AIs end up with power over humans?==
- **Influence-seeking**
	  ![[Influence-seeking#^2510b5]]
- Power by accident 

[[Instrumental Convergence|Instrumentally convergent goals are dangerous]] if:
- The AGI exhibits [[Goal-Directedness|goal-directed agency]]
- The AGI's goals are sufficiently "large-scale"
	- Ngo clarifies in the comments that he means "large-scale goals as goals that have a mental "ignore context" tag attached"

Many expect [[Goal-Directedness]] to be the standard outcome, but we aren't sure (maybe we can build [[Tool AI|Tool AIs]]). 

Goals are either:
- Explicitly selected for ("Design objectives")
- The agent's own goals

Ngo points out three frameworks for thinking about [[Agency]]:
- [[VNM Theorem|Expected Utility Maximization]] (Von Neumann & Morgenstern)
- [[Intentionality#Intentional Stance]] (Daniel Dennett)
- [[Mesa-Optimization]] (Hubinger et al.)

Ngo isn't quite happy with any of these. 
- VNM is elegant theory but perhaps *too* broad & not-helpful to constraining our expectations.
- Dennett's framework has valuable insights but not adequately tractable or simplifying: ![[Intentionality#^d3319f]]
- The first two don't account for [[Bounded rationality|agents not necessarily being able to take optimal actions for their goals]]

Ngo points out a few more abilities we expected of goal-directed systems:
- Self-awareness ==Could it be possible for LLMs trained on third-person data to have no theory of self?==
- Planning (see: [[Myopia|Myopic training]])
- Consequentialism (weighing plans by value of outcomes)
- Scale ==How might agents trained on small-scale environments generalize to large-scale goals? (We did it)==
- Coherence ==Much of the community seems to view coherence as a nasty side-effect of internal conflict & faulty evolution? Could it be a necessary [[superrationality|superrationalist prerequisite]] to developing AGI?==
- Flexibility

He emphasizes this is neither binary nor exhaustive.

> My underlying argument is that agency is not just an emergent property of highly intelligent systems, but rather a set of capabilities which need to be developed during training, and which won’t arise without selection for it

==To add on, are these capabilities that are attractive? I.e.: do slight selection effects lead to feedback loops?==

# Related

- [[AI]]
- [[What failure looks like]]
- "[instrumental convergence thesis](https://www.nickbostrom.com/superintelligentwill.pdf)"
- "[_design objectives_](https://medium.com/@deepmindsafetyresearch/building-safe-artificial-intelligence-52f5f75058f1)"
- "[_expected utility maximisation_](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem)"
- "[_intentional stance_](https://en.wikipedia.org/wiki/Intentional_stance)"
- "[_mesa-optimisation_](https://arxiv.org/abs/1906.01820)"
- "[practically any behaviour](https://www.alignmentforum.org/posts/vphFJzK3mWA4PJKAg/coherent-behaviour-in-the-real-world-is-an-incoherent)"
- "[_Risks from Learned Optimisation in Advanced ML systems_](https://arxiv.org/abs/1906.01820)"
- "[sphexish](http://www.personalityresearch.org/evolutionary/sphexishness.html)"
- "[planning using an implicit model](https://arxiv.org/abs/1901.03559)"
- "[Moravec’s paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox)"
- "[open-ended environment](https://arxiv.org/abs/2006.07495)"
- "[quantilisation](http://intelligence.org/files/QuantilizersSaferAlternative.pdf)"
- "[good reasons](https://arxiv.org/abs/1903.00742)"
- "[this type of specialisation](https://www.alignmentforum.org/posts/7jNveWML34EsjCD4c/safety-via-selection-for-obedience)"
- "[to deploy subsets of the collective](https://www.alignmentforum.org/posts/Fji2nHBaB6SjdSscr/safer-sandboxing-via-population-separation)"
- "[Hubinger et al’s paper](https://arxiv.org/abs/1906.01820)"
- [[Paul's research agenda FAQ]]
