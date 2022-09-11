---
type: post
_id: 27AWRKbKyXuzQoaSk
title: Some conceptual alignment research projects
slug: some-conceptual-alignment-research-projects
href: >-
  https://www.lesswrong.com/posts/27AWRKbKyXuzQoaSk/some-conceptual-alignment-research-projects
synchedAt: '2022-09-02T08:04:46.330Z'
tags:
  - LessWrong
  - Post
  - Research_Agendas
  - AI
author: null
status: todo
---

1. A paper which does for [deceptive alignment](https://bounded-regret.ghost.io/ml-systems-will-have-weird-failure-modes-2/) what the goal misgeneralization paper does for inner alignment, i.e. describing it in ML language and setting up toy examples (for example, telling GPT-3 to take actions which minimize changes in its weights, given that it’s being trained using actor-critic RL with a certain advantage function, and seeing if it knows how to do so).
2. A paper which does the same for gradient hacking, e.g. taking [these examples](https://www.lesswrong.com/posts/EeAgytDZbDjRznPMA/gradient-hacking-definitions-and-examples) and putting them into more formal ML language.
3. A list of papers that are particularly useful for new research engineers to replicate.
4. A takeover scenario which covers all the key points in [https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/), but not phrased as an argument, just phrased as a possible scenario (I think you can’t really make the argument rigorously in that little space). %% -> [[Humanity's last decade]]? %%
5. A paper which defines the concepts of implicit planning, implicit value functions, implicit reward models, etc, in ML terms. Kinda like [https://arxiv.org/abs/1901.03559](https://arxiv.org/abs/1901.03559) but more AGI-focused. I want to be able to ask people “does GPT-3 choose actions using an implicit value function?” and then be able to point them to this paper to rigorously define what I mean. I discuss this briefly in the [phase 1 section here](https://www.lesswrong.com/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale).
6. A blog post which describes in as much detail as possible what our current “throw the kitchen sink at it” alignment strategy would look like. (I’ll probably put my version of this online soon but would love others too).
7. A blog post explaining “[debate on weights](https://www.lesswrong.com/posts/FuGfR3jL3sw6r8kB4/richard-ngo-s-shortform?commentId=on7Y4d8pqrdrxLtec)” more thoroughly.
8. A blog post exploring how fast we should expect a forward pass to be for the first AGIs - e.g. will it actually be slower than human thinking, as discussed in [this comment](https://www.lesswrong.com/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale?commentId=3F8x4m2gbTHJ4evL7#comments)?
9. A blog post exploring considerations for why model goals may or may not be much more robust to SGD than model beliefs, as discussed in [framing 3 here](https://www.lesswrong.com/posts/poyshiMEhJsAuifKt/outer-vs-inner-misalignment-three-framings-1)). (See also [this paper on gradient starvation](https://arxiv.org/abs/2011.09468) - h/t Quintin Pope; and [the concept of persistence to gradient descent discussed here](https://arxiv.org/pdf/2204.06974.pdf).)
10. A blog post explaining why the “uncertainty” part of CIRL only does useful work insofar as we have an accurate model of the human policy, and why this is basically just as hard as having an accurate model of human preferences.
11. A blog post explaining what practical implications [Stuart Armstrong’s impossibility result](https://arxiv.org/abs/1712.05812) has.
12. As many alignment exercises as possible to help people learn to think about this stuff ([mine aren't great](https://www.lesswrong.com/posts/kj37Hzb2MsALwLqWt/alignment-research-exercises) but I haven’t seen better).
13. A paper properly formulating instrumental convergence, generalization to large-scale goals, etc, as inductive biases in the ML sense (I do this briefly in [phase 3 here](https://www.lesswrong.com/posts/KbyRPCAsWv5GtfrbG/what-misalignment-looks-like-as-capabilities-scale)).
14. A mathematical comparison between off-policy RL and imitation learning, exploring ways in which they’re similar and different, and possible algorithms in between.
15. A blog post explaining the core argument for why detecting adversarially-generated inputs is likely much easier than generating them, and arguments for why adversarial training might nevertheless be valuable for alignment.
16. A blog post exploring the incentives which models might have when they’re simultaneously trained to make predictions and to take actions in an RL setting (e.g. models trained using [RL via sequence modeling](https://arxiv.org/pdf/2106.01345.pdf)).
17. A blog post exploring pros and cons of making misalignment datasets for use as a metric of alignment (alignment = how much training on the misalignment dataset is needed to make it misaligned).
18. A paper providing an RL formalism in which reward functions can depend on weights and/or activations directly, and demonstrating a simple but non-trivial example.
19. A blog post evaluating reasons to think that [situational awareness](https://www.lesswrong.com/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to#A_spectrum_of_situational_awareness) will be a gradual development in models, versus a sharp transition.
20. A blog post explaining reasons to expect capabilities to be correlated with alignment while models lack situational awareness, and then less correlated afterwards, rather than the correlation continuing.
21. A blog post estimating how many bits of optimization towards real-world goals could arise from various aspects of a supervised training program (especially ones which slightly break the cartesian formalisms) - e.g. hyperparameter tuning, many random seeds, training on data generated by other AIs, etc.
22. A sketch of what a model-free version of AIXI would look like (according to one person I talked to, it’s a lot like decision transformers).
23. A blog post evaluating whether [shard theory](https://www.lesswrong.com/posts/xqkGmfikqapbJ2YMj/shard-theory-an-overview) makes sense/makes novel predictions compared with [Steve Byrnes’ model of the brain](https://www.lesswrong.com/s/HzcM2dkCq7fwXBej8) (he partly explains this in a comment on the post, but I’m still a bit confused).
24. A blog post or paper reviewing what types of feedback humans perform best and worst at (e.g. reward vs value feedback) and then designing a realistic setup for optimal-quality human feedback.
25. A blog post compiling examples of surprising emergent capabilities (especially in large language models).
26. An investigation of the extent to which human concept representations are localized to individual neurons, versus being spread out across different neurons.
