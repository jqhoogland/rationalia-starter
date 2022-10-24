---
href: https://dl.acm.org/doi/abs/10.1145/3531146.3533229
---

# Predictability and Surprise in Large Generative Models

> [Large] generative models have a paradoxical combination of predictable loss on a broad training distribution (as embodied in their "scaling laws"), and unpredictable specific capabilities, inputs, and outputs.

> The former drives rapid development of such models while the latter makes it difficult to anticipate the consequences of their development and deployment.

# Four features
1. **Smooth, general capability scaling**
	- Training (and test) loss improves predictably with scale on broad data distribution.
	- Improvement correlates with increased performance on downstream tasks
2. **Abrupt, specific capability scaling** 
	- E.g.: 
		- **GPT-3** learns 3-digit addition: 1% @ 6B, 8% @ 17B, 80% @ 175B parameter
		- **Gopher** on MMLU language understanding benchmark: 30% @ 6B, 60% @ 280B
		- **Program synthesis models (Google)** that solve a given problem: 6% @ 68B to 13% @ 138B (relatively constant until then)  
3. **Open-ended inputs & domains**
	- E.g.: language models exhibit racial biases when asked to estimate recidivism risk.
4.  **Open-ended outputs**