---
type: post
_id: pL56xPoniLvtMDQ4J
---


**Pseudo-alignment**
- **Proxy alignment**:
	- **Side-effect alignment**: 
		- maximizing $O_\text{mesa} \rightarrow$  maximizing $O_\text{base}$
		- e.g., robot optimizing for # of sweeps rather than clean floor.
	- **Instrumental alignment**: 
		- maximizing $O_\text{base} \rightarrow$  maximizing $O_\text{mesa}$
		- e.g., robot optimizing for amount of dust in vacuum.
	- **General**:
		- A causal graph with $X$ being the ancestor of both $O_\text{mesa}$ and $O_\text{base}$.
- **Approximate alignment**:
- **Suboptimality alignment**:
	- e.g., robot optimizing for minimization of total stuff with mistaken belief that vacuumed dirt is destroyed.

**Unidentifiability** 
- When "a dataset [does] not contain enough information to adequately pinpoint a specific concept"
- Or, consequence of mesa-optimizer being selected for by output, not internal reward.

**Proxy choice as pre-computation.** (to save the mesa-optimizer computational resources during deployment)
- Punishing time-complexity is a "double-edged sword." It may decrease likelihood of mesa-optimizers yet increase probability of proxy alignment when mesa-optimization does occur.
