---
title: 'Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets'
href: https://arxiv.org/abs/2201.02177
---

# Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets

**[[Double Descent|Grokking]]**: "improving generalization performance from random chance level to perfect generalization, [which] can happen well past the point of overfitting."

Possibly distinct from the [[double descent]] "described in Nakkiran et al. (2019); Belkin et al. (2018) because we observe the second descent in loss far past the first time the training loss becomes very small."

![[Pasted image 20220925191024.png]]

**Datasets**: binary operation tables of the form $a \circ b = c$ (as abstract symbols).

Time to generalize grows exponentially with the size of the dataset.

### Tricks
- Weight decay (towards origin) has a large effect on data efficiency
- Noise helps (minibatches, Gaussian noise to weights before/after gradient computation)
- Narrow range of suitable learning rates

### Visualization
- The structure of the relations is reflected in the t-SNE plot of output layer row vectors.

### Architecture
- Decoder-only transformer Vaswani et al. (2007) with causal attention masking.

### Further reading
- Neelakantan et al. 2015: "grok-like" curve on algorithmic task related to optimization difficulty
- Saxton et al. 2019: procedurally generated math problems (more complex then here, so infeasible to probe generalization regime)
- Jiang et al. 2019: flatness based measures as most predictive of generalization performance. ==Could this be at play here?==
- Zhang et al. 2016, 
- Nakkiran et al. 2019; Belkin et al. 2018: double descent

### Other
- Introducing a few outliers doesn't impact grokking. But many outliers hinder it.

### See also
[[A Mechanistic Interpretability Analysis of Grokking]]