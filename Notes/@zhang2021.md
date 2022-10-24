---
title: WHY FLATNESS DOES AND DOES NOT
CORRELATE WITH GENERALIZATION FOR
DEEP NEURAL NETWORKS
href: https://arxiv.org/pdf/2103.06219.pdf
---

Proposes $\log P(f)$ (log of Bayesian prior) as predictor of generalization (over flatness metrics)

Questions:
- What causes generalization?
- How do overparametrized models avoid overfitting?

Popular answer: 
- Flat minima (measured through Hessian eigenvalues)
- SGD is biased towards flat minima

Counter:
- Under a suitable reparametrization, NN outputs are invariant but local Hessians are arbitrary.

Counter to the counter:
- Scale-invariant flatness metrics: Layer-wise Hessian eigenvalues times layer norm. This is still susceptible to neuron-wise rescalings.

Contribution:
- Examples of inconsistency between flatness & generalization.
- Local flatness measures are (imperfect) local measures of a more robust predictor: volume of the prior over the learned function (the probability of that function under aa random sampling of parameters).

---

**Sharpness**: a more tractable alt. to Hessians.

![[Pasted image 20221001120443.png]]


![[Pasted image 20221001120619.png]]