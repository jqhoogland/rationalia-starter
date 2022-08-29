---
_id: NZ67PZ8CkeS6xn27h
title: Mesa-Optimization
href: https://lesswrong.com/tag/mesa-optimization
slug: mesa-optimization
type: tag
tags:
  - LessWrong
  - Concept
  - Tag
synchedAt: '2022-08-29T11:05:13.546Z'
---
# Mesa-Optimization

**Mesa-Optimization** is the situation that occurs when a learned model (such as a neural network) is itself an optimizer. In this situation, a *base optimizer* creates a second optimizer, called a *mesa-optimizer*. The primary reference work for this concept is Hubinger et al.'s "[Risks from Learned Optimization in Advanced Machine Learning Systems](https://www.alignmentforum.org/posts/FkgsxrGf3QxhfLWHG/risks-from-learned-optimization-introduction)".

Example: Natural selection is an optimization process that optimizes for reproductive fitness. Natural selection produced humans, who are themselves optimizers. Humans are therefore mesa-optimizers of natural selection.

In the context of AI alignment, the concern is that a base optimizer (e.g., a gradient descent process) may produce a learned model that is itself an optimizer, and that has unexpected and undesirable properties. Even if the gradient descent process is in some sense "trying" to do exactly what human developers want, the resultant mesa-optimizer will not typically be trying to do the exact same thing.[^1^](https://lessestwrong.com/tag/mesa-optimization?revision=0.0.3#fn1)

## History

Previously work under this concept was called *Inner Optimizer* or *Optimization Daemons.*

[Wei Dai](https://www.lesswrong.com/users/wei_dai) brings up a similar idea in an SL4 thread.[^2^](https://lessestwrong.com/tag/mesa-optimization?revision=0.0.3#fn2)

The optimization daemons article on [Arbital](https://arbital.com/) was published probably in 2016.[^3^](https://lessestwrong.com/tag/mesa-optimization?revision=0.0.3#fn3)

[Jessica Taylor](https://www.lesswrong.com/users/jessica-liu-taylor) wrote two posts about daemons while at [[Machine Intelligence Research Institute (MIRI)|MIRI]]:

- ["Are daemons a problem for ideal agents?"](https://agentfoundations.org/item?id=1281) (2017-02-11)
- ["Maximally efficient agents will probably have an anti-daemon immune system"](https://agentfoundations.org/item?id=1290) (2017-02-23)

## See also

- [[Inner Alignment]]
- [Complexity of value](https://lessestwrong.com/tag/complexity-of-value)
- [Thou Art Godshatter](https://lessestwrong.com/lw/l3/thou_art_godshatter/)

## References

1.  ["Optimization daemons"](https://arbital.com/p/daemons/). Arbital.
2.  Wei Dai. ['"friendly" humans?'](http://sl4.org/archive/0312/7421.html) December 31, 2003.

## External links

[Video by Robert Miles](https://www.youtube.com/watch?v=bJLcIBixGj8)

Some posts that reference optimization daemons:

- ["Cause prioritization for downside-focused value systems"](http://effective-altruism.com/ea/1k4/draft_cause_prioritization_for_downsidefocused/): "Alternatively, perhaps goal preservation becomes more difficult the more capable AI systems become, in which case the future might be controlled by unstable goal functions taking turns over the steering wheel"
- ["Techniques for optimizing worst-case performance"](https://ai-alignment.com/techniques-for-optimizing-worst-case-performance-39eafec74b99): "The difficulty of optimizing worst-case performance is one of the most likely reasons that I think prosaic AI alignment might turn out to be impossible (if combined with an unlucky empirical situation)." (the phrase "unlucky empirical situation" links to the optimization daemons page on [Arbital](https://arbital.com/))