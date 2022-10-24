---
title: Training Compute-Optimal Large Language Models
href: https://arxiv.org/pdf/2203.15556.pdf
---

Why did [[@kaplan2020]] derive the wrong scaling relations?
- They treated too many hyperparameters (learning rate, learning rate schedule, batch size, optimizer, width-to-depth ratio) as fixed.

E.g.:
> [W]e find that setting the learning rate schedule to approximately match the number of training tokens results in the best final loss regardless of model size


> Yang et al. (2021) investigates how to choose a variety of these parameters for training an autoregressive transformer, including the learning rate and batch size. McCandlish et al. (2018) finds only a weak dependence between optimal batch size and model size. Shallue et al. (2018); Zhang et al. (2019) suggest that using larger batch-sizes than those we use is possible. Levine et al. (2020) investigates the optimal depth-to-width ratio for a variety of standard model sizes. We use slightly less deep models than proposed as this translates to better wall-clock performance on our hardware.


**Approaches**
- Fixed $N$, vary $D$.
- **IsoFLOP profiles**: Fixed $C$, vary $N$.
- **Fit parametric loss function**