---
type: post
_id: 4XPa3xa44jAWiCkmy
---

**Meta-learning** = meta-optimization when the meta objective is designed to accomplish a base-objective.

> In the value learning problem, the problem is to have enough information about an agent's behavior to infer its utility function, whereas in the inner alignment problem, the problem is to test the learned algorithm's behavior enough to ensure that it has a certain objective function


**Interpretability**: can we determine whether a system is an optimizer?

**Verification**: can we formally verify whether systems are implementing safe optimizations.

Remaining possbilities:
1.  If mesa-optimizers are very unlikely to occur in advanced ML systems (and we do not develop them on purpose), then mesa-optimization and inner alignment are not concerns.
2.  If mesa-optimizers are not only likely to occur but also difficult to prevent, then solving both inner alignment and outer alignment becomes critical for achieving confidence in highly capable AI systems.
3.  If mesa-optimizers are likely to occur in future AI systems by default, and there turns out to be some way of preventing mesa-optimizers from arising, then instead of solving the inner alignment problem, it may be better to design systems to not produce a mesa-optimizer at all. Furthermore, in such a scenario, some parts of the outer alignment problem may not need to be solved either: if an AI system can be prevented from implementing any sort of optimization algorithm, then there may be more situations where it is safe for the system to be trained on an objective that is not perfectly aligned with the programmer's intentions. That is, if a learned algorithm is not an optimizer, it might not optimize the objective to such an extreme that it would cease to produce positive outcomes.