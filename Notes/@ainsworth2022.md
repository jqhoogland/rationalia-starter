---
title: "Git Re-Basin: Merging Models modulo Permutation Symmetries"
href: https://arxiv.org/abs/2209.04836
aliases: Git Re-Basin
---

**Questions** (verbatim):
1. **Why does SGD thrive in the optimization of high-dimensional non-convex deep learning loss landscapes**, despite being noticeably less robust in other non-convex optimization settings like policy learning (Ainsworth et al., 2021), trajectory optimization (Kelly, 2017), and recommender systems (Kang et al., 2016)? 
2. **Where are all the local minima?** When linearly interpolating between initialization and final trained weights, why does the loss smoothly, monotonically decrease (Goodfellow & Vinyals, 2015; Frankle, 2020; Lucas et al., 2021; Vlaar & Frankle, 2021)? 
3. **How is it that two independently trained models with different random initializations and data batch orders inevitably achieve nearly identical performance?** Furthermore, why do their training loss curves look identical?

**Conjecture 1** (Permutation invariance, informal (Entezari et al., 2021)). Most SGD solutions belong to a set whose elements can be permuted in such a way that there is no barrier (as in Definition 2.2) on the linear interpolation between any two permuted elements.
- Such solutions are termed "linearly mode connected (LMC)"

**Contributions**:
1. **Matching methods**. 3 new algorithms to align independent models
2. **Relationship to SGD**. LMC is an emergent property of SGD training
3. **Experiments, including zero-barrier LMC for realistic ResNets 

### Permutation selection methods
1. **Matching activations**
	- Perform regression between the activations of two models, constraining to permutation matrices.
2. **Matching weights**
	- Regress the weights between two models, constraining to permutation matrices. This is NP-hard, but a greedy solution is possible (where you go through each layer, and select the best permutation at that layer, then repeat until convergence).
3. **Learning permutations with a straight-through estimator**