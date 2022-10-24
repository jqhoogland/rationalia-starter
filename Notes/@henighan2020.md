---
title: Scaling Laws for Autoregressive Generative Modeling
href: https://arxiv.org/pdf/2010.14701.pdf
---

> We identify empirical scaling laws for the cross-entropy loss in four domains: generative image modeling, video modeling, multimodal image↔text models, and mathematical problem solving.


![[Pasted image 20221002111617.png]]


**Scaling Relations**

$$L(x) = L_\infty + \left(\frac{x_0}{x}\right)^{\alpha_x},$$

where $x$ is one of:
- $N$, the number of parameters,
- $C$, the compute budget, or
- $D$, the dataset size,

and $\alpha_x$ is the (modality-dependent) scaling exponent.

**Interpretation**
If we're using the cross-entropy loss, then:

- **Irreducible loss**: $L_\infty \approx S(\text{True})$
- **Reducible loss**: $\left(\frac{x_0}{x}\right)^{\alpha_x} \approx D_{KL}(P_\text{True} || P_\text{Model})$


**Modality**
$$N_\text{opt} \propto C^\beta $$
**Universality**: $\beta\sim 0.7$  *across modalities* (!)

**Captioning**
- Caption entropy is much smaller than image entropy. 

$$\text{Infogain} \equiv \frac{I(\text{text}, \text{image})}{L(\text{text})}$$
We can use this to infer an optimal target model size for a maximum performance ($\text{Infogain} \to 1$).

